import React from 'react'
import diamond from '../../assets/images/diamond.png'

function UsecasesDetails({name, about, div1, div2, div3, features}) {
    return (
        <>
            <div className='text-[#0E1836]'>
                <div className='bg-[#F5F9FE] text-center px-3 md:px-30 py-14 md:py-18 mt-[80px] md:mt-[110px] '>
                    <p className='text-[26px] md:text-[80px] font-semibold leading-8 md:leading-23 tracking-wider '>DocShift for {name}</p>
                    <p className='text-[12px] md:text-[20px] py-4 md:py-13 md:leading-10'>Unlock new levels of efficiency and productivity with DocShift, the innovative document<br /> management solution tailored for CA firms. Seamlessly integrate your workflows, automate<br /> tedious tasks, and enhance collaboration across your team</p>
                    <button className='cursor-pointer w-[100px] md:w-[150px] h-[30px] md:h-[45px] bg-[#FD6B70] text-white text-[13px] md:text-[20px] rounded-sm '>Get Started</button>

                </div>

                <div className='pt-19 px-30 pb-25 space-y-3'>
                    <p className='text-[26px] md:text-[54px] font-semibold leading-8 md:leading-23 tracking-wide '>{name} - Use DocShift</p>
                    <p className='text-[12px] md:text-[18px] tracking-wider md:leading-7 ml-9'>{about}</p>
                </div>
            </div>
            <div className='bg-[#0E1836] text-white py-20 tracking-wider '>
                <p className='text-[55px] text-center font-semibold leading-16'>Why {name}<br/>Choose DocShift</p>
                <p className='text-[14px] w-[910px] text-center mt-6 mb-14 mx-auto leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex flex-wrap justify-center gap-16 tracking-widest'>
                    <div className='bg-[#1F2E57] w-[610px] px-7 py-8 flex justify-center items-center gap-8'>
                        <img src={diamond} className='w-10 h-10' />
                        <p className='text-[18px]  '>{div1}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[610px] px-7 py-8 flex justify-center items-center gap-8'>
                        <img src={diamond} className='w-10 h-10' />
                        <p className='text-[18px]  '>{div2}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[610px] px-7 py-8 flex justify-center items-center gap-8'>
                        <img src={diamond} className='w-10 h-10' />
                        <p className='text-[18px]  '>{div3}</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F9FE] text-[#0E1836] pt-5 md:pt-15 px-10 md:px-30'>
                <p className='text-[20px] md:text-[58px] font-bold text-center '>{features}</p>
            </div>
        </>
    )
}

export default UsecasesDetails
