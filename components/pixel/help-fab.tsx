"use client"

import { useState } from "react"
import { PixelModal } from "./pixel-ui"

export function HelpFab() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="pixel-border-sm bg-accent text-accent-foreground animate-float fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center text-xl"
        aria-label="帮助"
      >
        🆘
      </button>
      <PixelModal open={open} onClose={() => setOpen(false)} title="游戏帮助">
        <div className="space-y-3 font-[family-name:var(--font-cjk)] text-xs leading-relaxed text-foreground/90">
          <p>欢迎来到「今天吃什么」！跟着步骤一步步把饭做好：</p>
          <ul className="space-y-2">
            <li>🎯 <b className="text-primary">选菜</b>：根据节气推荐或心情挑选今天要做的菜。</li>
            <li>🛒 <b className="text-primary">买菜</b>：按分类勾选所需食材，填写金额记账。</li>
            <li>🔪 <b className="text-primary">备菜</b>：照着时间线把食材处理好。</li>
            <li>👨‍🍳 <b className="text-primary">做菜</b>：用计时器把控火候，完成每一步。</li>
          </ul>
          <p className="text-muted-foreground">做完的菜会自动收录到📖菜谱铺，下次还能再做哦～</p>
        </div>
      </PixelModal>
    </>
  )
}
