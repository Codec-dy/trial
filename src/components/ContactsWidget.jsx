import React from 'react'
import { assets } from '../assets/assets'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ContactsWidget = ({title,text,img}) => {
  return (
    <div className='flex flex-col items-center self-center justify-start text-white text-wrap px-4 gap-1 h-fit'>
        <LazyLoadImage className='w-[30px]' src={img} alt="" effect='blur'/>
        <p className='text-xl sm:text-2xl'>{title}</p>
        <p className='text-sm sm:text-xl'>{text}</p>
    </div>
  )
}

export default ContactsWidget