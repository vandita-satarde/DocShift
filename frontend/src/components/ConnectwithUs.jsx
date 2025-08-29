import React from 'react'
import image from '../assets/images/connectwus.png'
import { Link } from 'react-router-dom'

function ConnectwithUs() {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center gap-6 px-8 md:px-30 pb-10 md:pb-0 md:py-26 text-[#FFFFFF] bg-[#18233F]'>
        <div className='space-y-2 md:space-y-6 '>
          <p className='text-[30px] md:text-[49px] '>Connect with Us</p>
          <p className='text-[11px] md:text-[20px] md:leading-9 '>DocShift is a powerful designed to streamline your workflow and boost your productivity.</p>
          <Link to='/contact'>
            <button className='w-[100px] md:w-[150px] h-[30px] md:h-[45px] bg-[#FD6B70] rounded-sm text-[13px] md:text-[18px] cursor-pointer'>Follow Us</button>
          </Link>
        </div>
        <img src={image} className='w-300 md:h-[430px] ' />
      </div>
    </>
  )
}

export default ConnectwithUs
