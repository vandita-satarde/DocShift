import React from 'react'
import logo from '../assets/icons/DocShift-logo.png'
import { Link } from 'react-router-dom'

function Footer({ className = '' }) {
  return (
    <>
      <div className='text-[#C0C0C0] bg-[#091432]'>
        <div className={`${className} flex flex-col md:flex-row items-center gap-6 md:gap-23 lg:gap-30 px-10 md:px-15 lg:px-50 py-5 md:h-[260px] lg:h-[370px] text-[11px] md:text-[15px] lg:text-[19px]`}>
          <div className='text-center space-y-0 md:space-y-4 lg:space-y-11'>
            <img src={logo} className='w-[120px] md:w-[190px] lg:w-[240px] mx-auto ' />
            <p className='text-[8px] md:text-[13px]'>@2025 DocShift. Inc<br className='hidden md:block' /> All rights reserved.</p>
          </div>
          <div className='flex flex-row gap-14 md:gap-15 lg:gap-55'>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Quick Links</p>
              <p><Link to='/'>Home</Link></p>
              <p><Link to=''>About</Link></p>
              <p><Link to='/features'>Features</Link></p>
              <p><Link to='/contact'>Contact</Link></p>
            </div>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Company</p>
              <p><Link to=''>About</Link></p>
              <p><Link to=''>Careers</Link></p>
              <p><Link to=''>Blogs</Link></p>
              <p><Link to=''>Privacy</Link></p>
            </div>
            <div className=' md:space-y-1.5 lg:space-y-3'>
              <p className='text-white'>Resources</p>
              <p><Link to=''>Guide</Link></p>
              <p><Link to=''>Webinars</Link></p>
              <p><Link to=''>FAQs</Link></p>
              <p><Link to='/support'>Support</Link></p>
            </div>
          </div>
        </div>
        <hr className='text-gray-700 mx-6 md:mx-14 lg:mx-20 '/>
        <p className='text-[9px] md:text-[13px] text-center p-3 md:p-5 '>© copyrighty 2025 Design and Developed with love by TARS TECHNOLOGIES</p>
      </div>
    </>
  )
}

export default Footer