import React from 'react'
import Navbar from '../components/Navbar'
import UseCases from '../components/usecasespage/usecases'
import Footer from '../components/Footer'

import usecase1 from '../assets/images/usecasesimages/usecase1.png'
import usecase2 from '../assets/images/usecasesimages/usecase2.png'
import usecase3 from '../assets/images/usecasesimages/usecase3.png'
import usecase4 from '../assets/images/usecasesimages/usecase4.png'
import usecase5 from '../assets/images/usecasesimages/usecase5.png'

function UsecasesPage() {
  return (
    <>
        <Navbar />
        <div className='bg-[#F5F9FE] text-[#0E1836] text-center px-3 md:px-30 py-14 md:py-18 mt-[68px] md:mt-[90px] '>

            {/* herosection */}
            <p className='text-[26px] md:text-[80px] font-semibold leading-9 md:leading-23 tracking-wider '>Discover DocShift’s<br/> Industry Use Cases</p>
            <p className='text-[12px] md:text-[22px] py-4 md:py-13 md:leading-11'>DocShift is more than a document management system (DMS)—it’s a comprehensive<br className='hidden md:block'/> ecosystem designed to address modern document challenges.</p>
            <button className='cursor-pointer w-[100px] md:w-[240px] h-[30px] md:h-[65px] bg-[#FD6B70] text-white text-[13px] md:text-[24px] rounded-sm '>Get Started</button>

            {/* industry use cases */}
            <p className='text-[20px] md:text-[48px] mt-20 md:mt-45 mb-1 '>Industry Use Cases</p>
            <p className='text-[9px] md:text-[15px] tracking-wide w-[240px] md:w-[560px] mx-auto'>DocShift is more than a document management system (DMS)—it’s a comprehensive ecosystem designed to address modern document challenges.</p>
            <div className='mx-8 md:mx-0 my-6 md:my-15 space-y-5 md:space-y-20'>
                <UseCases 
                    image={usecase1} name='CA Firms' subcontent='Streamline Your Operation' link='/usecase1page'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <UseCases 
                    image={usecase2} name='Legal Offices' subcontent='Streamline Your Operation' link='/usecase2page' maindiv='flex-row-reverse bg-white'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <UseCases 
                    image={usecase3} name='Medical Records' subcontent='Streamline Your Operation' link='/usecase3page' 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <UseCases 
                    image={usecase4} name='Corporates' subcontent='Streamline Your Operation' link='/usecase4page' maindiv='flex-row-reverse bg-white'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
                <UseCases 
                    image={usecase5} name='Educational Institutes' subcontent='Streamline Your Operation' link='/usecase5page'
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>

            <div className='w-[360px] md:w-[560px] mx-auto space-y-1 md:space-y-6 mt-14 md:mt-34 '>
                <p className='text-[19px] md:text-[55px] font-semibold md:leading-16 '>Ready to<br className='hidden md:block'/> Elevate Your</p>
                <p className='text-[9px] md:text-[14px] tracking-wider leading-3 md:leading-7 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className='w-[90px] md:w-[170px] h-[26px] md:h-[45px] text-white bg-[#FD6B70] rounded-4xl text-[11px] md:text-[20px] '>Get Started</button>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default UsecasesPage
