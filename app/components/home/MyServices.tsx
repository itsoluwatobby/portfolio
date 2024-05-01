import React from 'react'
import { IconType } from 'react-icons/lib';
import { FaCode } from 'react-icons/fa';
import { MdHomeRepairService, MdOutlineDeveloperMode } from 'react-icons/md'

type Props = {
  theme: Theme;
}

export default function MyServices({ theme }: Props) {

  const Services = [
    {
      title: 'Frontend Development',
      Icon: FaCode,
      link: 'https://getlinked-contest-oluwatobi.vercel.app'
    },
    {
      title: 'FullStack Development',
      Icon: MdOutlineDeveloperMode,
      link: 'https://revolving.vercel.app'
    },
    {
      title: 'Backend Development',
      Icon: MdHomeRepairService,
      link: 'https://github.com/itsoluwatobby/Chat-Application-Backend'
    }
  ];
  return (
    <div id="services" className="py-[30px]">
      <div className="p-2.5">
        <h1 className="text-[60px] mobile:leading-[55px]">My Services</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-[50px] text-white'>
          {
            Services.map(service => (
              <ServiceCards key={service.title}
                title={service.title} Icon={service.Icon} link={service.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

type ServiceCardProps = {
  title: string;
  Icon: IconType;
  link: string;
}

const ServiceCards = ({ title, Icon, link }: ServiceCardProps) => {

  return (
    <div className={`bg-[#262626] p-10 text-[13px] font-[300] rounded-[10px] hover:bg-[#ff0004] hover:-translate-y-2.5 transition-all hover:scale-[1.1] hover:z-10 hover:mx-auto`}>
      <Icon className='text-[50px] mb-[30px]' />
      <h2 className="text-[30px] font-medium mb-[15px] leading-8">{title}</h2>
      {/* <p>Cloned a few websites like Disney and Tesla</p> */}
      <a href={link} className="text-white no-underline font-xs mt-20 inline-block transition-all">Learn more</a>
    </div>
  );
}