import React from 'react'
import diamond from '../../assets/images/diamond.png'
import { Link } from 'react-router-dom'

function UsecasesDetails({ name, about, div1, div2, div3, features }) {
    return (
        <>
            <div className='text-[#0E1836]'>
                <div className='bg-[#F5F9FE] text-center px-3 md:px-30 pb-10 md:pb-18 pt-28 md:pt-35 lg:pt-40 '>
                    <p className='text-[22px] md:text-[55px] lg:text-[80px] font-semibold leading-7 md:leading-15 lg:leading-23 tracking-wider '>DocShift for<br /> {name}</p>
                    <p className='text-[10px] md:text-[17px] lg:text-[20px] px-2 md:px-0 py-2 md:py-4 lg:py-13 leading-3 md:leading-5 lg:leading-10'>Unlock new levels of efficiency and productivity with DocShift, the innovative document<br className='hidden lg:block' /> management solution tailored for CA firms. Seamlessly integrate your workflows, automate<br className='hidden lg:block' /> tedious tasks, and enhance collaboration across your team</p>
                    <Link to='/pricing'>
                        <button className='cursor-pointer w-[80px] md:w-[130px] lg:w-[150px] h-[25px] md:h-[38px] lg:h-[45px] bg-[#FD6B70] text-white text-[10px] md:text-[18px] lg:text-[20px] rounded-sm '>Get Started</button>
                    </Link>
                </div>

                <div className='pt-3 md:pt-8 lg:pt-19 px-4 md:px-10 lg:px-30 pb-7 md:pb-10 lg:pb-25  lg:space-y-3'>
                    <p className='text-[15px] md:text-[32px] lg:text-[54px] font-semibold leading-8 md:leading-16 lg:leading-23 tracking-wide '>{name} - Use DocShift</p>
                    <p className='text-[9px] md:text-[17px] lg:text-[18px] md:tracking-wider leading-3 md:leading-5 lg:leading-7 ml-3 md:ml-6 lg:ml-9'>{about}</p>
                </div>
            </div>
            <div className='bg-[#0E1836] text-white py-10 md:py-16 lg:py-20 tracking-wide md:tracking-wider '>
                <p className='text-[17px] md:text-[35px] lg:text-[55px] text-center font-semibold leading-6 md:leading-12 lg:leading-16'>Why {name}<br />Choose DocShift</p>
                <p className='text-[9px] md:text-[15px] lg:text-[14px] w-[320px] md:w-[630px] lg:w-[910px] text-center mt-2 md:mt-3 lg:mt-6 mb-8 md:mb-8 lg:mb-14 mx-auto leading-3 md:leading-6 lg:leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 tracking-wider md:tracking-widest'>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[510px] lg:w-[610px] px-3 md:px-5 lg:px-7 py-3 md:py-5 lg:py-8 flex justify-center items-center gap-3 md:gap-6 lg:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div1}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[510px] lg:w-[610px] px-3 md:px-5 lg:px-7 py-3 md:py-5 lg:py-8 flex justify-center items-center gap-3 md:gap-6 lg:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div2}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[510px] lg:w-[610px] px-3 md:px-5 lg:px-7 py-3 md:py-5 lg:py-8 flex justify-center items-center gap-3 md:gap-6 lg:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div3}</p>
                    </div>
                </div>
            </div>
            <p className='text-[20px] md:text-[40px] lg:text-[58px] font-bold text-center bg-[#F5F9FE] text-[#0E1836] pt-8 md:pt-10 lg:pt-15 '>{features}</p>
        </>
    )
}

export default UsecasesDetails
