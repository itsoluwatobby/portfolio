import React from 'react'
import { FaCode } from 'react-icons/fa'
import { MdHomeRepairService, MdOutlineDeveloperMode } from 'react-icons/md'

type Props = {}

export default function MyServices({}: Props) {
  return (
    <div id="services" className="py-[30px]">
      <div className="p-2.5">
        <h1 className="midscreen:text-[60px] mobile:leading-8">My Services</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-[50px]">

          <div className="bg-[#262626] p-10 text-[13px] font-[300] rounded-[10px] hover:bg-[#ff0004] hover:-translate-y-2.5 transition-all">
            <FaCode className='text-[50px] mb-[30px]' />
            <h2 className="text-[30px] font-medium mb-[15px] leading-8">Frontend Development</h2>
            {/* <p>Cloned a few websites like Disney and Tesla</p> */}
            <a href="https://relaxed-churros-d701e7.netlify.app" target="_blank" className="text-white no-underline font-xs mt-20 inline-block transition-all">Learn more</a>
          </div>

          <div className='bg-[#262626] p-10 text-[13px] font-[300] rounded-[10px] hover:bg-[#ff0004] hover:-translate-y-2.5 transition-all'>
            <MdOutlineDeveloperMode className='text-[50px] mb-[30px]' />
            <h2 className='text-[30px] font-medium mb-[15px] leading-8'>Full Stack Development</h2>
            {/* <p>Developed an E-commerce website with ReactJs, Node using express and Mongo as the database.</p> */}
            <a href="http://github.com/itsoluwatobby/Chat-Application" target="_blank" className="text-white no-underline font-xs mt-20 inline-block transition-all">Learn more</a>
          </div>

          <div className='bg-[#262626] p-10 text-[13px] font-[300] rounded-[10px] hover:bg-[#ff0004] hover:-translate-y-2.5 transition-all'>
            <MdHomeRepairService className='text-[50px] mb-[30px]' />
            <h2 className='text-[30px] font-medium mb-[15px] leading-8'>Backend Development</h2>
            {/* <p>Built REST APIs with Node using express, java using springboot and mongoDB or postgresql as database storage</p> */}
            <a href="http://github.com/itsoluwatobby/twitter-backend-clone" target="_blank" className="text-white no-underline font-xs mt-20 inline-block transition-all">Learn more</a>
          </div>

        </div>
      </div>
    </div>
  )
}
