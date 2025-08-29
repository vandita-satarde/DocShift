import React from 'react'

import image from '../../assets/images/image.jpg'
import pdf from '../../assets/images/feturespage/pdf.png'
import word from '../../assets/images/feturespage/word.png'
import excel from '../../assets/images/feturespage/excel.png'
import ppt from '../../assets/images/feturespage/ppt.png'
import jpg from '../../assets/images/feturespage/jpg.png'


function FeaturesDetails({name , description}) {
    return (
        <>
            <div className='text-[#0E1836] '>
                {/* HeroSection */}
                <div className='bg-[#F5F9FE] flex md:gap-60 px-4 md:px-30 pt-30 md:pt-46 pb-8'>
                    <div className='flex w-1/2 gap-2 md:gap-19'>
                        <img src={image} className='object-cover w-[50px] md:w-[260px] h-[200px] md:h-[650px] rounded-[10px] ' />
                        <img src={image} className='object-cover w-[50px] md:w-[260px] h-[200px] md:h-[650px] rounded-[10px] mt-10 md:mt-20' />
                    </div>
                    <div className='w-1/2 mt-6 md:mt-13'>
                        <p className='text-[20px] md:text-[63px] leading-6 md:leading-18 font-semibold tracking-widest '>{name}</p>
                        <p className='text-[9px] md:text-[19px] my-3 md:my-8 md:leading-9 md:tracking-wider'>{description}</p>
                        <button className='w-[80px] md:w-[150px] h-[26px] md:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[11px] md:text-[18px] '>Get Started</button>
                    </div>
                </div>

                {/* upload files in multiple formats */}
                <div className='py-7 md:py-20 space-y-5 md:space-y-20'>
                    <p className='font-semibold text-[16px] md:text-[48px] text-center md:leading-14'>Upload files in<br/> multiple formats</p>
                    <div className='flex justify-center text-[10px] md:text-[34px] gap-13 md:gap-50'>
                        <div className='flex flex-col items-center gap-1 md:gap-2'>
                            <img src={pdf} className='w-6 md:w-15 h-6 md:h-15 ' />
                            <p className=''>PDF</p>
                        </div>
                        <div className='flex flex-col items-center gap-1 md:gap-2'>
                            <img src={word} className='w-6 md:w-15 h-6 md:h-15 ' />
                            <p className=''>Word</p>
                        </div>
                        <div className='flex flex-col items-center gap-1 md:gap-2'>
                            <img src={excel} className='w-6 md:w-15 h-6 md:h-15 ' />
                            <p className=''>Excel</p>
                        </div>
                        <div className='flex flex-col items-center gap-1 md:gap-2'>
                            <img src={ppt} className='w-6 md:w-15 h-6 md:h-15 ' />
                            <p className=''>PPT</p>
                        </div>
                        <div className='flex flex-col items-center gap-1 md:gap-2'>
                            <img src={jpg} className='w-6 md:w-15 h-6 md:h-15 ' />
                            <p className=''>JPG</p>
                        </div>
                    </div>
                </div>


                
            </div>

            
        </>
    )
}

export default FeaturesDetails
