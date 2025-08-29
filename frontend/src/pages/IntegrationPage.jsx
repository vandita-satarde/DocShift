import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import UseCases from '../components/usecasespage/usecases'
import Footer from '../components/Footer'

import salesman from '../assets/images/integrationimages/salesman.png'
import integration1 from '../assets/images/integrationimages/integration1.png'
import integration2 from '../assets/images/integrationimages/integration2.png'
import integration3 from '../assets/images/integrationimages/integration3.png'
import integration4 from '../assets/images/integrationimages/integration4.png'
import integration5 from '../assets/images/integrationimages/integration5.png'


function IntegrationPage() {
    return (
        <>
            <Navbar />

            {/* hero section */}
            <div className='flex mt-[79px] md:mt-[109px] md:h-[700px] '>
                <div className=' bg-[#F5F9FE]'>
                    <div className='p-4 md:p-15 h-full bg-[#0D1632] rounded-br-xl md:rounded-br-4xl '>
                        <img src={salesman} className='w-50 md:w-146.5' />
                    </div>
                </div>
                <div className=' bg-[#0D1632]'>
                    <div className='p-2 md:p-12 h-full text-[#0E1836] bg-[#F5F9FE] py-3 md:py-26 rounded-tl-xl md:rounded-tl-4xl '>
                        <p className='text-[14px] md:text-[82px] leading-4 md:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                        <p className='text-[8px] md:text-[19px] my-2 md:my-9 leading-2.5 md:leading-9 md:tracking-wider'>DocShift is a powerful suite of tools designed to streamline your<br /> workflow and boost your productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                        <a href='#integration'>
                            <button className='w-[110px] md:w-[290px] h-[23px] md:h-[65px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[9px] md:text-[23px] mt-2 md:mt-9 cursor-pointer'>Explore Your Integration</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* integrations */}
            <div id='integration' className=' bg-[#F5F9FE] text-center'>
                <p className='text-[20px] md:text-[48px] pt-18 md:pt-45 md:mb-1 '>Industry Use Cases</p>
                <p className='text-[9px] md:text-[15px] tracking-wide w-[240px] md:w-[560px] mx-auto'>DocShift integrates with popular tools and platforms to fit seamlessly into your existing workflows.</p>
                <div className=' mx-10 md:mx-30 py-6 md:py- flex flex-col space-y-2 md:space-y-10 '>
                    <Link to='/integration1page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl ' image={integration1} img='rounded-none ' name='Google Drive' subcontent='Sync Documents with Google Drive' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                    <Link to='/integration2page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl flex-row-reverse' image={integration2} img='rounded-none' name='Dropbox' subcontent='Integrate with Dropbox for Additional Storage' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                    <Link to='/integration3page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl' image={integration3} img='rounded-none' name='Email Upload' subcontent='Upload Documents Directly via Email' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                    <Link to='/integration4page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl flex-row-reverse' image={integration4} img='rounded-none' name='Zapier' subcontent='Automate Workflows with Zapier' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                    <Link to='/integration5page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl' image={integration5} img='rounded-none' name='APIs for Custom Portals' subcontent='Build Custom Integrations with DocShift’s API' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default IntegrationPage
