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
            <div className='flex flex-col md:flex-row justify-center md:justify-start py-20 lg:py-28 bg-[#F5F9FE] '>
                <div className='text-[#0E1836] pl-5 md:pl-8 lg:pl-35 py-5 md:py-20 text-center md:text-left '>
                    <p className='text-[26px] md:text-[43px] lg:text-[82px] leading-9 md:leading-14 lg:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                    <p className='text-[12px] md:text-[17px] lg:text-[19px] my-4 lg:my-9 lg:leading-9 lg:tracking-wider'>DocShift is a powerful suite of tools designed <br className='block lg:hidden'/> to streamline your<br className='hidden lg:block' /> workflow and boost your<br className='block lg:hidden'/>  productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                    <button className='w-[100px] md:w-[150px] h-[30px] md:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[13px] md:text-[18px] '>Get Started</button>
                </div>
                <div className='relative ml-20 md:ml-8 lg:ml-25'>
                    <img src={featureMain1} className='h-[130px] md:h-[190px] lg:h-[300px] w-auto rounded-lg ' />
                    <img src={featureMain2} className='absolute top-20 md:top-30 lg:top-39 left-12 md:left-12 lg:left-32 h-[140px] md:h-[210px] lg:h-[320px] w-auto rounded-2xl  ' />
                    <img src={featureMain3} className='absolute top-35 md:top-55 lg:top-78 -left-3 h-[140px] md:h-[200px] lg:h-[300px] w-auto rounded-lg ' />
                </div>
            </div>

            {/* Unlock All Tools */}
            <div className="bg-[#F5F9FE] pt-26 md:pt-1">
                <p className="text-[#0E1836] text-[26px] md:text-[36px] lg:text-[48px] text-center">
                    Unlock All Tools
                </p>

                {/* Tools Grid */}
                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center py-4 md:py-10 lg:py-20 lg:px-12">
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
            <div className='px-4 md:px-0 flex flex-col md:flex-row md:tracking-widest items-center md:items-start md:justify-around py-10 md:py-15 lg:py-28 bg-[#0E1836] text-white '>
                <div className='text-center md:text-left'>
                    <p className='text-[25px] md:text-[38px] lg:text-[58px] leading-8 md:leading-12 lg:leading-19 tracking-widest font-semibold '>DocShift :<br className='hidden md:block' /> Revolutionizing<br />Revolutionize</p>
                    <p className='text-[10px] md:text-[13px] lg:text-[18px] my-2 md:my-5 md:leading-4 lg:leading-9 '>DocShift is a powerful suite of tools designed <br className='block lg:hidden ' /> to streamline your<br className='hidden lg:block' /> workflow and boost your<br className='block lg:hidden ' /> productivity. From Al-powered writing<br className='hidden lg:block' /> assistance <br className='block lg:hidden ' /> to advanced plagiarism detection.</p>
                    <div className='space-x-4 md:space-x-6 lg:space-x-12 md:mt-10 mb-4 md:mb-20 text-[10px] md:text-[14px] lg:text-[17px] '>
                        <button className='w-[70px] md:w-[130px] lg:w-[150px] h-[30px] md:h-[36px] lg:h-[46px] bg-[#FD6B70] rounded-sm '>Get Started</button>
                        <button className='w-[70px] md:w-[130px] lg:w-[150px] h-[30px] md:h-[36px] lg:h-[46px] bg-[#0E215D] rounded-sm '>Learn More</button>
                    </div>
                    <p className='text-[13px] md:text-[19px] lg:text-[25px] '>File Upload & Storage</p>
                    <p className='text-[8px] md:text-[15px] lg:text-[18px] md:mt-4 lg:mt-6 '>Secure</p>
                    <p className='text-[8px] md:text-[15px] lg:text-[18px] '>Storage for</p>
                </div>
                <div className=' pb-60 md:pb-0'>
                    <div className='flex gap-4 md:gap-6 lg:gap-10 md:ml-0 '>
                        <div className='w-[50px] md:w-[80px] lg:w-[130px] h-[50px] md:h-[80px] lg:h-[130px] bg-white rounded-full flex justify-center items-center '>
                            <img src={shield} className='h-8 md:h-14 lg:h-23' />
                        </div>
                        <div className='flex flex-col justify-end lg:gap-3 pb-2 md:pb-5'>
                            <p className='text-[8px] md:text-[15px] lg:text-[17px] '>Secure</p>
                            <p className='text-[8px] md:text-[16px] lg:text-[18px] '>Storage for Files</p>
                        </div>
                    </div>
                    <div className='relative mt-5 md:mt-10 flex justify-center'>
                        <img src={rectangle1} className='absolute md:-left-10 h-auto w-[180px] md:w-[280px] lg:w-[420px] max-w-none ' />
                        <div className='absolute top-6 md:top-10 left-33 md:left-50 lg:left-83 rounded-md bg-[#2E77F5] w-[45px] md:w-[70px] lg:w-[100px] h-[35px] md:h-[50px] lg:h-[70px] '>
                        </div>
                        <img src={rectangle2} className='absolute top-20 md:top-30 lg:top-38 md:-left-25 lg:-left-42 rounded h-auto w-[210px] md:w-[350px] lg:w-[520px] max-w-none ' />
                    </div>
                </div>
            </div>


            {/* Explore Our Features */}
            <div className='bg-[#F5F9FE]'>
                <p className='text-[26px] md:text-[36px] lg:text-[48px] text-[#0E1836] text-center pt-11 lg:pt-30'>Explore Our Features</p>
                <div className='flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-5 lg:gap-x-10 gap-y-9 md:gap-y-14 py-4 md:py-12 md:px-5 lg:px-25'>
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
