import React from 'react'

const Card= ({children}) => {
  return (
    <div className='m-h-[100px] p-6 w-full shadow-lg'>
        {children}
    </div>
  )
}

export default Card