import React, { useContext, useEffect, useState } from 'react';
import { projects } from '../assets/assets';
import ProPageTop from '../components/ProPageTop';
import ViewGallery from '../components/ViewGallery';
import { useParams } from 'react-router-dom';
import { PortfolioContext } from '../context/portfolioContext';

const GraphicDesign = () => {
    const [project, setProject] = useState(null)
    const {displayImg,setDisplayImg} = useContext(PortfolioContext)
    const {id} = useParams()
    useEffect(() => {
      console.log(id);
      const proj = projects.find(proj => proj.id === parseInt(id));
      setProject(proj);
      console.log(proj);
    }, [id]);
    

    return project?(
    <div className='min-h-[70vh]'>
      <ProPageTop project={project}/>
      <div className="mt-5"> <ViewGallery type={'graphicDesign'}/></div>
      <div className={`${displayImg?'block':'hidden'} right-0 flex fixed z-10 top-0 bg-black  w-[100%] h-[100vh] `} onClick={()=>setDisplayImg(false)}>
        <img src={displayImg} className=' m-auto sm:max-h-[400px]'/>
      </div>
    </div>
  ):<div>Loading...</div>;
};

export default GraphicDesign;