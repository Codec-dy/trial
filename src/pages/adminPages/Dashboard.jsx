import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'

const Admindashboard = ({children}) => {
  return (
    <div className='flex max-h-[100vh]'>
        <AdminSideBar/>
        <div className="flex-grow p-4 overflow-y-auto">
            {children}
        </div>
    </div>
  )
}

export default Admindashboard