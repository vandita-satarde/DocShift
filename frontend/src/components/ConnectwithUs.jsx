import React from 'react'
import image from '../assets/images/connectwus.png'
import { Link } from 'react-router-dom'

function ConnectwithUs({className=''}) {
  return (
    <>
      <div className={`${className} flex flex-col md:flex-row items-center gap-6 px-8 lg:px-30 pb-8 lg:pb-15 text-[#FFFFFF] bg-[#18233F]`}>
        <div className='space-y-2 lg:space-y-6 '>
          <p className='text-[25px] md:text-[35px] lg:text-[49px] '>Connect with Us</p>
          <p className='text-[11px] md:text-[18px] lg:text-[20px] lg:leading-9 '>DocShift is a powerful designed to streamline your workflow and boost your productivity.</p>
          <Link to='/contact'>
            <button className='w-[100px] md:w-[130px] lg:w-[150px] h-[30px] md:h-[40px] lg:h-[45px] bg-[#FD6B70] rounded-sm text-[13px] md:text-[18px] cursor-pointer'>Follow Us</button>
          </Link>
        </div>
        <img src={image} className='w-95 lg:w-300 ' />
      </div>
    </>
  )
}

export default ConnectwithUs
