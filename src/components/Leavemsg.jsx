import React from 'react';
import Button from './Button';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LeaveMsg(){
    const [details, setDetails] = React.useState({email:'', name:'',data:''});
    
   
    const sendMessage = async() => {
        
        if(!details.name || !details.email || !details.data){
            toast.error('Please fill in all fields');
            return;
        }
        axios.post('http://localhost:3000/api/sendmessageapi',
            details

    ).then((response) => {
            toast.success(response.data);
        }).catch((error) => {
            console.log(error);
            toast.error('An error occured');});

    setDetails({name:'',email:'',data:''});
    }


    return(
        <div className='flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto mt-10'>
           
            <h1 className='text-2xl font-semibold text-left'>Leave Me A Message</h1>
            <div className='flex flex-col gap-4 sm:flex-row'>
                <input onChange={(e)=>{setDetails({...details,name:e.target.value})}} value={details.name} placeholder="Name" type='text' className='w-full border border-gray-300 p-2'/>
                <input onChange={(e)=>{setDetails({...details,email:e.target.value})}} value={details.email} placeholder="Email" type='text' className='w-full border border-gray-300 p-2'/>
            </div>
            <textarea onChange={(e)=>{setDetails({...details,data:e.target.value})}} value={details.data} rows={7} placeholder="Message" className='border border-gray-300 p-2'/>
            <Button perform={sendMessage} text={'Send Message'}/>
                
        </div>
    );
}

export default LeaveMsg;