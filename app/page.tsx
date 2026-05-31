import { GameProvider } from "@/lib/game-context"
import { GameShell } from "@/components/game-shell"

export default function Page() {
  return (
    <GameProvider>
      <GameShell />
    </GameProvider>
  )
}
