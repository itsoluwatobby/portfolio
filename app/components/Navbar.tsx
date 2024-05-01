"use client"

import { useAppContext } from "@/hooks/useContexts"
import { useCallback } from "react"
import { HiOutlineSun } from 'react-icons/hi'
import { BiSolidHomeHeart } from 'react-icons/bi'
import { PiMoonStars } from 'react-icons/pi'
import { FaPhoneSquareAlt, FaGithub, FaTwitter, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'
import { socialMediaAccounts } from "@/utils/navContent"

export default function Navbar() {
  const { theme, setTheme } = useAppContext()

  const modeClass = useCallback(() => {
    return `
      text-2xl cursor-pointer
    `
  }, [])

  const switchMode = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const ICONS = useCallback((classNames?: string): {[index: string]: JSX.Element} => {
    return (
      {
        "x": <FaTwitter className={classNames}/>, 
        "github": <FaGithub className={classNames}/>, 
        "email": <MdAttachEmail className={classNames}/>,
        "linkedin": <FaLinkedin className={classNames}/>,
        "facebook": <FaFacebookSquare className={classNames}/>,
        "instagram": <FaInstagramSquare className={classNames}/>,
        "twitter": <FaTwitterSquare className={classNames}/>,
        "phone": <FaPhoneSquareAlt className={classNames}/>,
        "home": <BiSolidHomeHeart className={classNames}/>,
      }
    )
  }, [])

  return (
    <nav className={`sticky bottom-0 w-full ${theme === 'light' ? 'bg-white' : 'bg-slate-950'} z-20 transition-colors flex items-center pt-3 pb-2 px-4 maxmobile:px-2 border-t-[1px] border-gray-600 border-l-0 border-r-0 border-b-0 rounded-t-lg justify-between`}>
      <div className={`flex w-fit gap-6 mobile:gap-4`}>
        {
          socialMediaAccounts?.map(socialMedia => (
            <div key={socialMedia.name}
              className={`p-1 rounded-sm rounded-tr-xl bg-gray-600 bg-opacity-40 grid place-content-center border-2 border-t-teal-600 border-l-teal-700 border-b-teal-500 border-r-teal-400 cursor-pointer hover:opacity-95 hover:skew-y-3 hover:scale-[1.02] transition-all ${['facebook', 'instagram'].includes(socialMedia.name) ? 'maxmobile:hidden' : ''}`}
            >
              <a 
                href={socialMedia?.name === 'email' ? `mailto:${socialMedia.link}` : socialMedia?.name === 'phone' ? `whatsapp:${socialMedia.link}` : `${socialMedia?.link}`} target={socialMedia.link.startsWith('https://') ? "_blank" : ''}
                className={`shadow-lg flex items-center gap-1.5 text-blue-600 hover:underline w-fit hover:-skew-y-[5deg] transition-transform`}
                >
                {ICONS(`${theme === 'light' ? 'text-gray-800' : 'text-gray-300'} text-3xl`)[socialMedia?.name?.toLowerCase()]}
                {/* {socialMedia?.link} */}
              </a>
            </div>
          ))
        }
      </div>

      <div className="">
        { 
          theme === 'light' 
            ? 
            <PiMoonStars 
              onClick={switchMode}
              className={modeClass()}
            /> 
            : 
            <HiOutlineSun 
              onClick={switchMode}
              className={modeClass()}
            /> 
        }
      </div>

    </nav>
  )
}
