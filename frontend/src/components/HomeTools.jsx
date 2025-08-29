import React from 'react'

function HomeTools({className='', subtitle, title, content, image, img='' }) {
    return (
        <>
            <div className={`flex flex-col md:flex-row gap-x-25 ${className}`}>
                <div className='w-[200px] md:w-[550px] py-2 md:py-20 '>
                    <p className='text-[#FD6B70] text-[8px] md:text-[14px] '>{subtitle}</p>
                    <p className='text-[#0E1836] text-[20px] md:text-[48px] md:mt-2 mb-1 md:mb-5 '>{title}</p>
                    <p className='text-[9px] md:text-[19px]'>{content}</p>
                </div>
                <img src={image} className={`${img} w-30 md:w-[560px] h-20 md:h-[330px] `} />
            </div>

        </>
    )
}

export default HomeTools
