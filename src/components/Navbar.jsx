import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import {assets, Details} from '../assets/assets'

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const [active, setActive] = useState("Home");
  return (
    <div className='relative w-full flex justify-between items-center px-4 mb-10'>
        {/* ----------logo section---------- */}
        <div className='flex items-center gap-2'>
            {/* <img src={assets.logo} alt='logo' className='text-grey-100' /> */}
            <p className=' text-xl font-bold'>{Details.whosePortfolio}</p>
        </div>

        {/* ------------links section--------- */}
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='menu' className='sm:hidden w-10'/>
        <div className={`z-10 bg-black text-white top-0 h-[100vh] absolute sm:relative right-0 w-0 sm:bg-inherit sm:text-gray-500 sm:h-auto sm:w-fit overflow-hidden flex flex-col sm:flex-row prata-regular items-center gap-5  ${visible? "w-full":"w-0"} sm:gap-10`}>
            <div onClick={()=>setVisible(false)} className={`w-full flex cursor-pointer items-center gap-4 p-3 ${visible? "block":"hidden"}`}>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=''/>
                <p>Back</p> 
            </div>
            <Link onClick={()=>{setVisible(false);setActive("Home")}} to='' className={`${active==="Home"?"border-b":""}`}>Home</Link>
            <Link onClick={()=>{setVisible(false);setActive("About")}} to='/about' className={`${active==="About"?"border-b":""}`}>About</Link>
            <Link onClick={()=>{setVisible(false);setActive("Contact")}} to='/contact' className={`${active==="Contact"?"border-b":""}`}>Contact</Link>
            <Link onClick={()=>{setVisible(false);setActive("Projects")}} to='/projects' className={`${active==="Projects"?"border-b":""}`}>Projects</Link>
            <Link onClick={()=>{setVisible(false);setActive("Certificates")}} to='/certificates' className={`${active==="Certificates"?"border-b":""}`}>Certificates</Link>
        </div>
    </div>
  )
}

export default Navbar