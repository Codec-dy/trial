import React, { useContext, useState } from 'react'
import Button from '../Button'
import { PortfolioContext } from '../../context/portfolioContext';
import { handleDelete, handleEdit } from '../Utils/crud';


const AdminEditDelete = ({id,edit,model}) => {
  const [isEditing, setIsEditing] = useState(false);
  const {editable,setEditable,setRefresh,api} = useContext(PortfolioContext);
  
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
        <div className={isEditing==true?'block':'hidden'} onClick={()=>{handleEdit(api,editable,model),setEditable(false),setIsEditing(false),setRefresh('edit')}}><Button  text={"Done"}/></div>
        <div className={isEditing==true?'hidden':'block'} onClick={()=>{edit(id),setIsEditing(true)}}><Button  text={"Edit"}/></div>
        <div onClick={()=>{handleDelete(api,id,model),setRefresh('delete')}}><Button  text={"Delete"}/></div>
    </div>
  )
}

export default AdminEditDelete