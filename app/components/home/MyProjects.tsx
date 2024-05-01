"use client"

import { useState } from 'react';
import SourceData from '../../../utils/projetcts.json';
import { Project } from './Project';
// import useObserver from '@/hooks/useObserver';

type Props = {
  theme: Theme;
}

export const MyProjects = ({ theme }: Props) => {
  const [viewMore, setViewMore] = useState<Toggle>('CLOSE');
  // const { observerRef, isIntersecting } = useObserver({ threshold: 0.2, screenPosition: '0px' });

  return (
    <div id="projects" className="py-6 flex flex-col gap-y-6">
      <div className="p-2.5">
        <h1 className="text-[60px]">My Work</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-[50px]">
          {
            SourceData.projects?.slice(0, viewMore === 'CLOSE' ? 4 : 10).map(project => (
              <Project key={project.id}
                name={project.name} link={project.link}
                description={project.description} preview={project.preview}
              />
            ))
          }
        </div>
      </div>
      <button
        onClick={() => setViewMore(prev => prev === 'CLOSE' ? 'OPEN' : 'CLOSE')}
        className={`self-center block margin w-fit border border-[#ff004f] py-3.5 px-[50px] rounded-md no-underline ${theme === 'light' ? 'text-[#000000] font-medium' : 'text-white'} transition-all hover:bg-[#ff004f]`}>{viewMore === 'CLOSE' ? 'View More' : 'View Less'}</button>
    </div>
  )
}
