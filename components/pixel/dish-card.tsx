"use client"

import { cn } from "@/lib/utils"
import type { Dish } from "@/lib/game-data"
import { DifficultyStars } from "./pixel-ui"
import { useGame } from "@/lib/game-context"

export function DishCard({
  dish,
  selected,
  onClick,
  compact,
}: {
  dish: Dish
  selected?: boolean
  onClick?: () => void
  compact?: boolean
}) {
  const { isFavorite, toggleFavorite } = useGame()
  const fav = isFavorite(dish.id)

  return (
    <button
      onClick={onClick}
      className={cn(
        "pixel-border-sm flex w-full items-center gap-3 px-3 py-2.5 text-left transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
        selected ? "bg-primary/20 ring-2 ring-primary" : "bg-card",
      )}
    >
      <div
        className={cn(
          "pixel-border-sm flex h-12 w-12 shrink-0 items-center justify-center text-2xl",
          selected ? "bg-primary" : "bg-surface-2",
        )}
      >
        {dish.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-cjk)] text-sm font-bold">
            {dish.name}
          </span>
          {selected && <span className="text-success text-xs">✓</span>}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <DifficultyStars level={dish.difficulty} />
          <span className="font-pixel text-[9px] text-muted-foreground">
            ⏱{dish.time}min
          </span>
        </div>
        {!compact && (
          <div className="mt-1 flex flex-wrap gap-1">
            {dish.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="bg-surface-2 font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* 收藏按钮 */}
      <div
        onClick={(e) => {
          e.stopPropagation()
          toggleFavorite(dish.id)
        }}
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all",
          fav ? "text-destructive" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {fav ? "❤️" : "🤍"}
      </div>
    </button>
  )
}
