import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col sm:flex-row md:flex-row justify-between gap-y-14 p-8 md:p-30 mt-19 md:mt-4.5 '>
                <div className='mt-5 md:mt-20 pl-6 '>
                    <p className='text-[25px] md:text-[44px] '>Lets Get in <span className='font-[700] '>Touch!</span></p>
                    <p className='text-[#1A1A1A] text-[11px] md:text-[13px] md:leading-5 '>Have a question or need assistance? Reach<br/> out to us via email,
                        phone, or the contact form<br/> below. We're eager to assist you.</p>
                    <p className='text-[#656ED3] text-[10px] md:text-[13px] font-semibold mt-2'>Nice hearing from you!</p>

                </div>
                <div className='bg-[#F5F9FE] text-[13px] md:text-[17.5px] rounded-2xl space-y-2 md:space-y-4 p-5 md:p-12 md:w-130 md:h-141 '>
                    <p>Full Name:</p>
                    <input className='w-full h-8 md:h-13 border rounded-4xl md:-mt-3 ' />
                    <p>Email:</p>
                    <input className='w-full h-8 md:h-13 border rounded-4xl md:-mt-3' />
                    <p>Message:</p>
                    <input className='w-full h-20 md:h-40 border rounded-2xl md:-mt-3' />
                    <div className='text-end '>
                        <button className='bg-[#323232] text-white mt-1 md:mt-5 w-[90px] md:w-[160px] h-[32px] md:h-[43px] rounded-lg ' >Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
