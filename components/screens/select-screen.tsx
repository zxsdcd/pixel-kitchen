"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import {
  DISHES,
  CATEGORIES,
  CURRENT_TERM,
  SEASON_LABEL,
  getDish,
  getTodayString,
  type Category,
} from "@/lib/game-data"
import { TopBar, StepBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard, DifficultyStars } from "@/components/pixel/pixel-ui"
import { DishCard } from "@/components/pixel/dish-card"



const MODES = [
  { key: "recommend", icon: "⚡", label: "快速推荐" },
  { key: "blindbox", icon: "🎲", label: "盲盒模式" },
  { key: "manual", icon: "📋", label: "自己选菜" },
] as const

export function SelectScreen() {
  const { selectedDishes, toggleDish, isSelected, navigate, addToast, clearSelection } = useGame()
  const [cat, setCat] = useState<Category | "全部">("全部")
  const [search, setSearch] = useState("")
  const season = SEASON_LABEL[CURRENT_TERM.season]

  const filtered = useMemo(() => {
    return DISHES.filter((d) => {
      const okCat = cat === "全部" || d.category === cat
      const okSearch = !search || d.name.includes(search) || d.desc.includes(search) || d.tags.some(t => t.includes(search))
      return okCat && okSearch
    })
  }, [cat, search])

  function handleMode(key: (typeof MODES)[number]["key"]) {
    if (key === "recommend") {
      clearSelection()
      CURRENT_TERM.recommend.forEach((id) => {
        const d = getDish(id)
        if (d) toggleDish(d)
      })
      addToast(`已按「${CURRENT_TERM.name}」节气推荐 ${CURRENT_TERM.recommend.length} 道菜`, "success")
    } else if (key === "blindbox") {
      clearSelection()
      const random = DISHES[Math.floor(Math.random() * DISHES.length)]
      toggleDish(random)
      addToast(`🎲 盲盒开出：${random.emoji} ${random.name}！`, "success")
    } else {
      clearSelection()
      addToast("自由挑选你想做的菜吧～", "warning")
    }
  }

  return (
    <div className="pb-28">
      <TopBar />
      <StepBar current="select" />

      <div className="space-y-5 px-4 pt-2">
        {/* 日期节气卡片 */}
        <PixelCard className="overflow-hidden">
          <div className="flex items-center justify-between border-b-2 border-border-dark bg-surface-2 px-3 py-2">
            <span className="font-[family-name:var(--font-cjk)] text-xs text-foreground/80">
              {getTodayString()}
            </span>
            <span className={cn("font-[family-name:var(--font-cjk)] text-[10px] font-bold", season.color)}>
              {season.label}
            </span>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{CURRENT_TERM.emoji}</span>
              <div>
                <div className="font-[family-name:var(--font-cjk)] text-xl font-black text-primary">
                  {CURRENT_TERM.name}
                </div>
                <div className="font-pixel text-[8px] text-muted-foreground">SOLAR TERM</div>
              </div>
            </div>

            {/* 饮食建议 */}
            <div className="mt-3 border-l-4 border-primary bg-surface-2 px-3 py-2">
              <p className="font-[family-name:var(--font-cjk)] text-xs leading-relaxed text-foreground/80">
                💡 {CURRENT_TERM.advice}
              </p>
            </div>

            {/* 推荐菜品 */}
            <div className="mt-3">
              <div className="mb-2 font-[family-name:var(--font-cjk)] text-[11px] text-muted-foreground">
                时令推荐
              </div>
              <div className="flex flex-wrap gap-2">
                {CURRENT_TERM.recommend.map((id) => {
                  const d = getDish(id)
                  if (!d) return null
                  return (
                    <button
                      key={id}
                      onClick={() => toggleDish(d)}
                      className={cn(
                        "pixel-border-sm flex items-center gap-1.5 px-2.5 py-1.5 font-[family-name:var(--font-cjk)] text-xs transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
                        isSelected(d.id) ? "bg-primary text-primary-foreground" : "bg-surface-2",
                      )}
                    >
                      <span>{d.emoji}</span>
                      {d.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </PixelCard>

        {/* 模式按钮 */}
        <div className="grid grid-cols-3 gap-2">
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => handleMode(m.key)}
              className="pixel-border-sm bg-card flex flex-col items-center gap-1 px-2 py-3 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <span className="text-2xl">{m.icon}</span>
              <span className="font-[family-name:var(--font-cjk)] text-[11px]">{m.label}</span>
            </button>
          ))}
        </div>

        {/* 搜索框 */}
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            type="text"
            placeholder="搜索菜品、食材、标签..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pixel-border-sm w-full bg-surface py-2.5 pl-10 pr-3 font-[family-name:var(--font-cjk)] text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>

        {/* 分类筛选 */}
        <div className="-mx-1">
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto px-1 pb-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "pixel-border-sm shrink-0 px-2.5 py-1.5 font-[family-name:var(--font-cjk)] text-xs transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
                  cat === c ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 菜品列表 */}
        <div className="space-y-2">
          {filtered.length === 0 ? (
            <p className="py-8 text-center font-[family-name:var(--font-cjk)] text-xs text-muted-foreground">
              没有符合条件的菜品，换个筛选试试～
            </p>
          ) : (
            filtered.map((d) => (
              <DishCard
                key={d.id}
                dish={d}
                selected={isSelected(d.id)}
                onClick={() => toggleDish(d)}
              />
            ))
          )}
        </div>

        {/* 已选详情 */}
        {selectedDishes.length > 0 && (
          <PixelCard className="animate-pop-in p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-[family-name:var(--font-cjk)] text-xs font-bold text-primary">
                🛒 今日菜单 ({selectedDishes.length}道)
              </span>
              <button
                onClick={clearSelection}
                className="font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground underline"
              >
                清空
              </button>
            </div>
            <div className="space-y-2">
              {selectedDishes.map((d) => (
                <div key={d.id} className="bg-surface-2 pixel-border-sm p-2">
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-cjk)] text-xs font-bold">
                      {d.emoji} {d.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <DifficultyStars level={d.difficulty} />
                      <span className="font-pixel text-[8px] text-muted-foreground">⏱{d.time}min</span>
                    </div>
                  </div>
                  <div className="mt-1.5 font-[family-name:var(--font-cjk)] text-[10px] leading-relaxed text-muted-foreground">
                    食材：{d.ingredients.map((i) => `${i.emoji}${i.name}`).join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>
        )}
      </div>

      {/* 底部去买菜 */}
      {selectedDishes.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px] bg-gradient-to-t from-background via-background to-transparent px-3 pb-4 pt-6">
          <PixelButton full size="lg" glow onClick={() => navigate("shop")}>
            🛒 去买菜 ({selectedDishes.length})
          </PixelButton>
        </div>
      )}
    </div>
  )
}
