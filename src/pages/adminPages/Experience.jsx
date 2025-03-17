import React, { useContext, useEffect, useState } from 'react'
import Admindashboard from './Dashboard'
import Button from '../../components/Button'
import AdminEditDelete from '../../components/admin/AdminEditDelete'
import { PortfolioContext } from '../../context/portfolioContext'
import Card from '../../components/Card'
import CrudComponent from '../../components/admin/CrudComponent'
import { getData } from '../../components/Utils/crud'
import AddComponent from '../../components/admin/AddComponent'

const Experience = () => {

  const [experience, setExperience] = useState([]);
  const {setEditable,refresh,api} = useContext(PortfolioContext);
  const [addExp, setAddExp] = useState(false);
  
  

  useEffect(() => {
      getData(`${api}?model=experience&getAll=true`,setExperience)
  },[refresh]);
  
  

  const edit = (id) => {
    const exp = experience.find((exp) => exp._id === id);
    setEditable(exp);
  }


  return (
    <Admindashboard>
        <div className='flex relative '>
        <div  className={`${addExp?'blur-xs':''} relative flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto`}>
          <div className='flex gap-5'><h1 className='text-2xl font-semibold text-left'>Experience</h1><div onClick={()=>setAddExp(true)}><Button text={"Add an Experience"}/></div></div>  
          {experience && experience.map((exp) => (
            <div key={exp._id} className='flex flex-col gap-4 p-4 '>
              <CrudComponent id={exp._id}  project={exp}/>
              <AdminEditDelete id={exp._id} edit={edit} api={'http://localhost:3000/api/collection'} model = {'model=experience'} />
              </div>
          ))}
        </div>
        <div className={`${addExp?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddComponent type={"experience"} title={"Add Experience"}  cancel={setAddExp}/></Card></div>
        </div>
    </Admindashboard>
  )
}

export default Experience