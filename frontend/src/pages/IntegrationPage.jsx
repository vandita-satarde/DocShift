import React from 'react'

import Navbar from '../components/Navbar'
import UseCases from '../components/usecasespage/usecases'
import Footer from '../components/Footer'

import salesman from '../assets/images/integrationimages/salesman.png'
import integration1 from '../assets/images/integrationimages/integration1.png'
import integration2 from '../assets/images/integrationimages/integration2.png'
import integration3 from '../assets/images/integrationimages/integration3.png'
import integration4 from '../assets/images/integrationimages/integration4.png'
import integration5 from '../assets/images/integrationimages/integration5.png'
import { Link } from 'react-router-dom'


function IntegrationPage() {
    return (
        <>
            <Navbar />

            {/* hero section */}
            <div className='bg-[#0D1632] flex pt-17 lg:pt-[84px] h-[260px] md:h-[470px] lg:h-[730px] '>
                <div className=' bg-[#F5F9FE] w-1/2'>
                    <div className='pl-4 md:pl-10 lg:pl-13 pt-9.5 md:pt-15 lg:pt-19.5 h-full bg-[#0D1632] rounded-br-xl md:rounded-br-4xl '>
                        <img src={salesman} className='w-35 md:w-78 lg:w-130' />
                    </div>
                </div>
                <div className=' bg-[#0D1632] w-1/2'>
                    <div className='p-3 md:p-6 lg:p-12 h-full text-[#0E1836] bg-[#F5F9FE] py-5 md:py-12 lg:py-26 rounded-tl-xl md:rounded-tl-4xl '>
                        <p className='text-[18px] md:text-[38px] lg:text-[82px] leading-5 md:leading-12 lg:leading-23 font-semibold tracking-widest '>DocShift:<br />Revolutionizing</p>
                        <p className='text-[8px] md:text-[17px] lg:text-[19px] my-2 md:my-3 lg:my-9 leading-2.5 md:leading-6 lg:leading-9 md:tracking-wider'>DocShift is a powerful suite of tools designed to streamline your<br /> workflow and boost your productivity. From Al-powered writing<br /> assistance to advanced plagiarism detection.</p>
                        <a href='#integration'>
                            <button className='w-[120px] md:w-[240px] lg:w-[290px] h-[23px] md:h-[46px] lg:h-[65px] bg-[#FD6B70] text-[#FFFFFF] rounded-sm text-[9px] md:text-[19px] lg:text-[23px] mt-2 md:mt-3 lg:mt-9 cursor-pointer'>Explore Your Integration</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* integrations */}
            <div id='integration' className=' bg-[#F5F9FE] text-center pt-13 md:pt-22 lg:pt-36'>
                <p className='text-[20px] md:text-[36px] lg:text-[48px] md:mb-1 '>Industry Use Cases</p>
                <p className='text-[9px] md:text-[15px] tracking-wide w-[240px] md:w-[500px] lg:w-[560px] mx-auto'>DocShift integrates with popular tools and platforms to fit seamlessly into your existing workflows.</p>
                <div className=' mx-7 md:mx-18 lg:mx-30 py-6 md:py-10 flex flex-col space-y-3 md:space-y-4 lg:space-y-10 '>
                    <Link to='/integration1page'>
                        <UseCases
                            maindiv='bg-[#F5F9FE] hover:shadow hover:shadow-2xl ' image={integration1} img='rounded-none ' name='Google Drive' subcontent='Sync Documents with Google Drive' showbutton={false}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                    </Link>
                    <Link to='/integration1page'>
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
