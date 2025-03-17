import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioContext } from '../context/portfolioContext'
import { assets } from '../assets/assets'



const CertificateCard = ({id,title,institute,date,img,txt, link}) => {
    const {setCert} = useContext(PortfolioContext)
    const [displayCert, setDisplayCert] = useState(false)
    return (
    <React.Fragment>
    <Link target="_blank" to={link} onClick={()=>{setCert(id); setDisplayCert(link?false:false)}}   className="h-fit"><div className='h-[430px] max-h-[450px] relative text-left py-4 w-[320px] border-b border-t-0 transition-all duration-[200ms] before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-[500ms] hover:before:scale-x-100'>
        <div className='overflow-hidden '><img src={img} alt={title} className='w-full object-cover rounded-lg hover:scale-120 transition-all duration-[500ms]'/></div>
        <h3 className=' font-semibold my-4'>{title}</h3>
        <p className='text-gray-500 text-sm'>{institute}</p>
        <p className='text-gray-500 text-sm'>{txt}</p>
        <div className='mt-10 text-gray-600'>{date}</div>
    </div></Link>
    <div className={`${displayCert?'block':'hidden'} right-0 flex fixed z-10 top-0 bg-black  w-[100%] h-[100vh] `} onClick={()=>setDisplayCert(false)}>
      <img src={img} className=' m-auto sm:max-w-[700px] w-full sm:max-h-[400px]'/>
    </div>
    </React.Fragment>
  )
}

export default CertificateCard