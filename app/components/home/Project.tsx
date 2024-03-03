"use client"

// import useObserver from '@/hooks/useObserver';
import Image from 'next/image'
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

type ProjectProps = {
  name: string;
  link: string;
  preview: string;
  description: string;
}
export const Project = ({ name, link, preview, description }: ProjectProps) => {
  const [revealDetails, setRevealDetails] = useState<Toggle>('CLOSE');
  // const { observerRef, isIntersecting } = useObserver({ threshold: 0.35, screenPosition: '10px' });

  // console.log(isIntersecting);
// ${isIntersecting === 'SWITCH' ? 'even:translate-x-[100%] odd:anlate-x-[100%]' : 'even:-translate-x-[100%]'}
  return (
    <div
      // id='projects'
      // ref={observerRef as React.LegacyRef<HTMLDivElement>}
      onMouseEnter={() => setRevealDetails('OPEN')}
      onMouseLeave={() => setRevealDetails('CLOSE')}
      className={`rounded-[10px] relative overflow-hidden h-80 transition-transform`}>
      <Image
        width={440}
        height={440}
        src={preview}
        alt=""
        className="w-full h-full rounded-[10px] block object-cover transition-all hover:scale-[1.02]"
      />
      <div className={`w-full ${revealDetails === 'OPEN' ? 'h-full' : 'h-0'} bg-gradient-to-tr from-[rgba(0,0,0,0.6)] to-[#ff004f] rounded-[10px] absolute left-0 bottom-0 overflow-hidden flex items-center flex-col justify-center text-center px-10 text-sm z-30 duration-500`}>
        <h3 className='font-medium mb-5'>{name}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" className="rounded-full grid place-content-center mt-5 text-[#ff0004] text-lg leading-[3.75rem] no-underline bg-white w-[60px] h-[60px]"><FaExternalLinkAlt className="" /></a>
      </div>
    </div>
  )
}