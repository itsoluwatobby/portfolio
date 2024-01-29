import { useCallback } from "react"
import { FaProjectDiagram, FaLinkedinIn, FaGithub, FaBlog } from 'react-icons/fa'
import { MdOutlineHomeRepairService, MdOutlineRoundaboutRight, MdSimCardDownload } from 'react-icons/md'
import { SiPowershell } from 'react-icons/si'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { HomeNavigationButtons } from "@/utils/navContent"
import { useAppContext } from "@/hooks/useContexts"
import TypewriterEffect from "./TypewriterEffect"

export const NavSection = () => {
  const { theme } = useAppContext() as AppContextProps


  const FOLDER_ICONS = useCallback((classNames?: string): { [index: string]: JSX.Element } => {
    return (
      {
        "home": <BiSolidHomeHeart className={classNames} />,
        "github": <FaGithub className={classNames} />,
        "linkedin": <FaLinkedinIn className={classNames} />,
        "about": <MdOutlineRoundaboutRight className={classNames} />,
        "services": <MdOutlineHomeRepairService className={classNames} />,
        "miniblog": <FaBlog className={classNames} />,
        "shell": <SiPowershell className={classNames} />,
        "projects": <FaProjectDiagram className={classNames} />,
        "cv": <MdSimCardDownload className={classNames} />,
      }
    )
  }, [])

  return (
    <div className="w-full midscreen:py-2 transition-all">
      <div className={`h-full grid grid-cols-4 gap-16 p-4 w-full mobile:gap-`}>
        {
          HomeNavigationButtons?.map((socialMedia, index) => (
            <div key={socialMedia.name} className={`${index % 2 == 0 ? 'moving-item' : index === 5 ? 'moving-item1' : 'moving-item2'} even:translate-y-6 odd:-translate-y-3 flex flex-col gap-0.5 items-center`}>
              <div
                className={`p-2 rounded-sm rounded-tr-xl bg-gray-600 bg-opacity-40 grid place-content-center border-2 border-t-teal-400 border-l-teal-500 border-b-teal-400 border-r-teal-500 hover:border-t-teal-600 hover:border-l-teal-700 hover:border-b-teal-500 hover:border-r-teal-400 cursor-pointer hover:opacity-95 hover:skew-y-3 hover:scale-[1.02] transition-all`}
              >
                <a
                  href={socialMedia?.name === 'email' ? '' : socialMedia?.name === 'phone' ? '' : `${socialMedia?.link}`} target={socialMedia.link.startsWith('https://') ? "_blank" : ''}
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

      <div className="flex flex-col gap-5 text-[70px] mt-5 tracking-[15px] text-pr-200 midscreen:mt-1/4 midscreen:text-[40px] transition-all">
        <div className='midscreen:leading-[3rem] leading-[3.5rem]'>
          <TypewriterEffect text="Software Engineer" start="BEGIN" delay={0.4} />
        </div>
        <h1 className="midscreen:leading-10 leading-[3.5rem] mt-10 midscreen:mt-0 midscreen:text-[25px] tracking-[5px] transition-all">Hi, I&apos;m <span className='text-[#ff0004]'>Oluwatobi</span><br />Akinola</h1>
      </div>
    </div>
  )
}