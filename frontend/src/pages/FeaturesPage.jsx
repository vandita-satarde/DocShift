import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import AllTools from '../components/featurespage/AllTools'
import Features from '../components/featurespage/Features'
import ToolsDetails from '../components/featurespage/ToolsDetails'
import featureToolsData from '../pages/featurespage/featureToolsData'
import Footer from '../components/Footer'

import featureMain1 from '../assets/images/featurespage/features-main-1.png'
import featureMain2 from '../assets/images/featurespage/features-main-2.png'
import featureMain3 from '../assets/images/featurespage/features-main-3.png'
import shield from '../assets/images/featurespage/shield.png'
import rectangle1 from '../assets/images/featurespage/Rectangle1.png'
import rectangle2 from '../assets/images/featurespage/Rectangle2.png'


function Feature() {
    const [selectedTool, setSelectedTool] = useState(null)
    const [showAll, setShowAll] = useState(false);

    // show only 8 tools first
    const visibleTools = showAll ? featureToolsData : featureToolsData.slice(0, 8);

    return (
        <>
            <Navbar />

            {/* herosection */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start py-25 md:py-28 bg-[#F5F9FE] '>
                <div className='text-[#0E1836] md:pl-35 py-5 md:py-20 text-center md:text-left '>
                    <p className='text-[26px] md:text-[82px] leading-9 md:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                    <p className='text-[12px] md:text-[19px] my-4 md:my-9 md:leading-9 md:tracking-wider'>DocShift is a powerful suite of tools designed to streamline your<br /> workflow and boost your productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                    <button className='w-[100px] md:w-[150px] h-[30px] md:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[13px] md:text-[18px] '>Get Started</button>
                </div>
                <div className='relative ml-20 md:ml-25'>
                    <img src={featureMain1} className=' h-[130px] md:h-[300px] w-auto rounded-lg ' />
                    <img src={featureMain2} className='absolute top-20 md:top-39 left-12 md:left-32 h-[140px] md:h-[320px] w-auto rounded-2xl  ' />
                    <img src={featureMain3} className='absolute top-35 md:top-78 -left-3 h-[140px] md:h-[300px] w-auto rounded-lg ' />
                </div>
            </div>

            {/* Unlock All Tools */}
            <div className="bg-[#F5F9FE] pt-26 md:pt-1">
                <p className="text-[#0E1836] text-[22px] md:text-[48px] text-center">
                    Unlock All Tools
                </p>

                {/* Tools Grid */}
                <div className="flex flex-wrap gap-4 md:gap-10 justify-center py-4 md:py-20 px-12">
                    {visibleTools.map((tool, index) => (
                        <div
                            key={index}
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedTool(tool)}
                            onKeyPress={(e) => e.key === 'Enter' && setSelectedTool(tool)}
                        >
                            <AllTools
                                image={tool.image}
                                name={tool.name}
                                description={tool.subtext} // using real subtext
                                imgDiv={tool.imgDiv}
                            />
                        </div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                <div className="flex justify-center pb-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-[#0E1836] hover:font-bold tracking-wide transition"
                    >
                        {showAll ? "View Less" : "View More..."}
                    </button>
                </div>

                {/* Pop-up */}
                {selectedTool && (
                    <ToolsDetails
                        isOpen={!!selectedTool}
                        onClose={() => setSelectedTool(null)}
                        image={selectedTool.details}
                        name={selectedTool.name}
                        subtext={selectedTool.subtext}
                        description={selectedTool.description}
                    />
                )}
            </div>

            {/* DocShift: Revolutionizing Revolutionize */}
            <div className='px-4 md:px-0 flex flex-col md:flex-row md:tracking-widest items-center md:items-start md:justify-around py-10 md:py-28 bg-[#0E1836] text-white '>
                <div className='text-center md:text-left'>
                    <p className='text-[25px] md:text-[58px] leading-8 md:leading-19 tracking-widest font-semibold '>DocShift :<br className='hidden md:block' /> Revolutionizing<br />Revolutionize</p>
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
                    <div className='flex gap-4 md:gap-10 md:ml-0 '>
                        <div className='w-[50px] md:w-[130px] h-[50px] md:h-[130px] bg-white rounded-full flex justify-center items-center '>
                            <img src={shield} className='h-8 md:h-23' />
                        </div>
                        <div className='flex flex-col justify-end md:gap-3 pb-2 md:pb-5'>
                            <p className='text-[8px] md:text-[17px] '>Secure</p>
                            <p className='text-[8px] md:text-[18px] '>Storage for Files</p>
                        </div>
                    </div>
                    <div className='relative mt-5 md:mt-10 flex justify-center'>
                        <img src={rectangle1} className='absolute md:-left-10 h-auto w-[180px] md:w-[420px] max-w-none ' />
                        <div className='absolute top-6 md:top-10 left-33 md:left-83 rounded-md bg-[#2E77F5] w-[45px] md:w-[100px] h-[35px] md:h-[70px] '></div>
                        <img src={rectangle2} className='absolute top-20 md:top-38 md:-left-42 rounded h-auto w-[210px] md:w-[520px] max-w-none ' />
                    </div>
                </div>
            </div>


            {/* Explore Our Features */}
            <div className='bg-[#F5F9FE]'>
                <p className='text-[26px] md:text-[48px] text-[#0E1836] text-center pt-11 md:pt-30'>Explore Our Features</p>
                <div className='flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-9 md:gap-y-14 py-4 md:py-12 '>
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
