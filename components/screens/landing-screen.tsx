"use client"

import { useEffect, useState } from "react"
import { useGame } from "@/lib/game-context"
import { PixelButton } from "@/components/pixel/pixel-ui"

const FOODS = ["🍳", "🥘", "🍜", "🥗", "🍲"]
const STEPS = [
  { icon: "🤷", label: "不知道吃什么" },
  { icon: "🎯", label: "选菜" },
  { icon: "🛒", label: "买菜" },
  { icon: "🔪", label: "备菜" },
  { icon: "👨‍🍳", label: "做菜" },
]
const SUBTITLE = "从今天起，告别选择困难症 ~"

export function LandingScreen() {
  const { navigate } = useGame()
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(SUBTITLE.slice(0, i))
      if (i >= SUBTITLE.length) clearInterval(timer)
    }, 110)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-pixel-dots relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 py-10">
      {/* 背景浮动餐具装饰 */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <span className="animate-float-slow absolute left-6 top-24 text-3xl opacity-20">🍴</span>
        <span className="animate-float absolute right-8 top-40 text-4xl opacity-20">🥄</span>
        <span className="animate-float-slow absolute bottom-32 left-10 text-3xl opacity-20">🔪</span>
        <span className="animate-float absolute bottom-48 right-12 text-3xl opacity-15">🥢</span>
        <span className="animate-float-slow absolute right-1/3 top-12 text-2xl opacity-15">🧂</span>
      </div>

      {/* 浮动食物 */}
      <div className="relative z-10 mb-8 flex items-end gap-3">
        {FOODS.map((f, i) => (
          <span
            key={f}
            className="animate-float text-4xl"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* 大标题 */}
      <h1 className="text-pixel-shadow relative z-10 text-center font-[family-name:var(--font-cjk)] text-5xl font-black leading-tight text-primary">
        今天
        <br />
        吃什么
      </h1>

      {/* 打字机副标题 */}
      <p className="relative z-10 mt-5 h-6 text-center font-[family-name:var(--font-cjk)] text-sm text-foreground/80">
        {typed}
        <span className="animate-blink text-primary">▋</span>
      </p>

      {/* 进度引导条 */}
      <div className="relative z-10 mt-9 flex w-full max-w-[400px] items-center justify-between">
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className="pixel-border-sm bg-surface flex h-11 w-11 items-center justify-center text-xl">
                {s.icon}
              </div>
              <span className="text-center font-[family-name:var(--font-cjk)] text-[9px] leading-tight text-muted-foreground">
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="mb-5 h-[3px] flex-1 bg-border" />
            )}
          </div>
        ))}
      </div>

      {/* 开始按钮 */}
      <PixelButton
        glow
        size="lg"
        onClick={() => navigate("select")}
        className="relative z-10 mt-12 text-base"
      >
        🍳 开始做饭
      </PixelButton>

      <p className="relative z-10 mt-6 font-pixel text-[8px] text-muted-foreground">
        PIXEL COOKING v1.0
      </p>
    </div>
  )
}
