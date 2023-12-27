import { useCallback, useEffect, useState} from 'react'
import Globe from '@/public/hackathonGlobe.png'
import Image from "next/image"

type BgHomeProps = {
  isIntersecting: IsIntersectingType
}
export default function BgHome({ isIntersecting }: BgHomeProps) {
  const [dynamicOpacity, setDynamicOpacity] = useState<string>('opacity-90')
  
  const Opacities = useCallback(() => {
    return ['opacity-20', 'opacity-10', 'opacity-25', 'opacity-10', 'opacity-20', 'opacity-25']
  }, [])

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

  return (
    <>
      {/* <figure className='spinning_globe fixed m-auto w-[80%] md:w-[60%] lg:w-[35%] md:pt-5 opacity-30 transition-opacity rounded-b-lg'>
        <Image width={200} height={200} src={Globe} alt="Globe" loading='eager' className={`top-1 w-full ${dynamicOpacity} transition-all h-full drop-shadow-xl`}/>
      </figure> */}

      <div className='bg-globe bg-center bg-no-repeat'></div>
      
      <figure className='absolute w-[15%] md:pt-5 opacity-30 rounded-b-lg transition-opacity'>
        <Image width={200} height={200} src={Globe} alt="Globe" loading='eager' className={`top-1 w-full ${dynamicOpacity} transition-all h-full drop-shadow-xl`}/>
      </figure>
    </>
  )
}