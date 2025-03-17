import React from 'react'
import LeaveMsg from '../components/Leavemsg'
import ContactsWidget from '../components/contactsWidget'
import { assets, Details } from '../assets/assets'

const Contact = () => {
  return (
    <div className='min-h-[70vh]'>
      <div className='flex flex-col items-center text-center justify-center calc'>
        <div className='flex-1 content-center sm:max-w-[40%] w-full '>
          <p className='text-3xl font-semibold'>Contact Me</p>
          <br/>
          <p className='text-gray-400'> I'd love to hear from you! Whether you have a question about my work, want to discuss a project, or just want to say hello, feel free to reach out. You can contact me through any of the methods below. </p>
        </div>
        <div className='w-full flex-1 items-start sm:content-center grid grid-cols-1 sm:grid-cols-4 bg-black sm:gap-3'>
          <ContactsWidget title='Address' img={assets.address} text={Details.street +' '+ Details.town} />
          <ContactsWidget title='Call' img={assets.telephone} text={Details.contact}/>
          <ContactsWidget title='Email'  img={assets.email} text={Details.email}/>
          <ContactsWidget title='Avaibility' img={assets.available} text={Details.available?Details.available:"Available around the clock"}/>
        </div>
      </div>
      <LeaveMsg/>
    </div>
  )
}

export default Contact