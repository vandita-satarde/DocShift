import React from 'react'
import { Link } from 'react-router-dom'

function usecases({ maindiv = 'bg-white', img='rounded-full', image, name, subcontent, content, showbutton=true, link = '' }) {
    return (
        <>
            <div className={`hover:scale-104 duration-200 px-3 md:px-6 lg:px-15 py-2 md:py-4 lg:py-7 rounded-lg flex items-center md:items-end gap-3 md:gap-5 lg:gap-30 ${maindiv} `}>
                <img src={image} className={` h-[100px] md:h-[230px] lg:h-[470px] ${img}`} />
                <div className='text-left '>
                    <p className='text-[12px] md:text-[25px] lg:text-[49px] font-semibold '>{name}</p>
                    <p className='text-[7px] md:text-[14px] lg:text-[15px] '>{subcontent}</p>
                    <p className='text-[8px] md:text-[17px] lg:text-[27px] leading-2.5 md:leading-5 lg:leading-9 mt-1 md:mt-0 lg:mt-6 mb-1 md:mb-4 lg:mb-12'>{content}</p>
                    {showbutton && (
                        <Link to={link} >
                            <button className='cursor-pointer w-[70px] md:w-[140px] lg:w-[170px] h-[20px] md:h-[40px] lg:h-[45px] text-[#FD6B70] hover:text-white hover:bg-[#FD6B70] border border-[#FD6B70] rounded-4xl text-[9px] md:text-[17px] lg:text-[20px] '>Get Started</button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default usecases
