import React from 'react'
import Navbar from '../components/Navbar'
import Compliance from '../components/securitycomponents/compliance'
import Permission from '../components/securitycomponents/permission'
import Footer from '../components/Footer'

import circle1 from '../assets/images/securityimages/circle1.png'
import circle2 from '../assets/images/securityimages/circle2.png'
import circle3 from '../assets/images/securityimages/circle3.png'
import circle4 from '../assets/images/securityimages/circle4.png'
import circle5 from '../assets/images/securityimages/circle5.png'
import Rectangle1 from '../assets/images/securityimages/Rectangle1.png'
import iso from '../assets/images/securityimages/iso.png'
import hipaa from '../assets/images/securityimages/hipaa.png'
import gdpr from '../assets/images/securityimages/gdpr.png'
import permission1 from '../assets/images/securityimages/permission1.png'
import permission2 from '../assets/images/securityimages/permission2.png'
import permission3 from '../assets/images/securityimages/permission3.png'

function SecurityPage() {
    return (
        <>
            <Navbar />

            {/* herosection */}
            <div className='bg-[#F5F9FE] text-[#0E1836] text-center px-3 md:px-30 py-14 md:py-18 mt-[80px] md:mt-[110px] '>
                <p className='text-[26px] md:text-[75px] font-semibold leading-8 md:leading-23 tracking-wider '> Enterprise-Grade<br/> Security and Compliance</p>
                <p className='text-[12px] md:text-[24px] py-4 md:py-13 md:leading-11'>DocShift is more than a document management system (DMS)—it’s a comprehensive<br/> ecosystem designed to address modern document challenges.</p>
                <button className='cursor-pointer w-[100px] md:w-[240px] h-[30px] md:h-[65px] bg-[#FD6B70] text-white text-[13px] md:text-[24px] rounded-sm '>Get Started</button>
                <div className='flex text-left mt-15 gap-40 text-[17px] text-[#000000CC] leading-9 tracking-widest'>
                    <p>Instead of juggling iLovePDF for storage, DocShift centralizes everything.</p>
                    <p>Instead of juggling iLovePDF for storage, DocShift centralizes everything.</p>
                    <p>Instead of juggling iLovePDF for storage, DocShift centralizes everything.</p>
                </div>
            </div>

            {/* compliance & security */}
            <div className='text-white bg-[#0D1632] text-center py-10 '>
                <p className='text-[45px] '>Compliance & Security</p>
                <p className='text-[15px] '>DocShift is more than a document management system (DMS)—it’s a<br/> comprehensive ecosystem designed to address modern document challenges.</p>
                <div className='py-14 flex flex-wrap justify-center gap-18 '>
                    <Compliance 
                        image={circle1}
                        name='Document Access Logs'
                        subcontent='Track Every Interaction with Detailed Audit Logs'
                        content='DocShift’s document access logs provide a comprehensive record of who accessed, viewed, edited, or shared your documents, ensuring transparency and compliance.'
                    />
                    <Compliance 
                        image={circle2}
                        name='Permission Groups'
                        subcontent='Control Access with Granular Permissions'
                        content='DocShift’s permission groups allow you to assign roles (Admin, Manager, Employee) to control who can view, edit, or download documents.'
                    />
                    <Compliance 
                        image={circle3}
                        name='ISO / HIPAA / GDPR Ready'
                        subcontent='Meet Global Compliance Standards'
                        content='DocShift is designed to comply with ISO 27001, HIPAA, and GDPR, ensuring your documents meet regulatory requirements.'
                    />
                    <Compliance 
                        image={circle4}
                        name='Data Retention Rules'
                        subcontent='Automate Compliance with Retention Policies'
                        content='Set retention periods for documents to comply with regulatory requirements or internal policies.'
                    />
                    <Compliance 
                        image={circle5}
                        name='Secure Sharing Links'
                        subcontent='Share Documents with Confidence'
                        content='Share documents securely with expiring, password-protected links.'
                    />
                </div>
            </div>

            {/* Document Access Logs */}
            <div className='bg-[#F5F9FE] text-[#0E1836] tracking-wider text-center p-30'>
                <p className='text-[48px] '>Document Access Logs</p>
                <p className='text-[16px] '>Track Every Interaction with Detailed Audit Logs</p>
                <div className='flex py-15 gap-10 '>
                    <img src={Rectangle1} className='w-[620px] ' />
                    <div className='space-y-15'>
                        <div className='border px-8 py-4 rounded-lg flex justify-center items-center gap-9'>
                            <img src={iso} className='w-20 h-20' />
                            <div className='text-left space-y-1'>
                                <p className='text-[32px] '>ISO</p>
                                <p className='text-[23px] leading-6 '>Adheres to information security management standards.</p>
                            </div>
                        </div>
                        <div className='border px-8 py-4 rounded-lg flex justify-center items-center gap-9'>
                            <img src={hipaa} className='w-20 h-20' />
                            <div className='text-left space-y-1'>
                                <p className='text-[32px] '>HIPAA</p>
                                <p className='text-[23px] leading-6 '>Protects patient data with encrypted storage and access logs.</p>
                            </div>
                        </div>
                        <div className='border px-8 py-4 rounded-lg flex justify-center items-center gap-9'>
                            <img src={gdpr} className='w-20 h-20' />
                            <div className='text-left space-y-1'>
                                <p className='text-[32px] '>GDPR</p>
                                <p className='text-[23px] leading-6 '>Supports data subject rights, including data deletion and portability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Permission 
                name='Permission Groups'
                subtext='Control Access with Granular Permissions'
                image={permission1}
            />
            <Permission 
                bgColor='bg-[#F5F9FE]'
                name='Data Retention Rules'
                subtext='Automate Compliance with Retention Policies'
                image={permission2}
            />
            <Permission 
                name='Secure Sharing Links'
                subtext='Share Documents with Confidence'
                image={permission3}
            />

            <Footer/>
        </>
    )
}

export default SecurityPage
