import React, { useContext, useEffect, useState } from 'react'
import Admindashboard from './Dashboard'
import { PortfolioContext } from '../../context/portfolioContext';
import { getData } from '../../components/Utils/crud';
import AdminEditDelete from '../../components/admin/AdminEditDelete';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CrudComponent from '../../components/admin/CrudComponent';
import AddComponent from '../../components/admin/AddComponent';

const Skills = () => {
  const [skills,setSkills] = useState([]);
  const {refresh,setEditable,api} = useContext(PortfolioContext);
  const [addSkill, setAddSkill] = useState(false);  

  const edit = (id) => {
    const exp = skills.find((skill) => skill._id === id);
    setEditable(exp);
    console.log(exp)
  }

  useEffect(()=>{
    getData(`${api}?model=skills&getAll=true`,setSkills)
  },[refresh])
    
  return (
    <Admindashboard>
       <div className='flex relative '>
        <div  className={`${addSkill?'blur-xs':''} relative flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto`}>
         <div className='flex gap-5'><h1 className='text-2xl font-semibold text-left'>Skills</h1><div onClick={()=>setAddSkill(true)}><Button text={"Add a Skill"}/></div></div>  
        {skills && skills.map((skill) => (
         <div key={skill._id} >
         <CrudComponent id={skill._id} project={skill}/>
          <AdminEditDelete id={skill._id} edit={edit}  model={'model=skills'}/> 
          </div>
        ))}
        </div>
            <div className={`${addSkill?'absolute block':'hidden'} w-[90%] max-w-[600px] absolute left-[50%] translate-x-[-50%] z-40 bg-gray-200 p-5`}><Card><AddComponent type={"skills"} title={"Add Skill"} cancel={setAddSkill}/></Card></div>
        </div>
    </Admindashboard>
  )
}

export default Skills