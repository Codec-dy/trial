import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioContext } from '../../context/portfolioContext';

const AdminSideBar = () => {
  const {setIsAuthenticated} = useContext(PortfolioContext);
  return (
    <div className='flex flex-col gap-4 bg-gray-800 text-white p-4 h-screen w-1/4'>
        <h1 className='text-2xl font-semibold text-left'>Admin Dashboard</h1>
        <div className='flex flex-col gap-4'>
            <Link to={'/admin/dashboard/projects'} className='text-lg font-semibold'>Projects</Link>
            <Link to={'/admin/dashboard/certificates'} className='text-lg font-semibold'>Certificates</Link>
            <Link to={'/admin/dashboard/experience'} className='text-lg font-semibold'>Experience</Link>
            <Link to={'/admin/dashboard/skills'} className='text-lg font-semibold'>Skills</Link>
            <Link to={'/admin/dashboard/websettings'} className='text-lg font-semibold'>Website Settings</Link>
            <div onClick={()=>setIsAuthenticated(false)}><Link className='text-lg font-semibold'>Logout</Link></div>
        </div>

    </div>
  )
}

export default AdminSideBar