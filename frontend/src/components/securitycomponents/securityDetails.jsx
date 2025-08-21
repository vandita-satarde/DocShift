import React from 'react'

function securityDetails({name, subcontent, content, features}) {
    return (
        <>
            <div className='bg-[#0E1836] text-white text-center px-3 md:px-75 py-14 md:py-24 mt-[80px] md:mt-[109px] tracking-wider space-y-3 md:space-y-13 '>
                <p className='text-[22px] md:text-[82px] font-semibold leading-7 md:leading-24 tracking-widest '>{name}</p>
                <p className='text-[10px] md:text-[24px] px-2 md:px-0 leading-3 md:leading-10'>{subcontent}</p>
                <p className='text-[10px] md:text-[19px] px-2 md:px-0 leading-3 md:leading-9 '>{content}</p>
                <button className='cursor-pointer w-[80px] md:w-[150px] h-[25px] md:h-[45px] bg-[#FD6B70] text-white text-[10px] md:text-[20px] rounded-sm '>Get Started</button>
            </div>

            <div className='bg-[#F5F9FE] text-[#0E1836] pt-8 md:pt-15 px-10 md:px-30'>
                <p className='text-[20px] md:text-[58px] font-bold text-center '>{features}</p>
            </div>
        </>
    )
}

export default securityDetails
