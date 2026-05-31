"use client"

import { useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import { TopBar, StepBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard, PixelCheckbox, PixelProgress } from "@/components/pixel/pixel-ui"

interface FlatStep {
  key: string
  dishName: string
  dishEmoji: string
  text: string
  tip?: string
}

export function PrepScreen() {
  const { selectedDishes, navigate, addToast } = useGame()
  const [done, setDone] = useState<Set<string>>(new Set())
  const [hold, setHold] = useState(0)
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const tools = useMemo(() => {
    const set = new Set<string>()
    selectedDishes.forEach((d) => d.tools.forEach((t) => set.add(t)))
    return [...set]
  }, [selectedDishes])

  const steps: FlatStep[] = useMemo(() => {
    const out: FlatStep[] = []
    selectedDishes.forEach((d) => {
      d.prep.forEach((p, i) => {
        out.push({
          key: `${d.id}-${i}`,
          dishName: d.name,
          dishEmoji: d.emoji,
          text: p.text,
          tip: p.tip,
        })
      })
    })
    return out
  }, [selectedDishes])

  const allDone = steps.length > 0 && done.size === steps.length

  function toggle(key: string) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  function startHold() {
    if (!allDone || holdRef.current) return
    holdRef.current = setInterval(() => {
      setHold((h) => {
        if (h >= 100) {
          if (holdRef.current) clearInterval(holdRef.current)
          holdRef.current = null
          addToast("备菜完成！起锅烧油 🔥")
          navigate("cook")
          return 100
        }
        return h + 5
      })
    }, 50)
  }

  function endHold() {
    if (holdRef.current) {
      clearInterval(holdRef.current)
      holdRef.current = null
    }
    setHold(0)
  }

  if (selectedDishes.length === 0) {
    return (
      <div>
        <TopBar />
        <StepBar current="prep" />
        <div className="flex flex-col items-center gap-4 px-6 py-20 text-center">
          <span className="text-5xl">🔪</span>
          <p className="font-[family-name:var(--font-cjk)] text-sm text-muted-foreground">
            还没有选菜，先去选菜吧！
          </p>
          <PixelButton onClick={() => navigate("select")}>🎯 去选菜</PixelButton>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-32">
      <TopBar />
      <StepBar current="prep" />

      <div className="space-y-5 px-4 pt-2">
        {/* 工具清单 */}
        <PixelCard className="p-3">
          <div className="mb-2 font-[family-name:var(--font-cjk)] text-xs font-bold text-primary">
            🧰 准备工具
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="pixel-border-sm bg-surface-2 px-2.5 py-1.5 font-[family-name:var(--font-cjk)] text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>
        </PixelCard>

        {/* 进度 */}
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-cjk)] text-xs font-bold">备菜进度</span>
          <div className="flex-1">
            <PixelProgress value={done.size} max={steps.length} barClass="bg-primary" />
          </div>
          <span className="font-pixel text-[10px] text-primary">
            {done.size}/{steps.length}
          </span>
        </div>

        {/* 时间线步骤 */}
        <div className="relative pl-7">
          {/* 竖线 */}
          <div className="absolute bottom-2 left-[10px] top-2 w-[3px] bg-border" />
          <div className="space-y-3">
            {steps.map((s, i) => {
              const on = done.has(s.key)
              return (
                <div key={s.key} className="relative">
                  {/* 节点 */}
                  <div
                    className={cn(
                      "pixel-border-sm absolute -left-7 top-1 flex h-5 w-5 items-center justify-center font-pixel text-[8px]",
                      on ? "bg-success text-primary-foreground" : "bg-surface-2 text-muted-foreground",
                    )}
                  >
                    {on ? "✓" : i + 1}
                  </div>
                  <button
                    onClick={() => toggle(s.key)}
                    className={cn(
                      "pixel-border-sm flex w-full items-start gap-3 p-3 text-left transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
                      on ? "bg-success/10" : "bg-card",
                    )}
                  >
                    <PixelCheckbox checked={on} />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 inline-block bg-surface-2 px-1.5 py-0.5 font-[family-name:var(--font-cjk)] text-[10px] text-primary">
                        {s.dishEmoji} {s.dishName}
                      </div>
                      <p
                        className={cn(
                          "font-[family-name:var(--font-cjk)] text-sm leading-relaxed",
                          on && "text-muted-foreground line-through",
                        )}
                      >
                        {s.text}
                      </p>
                      {s.tip && (
                        <p className="mt-1 font-[family-name:var(--font-cjk)] text-[11px] leading-relaxed text-info">
                          💡 {s.tip}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 长按起锅 */}
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px] bg-gradient-to-t from-background via-background to-transparent px-3 pb-4 pt-6">
        {allDone ? (
          <button
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            className="pixel-border bg-destructive text-primary-foreground relative w-full select-none overflow-hidden px-6 py-4 font-pixel text-sm"
          >
            <span
              className="absolute inset-0 bg-accent/40"
              style={{ width: `${hold}%`, transition: "width 50ms linear" }}
            />
            <span className="relative">
              {hold > 0 ? `蓄力中 ${hold}%` : "🔥 长按 起锅烧油"}
            </span>
          </button>
        ) : (
          <PixelButton full size="lg" variant="secondary" disabled>
            完成全部备菜后解锁 ({done.size}/{steps.length})
          </PixelButton>
        )}
      </div>
    </div>
  )
}
