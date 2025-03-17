import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PortfolioContext } from '../context/PortfolioContext'
import ProPageTop from '../components/ProPageTop'
import Button from '../components/Button'
import { getData } from '../components/Utils/crud'
import ViewGallery from '../components/ViewGallery'

const ProjectPage = () => {
  const [project, setProject] = useState(null)
  const [designs, setDesigns] = useState(null)
  const navigate = useNavigate()
  const { projectId,chunkProjects,api} = useContext(PortfolioContext);
  const {displayImg,setDisplayImg} = useContext(PortfolioContext)
  const [chunks,setChunks] = useState()
  
  const {id} = useParams()

  useEffect(() => {
    getData(`${api}?model=project&id=${id}`,setProject)
    
  }, [id]);
  
  useEffect( () => {
    if(project && project.category=='Designs'){
      getData(`${api}?model=design&getAll=true`,setDesigns)
    }
  }, [project]);

  useEffect( () => {
    if(designs){
      setChunks(chunkProjects(designs, Math.ceil(designs.length/3)))
    }
  }, [designs]);


  return project?(

    <div>
      <ProPageTop project={project}/>
       {project.category!='Designs' && (<div className='relative sm:max-w-[70%] w-full mx-auto mt-10'>
  {project?project.vid:'' && <video className='w-full h-[300px] object-cover' src={project?project.vid:''} controls></video>}
  {project && project.category!="Designs" && !project.vid?<img className='w-full h-[300px] object-cover blur-xs' src={project.img}/>:''}
 {project && project.link? <Link target='_blank' to={project && project.link?project.link:''} ><div className='absolute bottom-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'><Button text={"Visit Project"} /></div></Link>:""}
</div>)}
{chunks && (<div><div className="mt-5"> <ViewGallery projectChunks={chunks} type={'graphicDesign'}/></div>
      <div className={`${displayImg?'block':'hidden'} right-0 flex fixed z-10 top-0 bg-black  w-[100%] h-[100vh] `} onClick={()=>setDisplayImg(false)}>
        <img src={displayImg} className=' m-auto sm:max-h-[400px]'/>
      </div></div>)}
    </div>
  ):"<div>Loading...</div>"
}

export default ProjectPage