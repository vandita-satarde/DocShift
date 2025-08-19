import React from 'react'

function Features({ name }) {
    return (
        <>
            <div className=' bg-white text-[#0E1836] px-3 md:px-7 py-2 md:py-5 w-[135px] md:w-[300px] md:h-[370px] tracking-wide '>
                <p className='text-[14px] md:text-[29px] leading-5 md:leading-8 h-9 md:h-16 '>{name}</p>
                <p className='text-[8px] md:text-[15px] pt-2 md:pt-4'>Eliminate the need for multiple one affordable the need for multiple plan.</p>
                <button className='cursor-pointer mt-6 md:mt-14 mb-3 md:mb-10 w-[90px] md:w-[170px] h-[25px] md:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-4xl text-[11px] md:text-[18px] '>Get Started</button>
                <p className='text-[8px] md:text-[15px] text-[#4B5679] tracking-widest '>Smart Tagging and<br /> version Control</p>
            </div>
        </>
    )
}

export default Features
