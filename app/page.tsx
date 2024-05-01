"use client"

import { useState } from "react"
import { useAppContext } from "@/hooks/useContexts"
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa'
import useObserver from "@/hooks/useObserver"
import BgHome from "./components/home/BgHome"
import Image from "next/image"
import exp from "constants"
import { NavSection } from "./components/home/NavSection"
import MyServices from "./components/home/MyServices"
import { AboutMe } from "./components/home/AboutMe";
import SourceData from '../utils/projetcts.json';
import { MyProjects } from "./components/home/MyProjects"


export default function Home() {
  const { theme } = useAppContext() as AppContextProps
  // const [inputDisplay, setInputDisplay] = useState<InputDisplayType[]>([])
  const { isIntersecting, observerRef: homeRef } = useObserver({ screenPosition: '0px' })

  const routeLinks = ['/blog', '/shell']

  return (
    <main
      ref={homeRef}
      className={`main-page scroll-smooth relative font-poppins ${theme === 'light' ? 'text-black' : ''} transition-colors pt-3 pb-14 flex z-10 flex-col gap-6 w-full mobile:text-sm px-3`}>
      <h1
        id='home'
        className="font-courier text-6xl text-pr-200"><span className='text-pr-500'>O</span>LUWATOBI<span className="animate-pulse">.</span></h1>

      <NavSection />

      <AboutMe theme={theme} />

      <MyServices theme={theme} />

      <MyProjects theme={theme} />

      {/* <!------------------------------- Contact --------------------------------> */}

      {/* <div id="contact">
        <div className="p-2.5">
          <div className="flex flex-wrap justify-between"
            <div className="flex-none w-[60%] relative">
              <form className="w-full">
                  <input 
                    type="text" 
                    name="Name" 
                    placeholder="Name" 
                    required
                    className="w-full border-0 outline-none bg-[#262626] p-[15px] my-[15px] text-white text-lg rounded-md"
                  />
                  <input 
                    type="text" name="Email" 
                    placeholder="Email" required
                    className="w-full border-0 outline-none bg-[#262626] p-[15px] my-[15px] text-white text-lg rounded-md"
                  />
                  <textarea 
                    name="Message" 
                    rows={6} 
                    placeholder="Message" 
                    className="w-full border-0 outline-none bg-[#262626] p-[15px] my-[15px] text-white text-lg rounded-md"
                  />
                  <button type="submit" id="button_form" className="block margin w-fit border border-[#ff004f] py-3.5 px-[50px] rounded-md no-underline text-white transition-colors hover:bg-[#ff004f] p-3.5 text-lg cursor-pointer mt-[15px]">Submit</button>
              </form>
              <div className={`absolute top-[30%] left-[50px] bg-[rgba(189,179,179,0.5)] shadow-[2px,4px,8px,rgba(0,0,0,0.3)] rounded-[10px] w-[70%] h-[70%] p-2.5 grid place-content-center ${[].length ? 'block' : 'hidden'}`}>
                  <span id="msg" className="text-[#61b752] opacity-100 block text-xl"></span>
                  <span id="msgerr" className="text-red block text-xl"></span>
              </div>
            </div>
          </div>
        </div> */}
      {/* <div className="w-full text-center p-[15px] bg-[#262626] font-light mt-5">
          <p>Copyright &copy; OLUWATOBI. <span className="datetime">{new Date().getFullYear()}</span>.
              One <FaHeart className="" /></p>
        </div> */}
      {/* </div> */}

    </main>
  )
}
