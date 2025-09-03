import React from 'react'

function HomeTools({className='', subtitle, title, content, image, img='' }) {
    return (
        <>
            <div className={`flex flex-col md:flex-row items-center md:gap-x-10 lg:gap-x-30 text-center md:text-left ${className}`}>
                <div className='w-[200px] md:w-[550px] py-3 '>
                    <p className='text-[#FD6B70] text-[8px] md:text-[13px] lg:text-[14px] '>{subtitle}</p>
                    <p className='text-[#0E1836] text-[19px] md:text-[27px] lg:text-[48px] lg:mt-2 lg:mb-5 '>{title}</p>
                    <p className='text-[9px] md:text-[15px] lg:text-[19px]'>{content}</p>
                </div>
                <img src={image} className={`${img} w-80 md:w-70 lg:w-[560px] h-auto `} />
            </div>

        </>
    )
}

export default HomeTools
