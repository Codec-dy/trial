import React from 'react'

const ProPageTop = ({project}) => {
  return (
    <div className='flex flex-col sm:flex-row items-start justify-between gap-4 border-b p-3'>
    <div className='flex-1 flex flex-col text-left gap-2'>
            <p className='text-gray-800 text-2xl'>{project?project.title:''}</p>
            <p className='text-sm text-gray-600'>Project Type<br/><span className='text-gray-400 text-xs'>{project?project.category:''}</span></p>
            <p className='text-sm text-gray-600'>Technologies Utilized<br/><span className='text-gray-400 text-xs'>{project?project.techUsed:''}</span></p>
            <p className='text-sm text-gray-600'>Date<br/><span className='text-gray-400 text-xs'>April 2023</span></p>
    </div>
    <article className='flex-1 text-left text-gray-500'>
        {project?project.description:''}
    </article>
   </div>
  )
}

export default ProPageTop