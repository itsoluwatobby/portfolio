import { useState } from "react"


const initTarget = {
  skills: true, experience: false, education: false
}
export const Summary = () => {
  const [targetDisplay, setTargetDisplay] = useState<TargetDisplayType>(initTarget)
  const listStyle = {
    list: 'list-none flex flex-col gap-y-0.5', span: 'text-[rgba(185,25,25)] text-sm flex items-center gap-x-1'
  }

  return (
    <div className="flex flex-col transition-all h-72">
      <div className={`flex mt-5 mb-0 mx-10`}>
        <p className={`mr-[50px] text-lg font-medium cursor-pointer ${targetDisplay.skills ? 'border-b-2 border-[#ff0004] font-bold text-xl' : 'border-0 text-lg font-medium'} transition-all`}
          onClick={() => setTargetDisplay({ skills: true, education: false, experience: false })}
        >Skills</p>
        <p className={`mr-[50px] cursor-pointer ${targetDisplay.experience ? 'border-b-2 border-[#ff0004] font-bold text-xl' : 'border-0 text-lg font-medium'} transition-all`}
          onClick={() => setTargetDisplay({ skills: false, education: false, experience: true })}
        >Experience</p>
        <p className={`mr-[50px] cursor-pointer ${targetDisplay.education ? 'border-b-2 border-[#ff0004] font-bold text-xl' : 'text-lg font-medium border-0'} transition-all`}
          onClick={() => setTargetDisplay({ skills: false, education: true, experience: false })}
        >Education</p>
      </div>
      <div className={targetDisplay.skills ? 'block' : 'hidden'} id="skills">
        <ul className="pt-3 flex flex-col gap-y-2">
          <li className={listStyle.list}>
            <p className={listStyle.span}>Frontend Development <span></span></p>
            HTML5 & CSS, React
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>Backend Development <span></span></p>
            <div className="flex items-center gap-x-4">
              <p className={'flex items-center gsp-x-1'}>Node <span className="cursor-default text-gray-400 bg-gray-800 px-1 rounded-sm">Express.js, Nest.js</span></p>
              <p className={'flex items-center gsp-x-1'}>Python <span className="cursor-default text-gray-400 bg-gray-800 px-1 rounded-sm">Flask</span></p>
            </div>
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>Full Stack Engineer <span></span></p>
            MERN stack, Flask & React
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>Database</p>
            MySQL, PostgreSQL and MongoDB
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>Devops</p>
            Dockers, Nginx
          </li>
        </ul>
      </div>
      <div className={targetDisplay.experience ? 'block' : 'hidden'} id="experience">
        <ul className="pt-3 flex flex-col gap-y-2">
          <li className={listStyle.list}>
            <p className={listStyle.span}>2023</p>
            <p className="flex flex-col">
              <span>
                Frontend Developer at Resavation.ng {'<RealEstate Startup>'}
              </span>
              <span>
                Backend Engineer at United States of Africa (USAF) {'<NGO>'}
              </span>
            </p>
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>2022 - Present</p>
            FreeLance
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>2021 - Present</p>
            Web Development
          </li>
        </ul>
      </div>
      <div className={targetDisplay.education ? 'block' : 'hidden'} id="education">
        <ul className="pt-3 flex flex-col gap-y-2">
          <li className={listStyle.list}>
            <p className={listStyle.span}>2023</p>
            ALX SE {'<Full Stack Engineering>'}
          </li>
          <li className={listStyle.list}>
            <p className={listStyle.span}>2019</p>
            Federal University of Agriculture, Abeokuta
          </li>
        </ul>
      </div>
    </div>
  )
}