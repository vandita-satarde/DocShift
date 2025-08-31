import React from 'react'

function HowDocShift({ logo, title, content }) {
    return (
        <>
            <div className=' text-center space-y-0.5 md:space-y-1 lg:space-y-4 m-3 bg-[#1F2E57] w-[200px] md:w-[300px] lg:w-[390px] h-[210px] md:h-[290px] lg:h-[390px] pt-6 md:pt-8 lg:pt-12 px-1 md:px-6 '>
                <div className='bg-white w-[60px] md:w-[80px] lg:w-[100px] h-[60px] md:h-[80px] lg:h-[100px] rounded-[50%] mx-auto mb-3 md:mb-5 lg:mb-7 flex justify-center items-center'>
                    <img src={logo} className=' w-auto h-8 md:h-12 lg:h-14 ' />
                </div>
                <p className='text-[17px] md:text-[26px] lg:text-[32px] '>{title}</p>
                <p className='text-[9px] md:text-[13px] lg:text-[16px] px-10 md:px-5'>{content}</p>
            </div>
        </>
    )
}

export default HowDocShift
