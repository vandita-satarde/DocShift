import React from 'react'

function Compliance({image, name, subcontent, content}) {
    return (
        <>
            <div className='bg-[#1F2E57] text-[14px] leading-6 tracking-wider rounded-sm w-[390px] h-[440px] flex flex-col items-center px-10 py-5 '>
                <img src={image} className='w-23 h-23 mb-4 ' />
                <p className='text-[30px] mx-6 leading-9'>{name}</p>
                <p className=' text-[#FFFFFFCC] mx-6 my-8 h-[50px] '>{subcontent}</p>
                <p className=' text-[#FFFFFFCC] '>{content}</p>
            </div>
        </>
    )
}

export default Compliance
