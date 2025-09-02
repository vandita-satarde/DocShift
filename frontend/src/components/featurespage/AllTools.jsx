import React from 'react'

function AllTools({ image, name, description, imgDiv='', img='' }) {
    return (
        <>
            <div className='w-[120px] md:w-[210px] lg:w-[310px] h-[110px] md:h-[210px] lg:h-[245px] bg-[#FFFFFF] text-[#0E1836] flex flex-col justify-center items-center text-center px-2 md:px-4 lg:px-8 shadow-lg hover:shadow-xl hover:border hover:border-gray-300 cursor-pointer '>
                <div className={`rounded-full w-[40px] md:w-[65px] lg:w-[75px] h-[40px] md:h-[65px] lg:h-[75px] flex justify-center items-center ${imgDiv}`}>
                    <img src={image} className={` h-6 md:h-8 ${img}`} />
                </div>
                <p className='text-[13px] md:text-[22px] lg:text-[26px] leading-4 md:leading-6 lg:leading-6 my-1 md:my-1 lg:my-4 '>{name}</p>
                <p className='text-[8px] md:text-[15px] lg:text-[16px] '>{description}</p>
            </div>
        </>
    )
}

export default AllTools
