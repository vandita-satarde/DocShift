import React from 'react'

function Support({mainDiv='bg-[#0E1836] text-white', title1, subtext1, listItem1, listItem2, listItem3, listItem4, listItem5, title2, button, subtext2}) {
    return (
        <>
            <div className={`${mainDiv} text-center space-y-5 md:space-y-15 px-6 md:px-40 py-8 md:py-15 tracking-wide md:tracking-widest `}>
                <div className=' md:space-y-4 '>
                    <p className='text-[18px] md:text-[45px] '>{title1}</p>
                    <p className='text-[8px] md:text-[22px] '>{subtext1}</p>
                </div>
                <ul className='list-disc text-[9px] md:text-[22px] text-left space-y-1 md:space-y-4 '>
                    <li>{listItem1}</li>
                    <li>{listItem2}</li>
                    <li>{listItem3}</li>
                    <li>{listItem4}</li>
                    <li>{listItem5}</li>
                </ul>
                <div className=' md:space-y-6 '>
                    <p className='text-[11px] md:text-[30px] font-semibold '>{title2}</p>
                    <button className='w-[110px] md:w-[190px] h-[25px] md:h-[45px] bg-[#FD6B70] rounded-sm text-[10px] md:text-[18px] '>{button}</button>
                    <p className='text-[8px] md:text-[13px] '>{subtext2}</p>
                </div>
            </div>
        </>
    )
}

export default Support
