"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useAppContext } from "@/hooks/useContexts"
import ShellTitle from "./components/ShellTitle"
import Globe from '@/public/hackathonGlobe.png'
import useObserver from "@/hooks/useObserver"
import Spark from '@/public/spark.png'
import Help from "./components/Help"
import Image from "next/image"

// const initDisplayState = [{id: '1', entry: '', type: 'SUCCESS' as EntryType}]
const initDate = { hour: '00', minutes: '00', seconds: '00' }
export default function Home() {
  const { theme } = useAppContext() as AppContextProps
  const [inputDisplay, setInputDisplay] = useState<InputDisplayType[]>([])
  const [time, setTime] = useState<number>(7200)
  const [countDownTime, setCountDownTime] = useState<typeof initDate>(initDate)
  const [dynamicOpacity, setDynamicOpacity] = useState<string>('opacity-90')
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px'})

  const [inputRef1, inputRef2] =[ useRef<HTMLInputElement>(null),  useRef<HTMLInputElement>(null)]
  const scrollRef = useCallback((node: HTMLDivElement) => {
    node ? node.scrollIntoView({behavior: 'smooth'}) : null
  }, [])

  const Opacities = useCallback(() => {
    return ['opacity-20', 'opacity-10', 'opacity-25', 'opacity-10', 'opacity-20', 'opacity-25']
  }, [])

  const { hour, minutes, seconds } = countDownTime

  useEffect(() => {
    const opacityLength = Opacities()?.length - 1
    let randomIndex: number = 0
    let timeoutId: NodeJS.Timeout = setTimeout(()=>{})
    let prevIndex = 0
    if(isIntersecting === 'SWITCH'){
      timeoutId = setInterval(() => {
        const rand = Math.floor(Math.random() + 2)
        randomIndex = Math.floor((opacityLength * Math.random()) + rand)
        if(randomIndex > opacityLength) randomIndex = randomIndex - opacityLength
        if(prevIndex === randomIndex) {
          if(prevIndex === opacityLength) randomIndex = randomIndex - 1
          else randomIndex = randomIndex + 1
        }
        setDynamicOpacity(Opacities()[randomIndex])
        prevIndex = randomIndex // set this last
      }, 2000)
    }
    else if(isIntersecting === 'STOP') {  
      setDynamicOpacity(Opacities()[randomIndex])
      clearInterval(timeoutId)
    }
    return () => {
      clearInterval(timeoutId)
    }
  }, [Opacities, isIntersecting])

  useEffect(() => {
    let isMounted = true
    if(isMounted){
      const hour = (Math.floor(time / 3600)).toString()
      const minutes = (Math.floor((time % 3600) / 60)).toString()
      const seconds = (Math.floor(time % 60)).toString()
      setCountDownTime(prev => ({ ...prev, hour, minutes, seconds }))
    }
    return () => {
      isMounted = false
    }
  }, [time])

  useEffect(() => {
    const onload = () => inputRef1.current?.focus()
    window.addEventListener('load', onload)
  }, [inputRef1])

  return (
    <main 
      ref={observerRef}
      className={`main-page relative flex h-screen flex-col w-full px-3`}>
      <ShellTitle 
        theme={theme} inputDisplay={inputDisplay}
        inputRef1={inputRef1 as React.RefObject<HTMLInputElement>}
        setInputDisplay={setInputDisplay} inputRef={inputRef1 as React.RefObject<HTMLInputElement>}
      />
      {
        inputDisplay?.map(display => (
          <div 
            ref={scrollRef}
            key={display?.id} 
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
        ))
      }

      {/* <div className="barlow absolute flex items-center text-[40px] md:text-5xl gap-7 md:gap-9 w-40 md:pt-6">
        <p className="relative flex items-center">
          <span>{hour.padStart(2, '0')}</span>
          <span className="absolute -right-2 bottom-0.5 text-xs">H</span>
        </p>
        <p className="relative flex items-center">
          <span>{minutes.padStart(2, '0')}</span>
          <span className="absolute -right-2 bottom-0.5 text-xs">M</span>
        </p>
        <p className="relative flex items-center">
          <span>{seconds.padStart(2, '0')}</span>
          <span className="absolute -right-2 bottom-0.5 text-xs">S</span>
        </p>
      </div> */}

      <figure className='spinning_globe m-auto w-[80%] md:w-[60%] lg:w-[35%] md:pt-5 opacity-30 transition-opacity rounded-b-lg'>
        <Image width={200} height={200} src={Globe} alt="Globe" loading='eager' className={`top-1 w-full ${dynamicOpacity} transition-all h-full drop-shadow-xl`}/>
      </figure>
      
      <figure className='absolute w-[15%] md:pt-5 opacity-30 rounded-b-lg transition-opacity'>
        <Image width={200} height={200} src={Globe} alt="Globe" loading='eager' className={`top-1 w-full ${dynamicOpacity} transition-all h-full drop-shadow-xl`}/>
      </figure>

    </main>
  )
}
