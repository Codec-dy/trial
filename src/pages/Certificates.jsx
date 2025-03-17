import React, { useContext, useEffect, useState } from 'react'
import ViewGallery from '../components/ViewGallery'
import { PortfolioContext } from '../context/PortfolioContext';
import { getData } from '../components/Utils/crud';


const Certificates = () => {
    const {chunkProjects,api} = useContext(PortfolioContext);
    const [chunks,setChunks] = useState()
    const [certs, setCerts] = useState()
  
    useEffect(()=>{
      getData(`${api}?model=certificates&getAll=true`,setCerts)
    },[])

    useEffect( () => {
      // console.log(certs)
        if(certs){
          setChunks(chunkProjects(certs, Math.ceil(certs.length/3)))
        }
      }, [certs]);
      return chunks?(
    <div>
      <ViewGallery projectChunks={chunks} type="cert"/>
    
    </div>
  ):""
}

export default Certificates