import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../pages/Landing'
import { Details, websiteInfo } from '../assets/assets'

const Footer = () => {
  return (
    <div className='prata-regular text-left mt-10'>
        <hr className='w-full'/>
        <div className='flex flex-col py-3  justify-between sm:flex-row'>
            <div className='text-xl font-bold'>{Details.whosePortfolio}</div>
            <div className='flex flex-col gap-10 text-sm text-gray-600 justify-between  sm:flex-row'>
                <div>{Details.contact}<br/><Link to='/'>{websiteInfo.website}</Link><br/></div>
                <div>{Details.street}<br/>{Details.town}<br/>{Details.country}</div>
            </div>
        </div>
    </div>
  )
}

export default Footer