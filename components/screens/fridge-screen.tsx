"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { useGame } from "@/lib/game-context"
import { DISHES, type Dish } from "@/lib/game-data"
import { TopBar } from "@/components/pixel/top-bar"
import { PixelButton, PixelCard } from "@/components/pixel/pixel-ui"

// 常见食材分类
const INGREDIENT_CATEGORIES = [
  {
    name: "蔬菜",
    emoji: "🥬",
    items: ["番茄", "土豆", "黄瓜", "茄子", "青椒", "白菜", "菠菜", "西兰花", "胡萝卜", "洋葱", "豆角", "四季豆", "莴笋", "莲藕", "冬瓜", "南瓜", "丝瓜", "苦瓜", "韭菜", "蒜苔", "空心菜", "生菜", "芹菜", "豆芽", "金针菇", "木耳", "香菇", "平菇"],
  },
  {
    name: "肉类",
    emoji: "🥩",
    items: ["猪肉", "五花肉", "里脊肉", "排骨", "鸡肉", "鸡胸肉", "鸡腿", "鸡翅", "牛肉", "牛腩", "羊肉", "鸭肉", "腊肉", "香肠", "午餐肉", "肥牛卷", "肉末"],
  },
  {
    name: "海鲜",
    emoji: "🦐",
    items: ["虾", "虾仁", "鱼", "鲈鱼", "鲫鱼", "草鱼", "黑鱼", "螃蟹", "蛤蜊", "扇贝", "鱿鱼", "带鱼", "黄花鱼"],
  },
  {
    name: "蛋奶豆",
    emoji: "🥚",
    items: ["鸡蛋", "鸭蛋", "皮蛋", "豆腐", "嫩豆腐", "老豆腐", "豆皮", "豆干", "牛奶", "酸奶", "奶酪"],
  },
  {
    name: "主食",
    emoji: "🍚",
    items: ["大米", "面条", "面粉", "饺子皮", "年糕", "粉丝", "粉条", "馒头", "面包", "玉米", "红薯", "土豆", "小米", "糯米", "燕麦"],
  },
  {
    name: "调味料",
    emoji: "🧂",
    items: ["盐", "糖", "生抽", "老抽", "醋", "料酒", "蚝油", "豆瓣酱", "番茄酱", "甜面酱", "芝麻酱", "辣椒酱", "花椒", "干辣椒", "八角", "桂皮", "香叶", "姜", "蒜", "葱", "香菜", "小米辣"],
  },
  {
    name: "水果",
    emoji: "🍎",
    items: ["苹果", "香蕉", "橙子", "柠檬", "芒果", "西瓜", "草莓", "葡萄", "桃子", "梨", "猕猴桃", "菠萝"],
  },
]

export function FridgeScreen() {
  const { navigate, toggleDish, clearSelection, addToast } = useGame()
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [expandedCat, setExpandedCat] = useState<string | null>(null)

  function toggleItem(item: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(item)) next.delete(item)
      else next.add(item)
      return next
    })
  }

  // 匹配菜品
  const matchedDishes = useMemo(() => {
    if (selected.size === 0) return []

    return DISHES.map((dish) => {
      // 计算食材匹配度
      const mainIngredients = dish.ingredients
        .filter((i) => i.category !== "调味料")
        .map((i) => i.name)

      const matched = mainIngredients.filter((ing) =>
        [...selected].some((s) => ing.includes(s) || s.includes(ing))
      )

      const matchRate = mainIngredients.length > 0 ? matched.length / mainIngredients.length : 0

      return {
        dish,
        matchRate,
        matchedCount: matched.length,
        totalCount: mainIngredients.length,
        missing: mainIngredients.filter(
          (ing) => ![...selected].some((s) => ing.includes(s) || s.includes(ing))
        ),
      }
    })
      .filter((r) => r.matchRate > 0)
      .sort((a, b) => b.matchRate - a.matchRate)
      .slice(0, 10)
  }, [selected])

  function handleCook(dish: Dish) {
    clearSelection()
    toggleDish(dish)
    addToast(`🍳 开始做 ${dish.emoji} ${dish.name}！`)
    navigate("shop")
  }

  return (
    <div className="pb-10">
      <TopBar />

      <div className="space-y-5 px-4 pt-2">
        {/* 标题 */}
        <PixelCard className="p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🧊</span>
            <div>
              <div className="font-[family-name:var(--font-cjk)] text-xl font-black text-primary">
                冰箱里有什么？
              </div>
              <div className="font-[family-name:var(--font-cjk)] text-xs text-muted-foreground">
                选择你家里有的食材，我来推荐能做的菜
              </div>
            </div>
          </div>
        </PixelCard>

        {/* 已选食材 */}
        {selected.size > 0 && (
          <PixelCard className="p-3">
            <div className="mb-2 font-[family-name:var(--font-cjk)] text-xs font-bold text-primary">
              🛒 已选食材 ({selected.size})
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[...selected].map((item) => (
                <button
                  key={item}
                  onClick={() => toggleItem(item)}
                  className="pixel-border-sm bg-primary/20 px-2 py-1 font-[family-name:var(--font-cjk)] text-xs transition-all hover:bg-destructive hover:text-primary-foreground"
                >
                  {item} ✕
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelected(new Set())}
              className="mt-2 font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground underline"
            >
              清空
            </button>
          </PixelCard>
        )}

        {/* 食材分类 */}
        <div className="space-y-2">
          {INGREDIENT_CATEGORIES.map((cat) => (
            <PixelCard key={cat.name} className="overflow-hidden">
              <button
                onClick={() => setExpandedCat(expandedCat === cat.name ? null : cat.name)}
                className="flex w-full items-center justify-between px-3 py-2.5"
              >
                <span className="font-[family-name:var(--font-cjk)] text-sm font-bold">
                  {cat.emoji} {cat.name}
                </span>
                <span className="text-muted-foreground">
                  {expandedCat === cat.name ? "▲" : "▼"}
                </span>
              </button>
              {expandedCat === cat.name && (
                <div className="flex flex-wrap gap-1.5 border-t-2 border-border-dark px-3 py-2.5">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleItem(item)}
                      className={cn(
                        "pixel-border-sm px-2.5 py-1.5 font-[family-name:var(--font-cjk)] text-xs transition-all",
                        selected.has(item) ? "bg-primary text-primary-foreground" : "bg-surface-2"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </PixelCard>
          ))}
        </div>

        {/* 匹配结果 */}
        {matchedDishes.length > 0 && (
          <div className="space-y-3">
            <div className="font-[family-name:var(--font-cjk)] text-sm font-bold text-primary">
              🎯 可以做的菜 ({matchedDishes.length})
            </div>
            {matchedDishes.map(({ dish, matchRate, matchedCount, totalCount, missing }) => (
              <PixelCard key={dish.id} className="p-3">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{dish.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-[family-name:var(--font-cjk)] text-sm font-bold">
                        {dish.name}
                      </span>
                      <span className="font-pixel text-[9px] text-muted-foreground">
                        {dish.time}min
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all",
                            matchRate >= 0.8 ? "bg-success" : matchRate >= 0.5 ? "bg-accent" : "bg-muted-foreground"
                          )}
                          style={{ width: `${matchRate * 100}%` }}
                        />
                      </div>
                      <span className="font-pixel text-[9px] text-muted-foreground">
                        {matchedCount}/{totalCount}
                      </span>
                    </div>
                    {missing.length > 0 && (
                      <div className="mt-1.5 font-[family-name:var(--font-cjk)] text-[10px] text-muted-foreground">
                        还缺：{missing.join("、")}
                      </div>
                    )}
                    <div className="mt-2">
                      <PixelButton size="sm" onClick={() => handleCook(dish)}>
                        🍳 做这道
                      </PixelButton>
                    </div>
                  </div>
                </div>
              </PixelCard>
            ))}
          </div>
        )}

        {/* 空状态 */}
        {selected.size === 0 && (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="text-5xl">🧊</span>
            <p className="font-[family-name:var(--font-cjk)] text-sm text-muted-foreground">
              点击上方食材，选择你家里有的
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
