import React from 'react'


function WhyDocShift({ logo, title, content }) {
    return (
        <>
            <div className='w-[370px] text-center space-y-0.5 lg:space-y-4 m-3 mt-10 lg:mt-20'>
                <img src={logo} className='w-[60px] md:w-[80px] lg:w-[90px] h-[60px] md:h-[80px] lg:h-[90px] rounded-[50%] mx-auto mb-3 lg:mb-7 ' />
                <p className='text-[17px] md:text-[32px] '>{title}</p>
                <p className='text-[9px] md:text-[14px] lg:text-[16px] px-10 md:px-5'>{content}</p>
            </div>
        </> 
    )
}

export default WhyDocShift
