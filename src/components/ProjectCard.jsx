import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { PortfolioContext } from '../context/portfolioContext';

const ProjectCard = ({img,title,description,id,index}) => {
  const { setProjectId } = useContext(PortfolioContext);
  return (
    <Link to={`/project/${id}`} onClick={()=>setProjectId(id)} className="h-fit justify-items-center">
      <div className={`relative text-left  ${index===1?'lg:h-[500px]':'lg:h-[450px]'} py-4 w-[320px] border-b border-t-0 transition-all duration-[200ms] before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-[500ms] hover:before:scale-x-100 `}>
        <div className='overflow-hidden'><img src={img} alt={title} className='w-full object-cover rounded-lg hover:scale-120 transition-all max-h-[200px] duration-[500ms]'/></div>
        <h3 className=' font-semibold my-4'>{title}</h3>
        <p className={ `text-gray-500 text-xs overflow-hidden ${index=== 1 ?'lg:line-clamp-11':'lg:line-clamp-7'} text-sm text-wrap`}>{description}</p>
        <div className='mt-10 lg:absolute bottom-2'><Button text='View Project'/></div>
    </div></Link>
  )
}

export default ProjectCard