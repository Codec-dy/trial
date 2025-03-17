import React from 'react'
import Button from '../components/Button'
import {assets, websiteInfo} from '../assets/assets'
import { Link } from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const FrontHomepage = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-start items-center m-auto justify-center gap-4'>
        <div className='max-h-[500px] overflow-hidden'>
            <LazyLoadImage src={assets.foreground} effect='blur' alt="umage" className='h-[100%] max-w-[400px]'/>
        </div>
        <div className='flex flex-col gap-4 justify-between h-[100%] '>
            <p className='text-left prata-regular text-gray-500 text-sm max-w-[400px] leading-[2]'>
           {websiteInfo.frontPage}

              </p>
            <Link to='/projects'><Button text='Explore' /></Link>
        </div>
    </div>
  )
}

export default FrontHomepage