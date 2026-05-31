"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useGame, type Screen } from "@/lib/game-context"

const MENU: { screen: Screen; icon: string; label: string }[] = [
  { screen: "select", icon: "🎯", label: "选菜" },
  { screen: "recipes", icon: "📖", label: "菜谱库" },
  { screen: "achievements", icon: "🏆", label: "成就" },
  { screen: "landing", icon: "🏠", label: "返回首页" },
]

export function TopBar() {
  const { navigate } = useGame()
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 bg-background/95 px-3 pb-2 pt-3 backdrop-blur">
      <div className="bg-card pixel-border-sm flex items-center gap-2 px-2.5 py-2">
        {/* 标题 */}
        <div className="flex-1">
          <span className="font-[family-name:var(--font-cjk)] text-sm font-bold text-primary">🍳 今天吃什么</span>
        </div>

        {/* 菜单 */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="pixel-border-sm bg-surface-2 ml-1 flex h-7 w-7 items-center justify-center font-pixel text-xs"
          aria-label="菜单"
        >
          ☰
        </button>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="animate-pop-in bg-card pixel-border absolute right-3 z-50 mt-2 w-40 overflow-hidden">
            {MENU.map((m) => (
              <button
                key={m.screen}
                onClick={() => {
                  navigate(m.screen)
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2.5 border-b-2 border-border-dark px-3 py-2.5 text-left font-[family-name:var(--font-cjk)] text-xs transition-colors last:border-b-0 hover:bg-surface-2"
              >
                <span className="text-base">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const FLOW: { screen: Screen; label: string }[] = [
  { screen: "select", label: "选菜" },
  { screen: "shop", label: "买菜" },
  { screen: "prep", label: "备菜" },
  { screen: "cook", label: "做菜" },
]

export function StepBar({ current }: { current: Screen }) {
  const currentIndex = FLOW.findIndex((f) => f.screen === current)
  return (
    <div className="flex items-center justify-between px-3 py-2">
      {FLOW.map((f, i) => {
        const active = i === currentIndex
        const done = i < currentIndex
        return (
          <div key={f.screen} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "pixel-border-sm flex h-8 w-8 items-center justify-center font-pixel text-[10px]",
                  active && "bg-primary text-primary-foreground animate-bounce-pix",
                  done && "bg-success text-primary-foreground",
                  !active && !done && "bg-surface text-muted-foreground",
                )}
              >
                {done ? "✓" : i + 1}
              </div>
              <span
                className={cn(
                  "font-[family-name:var(--font-cjk)] text-[10px]",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {f.label}
              </span>
            </div>
            {i < FLOW.length - 1 && (
              <div
                className={cn(
                  "mb-4 h-[3px] flex-1",
                  done ? "bg-success" : "bg-border",
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
