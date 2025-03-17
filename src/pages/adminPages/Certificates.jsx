import React, { useContext, useEffect, useState } from 'react'
import Admindashboard from './Dashboard'
import { PortfolioContext } from '../../context/portfolioContext';
import { getData } from '../../components/Utils/crud';
import AdminEditDelete from '../../components/admin/AdminEditDelete';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CrudComponent from '../../components/admin/CrudComponent';
import AddComponent from '../../components/admin/AddComponent';

const Certificates = () => {
  const [cert,setCert] = useState([]);
    const {refresh,setEditable,api} = useContext(PortfolioContext);
    const [addCert, setAddCert] = useState(false);  
  
    const edit = (id) => {
      const exp = cert.find((cer) => cer._id === id);
      setEditable(exp);
      console.log(exp)
    }
  
    useEffect(()=>{
      getData(`${api}?model=certificates&getAll=true`,setCert)
    },[refresh])
      
  return (
    <Admindashboard>
        <div className='flex relative '>
        <div  className={`${addCert?'blur-xs':''} relative flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto`}>
         <div className='flex gap-5'><h1 className='text-2xl font-semibold text-left'>Certificates</h1><div onClick={()=>setAddCert(true)}><Button text={"Add a Certificate"}/></div></div>  
        {cert && cert.map((skill) => (
         <div key={skill._id} >
         <CrudComponent id={skill._id} project={skill}/>
          <AdminEditDelete id={skill._id} edit={edit}  model={'model=certificates'}/> 
          </div>
        ))}
        </div>
            {/* <div className={`${addCert?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddSkills  cancel={setAddCert}/></Card></div> */}
            <div className={`${addCert?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddComponent type={"certificates"} title="Add certificate" cancel={setAddCert}/></Card></div>
        </div>
    </Admindashboard>
  )
}

export default Certificates