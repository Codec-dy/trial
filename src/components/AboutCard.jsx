import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import {motion, useInView} from 'framer-motion'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import LettersPullUp from './LettersPullUp'
const AboutCard = ({colType,title,text,img}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={`w-full flex flex-col ${colType} items-start gap-2 max-w-[720px] justify-center m-auto`}>
        <motion.div 
       ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className='w-full sm:w-1/2  '>
            <LazyLoadImage src={img?img:assets.mbali_pic} effect='blur' alt="" className='max-h-[300px] sm:max-h-[400px] w-full'/>
        </motion.div>
        <motion.div
        
        className='flex flex-col w-full sm:w-1/2'>
            <div className='text-gray-700 text-2xl font-semibold'>{title && <LettersPullUp text={title} />}</div>
            <div className='text-gray-500 text-sm'>{text}</div>
        </motion.div>
    </div>
  )
}

export default AboutCard