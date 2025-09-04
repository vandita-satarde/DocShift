import React, { useEffect, useState } from 'react'
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [docIndex, setDocIndex] = useState(0);

    // show only 8 tools first
    const visibleTools = showAll ? featureToolsData : featureToolsData.slice(0, 8);
    const images = [featureMain1, featureMain2, featureMain3]

    // herosection
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500)
        return () => clearInterval(interval);
    }, [images.length])

    //Doc Revo-rev
    useEffect(() => {
        const interval = setInterval(() => {
            setDocIndex((prev) => (prev + 1) % 3)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Navbar />

            {/* herosection */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start py-28 md:py-25 lg:py-28 bg-[#F5F9FE] '>
                <div className='text-[#0E1836] md:pl-10 lg:pl-35 py-5 md:py-20 px-5 md:px-0 text-center md:text-left '>
                    <p className='text-[28px] md:text-[41px] lg:text-[82px] leading-7 md:leading-13 lg:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                    <p className='text-[11px] md:text-[16px] lg:text-[19px] my-4 md:my-5 lg:my-9 leading-5 lg:leading-9 lg:tracking-wider'>DocShift is a powerful suite of tools designed <br className='hidden md:block lg:hidden' /> to streamline your<br className='hidden lg:block' /> workflow and boost your<br className='hidden md:block lg:hidden' />  productivity. From Al-powered writing<br className='hidden md:block' /> assistance to advanced plagiarism detection.</p>
                    <Link to='/pricing'>
                        <button className='cursor-pointer w-[100px] md:w-[130px] lg:w-[150px] h-[30px] md:h-[42px] lg:h-[46px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[13px] md:text-[18px] '>Get Started</button>
                    </Link>
                </div>
                <div className='hidden md:block relative ml-20 md:ml-8 lg:ml-25'>
                    <img src={featureMain1} className='h-[130px] md:h-[190px] lg:h-[300px] w-auto rounded-lg ' />
                    <img src={featureMain2} className='absolute top-20 md:top-30 lg:top-39 left-12 md:left-12 lg:left-32 h-[140px] md:h-[210px] lg:h-[320px] w-auto rounded-2xl  ' />
                    <img src={featureMain3} className='absolute top-35 md:top-55 lg:top-78 -left-3 h-[140px] md:h-[200px] lg:h-[300px] w-auto rounded-lg ' />
                </div>
                <div className='block md:hidden mt-24'>
                    <div className=" relative w-full flex justify-center items-center">
                        {/* Images */}
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="carousel"
                                className={`absolute transition-opacity duration-500 ease-in-out 
                                    ${index === currentIndex ? "opacity-100" : "opacity-0"} 
                                    h-[160px] w-[260px] rounded-lg`}
                            />
                        ))}

                        {/* Dots indicator */}
                        <div className="absolute top-22 flex space-x-1.5">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1 h-1 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Unlock All Tools */}
            <div className="bg-[#F5F9FE] pt-14 md:pt-0">
                <p className="text-[#0E1836] text-[22px] md:text-[33px] lg:text-[48px] text-center">
                    Unlock All Tools
                </p>

                {/* Tools Grid */}
                <div className="flex flex-wrap gap-6 md:gap-6 lg:gap-10 justify-center py-4 md:py-10 lg:py-20 lg:px-12">
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
                <div className="flex justify-center pb-10 text-[13px] md:text-[16px] pt-1 ">
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
            <div className=' flex flex-col md:flex-row md:tracking-widest items-center md:items-start md:justify-around md:gap-9 lg:gap-10 py-10 md:py-15 bg-[#0E1836] text-white '>
                <div className='text-center md:text-left'>
                    <p className='text-[25px] md:text-[38px] lg:text-[58px] leading-8 md:leading-12 lg:leading-19 tracking-widest font-semibold '>DocShift :<br /> Revolutionizing<br />Revolutionize</p>
                    <p className='text-[10px] md:text-[13px] lg:text-[18px] my-2 md:my-5 mx-12 md:mx-0 md:leading-4 lg:leading-9 '>DocShift is a powerful suite of tools designed <br className='hidden md:block lg:hidden ' /> to streamline your<br className='hidden lg:block' /> workflow and boost your<br className='hidden md:block lg:hidden ' /> productivity. From Al-powered writing<br className='hidden lg:block' /> assistance <br className='hidden md:block lg:hidden ' /> to advanced plagiarism detection.</p>
                    <div className='space-x-4 md:space-x-6 lg:space-x-12 md:mt-10 mb-5 md:mb-20 text-[10px] md:text-[14px] lg:text-[17px] '>
                        <Link to='/pricing'>
                            <button className='cursor-pointer w-[70px] md:w-[130px] lg:w-[150px] h-[28px] md:h-[36px] lg:h-[46px] bg-[#FD6B70] rounded-sm '>Get Started</button>
                        </Link>
                        <button className='w-[70px] md:w-[130px] lg:w-[150px] h-[28px] md:h-[36px] lg:h-[46px] bg-[#0E215D] rounded-sm '>Learn More</button>
                    </div>
                    <p className='text-[13px] md:text-[19px] lg:text-[25px] '>File Upload & Storage</p>
                    <p className='text-[8px] md:text-[15px] lg:text-[18px] md:mt-4 lg:mt-6 '>Secure</p>
                    <p className='text-[8px] md:text-[15px] lg:text-[18px] '>Storage for</p>
                </div>
                <div className='hidden md:block pb-60 md:pb-0'>
                    <div className='flex gap-4 md:gap-6 '>
                        <div className='w-[50px] md:w-[80px] lg:w-[120px] h-[50px] md:h-[80px] lg:h-[120px] bg-white rounded-full flex justify-center items-center '>
                            <img src={shield} className='h-8 md:h-14 lg:h-20' />
                        </div>
                        <div className='flex flex-col justify-end lg:gap-3 pb-2 md:pb-5'>
                            <p className='text-[8px] md:text-[15px] lg:text-[17px] '>Secure</p>
                            <p className='text-[8px] md:text-[16px] lg:text-[18px] '>Storage for Files</p>
                        </div>
                    </div>
                    <div className='relative mt-5 md:mt-6 flex justify-center'>
                        <img src={rectangle1} className='absolute md:-left-10 h-auto w-[180px] md:w-[280px] lg:w-[420px] max-w-none ' />
                        {/* <div className='absolute top-6 md:top-10 left-33 md:left-50 lg:left-83 rounded-sm md:rounded-md bg-[#2E77F5] w-[40px] md:w-[70px] lg:w-[100px] h-[27px] md:h-[50px] lg:h-[70px] '>
                        </div> */}
                        <img src={rectangle2} className='absolute top-20 md:top-30 lg:top-38 md:-left-25 lg:-left-42 rounded h-auto w-[210px] md:w-[350px] lg:w-[520px] max-w-none ' />
                    </div>
                </div>

                {/* Mobile Carousel */}
                <div className="block md:hidden">
                    <div className="relative w-full flex justify-center items-center ">
                        {/* Wrapper for slides */}
                        <div className="relative h-[200px] w-[280px]">
                            {/* --- Slide 1 --- */}
                            <div
                                className={`absolute top-0 left-0 transition-opacity duration-700 w-full h-full flex justify-center items-center
          ${docIndex === 0 ? "opacity-100" : "opacity-0"}`}
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                                        <img src={shield} className="h-8" alt="shield" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[12px]">Secure</p>
                                        <p className="text-[12px]">Storage for Files</p>
                                    </div>
                                </div>
                            </div>

                            {/* --- Slide 2 --- */}
                            <div
                                className={`absolute top-0 left-0 transition-opacity duration-700 w-full h-full flex justify-center items-center
          ${docIndex === 1 ? "opacity-100" : "opacity-0"}`}
                            >
                                <img
                                    src={rectangle1}
                                    className="h-auto w-[200px] max-w-none"
                                    alt="rectangle1"
                                />
                            </div>

                            {/* --- Slide 3 --- */}
                            <div
                                className={`absolute top-0 left-0 transition-opacity duration-700 w-full h-full flex justify-center items-center
          ${docIndex === 2 ? "opacity-100" : "opacity-0"}`}
                            >
                                <img
                                    src={rectangle2}
                                    className="rounded h-auto w-[200px] max-w-none"
                                    alt="rectangle2"
                                />
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="absolute bottom-3 flex space-x-2">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className={`w-1 h-1 rounded-full ${docIndex === i ? "bg-blue-600" : "bg-gray-400"
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            {/* Explore Our Features */}
            <div className='bg-[#F5F9FE]'>
                <p className='text-[22px] md:text-[36px] lg:text-[48px] text-[#0E1836] text-center pt-11 md:pt-15 lg:pt-30'>Explore Our Features</p>
                <div className='flex flex-wrap justify-center gap-x-8 md:gap-x-5 lg:gap-x-10 gap-y-7 md:gap-y-12 lg:gap-y-14 py-4 md:py-8 lg:py-12 md:px-6 lg:px-25'>
                    <Features link='/feature1page' name='File Upload & Storage' />
                    <Features link='/feature2page' name='Smart Tagging' />
                    <Features link='/feature3page' name='Document Version Control' />
                    <Features link='/feature4page' name='Expiry Date Tracking' />
                    <Features link='/feature5page' name='Role-Based Sharing' />
                    <Features link='/feature6page' name='Digital Signature Support' />
                    <Features link='/feature7page' name='AI-Integrated Tools' />
                    <Features link='/feature8page' name='Plagiarism Checker' />
                    <Features link='/feature9page' name='Image & Visual Tools' />
                    <Features link='/feature10page' name='Document Builder' />
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Feature
