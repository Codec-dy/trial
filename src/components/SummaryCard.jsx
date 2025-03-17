import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'

const SummaryCard = ({Title,Company,Summary,direction}) => {
   const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : direction }}
      exit={{ opacity: 0, x: direction }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    className='w-full border p-4 m-4 text-gray-300'>
        <h1 className='text-3xl text-gray-400'>{Title}</h1>
        <h4 className='text-xl text-gray-400'>{Company}</h4>
        <p>{Summary}</p>
    </motion.div>
  )
}

export default SummaryCard