"use client"
import { createContext, useState } from "react"

export const AppContext = createContext<AppContextProps | null>(null)

export const AppDataProvider = ({ children }: ChildrenNode) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [currentUser, setCurrentUser] = useState<string>('itsoluwatobby')
  const [commandHistory, setCommandHistory] = useState<string[]>([])

  const value = {
    theme, setTheme, commandHistory, currentUser, setCurrentUser, 
    setCommandHistory
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}