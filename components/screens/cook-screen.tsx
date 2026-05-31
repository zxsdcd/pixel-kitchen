"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import { TopBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard, PixelProgress, PixelModal, DifficultyStars } from "@/components/pixel/pixel-ui"

const ENCOURAGE_MESSAGES = [
  "✨ 又进一步！你离大厨又近了一步",
  "💪 做得真棒！继续加油",
  "🎉 这道菜一定会很好吃！",
  "🌟 你的厨艺在进步呢～",
  "❤️ 给自己做一顿好吃的，就是最好的犒劳",
  "😊 用心做的菜，味道一定不会差",
  "🔥 火候刚好！你越来越有感觉了",
]

function fmt(sec: number) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

function randomEncourage() {
  return ENCOURAGE_MESSAGES[Math.floor(Math.random() * ENCOURAGE_MESSAGES.length)]
}

export function CookScreen() {
  const { selectedDishes, navigate, addToast, clearSelection, unlock, addCookedDish } = useGame()
  const [active, setActive] = useState(0)
  const [completed, setCompleted] = useState<Record<string, Set<number>>>({})
  const [finished, setFinished] = useState(false)
  const [riceReminded, setRiceReminded] = useState(false)
  const needsRice = selectedDishes.some(d => d.tags.includes('下饭') || d.category === '家常菜' || d.category === '硬菜')

  // timer
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            setRunning(false)
            addToast("⏰ 时间到！注意火候～", "warning")
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, seconds, addToast])

  const dish = selectedDishes[active]

  const dishProgress = (id: string, len: number) => {
    const set = completed[id]
    return set ? set.size / len : 0
  }

  const totalSteps = selectedDishes.reduce((n, d) => n + d.cook.length, 0)
  const totalDone = selectedDishes.reduce(
    (n, d) => n + (completed[d.id]?.size ?? 0),
    0,
  )

  const currentStepIndex = useMemo(() => {
    if (!dish) return -1
    const set = completed[dish.id]
    for (let i = 0; i < dish.cook.length; i++) {
      if (!set || !set.has(i)) return i
    }
    return -1
  }, [dish, completed])

  function completeStep(idx: number) {
    if (!dish) return
    setCompleted((prev) => {
      const set = new Set(prev[dish.id] ?? [])
      set.add(idx)
      const next = { ...prev, [dish.id]: set }

      // Show encouragement
      addToast(randomEncourage())

      // 该道菜完成
      if (set.size === dish.cook.length) {
        setTimeout(() => {
          addCookedDish(dish)
          addToast(`${dish.emoji} ${dish.name} 完成！真厉害！`)
          if (dish.difficulty >= 5) unlock("hard-dish")
          // 检查整桌是否完成
          const doneCount = selectedDishes.filter(
            (d) => (next[d.id]?.size ?? 0) === d.cook.length,
          ).length
          if (doneCount === selectedDishes.length) {
            setTimeout(() => setFinished(true), 600)
          } else {
            const nextIdx = selectedDishes.findIndex(
              (d) => (next[d.id]?.size ?? 0) < d.cook.length,
            )
            if (nextIdx >= 0) addToast(`切换到下一道：${selectedDishes[nextIdx].name}`, "success")
          }
        }, 0)
      }
      return next
    })
    setSeconds(0)
    setRunning(false)
  }

  function startStepTimer(t: number) {
    setSeconds(t)
    setRunning(true)
    addToast(`开始计时 ${fmt(t)}`, "success")
  }

  function finishAll() {
    if (selectedDishes.length >= 3) unlock("combo-3")
    clearSelection()
    setFinished(false)
    navigate("select")
  }

  if (selectedDishes.length === 0) {
    return (
      <div>
        <TopBar />
        <div className="flex flex-col items-center gap-4 px-6 py-20 text-center">
          <span className="text-5xl">👨‍🍳</span>
          <p className="font-[family-name:var(--font-cjk)] text-sm text-muted-foreground">
            还没有菜可做，先去选菜吧！
          </p>
          <PixelButton onClick={() => navigate("select")}>🎯 去选菜</PixelButton>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-10">
      <TopBar />

      <div className="space-y-5 px-4 pt-2">
        {/* 煮饭提醒 */}
        {needsRice && !riceReminded && (
          <div className="pixel-border-sm flex items-center gap-3 bg-surface-2 px-3 py-3">
            <span className="animate-float text-3xl">🍚</span>
            <div className="flex-1">
              <div className="font-[family-name:var(--font-cjk)] text-sm font-bold">别忘了先煮饭！</div>
              <div className="font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground">
                做菜的同时把饭煮上，菜好饭也熟～
              </div>
            </div>
            <PixelButton size="sm" onClick={() => { setRiceReminded(true); addToast('🍚 好的，专心做菜！') }}>
              知道了
            </PixelButton>
          </div>
        )}

        {/* 菜品标签页 */}
        <div className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3">
          {selectedDishes.map((d, i) => {
            const prog = dishProgress(d.id, d.cook.length)
            const isDone = prog >= 1
            return (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className={cn(
                  "pixel-border-sm flex shrink-0 flex-col gap-1 px-3 py-2 transition-all",
                  active === i ? "bg-primary text-primary-foreground" : "bg-card",
                )}
              >
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-cjk)] text-xs font-bold">
                  <span className="text-base">{d.emoji}</span>
                  {d.name}
                  {isDone && <span className="text-success">✓</span>}
                </span>
                <div className="h-1.5 w-full bg-border-dark">
                  <div className="bg-success h-full" style={{ width: `${prog * 100}%` }} />
                </div>
              </button>
            )
          })}
        </div>

        {/* 总进度 */}
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-cjk)] text-[11px] text-muted-foreground">总进度</span>
          <div className="flex-1">
            <PixelProgress value={totalDone} max={totalSteps} barClass="bg-accent" />
          </div>
          <span className="font-pixel text-[9px] text-accent">{totalDone}/{totalSteps}</span>
        </div>

        {/* 当前菜品大卡片 */}
        <PixelCard thick className="p-4">
          <div className="flex items-center gap-4">
            <span className="animate-bounce-pix text-5xl">{dish.emoji}</span>
            <div>
              <div className="font-[family-name:var(--font-cjk)] text-2xl font-black text-primary">
                {dish.name}
              </div>
              <div className="mt-1 flex items-center gap-3">
                <DifficultyStars level={dish.difficulty} />
                <span className="font-pixel text-[9px] text-muted-foreground">⏱{dish.time}min</span>
              </div>
            </div>
          </div>
        </PixelCard>

        {/* 计时器 */}
        <PixelCard className="p-4">
          <div className="text-center">
            <div
              className={cn(
                "font-pixel text-4xl tabular-nums",
                seconds > 0 && seconds <= 5 && running ? "animate-blink text-destructive" : "text-foreground",
              )}
            >
              {fmt(seconds)}
            </div>
            <div className="mt-3 flex justify-center gap-2">
              <PixelButton
                size="sm"
                variant={running ? "secondary" : "primary"}
                onClick={() => {
                  if (seconds === 0) {
                    addToast("点击步骤的「计时」按钮开始倒计时", "warning")
                    return
                  }
                  setRunning((r) => !r)
                }}
              >
                {running ? "⏸ 暂停" : "▶ 开始"}
              </PixelButton>
              <PixelButton
                size="sm"
                variant="secondary"
                onClick={() => {
                  setRunning(false)
                  setSeconds(0)
                }}
              >
                ↺ 重置
              </PixelButton>
            </div>
          </div>
        </PixelCard>

        {/* 步骤列表 */}
        <div className="space-y-2">
          {dish.cook.map((step, i) => {
            const set = completed[dish.id]
            const isDone = set?.has(i)
            const isCurrent = i === currentStepIndex
            return (
              <div
                key={i}
                className={cn(
                  "pixel-border-sm bg-card p-3 transition-all",
                  isCurrent && "border-l-4 border-l-primary bg-primary/5",
                  isDone && "opacity-60",
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "pixel-border-sm flex h-7 w-7 shrink-0 items-center justify-center font-pixel text-[10px]",
                      isDone ? "bg-success text-primary-foreground" : isCurrent ? "bg-primary text-primary-foreground" : "bg-surface-2",
                    )}
                  >
                    {isDone ? "✓" : i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "font-[family-name:var(--font-cjk)] text-sm leading-relaxed",
                        isDone && "line-through",
                      )}
                    >
                      {step.text}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      {step.heat && (
                        <span className="font-[family-name:var(--font-cjk)] text-[11px] font-bold text-destructive">
                          {step.heat}
                        </span>
                      )}
                      {step.sense && (
                        <span className="font-[family-name:var(--font-cjk)] text-[11px] text-rare-epic">
                          {step.sense}
                        </span>
                      )}
                    </div>
                    {step.tip && (
                      <p className="mt-1 font-[family-name:var(--font-cjk)] text-[11px] leading-relaxed text-info">
                        💡 {step.tip}
                      </p>
                    )}
                    {!isDone && (
                      <div className="mt-2 flex gap-2">
                        {step.timer && (
                          <PixelButton size="sm" variant="accent" onClick={() => startStepTimer(step.timer!)}>
                            ⏱ 计时 {fmt(step.timer)}
                          </PixelButton>
                        )}
                        <PixelButton size="sm" onClick={() => completeStep(i)}>
                          ✓ 完成
                        </PixelButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 全部完成弹窗 */}
      <PixelModal open={finished} onClose={() => setFinished(false)} title="开饭啦！">
        <div className="flex flex-col items-center gap-4 py-2 text-center">
          <div className="flex gap-2 text-4xl">
            {selectedDishes.map((d) => (
              <span key={d.id} className="animate-bounce-pix">
                {d.emoji}
              </span>
            ))}
          </div>
          <p className="font-[family-name:var(--font-cjk)] text-sm leading-relaxed">
            恭喜！你完成了 <b className="text-primary">{selectedDishes.length}</b> 道菜，
            一桌香喷喷的饭菜出锅啦！
          </p>
          <div className="bg-surface-2 pixel-border-sm w-full px-3 py-2 font-[family-name:var(--font-cjk)] text-xs">
            🎉 自己动手，丰衣足食！每一口都是满满的成就感～
          </div>
          <PixelButton full glow onClick={finishAll}>
            🍽️ 再来一桌
          </PixelButton>
        </div>
      </PixelModal>
    </div>
  )
}
