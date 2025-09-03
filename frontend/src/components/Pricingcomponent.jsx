import React, { useState } from 'react'
import checkbox from '../assets/images/Checkbox.png'


function Pricingcomponent({ name, num, text, selected, onSelect }) {

    return (
        <>
            <div
                className={`flex justify-between items-center border border-gray-300 rounded-2xl md:rounded-3xl px-3 md:px-4 lg:px-8 py-2 md:py-5 lg:py-6 
                    ${selected ? "bg-gradient-to-b from-[#183aa1] to-[#0E1836] shadow-md text-white" : "bg-white text-black"}
                `}
                onClick={onSelect}
            >

                <div className='flex items-center gap-3 md:gap-5'>
                    {selected ? (
                        <div className="w-2 md:w-4 ">
                            <img src={checkbox} alt="checked" />
                        </div>

                    ) : (
                        <div className="border border-gray-400 w-2 md:w-4 h-2 md:h-4"></div>
                    )}
                    <div className='space-y-1 md:space-y-2'>
                        <p className='font-semibold text-[10px] md:text-[18px] lg:text-[19px] '>{name}</p>
                        {num && (
                            <p
                                className={`md:py-0.5 lg:py-1 px-1 md:px-2 lg:px-3 text-[8px] md:text-[11.5px] rounded-sm md:rounded-2xl 
                                    ${selected
                                        ? "bg-[#F1F0FB] text-[#4A3AFF]"
                                        : "bg-[#F1F0FB] text-black"
                                    }`}
                            >
                                Save {num}%
                            </p>
                        )}                    
                    </div>
                </div>
                <p className='text-[13px] md:text-[20px] lg:text-[28px] font-bold '>{text}</p>

            </div>
        </>
    )
}

export default Pricingcomponent
