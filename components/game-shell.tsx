"use client"

import { useGame } from "@/lib/game-context"
import { ToastStack } from "@/components/pixel/feedback"
import { HelpFab } from "@/components/pixel/help-fab"
import { LandingScreen } from "@/components/screens/landing-screen"
import { SelectScreen } from "@/components/screens/select-screen"
import { ShopScreen } from "@/components/screens/shop-screen"
import { PrepScreen } from "@/components/screens/prep-screen"
import { CookScreen } from "@/components/screens/cook-screen"
import { RecipesScreen } from "@/components/screens/recipes-screen"
import { AchievementsScreen } from "@/components/screens/achievements-screen"

export function GameShell() {
  const { screen } = useGame()

  return (
    <main className="bg-background relative mx-auto min-h-dvh w-full max-w-[480px] overflow-x-hidden border-x-2 border-border-dark">
      <ToastStack />

      {screen === "landing" && <LandingScreen />}
      {screen === "select" && <SelectScreen />}
      {screen === "shop" && <ShopScreen />}
      {screen === "prep" && <PrepScreen />}
      {screen === "cook" && <CookScreen />}
      {screen === "recipes" && <RecipesScreen />}
      {screen === "achievements" && <AchievementsScreen />}

      {screen !== "landing" && <HelpFab />}
    </main>
  )
}
