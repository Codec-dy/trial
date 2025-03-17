import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { certificates } from '../assets/assets';
import { PortfolioContext } from '../context/portfolioContext';

const Certificate = () => {
    const {cert,api} = useContext(PortfolioContext)
    const  [certificate, setCertificate] = useState(null)
    
    useEffect(() => {  
        let certifi = certificates.find(c => c.id == cert)
        setCertificate(certifi)
    }, [cert])

  return certificate?(
    <div>
        <object data={certificate.link} type="application/pdf" width="100%" height="800px">
        <p>Unable to display PDF file. <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">Download</a> instead.</p>
        </object>
    </div>
  ):(
      <div>Loading...</div>
  )
}

export default Certificate