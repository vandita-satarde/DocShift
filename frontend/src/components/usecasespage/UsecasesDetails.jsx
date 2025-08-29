import React from 'react'
import diamond from '../../assets/images/diamond.png'

function UsecasesDetails({name, about, div1, div2, div3, features}) {
    return (
        <>
            <div className='text-[#0E1836]'>
                <div className='bg-[#F5F9FE] text-center px-3 md:px-30 py-14 md:py-18 mt-[80px] md:mt-[110px] '>
                    <p className='text-[22px] md:text-[80px] font-semibold leading-7 md:leading-23 tracking-wider '>DocShift for<br/> {name}</p>
                    <p className='text-[10px] md:text-[20px] px-2 md:px-0 py-2 md:py-13 leading-3 md:leading-10'>Unlock new levels of efficiency and productivity with DocShift, the innovative document<br className='hidden md:block' /> management solution tailored for CA firms. Seamlessly integrate your workflows, automate<br className='hidden md:block'/> tedious tasks, and enhance collaboration across your team</p>
                    <button className='cursor-pointer w-[80px] md:w-[150px] h-[25px] md:h-[45px] bg-[#FD6B70] text-white text-[10px] md:text-[20px] rounded-sm '>Get Started</button>
                </div>

                <div className='pt-3 md:pt-19 px-4 md:px-30 pb-7 md:pb-25 md:space-y-3'>
                    <p className='text-[15px] md:text-[54px] font-semibold leading-8 md:leading-23 tracking-wide '>{name} - Use DocShift</p>
                    <p className='text-[9px] md:text-[18px] md:tracking-wider leading-3 md:leading-7 ml-3 md:ml-9'>{about}</p>
                </div>
            </div>
            <div className='bg-[#0E1836] text-white py-10 md:py-20 tracking-wide md:tracking-wider '>
                <p className='text-[21px] md:text-[55px] text-center font-semibold leading-7 md:leading-16'>Why {name}<br/>Choose DocShift</p>
                <p className='text-[9px] md:text-[14px] w-[320px] md:w-[910px] text-center mt-2 md:mt-6 mb-8  md:mb-14 mx-auto leading-3 md:leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='flex flex-wrap justify-center gap-4 md:gap-16 tracking-wider md:tracking-widest'>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[610px] px-3 md:px-7 py-3 md:py-8 flex justify-center items-center gap-3 md:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div1}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[610px] px-3 md:px-7 py-3 md:py-8 flex justify-center items-center gap-3 md:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div2}</p>
                    </div>
                    <div className='bg-[#1F2E57] w-[230px] md:w-[610px] px-3 md:px-7 py-3 md:py-8 flex justify-center items-center gap-3 md:gap-8'>
                        <img src={diamond} className='w-5 md:w-10 h-5 md:h-10' />
                        <p className='text-[10px] md:text-[18px]  '>{div3}</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F9FE] text-[#0E1836] pt-8 md:pt-15 px-10 md:px-30'>
                <p className='text-[20px] md:text-[58px] font-bold text-center '>{features}</p>
            </div>
        </>
    )
}

export default UsecasesDetails
