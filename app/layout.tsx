import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'

const pressStart = localFont({
  src: '../public/fonts/PressStart2P.woff2',
  variable: '--font-press-start',
  display: 'swap',
})

const notoSC = localFont({
  src: [
    { path: '../public/fonts/NotoSansSC-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/NotoSansSC-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-cjk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '今天吃什么 · 像素做饭游戏',
  description: '一款像素复古风格的做饭闯关游戏：选菜、买菜、备菜、做菜，解锁食材图鉴与成就。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`bg-background ${pressStart.variable} ${notoSC.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
