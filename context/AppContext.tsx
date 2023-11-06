"use client"
import { createContext, useState } from "react"

export const AppContext = createContext<AppContextProps | null>(null)

export const AppDataProvider = ({ children }: ChildrenNode) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const value = {
    theme, setTheme
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}