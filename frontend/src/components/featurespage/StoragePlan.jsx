import React from 'react'

function StoragePlan({color='', subtext, name, description, showButton=true }) {
    return (
        <>
            <div className={`tracking-wider md:tracking-widest text-center pt-12 md:pt-28 pb-8 md:pb-20 text-[#0E1836] ${color} `}>
                <p className='text-[10px] md:text-[28px] font-semibold md:-mb-2'>{subtext}</p>
                <p className='text-[18px] md:text-[48px] '>{name}</p>
                <p className='text-[8px] md:text-[13px] md:py-6 leading-3 md:leading-7 '>{description}</p>
                {showButton && (
                    <button className='text-center rounded-4xl w-20 md:w-42 h-6 md:h-11 bg-[#FD6B70] text-white text-[10px] md:text-[21px] '>Pricing</button>
                )}
            </div>
        </>
    )
}

export default StoragePlan
