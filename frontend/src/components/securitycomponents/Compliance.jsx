import React from 'react'

function Compliance({image, name, subcontent, content}) {
    return (
        <>
            <div className='bg-[#1F2E57] hover:border-1 hover:border-gray-500 text-[8px] md:text-[14px] md:leading-6 tracking-wide md:tracking-wider rounded-sm w-[190px] md:w-[390px] h-[200px] md:h-[440px] flex flex-col items-center px-3 md:px-10 py-4 md:py-5 '>
                <img src={image} className='w-10 md:w-23 h-10 md:h-23 mb-1 md:mb-4 ' />
                <p className='text-[15px] md:text-[30px] mx-6 leading-4 md:leading-9'>{name}</p>
                <p className=' text-[#FFFFFFCC] md:mx-6 my-2 md:my-8 h-[20px] md:h-[50px] '>{subcontent}</p>
                <p className=' text-[#FFFFFFCC] '>{content}</p>
            </div>
        </>
    )
}

export default Compliance
