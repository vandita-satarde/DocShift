import React from 'react'

function AllTools({ image, name, description, imgDiv='', img='' }) {
    return (
        <>
            <div className='w-[120px] md:w-[310px] h-[110px] md:h-[245px] bg-[#FFFFFF] text-[#0E1836] flex flex-col justify-center items-center text-center px-2 md:px-8 shadow-lg hover:shadow-2xl hover:border hover:border-gray-100 '>
                <div className={`rounded-full w-[40px] md:w-[75px] h-[40px] md:h-[75px] flex justify-center items-center ${imgDiv}`}>
                    <img src={image} className={` h-6 md:h-8 ${img}`} />
                </div>
                <p className='text-[13px] md:text-[26px] leading-4 md:leading-6 my-1 md:my-4 '>{name}</p>
                <p className='text-[8px] md:text-[16px] '>{description}</p>
            </div>
        </>
    )
}

export default AllTools
