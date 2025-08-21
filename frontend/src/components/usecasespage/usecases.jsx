import React from 'react'
import { Link } from 'react-router-dom'

function usecases({ maindiv = 'bg-white', img='rounded-full', image, name, subcontent, content, showbutton=true, link = '' }) {
    return (
        <>
            <div className={` px-2 md:px-15 py-2 md:py-7 rounded-lg flex items-center md:items-end gap-3 md:gap-30 ${maindiv} `}>
                <img src={image} className={` h-[100px] md:h-[470px] ${img}`} />
                <div className='text-left '>
                    <p className='text-[12px] md:text-[49px] font-semibold '>{name}</p>
                    <p className='text-[7px] md:text-[15px] '>{subcontent}</p>
                    <p className='text-[8px] md:text-[27px] leading-2.5 md:leading-9 mt-1 md:mt-6 mb-1 md:mb-12'>{content}</p>
                    {showbutton && (
                        <Link to={link} >
                            <button className='cursor-pointer w-[80px] md:w-[170px] h-[20px] md:h-[45px] text-[#FD6B70] border border-[#FD6B70] rounded-4xl text-[9px] md:text-[20px] '>Get Started</button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default usecases
