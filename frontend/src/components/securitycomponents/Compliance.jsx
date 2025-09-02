import React from 'react'

function Compliance({image, name, subcontent, content}) {
    return (
        <>
            <div className='bg-[#1F2E57] hover:scale-106 hover:duration-200 text-[8px] md:text-[13px] lg:text-[14px] lg:leading-6 tracking-wide md:tracking-wider rounded-sm w-[190px] md:w-[300px] lg:w-[390px] h-[190px] md:h-[340px] lg:h-[440px] flex flex-col items-center px-3 md:px-7 lg:px-10 py-4 lg:py-5 '>
                <img src={image} className='w-10 md:w-18 lg:w-23 h-10 md:h-18 lg:h-23 mb-1 md:mb-4 ' />
                <p className='text-[14px] md:text-[21px] lg:text-[30px] md:px-8 px-6 leading-4 md:leading-7 lg:leading-9'>{name}</p>
                <p className=' text-[#FFFFFFCC] md:mx-6 my-2 lg:my-8 h-[20px] md:h-[50px] '>{subcontent}</p>
                <p className=' text-[#FFFFFFCC] '>{content}</p>
            </div>
        </>
    )
}

export default Compliance;
