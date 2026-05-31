"use client"

import { cn } from "@/lib/utils"
import { useGame, type ToastType } from "@/lib/game-context"

const toastStyle: Record<ToastType, string> = {
  success: "bg-success text-primary-foreground",
  warning: "bg-warning text-accent-foreground",
  error: "bg-destructive text-primary-foreground",
}

const toastIcon: Record<ToastType, string> = {
  success: "✓",
  warning: "!",
  error: "✕",
}

export function ToastStack() {
  const { toasts, dismissToast } = useGame()
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-[60] flex flex-col items-center gap-2 px-3">
      {toasts.map((t) => (
        <button
          key={t.id}
          onClick={() => dismissToast(t.id)}
          className={cn(
            "animate-slide-up pixel-border-sm pointer-events-auto flex w-full max-w-[440px] items-center gap-3 px-3 py-2 text-left font-[family-name:var(--font-cjk)] text-xs leading-relaxed",
            toastStyle[t.type],
          )}
        >
          <span className="font-pixel text-sm">{toastIcon[t.type]}</span>
          <span className="flex-1">{t.message}</span>
        </button>
      ))}
    </div>
  )
}
