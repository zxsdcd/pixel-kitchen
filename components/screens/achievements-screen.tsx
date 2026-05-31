"use client"

import { useGame } from "@/lib/game-context"
import { CURRENT_TERM, SEASON_LABEL } from "@/lib/game-data"
import { TopBar } from "@/components/pixel/top-bar"
import { PixelCard, PixelProgress } from "@/components/pixel/pixel-ui"
import { cn } from "@/lib/utils"

export function AchievementsScreen() {
  const { achievements } = useGame()

  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const total = achievements.length
  const season = SEASON_LABEL[CURRENT_TERM.season]

  return (
    <div className="pb-10">
      <TopBar />

      <div className="space-y-4 px-3 pt-2">
        <div className="flex items-center gap-2">
          <h2 className="font-[family-name:var(--font-cjk)] text-lg font-black text-primary">🏆 我的成就</h2>
          <span className="font-pixel text-[8px] text-muted-foreground">
            {unlockedCount}/{total}
          </span>
        </div>

        {/* 厨师档案卡 */}
        <PixelCard thick className="overflow-hidden">
          <div className="flex items-center gap-3 border-b-2 border-border-dark bg-surface-2 px-4 py-3">
            <span className="pixel-border-sm bg-card flex h-14 w-14 items-center justify-center text-3xl">
              👨‍🍳
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-pixel text-xs text-primary">小厨神</div>
              <div className="mt-1 font-[family-name:var(--font-cjk)] text-[11px] text-muted-foreground">
                当季 · {CURRENT_TERM.name}
                <span className={cn("ml-1", season.color)}>{season.label}</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              <StatBox label="已解锁" value={unlockedCount} emoji="🏆" color="text-success" />
              <StatBox label="总成就" value={total} emoji="📋" color="text-primary" />
              <StatBox label="完成度" value={`${Math.round((unlockedCount / total) * 100)}%`} emoji="📊" color="text-accent" />
            </div>
          </div>
        </PixelCard>

        {/* 成就进度 */}
        <div>
          <div className="mb-1 flex items-center justify-between font-pixel text-[8px] text-muted-foreground">
            <span>成就收集进度</span>
            <span>{Math.round((unlockedCount / total) * 100)}%</span>
          </div>
          <PixelProgress value={unlockedCount} max={total} barClass="bg-accent" />
        </div>

        {/* 成就网格 */}
        <div className="grid grid-cols-2 gap-2.5">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={cn(
                "pixel-border-sm relative flex items-center gap-2.5 p-3 transition-all",
                a.unlocked ? "bg-card" : "bg-surface-2 opacity-60 grayscale",
              )}
            >
              <span className="text-3xl">{a.unlocked ? a.emoji : "🔒"}</span>
              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    "truncate font-[family-name:var(--font-cjk)] text-[13px] font-bold",
                    a.unlocked ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {a.name}
                </div>
                <div className="mt-0.5 font-[family-name:var(--font-cjk)] text-[10px] leading-tight text-muted-foreground">
                  {a.desc}
                </div>
              </div>
              {a.unlocked && (
                <span className="absolute right-1.5 top-1.5 font-pixel text-[7px] text-success">已达成</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatBox({
  label,
  value,
  emoji,
  color,
}: {
  label: string
  value: number | string
  emoji: string
  color: string
}) {
  return (
    <div className="pixel-inset bg-surface-2 flex flex-col items-center gap-0.5 py-2">
      <span className="text-lg">{emoji}</span>
      <span className={cn("font-pixel text-[11px]", color)}>{value}</span>
      <span className="font-[family-name:var(--font-cjk)] text-[9px] text-muted-foreground">{label}</span>
    </div>
  )
}
