"use client"
import { useAppContext } from '@/hooks/useContexts'
import { useCallback, useEffect, useState } from "react"
import Person1 from '@/public/person1.png'
import Person2 from '@/public/person2.png'
import Image from "next/image"

const initMovement = { move1: '', move2: '' }
export default function Wrapper({ children }: ChildrenNode) {
  const { theme } = useAppContext()

  const [movement, setMovement] = useState<typeof initMovement>(initMovement)

  const Movements = useCallback(() => {
    return ['top-28', 'top-16', 'bottom-20', 'bottom-28', 'right-16', 'left-24', 'right-28', 'left-20', 'top-40', 'right-36', 'left-32', 'bottom-24']
  }, [])

  useEffect(() => {
    const movementLength = Movements()?.length - 1
    let index1 = 0, index2 = 0;
    let prevIndex1 = 0, prevIndex2 = 0;
    const timeoutId = setInterval(() => {
      const rand = Math.floor(Math.random() + 2)
      index1 = Math.floor((movementLength * Math.random()) + rand)
      index2 = Math.floor((movementLength * Math.random()) + rand)
      if(index1 > movementLength) index1 = index1 - movementLength
      if(index2 > movementLength) index2 = index2 - movementLength
      if(prevIndex1 === index1) {
        if(prevIndex1 === movementLength) index1 = index1 - 1
        else index1 = index1 + 1
      }
      if(prevIndex2 === index2) {
        if(prevIndex2 === movementLength) index2 = index2 - 1
        else index2 = index2 + 1
      }
      if(index1 === index2) {
        if(index1 === movementLength) index1 = index1 - 1
        if(index1 > 0) index1 = index1 - 1
        else index1 = index1 + 1
      }
      setMovement(prev => ({ ...prev, move1: Movements()[index1], move2: Movements()[index2] }))
      prevIndex1 = index1 // set this last
      prevIndex2 = index2 // set this last
    }, 3000)
    return () => {
      clearInterval(timeoutId)
    }
  }, [Movements])

  return (
    <main className={`hidebars relative text-sm overflow-y-scroll ${theme === 'light' ? 'bg-white' : 'bg-slate-950 text-white'} transition-all w-full h-screen`}>
      
      {children}
      
      {/* <div className='absolute bg-red-500 w-full h-full pr-4 grid place-content-center'> */}
        <figure className={`absolute w-6 ${movement?.move1} transition-all`}>
          <Image 
            width={20}
            height={20}
            src={Person1} 
            alt="Person icon" 
            loading='lazy' 
            className={`object-cover w-full self-center`} 
          />
        </figure>
        <figure className={`absolute w-6 ${movement?.move2} transition-all`}>
          <Image 
            width={20}
            height={20}
            src={Person2} 
            alt="Person icon" 
            loading='lazy' 
            className={`object-cover w-full self-center`} 
          />
        </figure>
      {/* </div> */}

    </main>
  )
}