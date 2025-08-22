import React from 'react'
import Navbar from '../components/Navbar'
import Pricingcomponent from '../components/Pricingcomponent'

import checkcircle from '../assets/images/Checkcircle.png'
import Footer from '../components/Footer'

function PricingPage() {
    return (
        <>
            <Navbar />

            <div className='bg-[#F5F9FE] px-4 md:px-30 py-30 md:py-45'>
                <div className='bg-white text-[#0E1836] flex flex-col items-center shadow-2xl rounded-[20px] md:rounded-[40px] py-8 md:py-18 space-y-10 '>
                    <div className='bg-gray-200 inline-block p-1 md:p-1.5 rounded-md md:rounded-lg space-x-1 md:space-x-2 text-[8px] md:text-[15px] '>
                        <span className='bg-white rounded-sm md:rounded-md py-0.5 md:py-1 px-1 md:px-2'>Monthly</span>
                        <span className='bg-white rounded-sm md:rounded-md py-0.5 md:py-1 px-1 md:px-2'>Yearly</span>
                    </div>

                    <div className='space-y-6 md:space-y-10 w-[250px] md:w-[1000px] '>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-7'>
                            <div className=' md:w-4/7 space-y-3 md:space-y-5'>
                                <Pricingcomponent
                                    name='Basic'
                                    num='10'
                                    text='390 rs/month'
                                />
                                <Pricingcomponent
                                    name='Standard'
                                    num='20'
                                    text='490 rs/month'
                                />
                                <Pricingcomponent
                                    name='Premium'
                                    num='35'
                                    text='790 rs/month'
                                />
                                <Pricingcomponent
                                    name='Enterprise'
                                    num='50'
                                    text='Contact us'
                                />

                            </div>
                            <div className='md:w-3/7 border border-gray-300 rounded-2xl md:rounded-4xl p-3 md:p-7 space-y-3 md:space-y-7 '>
                                <p className='text-[10px] md:text-[18px] font-semibold '>Includes:</p>
                                <div className='text-[#6F6C8F] text-[10px] md:text-[14px] space-y-2 md:space-y-6 '>
                                    <div className='flex justify-between'>
                                        <p>Everything in Basic </p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Access to standard templates & UI blocks</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Collaboration tools</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>CMS collections</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Basic analytics</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Standard integrations</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Priority email support</p>
                                        <img src={checkcircle} className='w-3 md:w-5 h-3 md:h-5' /></div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between'>
                            <button className='bg-[#0E1836] text-white text-[9px] md:text-[16px] py-1 md:py-2 px-2 md:px-4 rounded-lg md:rounded-xl bg-gradient-to-b from-[#183aa1] to-[#0E1836] shadow-md ' >Choose Plan</button>
                            <div className='flex items-center space-x-1 md:space-x-2'>
                                <p className='text-[10px] md:text-[17px] '>Enable auto-renewal</p>
                                <div className='bg-[#0E1836] w-6 md:w-12 p-0.5 md:p-1 rounded-2xl '>
                                    <div className='bg-white w-2 md:w-5 h-2 md:h-5 rounded-2xl'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Footer/>
        </>
    )
}

export default PricingPage
