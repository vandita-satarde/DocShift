import React from 'react'
import logo from '../assets/icons/DocShift-logo.png'
import contact from '../assets/icons/contact.png'
import email from '../assets/icons/email.png'
import { Link } from 'react-router-dom'

function Footer({ className = 'z-10 relative' }) {
  return (
    <>
      <div className={`${className} text-[#C0C0C0] bg-[#091432]`}>
        <div className={` flex flex-col md:flex-row items-center gap-7 md:gap-14 lg:gap-40 px-10 md:px-16 lg:px-38 py-12 md:py-33 md:h-[260px] lg:h-[370px] text-[12px] md:text-[15px] lg:text-[19px]`}>
          <div className='text-center space-y-1 md:space-y-4 lg:space-y-11'>
            <img src={logo} className='w-[130px] md:w-[190px] lg:w-[240px] mx-auto ' />
            <p className='text-[9px] md:text-[13px]'>@2025 DocShift. Inc<br className='hidden md:block' /> All rights reserved.</p>
          </div>
          <div className='flex flex-col md:flex-row text-center md:text-left gap-9 md:gap-13 lg:gap-45'>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Quick Links</p>
              <p><Link to='/features'>Features</Link></p>
              <p><Link to='/use-cases'>Use Cases</Link></p>
              <p><Link to='/security'>Security</Link></p>
              <p><Link to='/integrations'>Integrations</Link></p>
              <p><Link to='/pricing'>Pricing</Link></p>
            </div>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Policies</p>
              <p><Link to=''>Terms & Conditions</Link></p>
              <p><Link to=''>Privacy Policy</Link></p>
              <p><Link to=''>FAQs</Link></p>
              <p><Link to='/support'>Support</Link></p>
            </div>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Contact Us</p>
              <div className='flex items-center gap-2 pl-1'>
                <img src={contact} className='w-3 md:w-4 lg:w-5 md:h-4 lg:h-5 ' />
                <p>9112117415</p>
              </div><div className='flex items-center gap-2'>
                <img src={email} className='w-4 md:w-5 md:h-5' />
                <p>info@docshift.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='text-gray-700 mx-6 md:mx-14 lg:mx-20 ' />
        <a href='https://tars.co.in/' target='_blank'>
          <p className='text-[8px] md:text-[13px] text-center p-4 md:p-6 '>© copyrighty 2025 Design and Developed with love by TARS TECHNOLOGIES</p>
        </a>
      </div>
    </>
  )
}

export default Footer