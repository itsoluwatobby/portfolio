"use client"
import { useAppContext } from '@/hooks/useContexts'
import BgPersons from './wrapper/BgPersons'

export default function Wrapper({ children }: ChildrenNode) {
  const { theme } = useAppContext()

  return (
    <main className={`hidebars relative text-sm overflow-y-scroll ${theme === 'light' ? 'bg-white' : 'bg-slate-950 text-white'} transition-all w-full h-screen`}>
      {children}
      <BgPersons />
    </main>
  )
}