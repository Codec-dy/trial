import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context/portfolioContext';
import { handleFileChange } from '../Utils/crud';

const CrudComponent = ({project,id}) => {
     const {editable,setEditable} = useContext(PortfolioContext);
    const [preview,setPreview] = useState('')
     
     if(editable && editable._id==project._id){
        return (
            <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>
                {Object.keys(project).slice(1,-1).map((key,i)=>{
                return(<div key={i}> {project[key]!==""? <input key={i} onChange={async(e)=>setEditable({...editable,[key]: key=="img"?await handleFileChange(e.target.files[0],setPreview):e.target.value})} type={key=='img'?'file':'text'} value={key=="img"?'':editable[key]} />:''}
                {preview && key=="img" && <div><img className='h-[40px]' src={preview}/></div>}
                {key=="img" && <div><img className='h-[40px]' src={project[key]}/></div>}</div>)

                })}
            </div>
        )
    }else{
        return (
            <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>
                {Object.keys(project).slice(1,-1).map((key,i)=>{

                return (<div key={i}>{project[key]!==""? <input key={i} className='flex-1' type={key=='img'?'file':'text'} value={key=="img"?'':project[key]} disabled/>:''}
                {key=="img" && <div><img className='h-[40px]' src={project[key]}/></div>} </div>)
            })}

            </div>
        )
        }
}

export default CrudComponent