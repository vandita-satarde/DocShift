import React from 'react'
import logo from '../assets/icons/DocShift-logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center gap-10 md:gap-25 lg:gap-30 py-10 md:py-0 px-10 md:px-20 lg:px-50 bg-[#091432] md:h-[300px] lg:h-[400px] text-[#C0C0C0] text-[12px] md:text-[15px] lg:text-[19px] '>
        <div className='text-center space-y-3 md:space-y-8 lg:space-y-13'>
          <img src={logo} className='w-[150px] md:w-[190px] lg:w-[240px] ' />
          <p className='text-[10px] md:text-[13px]'>@2025 DocShift. Inc<br /> All rights reserved.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-55'>
          <div className='space-y-1 md:space-y-3'>
          <p className='text-white'>Quick Links</p>
          <Link to='/'><p>Home</p></Link>
          <p>About</p>
          <Link to='/features'><p>Features</p></Link>
          <Link to='/contact'><p>Contact</p></Link>
        </div>
        <div className='space-y-1 md:space-y-3'>
          <p className='text-white'>Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Privacy</p>
        </div>
        <div className='space-y-1 md:space-y-3'>
          <p className='text-white'>Resources</p>
          <p>Guide</p>
          <p>Webinars</p>
          <p>FAQs</p>
          <Link to='/support' ><p>Support</p></Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer