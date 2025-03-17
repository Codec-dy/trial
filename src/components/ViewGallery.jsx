import React, { useContext, useState } from 'react'
import ProjectCard from './ProjectCard';
import { PortfolioContext } from '../context/portfolioContext';
import CertificateCard from './CertificateCard';

const ViewGallery = ({projectChunks,type}) => {
  
    const [middle, setMiddle] = useState(false);
  const{setDisplayImg} = useContext(PortfolioContext);
  let chunks = projectChunks
  return (
    <div className='flex flex-wrap gap-1 max-w-[1200px] mx-auto'>
    {chunks.map((chunk, index) => {
      const isFirstMiddle = index === 1 && !middle;
      if (isFirstMiddle) {
        setMiddle(true);  
      }
    return (
      <div key={index} className='flex flex-[50%] sm:flex-[30%] flex-col justify-start h-fit  gap-2'>
        {chunk.map((project,i) => {
        if(type==='project'){
          
            return <ProjectCard key={i} link={project.link?project.link:''} index={middle && i===0?index:''} id={project._id} title={project.title} description={project.description} img={project.img}/>
        }else if(type==='cert'){

         return (<CertificateCard key={i} txt={'Completed a Udemy Course on Portfolios'} id={project.id} link={project.link} title={project.title} img={project.img} date={project.date} institute={project.institution} />)
        }
        else{
            return (<img key={i} src={project.img} onClick={()=>setDisplayImg(project.img)} className='max-w-full'  />)
        }
        }) }
        
      </div>)
    }       )}
      
  </div>
  )
}

export default ViewGallery