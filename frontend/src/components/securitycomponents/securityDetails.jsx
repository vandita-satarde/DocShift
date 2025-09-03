import React from 'react'
import { Link } from 'react-router-dom'

function securityDetails({ name, subcontent, content, showButton=true , features }) {
    return (
        <>
            <div className='bg-[#0E1836] text-white text-center px-10 md:px-15 lg:px-75 pb-10 md:pb-25 pt-30 md:pt-40 lg:pt-55 tracking-wider space-y-3 md:space-y-3 lg:space-y-13 '>
                <p className='text-[26px] md:text-[45px] lg:text-[82px] font-semibold leading-7 md:leading-24 tracking-widest '>{name}</p>
                <p className='text-[11px] md:text-[20px] kg:text-[24px] px-2 md:px-0 leading-3 md:leading-10'>{subcontent}</p>
                <p className='text-[10px] md:text-[16px] lg:text-[19px] px-2 md:px-0 leading-3 md:leading-6 lg:leading-9 '>{content}</p>
                {showButton && (
                    <Link to='/pricing'>
                        <button className='cursor-pointer w-[80px] md:w-[150px] h-[25px] md:h-[45px] bg-[#FD6B70] text-white text-[10px] md:text-[20px] rounded-sm '>Get Started</button>
                    </Link>
                )}
            </div>
            <p className='text-[20px] md:text-[45px] lg:text-[58px] font-bold text-center bg-[#F5F9FE] text-[#0E1836] pt-6 md:pt-12 lg:pt-15  '>{features}</p>
            
        </>
    )
}

export default securityDetails
