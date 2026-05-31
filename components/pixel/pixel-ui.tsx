"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, type ReactNode } from "react"

// ====== 像素按钮 ======
type Variant = "primary" | "secondary" | "accent" | "ghost" | "danger"

const variantClass: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-surface-2 text-foreground",
  accent: "bg-accent text-accent-foreground",
  ghost: "bg-transparent text-foreground border-border",
  danger: "bg-destructive text-destructive-foreground",
}

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  glow?: boolean
  full?: boolean
  size?: "sm" | "md" | "lg"
}

export function PixelButton({
  variant = "primary",
  glow,
  full,
  size = "md",
  className,
  children,
  ...props
}: PixelButtonProps) {
  const sizeClass =
    size === "lg"
      ? "px-6 py-4 text-sm"
      : size === "sm"
        ? "px-3 py-2 text-[10px]"
        : "px-4 py-3 text-xs"
  return (
    <button
      className={cn(
        "pixel-border-sm font-pixel leading-relaxed transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:active:translate-x-0 disabled:active:translate-y-0",
        sizeClass,
        variantClass[variant],
        full && "w-full",
        glow && "animate-glow",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// ====== 像素卡片 ======
export function PixelCard({
  className,
  children,
  thick,
  glow,
}: {
  className?: string
  children: ReactNode
  thick?: boolean
  glow?: boolean
}) {
  return (
    <div
      className={cn(
        "bg-card",
        thick ? "pixel-border-thick" : "pixel-border",
        glow && "animate-glow",
        className,
      )}
    >
      {children}
    </div>
  )
}

// ====== 像素进度条 ======
export function PixelProgress({
  value,
  max = 100,
  className,
  barClass = "bg-primary",
  height = "h-4",
}: {
  value: number
  max?: number
  className?: string
  barClass?: string
  height?: string
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div
      className={cn(
        "pixel-inset bg-surface-2 w-full overflow-hidden",
        height,
        className,
      )}
    >
      <div
        className={cn("h-full transition-all duration-500", barClass)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

// ====== 像素勾选框 ======
export function PixelCheckbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        "pixel-border-sm flex h-6 w-6 shrink-0 items-center justify-center text-xs",
        checked ? "bg-success text-primary-foreground" : "bg-surface-2 text-transparent",
      )}
      aria-hidden="true"
    >
      {checked ? "✓" : ""}
    </span>
  )
}

// ====== 像素标签 ======
export function PixelTag({
  active,
  children,
  onClick,
  className,
}: {
  active?: boolean
  children: ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "pixel-border-sm whitespace-nowrap px-3 py-2 font-pixel text-[10px] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
        active ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground",
        className,
      )}
    >
      {children}
    </button>
  )
}

// ====== 像素弹窗 ======
export function PixelModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-3 pb-3 sm:items-center"
      onClick={onClose}
    >
      <div
        className="animate-slide-up bg-card pixel-border-thick w-full max-w-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-border-dark bg-surface-2 px-4 py-3">
          <h3 className="font-pixel text-xs text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="pixel-border-sm bg-destructive text-primary-foreground h-7 w-7 font-pixel text-xs leading-none"
            aria-label="关闭"
          >
            ✕
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  )
}

// ====== 难度星级 ======
export function DifficultyStars({ level }: { level: number }) {
  return (
    <span className="text-accent text-xs tracking-wide" aria-label={`难度 ${level} 星`}>
      {"★".repeat(level)}
      <span className="text-muted-foreground/40">{"★".repeat(5 - level)}</span>
    </span>
  )
}
