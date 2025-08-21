import React from 'react'
import Navbar from '../components/Navbar'
import AllTools from '../components/featurespage/AllTools'
import Features from '../components/featurespage/Features'
import Footer from '../components/Footer'

import featureMain1 from '../assets/images/feturespage/features-main-1.png'
import featureMain2 from '../assets/images/feturespage/features-main-2.png'
import featureMain3 from '../assets/images/feturespage/features-main-3.png'
import tool1 from '../assets/images/feturespage/tool-1.png'
import tool2 from '../assets/images/feturespage/tool-2.png'
import tool3 from '../assets/images/feturespage/tool-3.png'
import tool4 from '../assets/images/feturespage/tool-4.png'
import tool5 from '../assets/images/feturespage/tool-5.png'
import tool6 from '../assets/images/feturespage/tool-6.png'
import tool7 from '../assets/images/feturespage/tool-7.png'
import tool8 from '../assets/images/feturespage/tool-8.png'
import tool9 from '../assets/images/feturespage/tool-9.png'
import tool10 from '../assets/images/feturespage/tool-10.png'
import tool11 from '../assets/images/feturespage/tool-11.png'
import tool12 from '../assets/images/feturespage/tool-12.png'
import tool13 from '../assets/images/feturespage/tool-13.png'
import tool14 from '../assets/images/feturespage/tool-14.png'
import tool15 from '../assets/images/feturespage/tool-15.png'
import tool16 from '../assets/images/feturespage/tool-16.png'
import shield from '../assets/images/feturespage/shield.png'
import rectangle1 from '../assets/images/feturespage/Rectangle1.png'
import rectangle2 from '../assets/images/feturespage/Rectangle2.png'
import { Link } from 'react-router-dom'



function Feature() {
    return (
        <>
            <Navbar />

            {/* herosection */}
            <div className='flex flex-col md:flex-row py-30 md:py-40 bg-[#F5F9FE] '>
                <div className='text-[#0E1836] pl-5 md:pl-35 py-5 md:py-20 '>
                    <p className='text-[34px] md:text-[82px] md:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                    <p className='text-[12px] md:text-[19px] my-4 md:my-9 md:leading-9 md:tracking-wider'>DocShift is a powerful suite of tools designed to streamline your<br /> workflow and boost your productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                    <button className='w-[100px] md:w-[150px] h-[30px] md:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[13px] md:text-[18px] '>Get Started</button>
                </div>
                <div className='relative ml-20 md:ml-25'>
                    <img src={featureMain1} className=' h-[130px] md:h-[300px] w-auto rounded ' />
                    <img src={featureMain2} className='absolute top-20 md:top-39 left-8 md:left-32 h-[140px] md:h-[320px] w-auto ' />
                    <img src={featureMain3} className='absolute top-40 md:top-78 -left-1 h-[140px] md:h-[300px] w-auto rounded ' />
                </div>
            </div>

            {/* unlock all tools */}
            <div className='bg-[#F5F9FE] pt-40 md:pt-1'>
                <p className='text-[#0E1836] text-[28px] md:text-[48px] text-center '>Unlock the All Tools</p>
                <div className='flex flex-wrap gap-4 md:gap-10 justify-center py-6 md:py-20'>
                    <Link to='/toolsdetails'><AllTools image={tool1} name='Image to PDF' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#1964F0] ' /></Link>
                    <AllTools image={tool2} name='PDF to Image' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#1A8A89] ' />
                    <AllTools image={tool3} name='Merge PDF’s' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#F5AE5E] ' />
                    <AllTools image={tool4} name='Word to PDF' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#9673E5] ' />
                    <AllTools image={tool5} name='Excel to PDF' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#F019E9] ' />
                    <AllTools image={tool6} name='PDF to PPT' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#80843D] ' />
                    <AllTools image={tool7} name='Background Remove ' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#EDF55E] ' />
                    <AllTools image={tool8} name='Remove pages' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#FD3538] ' />
                    <AllTools image={tool9} name='Compare PDF' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#95BAFF] ' />
                    <AllTools image={tool10} name='Split PDF' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#42FFFD] ' />
                    <AllTools image={tool11} name='AI PDF Editor' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#F2D6BC] ' />
                    <AllTools image={tool12} name='Document Screener' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#B4B0B0] ' />
                    <AllTools image={tool13} name='Plagiarism Screener' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#00B7FF] ' />
                    <AllTools image={tool14} name='Summarize Text' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#8F191B] ' />
                    <AllTools image={tool15} name='Speech to Text' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#FF8D23] ' img='h-11' />
                    <AllTools image={tool16} name='Text to Speech' description='Eliminate the need for multiple one affordable plan.' imgDiv='bg-[#0C50AF] ' />
                </div>
            </div>

            {/* DocShift: Revolutionizing Revolutionize */}
            <div className='px-4 md:px-0 flex flex-col md:flex-row md:tracking-widest md:justify-around py-10 md:py-28 bg-[#0E1836] text-white '>
                <div>
                    <p className='text-[25px] md:text-[60px] leading-8 md:leading-19 font-semibold '>DocShift:<br />Revolutionizing<br />Revolutionize</p>
                    <p className='text-[10px] md:text-[18px] my-2 md:my-5 md:leading-9 '>DocShift is a powerful suite of tools designed to streamline your<br /> workflow and boost your productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                    <div className='space-x-4 md:space-x-12 md:mt-10 mb-4 md:mb-20'>
                        <button className='w-[70px] md:w-[150px] h-[30px] md:h-[46px] bg-[#FD6B70] rounded-sm text-[10px] md:text-[17px] '>Get Started</button>
                        <button className='w-[70px] md:w-[150px] h-[30px] md:h-[46px] bg-[#0E215D] rounded-sm text-[10px] md:text-[17px] '>Learn More</button>
                    </div>
                    <p className='text-[13px] md:text-[25px] '>File Upload & Storage</p>
                    <p className='text-[8px] md:text-[18px] md:mt-6 '>Secure</p>
                    <p className='text-[8px] md:text-[18px] '>Storage for</p>
                </div>
                <div className=' pt-10 pb-60 md:pb-0'>
                    <div className='flex gap-4 md:gap-10 ml-24 md:ml-0 '>
                        <div className='w-[50px] md:w-[130px] h-[50px] md:h-[130px] bg-white rounded-full flex justify-center items-center '>
                            <img src={shield} className='h-8 md:h-23' />
                        </div>
                        <div className='flex flex-col justify-end md:gap-3 pb-2 md:pb-5'>
                            <p className='text-[8px] md:text-[17px] '>Secure</p>
                            <p className='text-[8px] md:text-[18px] '>Storage for Files</p>
                        </div>
                    </div>
                    <div className='relative mt-5 md:mt-10'>
                        <img src={rectangle1} className='absolute left-13 md:-left-10 h-auto w-[180px] md:w-[420px] max-w-none ' />
                        <div className='absolute top-6 md:top-10 left-53 md:left-83 rounded-md bg-[#2E77F5] w-[45px] md:w-[100px] h-[35px] md:h-[70px] '></div>
                        <img src={rectangle2} className='absolute top-20 md:top-38 left-9 md:-left-42 rounded h-auto w-[210px] md:w-[520px] max-w-none ' />
                    </div>
                </div>
            </div>


            {/* Explore Our Features */}
            <div className='bg-[#F5F9FE]'>
                <p className='text-[26px] md:text-[48px] text-[#0E1836] text-center pt-10 md:pt-30'>Explore Our Features</p>
                <div className='flex flex-wrap justify-center gap-x-3 md:gap-x-10 gap-y-6 md:gap-y-14 py-5 md:py-12 '>
                    <Link to='/feature1page' ><Features name='File Upload & Storage' /></Link>
                    <Link to='/feature2page'><Features name='Smart Tagging' /></Link>
                    <Link to='/feature3page'><Features name='Document Version Control' /></Link>
                    <Link to='/feature4page'><Features name='Expiry Date Tracking' /></Link>
                    <Link to='/feature5page'><Features name='Role-Based Sharing' /></Link>
                    <Link to='/feature6page'><Features name='Digital Signature Support' /></Link>
                    <Link to='/feature7page'><Features name='AI-Integrated Tools' /></Link>
                    <Link to='/feature8page'><Features name='Plagiarism Checker' /></Link>
                    <Link to='/feature9page'><Features name='Image & Visual Tools' /></Link>
                    <Link to='/feature10page'><Features name='Document Builder' /></Link>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default Feature
