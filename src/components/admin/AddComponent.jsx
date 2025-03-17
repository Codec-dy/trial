import React, { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../../context/portfolioContext';
import Button from '../Button';
import { convertBase64, handleAdd, handleFileChange } from '../Utils/crud';

const AddComponent = ({type,title,cancel}) => {
    
    function addType(type){
        switch (type) {
            case "certificates":
                return {"date":'',title:'',"institution":'',"description":"","img":""}
            case "project":
                return {"date":'',"techUsed":'',title:'', description:'',category:'',link:'',img:''}
            case "design":
                  return {"date":'',title:'', description:'',"techUsed":'',img:''}
            case "skills":
                return {description:''}
            case "experience":
                return {title:'', company: '', location: '', date: '', summary: ''}
        }
    }

    const [add,setAdd] = useState(addType(type))
    const {setRefresh,refresh,api} = useContext(PortfolioContext);
    const [preview,setPreview] = useState('')
    
     
  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>

        <h1>{title}</h1>
        {Object.keys(add).slice().map((key,i)=>(
                <input key={i} className='p-3 rounded-sm border border-gray-400 flex-1' placeholder={key} onChange={async(e)=>{setAdd({...add,[key]: key=="img"?await handleFileChange(e.target.files[0],setPreview):e.target.value});}}  type={key=='img'?"file":`text`}  value={key=='img'?'':add[key]}/>
                ))}
         {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded" />
        </div>
      )}
         <div onClick={()=>{handleAdd(`${api}/?model=${type}`,add),cancel(false),setRefresh('add')}}><Button text={'Add to Collection'}/></div> <span onClick={()=>{cancel(false)}}><Button text={"Cancel"}/> </span>
    </div>
  )
}

export default AddComponent