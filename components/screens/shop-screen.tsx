"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import { SHOP_TIPS, type Ingredient, type IngredientCategory } from "@/lib/game-data"
import { TopBar, StepBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard, PixelProgress, PixelCheckbox } from "@/components/pixel/pixel-ui"

const CAT_ORDER: { key: IngredientCategory; icon: string }[] = [
  { key: "蔬菜水果", icon: "🥬" },
  { key: "肉类", icon: "🥩" },
  { key: "调味料", icon: "🧂" },
  { key: "蛋奶", icon: "🥚" },
  { key: "主食", icon: "🌾" },
]

export function ShopScreen() {
  const { selectedDishes, navigate, addToast } = useGame()
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const [tipIndex, setTipIndex] = useState(0)
  const [prices, setPrices] = useState<Record<string, number>>({})
  const [editingPrice, setEditingPrice] = useState<string | null>(null)

  // 聚合所有已选菜品的食材，按名称去重
  const grouped = useMemo(() => {
    const map = new Map<string, Ingredient>()
    selectedDishes.forEach((dish) => {
      dish.ingredients.forEach((ing) => {
        if (!map.has(ing.name)) map.set(ing.name, ing)
      })
    })
    const all = [...map.values()]
    const result: Record<string, Ingredient[]> = {}
    CAT_ORDER.forEach(({ key }) => {
      const items = all.filter((i) => i.category === key)
      if (items.length) result[key] = items
    })
    return result
  }, [selectedDishes])

  const total = Object.values(grouped).reduce((n, arr) => n + arr.length, 0)
  const allDone = total > 0 && checked.size === total

  useEffect(() => {
    const t = setInterval(() => setTipIndex((i) => (i + 1) % SHOP_TIPS.length), 3500)
    return () => clearInterval(t)
  }, [])


  function toggle(name: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  function toggleCat(key: string) {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  if (selectedDishes.length === 0) {
    return (
      <div>
        <TopBar />
        <StepBar current="shop" />
        <div className="flex flex-col items-center gap-4 px-6 py-20 text-center">
          <span className="text-5xl">🛒</span>
          <p className="font-[family-name:var(--font-cjk)] text-sm text-muted-foreground">
            还没有选菜，先去挑几道菜吧！
          </p>
          <PixelButton onClick={() => navigate("select")}>🎯 去选菜</PixelButton>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-28">
      <TopBar />
      <StepBar current="shop" />

      <div className="space-y-5 px-4 pt-2">
        {/* 买菜小贴士 - 移到顶部 */}
        <div className="border-l-4 border-info bg-surface-2 px-3 py-2.5">
          <p
            key={tipIndex}
            className="animate-fade-in font-[family-name:var(--font-cjk)] text-xs leading-relaxed text-foreground/80"
          >
            {SHOP_TIPS[tipIndex]}
          </p>
        </div>

        {/* 已选菜品展示条 */}
        <div className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3">
          {selectedDishes.map((d) => (
            <div
              key={d.id}
              className="pixel-border-sm bg-card flex shrink-0 items-center gap-1.5 px-2.5 py-1.5"
            >
              <span className="text-lg">{d.emoji}</span>
              <span className="font-[family-name:var(--font-cjk)] text-xs">{d.name}</span>
            </div>
          ))}
        </div>

        {/* 进度 */}
        <PixelCard className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-[family-name:var(--font-cjk)] text-xs font-bold">采购进度</span>
            <span className="font-pixel text-[10px] text-primary">
              {checked.size}/{total}
            </span>
          </div>
          <PixelProgress value={checked.size} max={total} barClass="bg-success" />
        </PixelCard>

        {/* 食材分类 */}
        {CAT_ORDER.filter((c) => grouped[c.key]).map(({ key, icon }) => {
          const items = grouped[key]
          const isCollapsed = collapsed.has(key)
          const catDone = items.every((i) => checked.has(i.name))
          return (
            <PixelCard key={key}>
              <button
                onClick={() => toggleCat(key)}
                className="flex w-full items-center justify-between border-b-2 border-border-dark bg-surface-2 px-3 py-2.5"
              >
                <span className="flex items-center gap-2 font-[family-name:var(--font-cjk)] text-xs font-bold">
                  <span className="text-lg">{icon}</span>
                  {key}
                  {catDone && <span className="text-success">✓</span>}
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-pixel text-[9px] text-muted-foreground">
                    {items.filter((i) => checked.has(i.name)).length}/{items.length}
                  </span>
                  <span className="font-pixel text-[10px]">{isCollapsed ? "▼" : "▲"}</span>
                </span>
              </button>
              {!isCollapsed && (
                <div className="divide-y-2 divide-border-dark">
                  {items.map((ing) => {
                    const on = checked.has(ing.name)
                    return (
                      <div
                        key={ing.name}
                        onClick={() => toggle(ing.name)}
                        className={cn(
                          "flex w-full items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors",
                          on && "bg-success/10",
                        )}
                      >
                        <PixelCheckbox checked={on} />
                        <span className="shrink-0 text-xl">{ing.emoji}</span>
                        <div className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block truncate font-[family-name:var(--font-cjk)] text-sm",
                              on && "text-muted-foreground line-through",
                            )}
                          >
                            {ing.name}
                          </span>
                          <span className="block font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground">
                            {ing.amount}
                          </span>
                        </div>
                        <div className="flex shrink-0 items-center gap-1 rounded bg-surface-2 px-2 py-1">
                          <span className="text-[10px] text-muted-foreground">¥</span>
                          <input
                            type="number"
                            min="0"
                            placeholder="0"
                            value={prices[ing.name] ?? ''}
                            onChange={(e) => {
                              const v = parseFloat(e.target.value) || 0
                              setPrices(p => ({ ...p, [ing.name]: v }))
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-16 bg-transparent text-right font-sans text-xs text-accent focus:outline-none"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </PixelCard>
          )
        })}

        {/* 今日消费记账 */}
        <PixelCard className="p-3">
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-cjk)] text-xs font-bold">💰 今日消费</span>
            <span className="font-pixel text-sm text-accent">
              ¥{Object.values(prices).reduce((s, v) => s + v, 0).toFixed(0)}
            </span>
          </div>
        </PixelCard>
      </div>

      {/* 底部 */}
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px] bg-gradient-to-t from-background via-background to-transparent px-3 pb-4 pt-6">
        {allDone ? (
          <PixelButton full size="lg" glow onClick={() => { addToast('🛒 采购完毕！食材已就位，准备大展身手吧～'); navigate("prep") }}>
            🏠 回家做饭
          </PixelButton>
        ) : (
          <PixelButton
            full
            size="lg"
            variant="secondary"
            onClick={() => addToast(`还有 ${total - checked.size} 样没买，别漏啦！`, "warning")}
          >
            还需采购 {total - checked.size} 样
          </PixelButton>
        )}
      </div>
    </div>
  )
}
