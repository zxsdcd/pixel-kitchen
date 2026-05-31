"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import { CATEGORIES, type Dish, type Category } from "@/lib/game-data"
import { TopBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard, PixelModal, DifficultyStars } from "@/components/pixel/pixel-ui"

export function RecipesScreen() {
  const { cookedDishes, toggleDish, isSelected, navigate, addToast } = useGame()
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<Category | "全部">("全部")
  const [detail, setDetail] = useState<Dish | null>(null)

  const list = useMemo(() => {
    return cookedDishes.filter((d) => {
      const okCat = cat === "全部" || d.category === cat
      const okQ = !q || d.name.includes(q) || d.tags.some((t) => t.includes(q))
      return okCat && okQ
    })
  }, [cookedDishes, q, cat])

  return (
    <div className="pb-10">
      <TopBar />

      <div className="space-y-5 px-4 pt-2">
        <div className="flex items-center gap-2">
          <h2 className="font-[family-name:var(--font-cjk)] text-lg font-black text-primary">📖 菜谱铺</h2>
          <span className="font-pixel text-[8px] text-muted-foreground">{cookedDishes.length} 道</span>
        </div>

        {cookedDishes.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <span className="text-5xl">📖</span>
            <p className="font-[family-name:var(--font-cjk)] text-sm text-muted-foreground">
              还没有收录任何菜品～<br />
              做完一道菜后会自动收录到这里哦！
            </p>
            <PixelButton onClick={() => navigate("select")}>🍳 去做菜</PixelButton>
          </div>
        ) : (
          <>
            {/* 搜索框 */}
            <div className="pixel-border-sm bg-card flex items-center gap-2 px-3 py-2">
              <span className="text-base">🔍</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="搜索菜名或标签..."
                className="w-full bg-transparent font-[family-name:var(--font-cjk)] text-sm outline-none placeholder:text-muted-foreground"
              />
              {q && (
                <button onClick={() => setQ("")} className="font-pixel text-xs text-muted-foreground">
                  ✕
                </button>
              )}
            </div>

            {/* 分类 */}
            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
              {(["全部", ...new Set(cookedDishes.map((d) => d.category))] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c as Category | "全部")}
                  className={cn(
                    "pixel-border-sm shrink-0 px-2.5 py-1.5 font-[family-name:var(--font-cjk)] text-xs transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
                    cat === c ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* 网格 */}
            {list.length === 0 ? (
              <p className="py-10 text-center font-[family-name:var(--font-cjk)] text-xs text-muted-foreground">
                没有找到相关菜谱～
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {list.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDetail(d)}
                    className="pixel-border-sm bg-card flex flex-col items-center gap-2 p-3 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  >
                    <span className="text-4xl">{d.emoji}</span>
                    <span className="font-[family-name:var(--font-cjk)] text-sm font-bold">{d.name}</span>
                    <DifficultyStars level={d.difficulty} />
                    <span className="font-pixel text-[8px] text-muted-foreground">⏱{d.time}min</span>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* 详情弹窗 */}
      <PixelModal open={!!detail} onClose={() => setDetail(null)} title={detail ? `${detail.emoji} ${detail.name}` : ""}>
        {detail && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <DifficultyStars level={detail.difficulty} />
              <span className="font-pixel text-[9px] text-muted-foreground">⏱{detail.time}min</span>
              <span className="bg-surface-2 px-2 py-0.5 font-[family-name:var(--font-cjk)] text-[10px]">
                {detail.category}
              </span>
            </div>
            <p className="font-[family-name:var(--font-cjk)] text-xs leading-relaxed text-foreground/80">
              {detail.desc}
            </p>

            <div>
              <div className="mb-1.5 font-[family-name:var(--font-cjk)] text-xs font-bold text-primary">食材</div>
              <div className="flex flex-wrap gap-1.5">
                {detail.ingredients.map((i) => (
                  <span key={i.name} className="bg-surface-2 pixel-border-sm px-2 py-1 font-[family-name:var(--font-cjk)] text-[11px]">
                    {i.emoji} {i.name} {i.amount}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1.5 font-[family-name:var(--font-cjk)] text-xs font-bold text-primary">烹饪步骤</div>
              <ol className="space-y-1.5">
                {detail.cook.map((s, i) => (
                  <li key={i} className="flex gap-2 font-[family-name:var(--font-cjk)] text-[11px] leading-relaxed">
                    <span className="font-pixel text-[9px] text-accent">{i + 1}.</span>
                    <span>
                      {s.text}
                      {s.heat && <span className="ml-1 text-destructive">[{s.heat}]</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <PixelButton
              full
              glow
              onClick={() => {
                if (!isSelected(detail.id)) toggleDish(detail)
                addToast(`已加入菜单：${detail.name}`, "success")
                setDetail(null)
                navigate("select")
              }}
            >
              {isSelected(detail.id) ? "✓ 已在菜单" : "➕ 再做一次"}
            </PixelButton>
          </div>
        )}
      </PixelModal>
    </div>
  )
}
