"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useAppContext } from "@/hooks/useContexts"
import { SiPowershell } from 'react-icons/si'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { HomeNavigationButtons } from '@/utils/navContent'
import { MdOutlineHomeRepairService, MdOutlineRoundaboutRight, MdSimCardDownload } from 'react-icons/md'
import { FaProjectDiagram, FaCode, FaLink, FaGithub, FaBlog, FaExternalLinkAlt } from 'react-icons/fa'
import useObserver from "@/hooks/useObserver"
import BgHome from "./components/home/BgHome"
import Image from "next/image"

export default function Home() {
  const { theme } = useAppContext() as AppContextProps
  const [inputDisplay, setInputDisplay] = useState<InputDisplayType[]>([])
  const { isIntersecting, observerRef } = useObserver({screenPosition: '0px'})
  const listStyle = {
    list: 'list-none my-2.5', span: 'text-[rgba(185,25,25)] text-sm'
  }

  const routeLinks = ['/blog', '/shell']

  const FOLDER_ICONS = useCallback((classNames?: string): {[index: string]: JSX.Element} => {
    return (
      {
        "home": <BiSolidHomeHeart className={classNames} />, 
        "github": <FaGithub className={classNames} />, 
        "about": <MdOutlineRoundaboutRight className={classNames} />, 
        "services": <MdOutlineHomeRepairService className={classNames} />,
        "miniblog": <FaBlog className={classNames} />,
        "shell": <SiPowershell className={classNames} />,
        "projects": <FaProjectDiagram className={classNames} />,
        "cv": <MdSimCardDownload className={classNames} />,
      }
    )
  }, [])

//  function openTab(tabName){
//     tabLinks.forEach(tab => {
//        tab.classList.remove("active-link")
//     })
//     tabContents.forEach(content => {
//        content.classList.remove("active-tab")
//     })
//     event.currentTarget.classList.add('active-link');
//     document.getElementById(tabName).classList.add('active-tab')
//  }

  // function openmenu() {
  //   sideMenuEl.style.right = '0';
  // }
  // function closemenu() {
  //   sideMenuEl.style.right = '-200px';
  // }

  // target={routeLinks?.includes(socialMedia?.link) ? '_self' : '_blank'}
  
  return (
    <main 
      ref={observerRef}
      className={`main-page relative font-poppins ${theme === 'light' ? 'text-black' : ''} transition-colors py-6 flex z-10 flex-col gap-6 w-full mobile:text-sm px-3`}>
      <h1 className="font-courier text-6xl text-pr-200"><span className='text-pr-500'>O</span>LUWATOBI.</h1>
      <div className="w-full midscreen:py-2 transition-all">
        <div className={`h-full grid grid-cols-4 gap-16 p-4 w-fit mobile:gap-`}>
          {
            HomeNavigationButtons?.map(socialMedia => (
              <div key={socialMedia.name} className='even:translate-y-6 odd:-translate-y-3 flex flex-col gap-0.5 items-center'>
                <div
                  className={`p-2 rounded-sm rounded-tr-xl bg-gray-600 bg-opacity-40 grid place-content-center border-2 border-t-teal-400 border-l-teal-500 border-b-teal-400 border-r-teal-500 hover:border-t-teal-600 hover:border-l-teal-700 hover:border-b-teal-500 hover:border-r-teal-400 cursor-pointer hover:opacity-95 hover:skew-y-3 hover:scale-[1.02] transition-all`}
                >
                  {/* {
                    routeLinks?.includes(socialMedia?.link) ?
                    <Link href={socialMedia.link}>

                    </Link>
                  : */}
                    <a 
                      href={socialMedia?.name === 'email' ? '' : socialMedia?.name === 'phone' ? '' : `${socialMedia?.link}`}
                      className={`shadow-lg flex items-center text-blue-600 hover:underline w-fit hover:-skew-y-[5deg] transition-transform`}
                      >
                      {FOLDER_ICONS(`${theme === 'light' ? 'text-gray-800' : 'text-gray-300'} text-3xl`)[socialMedia?.name?.toLowerCase()]}
                    </a>
                  {/* } */}
                </div>
                <span className='capitalize tracking-wide text-sm'>{socialMedia?.name}</span>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col gap-3 text-[70px] mt-5 tracking-[15px] text-pr-200 midscreen:mt-1/4 midscreen:text-[40px] transition-all">
          <p className='midscreen:leading-[3rem] leading-[3.5rem]'>Software Developer</p>
          <h1 className="midscreen:leading-10 leading-[3.5rem] mt-10 midscreen:mt-0 midscreen:text-[25px] tracking-[5px] transition-all">Hi, I&apos;m <span className='text-[#ff0004]'>Oluwatobi</span><br/>Akinola</h1>
        </div>
      </div>

      {/* <!-- ----------------------------------About------------------------------- --> */}

      <div className={`${theme === 'light' ? 'text-black' : 'text-[#ababab]'} transition-colors mobile:hidden`}>
        <div className="p-2.5">
          <div className="flex justify-between flex-wrap">
            {/* <div className="flex-none w-35% midscreen:flex-auto midscreen:w-full midscreen:mb-[30px]">
              <Image 
                width={440}
                height={440}
                src="/images/1661177791631-removebg-preview%20(5).png" alt="Profile image"
                className="w-full rounded-[15px]"
              />
            </div> */}
            <div className="flex-none w-[60%] midscreen:flex-auto flex flex-col gap-3 midscreen:w-full midscreen:text-sm">
              {/* text-[60px] */}
              <h1 className="text-6xl font-[600]">About Me</h1>
              <p className="break-words break-keep flex flex-col text-justify">
                <span>
                  I&apos;m Oluwatobi Samuel Akinola, a software developer with over two years experience. I have gained extensive knowledge and skills in various programming languages and frameworks, including Javascript, Typescript, Node.js, React.js, bash scripting and C.
                </span><br/>
                <span>
                  In conclusion, I am a dedicated and skilled software developer who is passionate about using technology to solve real-world problems. I am always eager to learn and improve my skills, and I believe that my passion and commitment to excellence make me a valuable asset to any team. If you are looking for a developer with a strong work ethic,then I would be an excellent candidate for your team. Thank you for taking the time to read my profile, and I look forward to hearing from you soon.                  
                </span> 
              </p>

              <div className="flex mt-5 mb-0 mx-10">
                <p className={`mr-[50px] text-lg font-medium cursor-pointer relative after:content-[""] after:w-0 after:h-[3px] after:bg-[#ff0004] after:absolute after:left-0 after:-bottom-2 transition-all ${[].length ? '' : 'w-[50%]'}`} 
                // onclick="openTab('skills')"
                >Skills</p>
                <p className={`mr-[50px] text-lg font-medium cursor-pointer relative after:content-[""] after:w-0 after:h-[3px] after:bg-[#ff0004] after:absolute after:left-0 after:-bottom-2 transition-all ${[].length ? '' : 'w-[50%]'}`} 
                // onclick="openTab('experience')"
                >Experience</p>
                <p className={`mr-[50px] text-lg font-medium cursor-pointer relative after:content-[""] after:w-0 after:h-[3px] after:bg-[#ff0004] after:absolute after:left-0 after:-bottom-2 transition-all ${[].length ? '' : 'w-[50%]'}`} 
                // onclick="openTab('education')"
                >Education</p>
              </div>
              <div className={[]?.length ? 'block' : 'hidden'} id="skills">
                <ul>
                  <li className={listStyle.list}><span className={listStyle.span}>Node</span><br/>Back-end Development</li>
                  <li className={listStyle.list}><span className={listStyle.span}>Web Design</span><br/>Web Development</li>
                  <li className={listStyle.list}><span className={listStyle.span}>Database</span><br/>PostgreSQL and MongoDB using Mongoose</li>
                  <li className={listStyle.list}><span className={listStyle.span}>Website Development</span><br/>MERN Stack Development</li>
                </ul>
              </div>
              <div className="" id="experience">
                <ul>
                  <li className={listStyle.list}><span className={listStyle.span}>2022 - Present</span><br/>FreeLance</li>
                  <li className={listStyle.list}><span className={listStyle.span}>2021 - Present</span><br/>Web Development</li>
                  <li className={listStyle.list}><span className={listStyle.span}>2020 - Present</span><br/>working with REST APIs in java and Node</li>
                </ul>
              </div>
              <div className="" id="education">
                <ul>
                  <li className={listStyle.list}><span className={listStyle.span}>2021</span><br/>MERN Stack Development</li>
                  <li className={listStyle.list}><span className={listStyle.span}>2019</span><br/>Federal University of Agriculture, Abeokuta</li>
                </ul>
              </div>
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
