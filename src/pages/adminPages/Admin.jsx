import React, { use, useContext, useState } from 'react'
import Button from '../../components/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PortfolioContext } from '../../context/portfolioContext';
import {toast} from 'react-toastify';
const Admin = () => {
    const [loginDetails, setLoginDetails] = useState({});
    const navigate = useNavigate();
    const {setIsAuthenticated,api} = useContext(PortfolioContext);
    const login = async() => {
        axios.post("https://myportfolio-fs.onrender.com"+'/admin',
            loginDetails
        ).then((response) => {
            if(response.data===true){
                toast("Login Successful");
                setIsAuthenticated(true);
                navigate('/admin/dashboard');
            } else {
                toast('Invalid Credentials');
                console.log(response.data)
            }
        }).catch((error) => {
            console.log(error); 
    });
}

  return (
    <div className='p-4'>
        <div className='flex flex-col gap-4 p-4 w-full sm:max-w-2xl mx-auto mt-10'>
        <h1 className='text-2xl font-semibold text-left'>Admin Login</h1>
        <input onChange={(e)=>setLoginDetails({...loginDetails, email:e.target.value})} placeholder="Username" type='text' className='w-full border border-gray-300 p-2'/>
        <input onChange={(e)=>setLoginDetails({...loginDetails, password: e.target.value})} placeholder="Password" type='password' className='w-full border border-gray-300 p-2'/>
        <Button text='Login' perform={login}/>
        </div>
    </div>
  )
}

export default Admin