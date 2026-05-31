"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CATALOG, RARITY_STYLE, type CatalogItem, type Rarity } from "@/lib/game-data"
import { TopBar } from "@/components/pixel/top-bar"
import { PixelModal } from "@/components/pixel/pixel-ui"

const RARITIES: (Rarity | "全部")[] = ["全部", "普通", "稀有", "史诗", "传说"]

export function IngredientsScreen() {
  const [rarity, setRarity] = useState<Rarity | "全部">("全部")
  const [detail, setDetail] = useState<CatalogItem | null>(null)

  const list = CATALOG.filter((c) => rarity === "全部" || c.rarity === rarity)

  return (
    <div className="pb-10">
      <TopBar />

      <div className="space-y-4 px-3 pt-2">
        <div className="flex items-center gap-2">
          <h2 className="font-[family-name:var(--font-cjk)] text-lg font-black text-primary">🥬 食材图鉴</h2>
          <span className="font-pixel text-[8px] text-muted-foreground">{CATALOG.length} 种</span>
        </div>

        {/* 稀有度筛选 */}
        <div className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3">
          {RARITIES.map((r) => (
            <button
              key={r}
              onClick={() => setRarity(r)}
              className={cn(
                "pixel-border-sm shrink-0 px-3 py-1.5 font-[family-name:var(--font-cjk)] text-xs transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
                rarity === r
                  ? "bg-primary text-primary-foreground"
                  : cn("bg-surface", r !== "全部" && RARITY_STYLE[r as Rarity].color),
              )}
            >
              {r}
            </button>
          ))}
        </div>

        {/* 网格 */}
        <div className="grid grid-cols-3 gap-2.5">
          {list.map((c) => {
            const style = RARITY_STYLE[c.rarity]
            return (
              <button
                key={c.name}
                onClick={() => setDetail(c)}
                className="pixel-border-sm bg-card relative flex flex-col items-center gap-1 p-2.5 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                style={{ borderColor: `var(--rare-${rarityKey(c.rarity)})` }}
              >
                <span className="text-3xl">{c.emoji}</span>
                <span className="font-[family-name:var(--font-cjk)] text-[11px] font-bold">{c.name}</span>
                <span className={cn("font-[family-name:var(--font-cjk)] text-[9px]", style.color)}>
                  {c.rarity}
                </span>
                <span
                  className="absolute right-1 top-1 h-2 w-2"
                  style={{ background: `var(--rare-${rarityKey(c.rarity)})` }}
                />
              </button>
            )
          })}
        </div>
      </div>

      <PixelModal open={!!detail} onClose={() => setDetail(null)} title={detail ? `${detail.emoji} ${detail.name}` : ""}>
        {detail && (
          <div className="space-y-3">
            <div className="flex justify-center">
              <span className="text-6xl">{detail.emoji}</span>
            </div>
            <div className="flex justify-center">
              <span
                className={cn(
                  "pixel-border-sm px-3 py-1 font-[family-name:var(--font-cjk)] text-xs font-bold",
                  RARITY_STYLE[detail.rarity].color,
                )}
              >
                {detail.rarity}
              </span>
            </div>
            <div className="border-l-4 border-success bg-surface-2 px-3 py-2">
              <div className="mb-0.5 font-[family-name:var(--font-cjk)] text-[10px] text-success">🌱 营养功效</div>
              <p className="font-[family-name:var(--font-cjk)] text-xs leading-relaxed">{detail.nutrition}</p>
            </div>
            <div className="border-l-4 border-info bg-surface-2 px-3 py-2">
              <div className="mb-0.5 font-[family-name:var(--font-cjk)] text-[10px] text-info">🔍 挑选技巧</div>
              <p className="font-[family-name:var(--font-cjk)] text-xs leading-relaxed">{detail.tip}</p>
            </div>
          </div>
        )}
      </PixelModal>
    </div>
  )
}

function rarityKey(r: Rarity) {
  return { 普通: "common", 稀有: "rare", 史诗: "epic", 传说: "legend" }[r]
}
