import React, { useContext, useEffect, useState } from 'react'
import Admindashboard from './Dashboard'
import Card from '../../components/Card'
import { PortfolioContext } from '../../context/PortfolioContext'
import Button from '../../components/Button'
import { getData } from '../../components/Utils/crud'
import AdminEditDelete from '../../components/admin/AdminEditDelete'
import CrudComponent from '../../components/admin/CrudComponent'
import AddComponent from '../../components/admin/AddComponent'

const AdminProjects = () => {
  
  const [projects, setProjects] = useState([]);
  const {setEditable,refresh,api} = useContext(PortfolioContext);
  const [addProject, setAddProject] = useState(false);
  const [addDesign, setAddDesign] = useState(false);
  
  

  useEffect(() => {
      getData(`${api}?model=project&getAll=true`,setProjects)
  },[refresh]);
  
  

  const edit = (id) => {
    const proj = projects.find((project) => project._id === id);
    setEditable(proj);
  }


  return (
    <Admindashboard>
        <div className='flex relative '>
                <div  className={`${addProject?'blur-xs':''} relative flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto`}>
                  <div className='flex gap-5'><h1 className='text-2xl font-semibold text-left'>Projects</h1><div onClick={()=>setAddProject(true)}><Button text={"Add a Project"}/></div><div onClick={()=>setAddDesign(true)}><Button text={"Add a Design"}/></div></div>  
                 {projects && projects.map((project) => (
                             <div key={project._id} className='flex flex-col gap-4 p-4 '>
                               <CrudComponent project={project}/>
                               <AdminEditDelete id={project._id} edit={edit} api={'http://localhost:3000/api/collection'} model={'model=project'} />
                               </div>
                           ))}
                  </div>
            <div className={`${addProject?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddComponent type={"project"} title={"Add project"}  cancel={setAddProject}/></Card></div>
            <div className={`${addDesign?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddComponent type={"design"} title={"Add Graphic Design"}  cancel={setAddDesign}/></Card></div>
        </div>
    </Admindashboard>
  )
}

export default AdminProjects