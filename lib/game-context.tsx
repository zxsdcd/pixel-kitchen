"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react"
import type { Dish } from "./game-data"
import { ACHIEVEMENTS, type Achievement } from "./game-data"

export type Screen =
  | "landing"
  | "select"
  | "shop"
  | "prep"
  | "cook"
  | "recipes"
  | "achievements"

export type ToastType = "success" | "warning" | "error"
export interface ToastItem {
  id: number
  message: string
  type: ToastType
}

interface GameState {
  screen: Screen
  navigate: (s: Screen) => void

  selectedDishes: Dish[]
  toggleDish: (d: Dish) => void
  clearSelection: () => void
  isSelected: (id: string) => boolean

  cookedDishes: Dish[]
  addCookedDish: (d: Dish) => void

  toasts: ToastItem[]
  addToast: (message: string, type?: ToastType) => void
  dismissToast: (id: number) => void

  achievements: Achievement[]
  unlock: (id: string) => void
}

const GameContext = createContext<GameState | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>("landing")
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([])
  const [cookedDishes, setCookedDishes] = useState<Dish[]>([])
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>(ACHIEVEMENTS)
  const idRef = useRef(0)

  const navigate = useCallback((s: Screen) => {
    setScreen(s)
    if (typeof window !== "undefined") window.scrollTo({ top: 0 })
  }, [])

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const addToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = ++idRef.current
      setToasts((t) => [...t, { id, message, type }])
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id))
      }, 2600)
    },
    [],
  )

  const toggleDish = useCallback((d: Dish) => {
    setSelectedDishes((prev) => {
      const exists = prev.some((x) => x.id === d.id)
      if (exists) return prev.filter((x) => x.id !== d.id)
      if (prev.length >= 4) return prev
      return [...prev, d]
    })
  }, [])

  const clearSelection = useCallback(() => setSelectedDishes([]), [])
  const isSelected = useCallback(
    (id: string) => selectedDishes.some((x) => x.id === id),
    [selectedDishes],
  )

  const unlock = useCallback((id: string) => {
    setAchievements((prev) =>
      prev.map((a) => (a.id === id ? { ...a, unlocked: true } : a)),
    )
  }, [])

  const addCookedDish = useCallback((d: Dish) => {
    setCookedDishes((prev) => {
      if (prev.some((x) => x.id === d.id)) return prev
      return [...prev, d]
    })
  }, [])

  return (
    <GameContext.Provider
      value={{
        screen,
        navigate,
        selectedDishes,
        toggleDish,
        clearSelection,
        isSelected,
        cookedDishes,
        addCookedDish,
        toasts,
        addToast,
        dismissToast,
        achievements,
        unlock,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error("useGame must be used within GameProvider")
  return ctx
}
