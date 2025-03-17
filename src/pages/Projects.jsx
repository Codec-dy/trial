import React, { useContext, useEffect, useState } from 'react'
// import { projects, } from '../assets/assets'
import ViewGallery from '../components/ViewGallery';
import { PortfolioContext } from '../context/portfolioContext';
import { getData } from '../components/Utils/crud';

const Projects = () => {
  const { chunkProjects,refresh,api } = useContext(PortfolioContext);
 const [projects, setProjects] = useState([]);
  useEffect(() => {
        getData(`${api}?model=project&getAll=true`,setProjects)
    },[refresh]);

  const projectChunks = chunkProjects(projects, Math.ceil(projects.length/3));

  return (
    <div  className='min-h-[70vh]'>
         <div className='flex flex-col items-center justify-center sm:max-w-[500px] gap-4 mx-auto'>
            <p className='text-gray-700 text-3xl'>Welcome to My Projects</p>
            <p className='text-gray-500 text-sm'>Here each piece tells a unique story. Experience the blend of creativity and passion through a visual journey that captivates minds and hearts.</p>
        </div>
       <ViewGallery projectChunks={projectChunks} type={'project'}/>
    </div>
  )
}


export default Projects