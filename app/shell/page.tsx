"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useAppContext } from "@/hooks/useContexts"
import Spark from '@/public/spark.png'
import Help from "../components/Help"
import useObserver from "@/hooks/useObserver"
import BgHome from "../components/home/BgHome"
import ShellTitle from "../components/ShellTitle"

export default function Home() {
  const { theme } = useAppContext() as AppContextProps
  const [inputDisplay, setInputDisplay] = useState<InputDisplayType[]>([])
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px'})

  const [inputRef1, inputRef2] =[
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ]

  useEffect(() => {
    if(!inputRef1.current) return
    const onload = () => inputRef1.current?.focus()
    window.addEventListener('load', onload)
  }, [inputRef1])

  return (
    <main 
      ref={observerRef}
      className={`main-page relative flex h-screen z-10 flex-col w-full mobile:text-sm px-3 py-3`}>
      <ShellTitle 
        theme={theme} inputDisplay={inputDisplay}
        inputRef1={inputRef1 as React.RefObject<HTMLInputElement>}
        setInputDisplay={setInputDisplay} inputRef={inputRef1 as React.RefObject<HTMLInputElement>}
      />
      {
        inputDisplay?.map(display => (
          <Entries key={display.id}
            theme={theme}
            display={display}
            inputRef2={inputRef2}
            inputDisplay={inputDisplay}
            setInputDisplay={setInputDisplay}
          />
        ))
      }
      {/* <BgHome isIntersecting={isIntersecting} /> */}
    </main>
  )
}


type EntriesTypeProps = {
  display: InputDisplayType,
  theme: Theme,
  inputDisplay: InputDisplayType[],
  setInputDisplay: React.Dispatch<React.SetStateAction<InputDisplayType[]>>
  inputRef2: React.RefObject<HTMLInputElement>
}

const Entries = ({ display, theme, inputDisplay, setInputDisplay, inputRef2 }: EntriesTypeProps) => {
  const scrollRef = useCallback((node: HTMLDivElement) => {
    node ? node.scrollIntoView({behavior: 'smooth'}) : null
  }, [])

  return (
    <div 
      ref={scrollRef}
      className="flex flex-col text-xs whitespace-pre-wrap">
      {
        display?.entry === 'help' ?
          <Help />
        :
        display?.entry === 'email' ?
          <div className="flex flex-col gap-0.5 text-blue-500 transition-all">
            <a href="mailto:itsoluwatobby@gmail.com" className="hover:underline">itsoluwatobby@gmail.com</a>
            <a href="mailto:oluwasamuel050@gmail.com" className="hover:underline">oluwasamuel050@gmail.com</a>
          </div>
          :
          <div className={`${(display?.id && (display?.entry as string)?.length) ? 'block' : 'hidden'} text-[13px] text-${display?.color}-600`}>
            {display?.entry}
          </div>
      }
      <ShellTitle 
        theme={theme} inputDisplay={inputDisplay}
        setInputDisplay={setInputDisplay} inputRef={inputRef2 as React.RefObject<HTMLInputElement>}
      />
    </div>
  )
}