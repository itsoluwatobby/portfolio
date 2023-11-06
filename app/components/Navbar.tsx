"use client"

import { useAppContext } from "@/hooks/useContexts"
import { useCallback } from "react"
import { HiOutlineSun } from 'react-icons/hi'
import { PiMoonStars } from 'react-icons/pi'

export default function Navbar() {
  const { theme, setTheme } = useAppContext()

  const modeClass = useCallback(() => {
    return `
      text-2xl cursor-pointer
    `
  }, [])

  const switchMode = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <nav className={`sticky top-0 ${theme === 'light' ? 'bg-white' : 'bg-slate-950'} z-20 transition-colors flex items-center pt-3 pb-1 px-4 border-b-[1px] justify-between`}>
      <h1 className="font-mono text-lg first-letter:italic first-letter:text-4xl">Oluwatobi Akinola Samuel</h1>

      <div className="">
        { 
          theme === 'light' 
            ? 
            <PiMoonStars 
              onClick={switchMode}
              className={modeClass()}
            /> 
            : 
            <HiOutlineSun 
              onClick={switchMode}
              className={modeClass()}
            /> 
        }
      </div>
    </nav>
  )
}