import React from 'react'

function HowDocShift({ logo, title, content }) {
    return (
        <>
            <div className=' text-center space-y-0.5 md:space-y-4 m-3 bg-[#1F2E57] w-[200px] md:w-[390px] h-[210px] md:h-[390px] md:pt-12 md:px-6 pt-6 px-1'>
                <div className='bg-white w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-[50%] mx-auto mb-3 md:mb-7 flex justify-center items-center'>
                    <img src={logo} className=' w-auto h-8 md:h-14 ' />
                </div>
                <p className='text-[17px] md:text-[32px] '>{title}</p>
                <p className='text-[9px] md:text-[16px] px-10 md:px-5'>{content}</p>
            </div>
        </>
    )
}

export default HowDocShift
