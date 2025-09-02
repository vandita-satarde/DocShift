import React from 'react'
import { Link } from 'react-router-dom'


function StoragePlan({color='', subtext, name, description, showButton=true }) {
    return (
        <>
            <div className={`tracking-wider md:tracking-widest text-center pt-7 md:pt-10 lg:pt-14 pb-7 md:pb-10 lg:pb-15 text-[#0E1836] ${color} `}>
                <p className='text-[9px] md:text-[24px] lg:text-[24px] font-semibold md:-mb-2'>{subtext}</p>
                <p className='text-[18px] md:text-[30px] lg:text-[48px] '>{name}</p>
                <p className='text-[8px] md:text-[13px] py-2 lg:py-4 leading-3 md:leading-5 lg:leading-7 mx-8 md:mx-25 '>{description}</p>
                {showButton && (
                    <Link to='/pricing' ><button className='text-center rounded-4xl w-20 md:w-42 h-6 md:h-11 bg-[#FD6B70] text-white text-[10px] md:text-[21px] '>Pricing</button></Link>
                )}
            </div>
        </>
    )
}

export default StoragePlan
