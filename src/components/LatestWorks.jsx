import React, { useContext, useEffect, useState } from 'react'
import MiniProjections from './miniProjections'
import ProjectCard from './ProjectCard';
import { PortfolioContext } from '../context/portfolioContext';
import { getData } from './Utils/crud';


const LatestWorks = () => {


const {projectId, displayProject,setDisplayProject} = useContext(PortfolioContext);
const [proj, setProj] = useState(null);
 const {refresh,api } = useContext(PortfolioContext);
 const [projects, setProjects] = useState([]);
  useEffect(() => {
        getData(`${api}?model=project&getAll=true`,setProjects)
    },[refresh]);

  return (
    <div className='my-8 text-left'>
        <p>My Latest Works</p>     
          <div className='min-w-[70%] grid grid-cols-1 sm:grid-cols-3 sm:flex-row gap-4 overflow-hidden'>
          {projects.slice(0,3).map((project,index)=>(<div key={index}  onClick={()=>{setProj(project)}} ><MiniProjections  project={project}/></div>))}
          </div>
        
        <div onClick={()=>setDisplayProject(false)}  style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)'}} className={`text-gray-50 w-full flex justify-center h-[100vh] z-10 top-0 left-[50%] transform translate-x-[-50%] ${displayProject?'fixed':'hidden'}`}>
          {proj?<ProjectCard img={proj.img} title={proj.title} link={`${api}/project/${proj._id}`} description={proj.description} id={proj._id}/>:''}
        </div>
    </div>
  )
}

export default LatestWorks