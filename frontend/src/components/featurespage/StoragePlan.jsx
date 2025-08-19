import React from 'react'

function StoragePlan({subtext, name, description}) {
    return (
        <>
            <div className='text-center pt-12 md:pt-28 pb-8 md:pb-20 text-[#0E1836] '>
                <p className='text-[10px] md:text-[28px] font-semibold md:-mb-2'>{subtext}</p>
                <p className='text-[18px] md:text-[48px] font-semibold tracking-wider'>{name}</p>
                <p className='text-[8px] md:text-[16px] py-2 md:py-6'>{description}</p>
                <button className='text-center rounded-4xl w-20 md:w-42 h-6 md:h-11 bg-[#FD6B70] text-white text-[10px] md:text-[21px] '>Pricing</button>
            </div>
        </>
    )
}

export default StoragePlan
