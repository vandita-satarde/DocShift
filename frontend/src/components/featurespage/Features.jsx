import React from 'react'
import { Link } from 'react-router-dom'

function Features({ name, link='' }) {
    return (
        <>
            <div className=' bg-white text-[#0E1836] px-3 md:px-4 lg:px-7 py-2 md:py-4 lg:py-5 w-[135px] md:w-[225px] lg:w-[300px]  tracking-wide shadow-md hover:shadow-lg hover:scale-103 duration-200'>
                <p className='text-[14px] md:text-[24px] lg:text-[29px] leading-5 md:leading-8 h-9 md:h-16 '>{name}</p>
                <p className='text-[8px] md:text-[15px] pt-2 md:pt-1 lg:pt-4'>Eliminate the need for multiple one affordable the need for multiple plan.</p>
                <Link to={link}>
                    <button className='cursor-pointer mt-6 md:mt-8 lg:mt-14 mb-3 md:mb-4 lg:mb-10 w-[90px] md:w-[140px] lg:w-[170px] h-[25px] md:h-[40px] lg:h-[46px] bg-[#FD6B70] hover:bg-[#f9454b] text-[#FFFFFF] rounded-4xl text-[11px] md:text-[17px] lg:text-[18px] '>Get Started</button>
                </Link>
                <p className='text-[8px] md:text-[15px] text-[#4B5679] tracking-widest '>Smart Tagging and<br /> version Control</p>
            </div>
        </>
    )
}

export default Features
