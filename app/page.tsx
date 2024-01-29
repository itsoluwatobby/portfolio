"use client"

import { useState } from "react"
import { useAppContext } from "@/hooks/useContexts"
import { watchWords } from '@/utils/navContent'
import { FaCode, FaLink, FaExternalLinkAlt } from 'react-icons/fa'
import useObserver from "@/hooks/useObserver"
import BgHome from "./components/home/BgHome"
import Image from "next/image"
import exp from "constants"
import { Summary } from "./components/home/Summary"
import { NavSection } from "./components/home/NavSection"


export default function Home() {
  const { theme } = useAppContext() as AppContextProps
  // const [inputDisplay, setInputDisplay] = useState<InputDisplayType[]>([])
  const { isIntersecting, observerRef } = useObserver({ screenPosition: '0px' })

  const routeLinks = ['/blog', '/shell']

  const About = {
    about1: " Hello World!, I'm Oluwatobi Akinola Samuel, a software engineer who oves turning complex problems into elegant solutions. I have gained extensive knowledge and skills in various programming languages and frameworks, including Javascript, Typescript, Node.js, React.js, bash scripting, Nest.js, Python, Next.js and C",
    about2: "I'm here to to make the world a better place and also improve on myself while at that. If you need a developer with a good work ethic, I would be an excellent candidate for your team. Thank you for been here and I look forward to hearing from you."
  }

  const bodyContent = About.about1.split(/[\s,]+/).map((word, index) => {
    const specificWords = watchWords.includes(word.toLowerCase()) ? word + ',' : null;
    const otherWords = watchWords.includes(word.toLowerCase()) ? word + ',' : word;
    return (
      <span key={index} className={`${specificWords ? 'bg-gray-600 bg-opacity-50 rounded-sm text-yellow-500 px-1' : ''} w-fit`}>{otherWords}</span>
    )
  })

  return (
    <main
      ref={observerRef}
      className={`main-page scroll-smooth relative font-poppins ${theme === 'light' ? 'text-black' : ''} transition-colors py-6 flex z-10 flex-col gap-6 w-full mobile:text-sm px-3`}>
      <h1 
      id='home'
      className="font-courier text-6xl text-pr-200"><span className='text-pr-500'>O</span>LUWATOBI<span className="animate-pulse">.</span></h1>

      <NavSection />

      {/* <!-- ----------------------------------About------------------------------- --> */}

      <div className={`${theme === 'light' ? 'text-black' : 'text-[#ababab]'} transition-colors mobile:hidden`}>
        <div className="p-2.5">
          <div className="flex justify-between flex-wrap">
            <div className="flex-none w-[60%] midscreen:flex-auto flex flex-col gap-3 midscreen:w-full midscreen:text-sm">
              {/* text-[60px] */}
              <h1 className="text-6xl font-[600]">About Me</h1>
              <p className="flex flex-wrap w-full gap-x-1.5">
                {bodyContent}
              </p>
              <p className="break-words break-keep flex flex-col text-justify">
                {About.about2}
              </p>

              <Summary />

            </div>
          </div>
        </div>
      </div>

      {/* <!------------------------------- services --------------------------------> */}

      <div id="services" className="py-[30px]">
        <div className="p-2.5">
          <h1 className="midscreen:text-[60px]">My Services</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-[50px] hover:bg-[#ff0004] hover:-translate-y-2.5">
            <div className="bg-[#262626] p-10 text-[13px] font-[300] rounded-[10px] transition-all">
              <FaCode className='text-[50px] mb-[30px]' />
              <h2 className="text-[30px] font-medium mb-[15px]">Web Design</h2>
              <p>Cloned a few websites like Disney and Tesla</p>
              <a href="https://relaxed-churros-d701e7.netlify.app" target="_blank" className="text-white no-underline font-xs mt-20 inline-block transition-all">Learn more</a>
            </div>
            <div>
              <i className="fas fa-crop-alt"></i>
              <h2>MERN Stack Development</h2>
              <p>Developed an E-commerce website with ReactJs, Node using express and Mongo as the database.</p>
              <a href="http://github.com/itsoluwatobby/Chat-Application" target="_blank">Learn more</a>
            </div>
            <div>
              <i className="fab fa-app-store"></i>
              <h2>REST API</h2>
              <p>Built REST APIs with Node using express, java using springboot and mongoDB or postgresql as database storage</p>
              <a href="http://github.com/itsoluwatobby/twitter-backend-clone" target="_blank">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!------------------------------ porfolio -------------------------------> */}

      <div id="portfolio" className="py-12">
        <div className="p-2.5">
          <h1 className="text-[60px]">My Work</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-[50px]">
            <div className="rounded-[10px] relative overflow-hidden">
              <Image
                width={440}
                height={440}
                src="/images/bg-2.png"
                alt=""
                className="w-full h-full rounded-[10px] block object-cover transition-all hover:scale-[1.1]"
              />
              <div className="w-full h-0 bg-gradient-to-tr from-[rgba(0,0,0,0.6)] to-[#ff004f] rounded-[10px] absolute left-0 bottom-0 overflow-hidden flex items-center flex-col justify-center text-center px-10 text-sm transition-all hover:h-full">
                <h3 className='font-medium mb-5'>whatsapp Desktop Clone</h3>
                <p>Whatsapp desktop application, with a cloud storage implementation using MongoDB with mongoose. Tap to visit</p>
                <a href="https://whatsapp-desktop-clone.onrender.com/" target="_blank" className="mt-5 text-[#ff0004] text-lg leading-[3.75rem] no-underline bg-white w-[60px] h-[60px] rounded-1/2"><FaLink className="" /></a>
              </div>
            </div>
            <div className="work">
              <Image
                width={440}
                height={440}
                src="/images/tesla-clone.png"
                alt=""
              />
              <div className="layout">
                <h3>Tesla clone</h3>
                <p>This is a clone of the popular Tesla webpage. Tap to visit</p>
                <a href="https://relaxed-churros-d701e7.netlify.app/" target="_blank"><FaExternalLinkAlt className="" /></a>
              </div>
            </div>
            {/* <div className="work">
              <Image src="./images/images/twitter_clone.png" alt="">
              <div className="layout">
                  <h3>Twitter webpage clone</h3>
                  <p>Twitter webpage clone, Though i'm still yet to finish up with the user interface but the backend workings/API is 95% completed. Tap to view the Backend source code</p>
                  <a href="https://github.com/itsoluwatobby/twitter-backend-clone" target="_blank"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <!-- <div className="work">
              <img src="./images/images/resume_builder.png" alt="">
              <div className="layout">
                  <h3>Resume Builder website</h3>
                  <p>A resume builder website, with two custom resume resume templates.Tap to visit
                  </p>
                  <a href="https://resume-builder-u0ip.onrender.com" target="_blank"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div> --> */}
          </div>
          <a href="#" className="block margin w-fit border border-[#ff004f] py-3.5 px-[50px] rounded-md no-underline text-white transition-colors hover:bg-[#ff004f]">Go Home</a>
        </div>
      </div>

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
