import React from 'react'
import Button from '../components/Button'
import {aboutme, assets} from '../assets/assets'
import FrontHomepage from '../components/frontHomepage'
import LatestWorks from '../components/LatestWorks'
import LeaveMsg from '../components/Leavemsg'
import SkillsCardSlide from '../components/SkillsCardSlide'
import AboutCard from '../components/AboutCard'
import Experience from '../components/Experience'

const Landing = () => {
  return (
    <div className="flex flex-col gap-2">
       <FrontHomepage />
       <div className='h-[100vh] flex items-center '><AboutCard img={aboutme.backimg} text={aboutme.education} colType={'sm:flex-row-reverse'}/></div>
       <SkillsCardSlide/>
       <LatestWorks />
       <Experience />
       <LeaveMsg />
    </div>
  )
}

export default Landing