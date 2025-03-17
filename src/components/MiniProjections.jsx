import React, { useContext, useState } from 'react'
import { assets,projects } from '../assets/assets'
import { PortfolioContext } from '../context/portfolioContext';
import ProjectCard from './ProjectCard';


const MiniProjections = ({project}) => {
    const { setProjectId,setDisplayProject } = useContext(PortfolioContext);
  return project?(
    <div onClick={()=>{setProjectId(project.id); setDisplayProject(true)}} className='my-8 text-left'>
        <img src={project.img} className='w-full h-[200px]' alt="" />
        <p className='text-sm font-semibold text-gray-900'>{project.title}</p>
        <p className='text-sm font-semibold text-gray-700'>{project.category}</p>
        <p className='text-sm font-semibold text-gray-500'>{project.techUsed}</p>

        
    </div>
  ):''
}

export default MiniProjections

