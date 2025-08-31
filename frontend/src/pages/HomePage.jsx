import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import WhyDocShift from '../components/WhyDocShift'
import HomeTools from '../components/HomeTools'
import HowDocShift from '../components/HowDocShift';
import Testimonials from '../components/Testimonials';
import ConnectwithUs from '../components/ConnectwithUs';
import Footer from '../components/Footer'

import homeImage from '../assets/images/herosection.png'
import image from '../assets/images/image.jpg'
import logo2 from '../assets/icons/logo-2.png'
import homeImage2 from '../assets/images/mainsection.png'
import circle1 from '../assets/images/homeimages/Group 6.png'
import circle2 from '../assets/images/homeimages/Group 7.png'
import circle3 from '../assets/images/homeimages/Group 8.png'
import circle4 from '../assets/images/homeimages/Group 9.png'
import circle5 from '../assets/images/homeimages/Group 10.png'
import rectangle1 from '../assets/images/homeimages/Rectangle1.png'
import rectangle2 from '../assets/images/homeimages/Rectangle2.png'
import rectangle3 from '../assets/images/homeimages/Rectangle3.png'
import rectangle4 from '../assets/images/homeimages/Rectangle4.png'
import rectangle5 from '../assets/images/homeimages/Rectangle5.png'
import rectangle6 from '../assets/images/homeimages/Rectangle6.png'
import feature1 from "../assets/icons/Upload & Organize 1.png"
import feature2 from "../assets/icons/Edit & Convert 1.png"
import feature3 from "../assets/icons/Collaborate Securely 1.png"
import feature4 from "../assets/icons/Ensure Compliance 1.png"
import feature5 from "../assets/icons/Integrate Seamlessly 1.png"
import customer1 from "../assets/images/homeimages/customer1.png"
import customer2 from "../assets/images/homeimages/customer2.png"
import customer3 from "../assets/images/homeimages/customer3.png"


const testimonialsData = [
  {
    profile: customer1,
    content:
      "“As a startup, we needed affordable tools without compromising quality. DocShift’s AI writing and PDF tools are a game-changer.”",
    name: "Rajesh Kumar",
    about: "Founder, TechTrend Innovations",
  },
  {
    profile: customer2,
    content:
      "“DocShift transformed our legal practice. We now manage contracts, NDAs, and client documents in one secure platform, saving hours each week.”",
    name: "Priya Sharma",
    about: "Partner, Sharma & Associates",
  },
  {
    profile: customer3,
    content:
      "“The plagiarism checker and secure storage make DocShift perfect for our university’s academic workflows.”",
    name: "Dr. Anita Desai",
    about: "Dean, City University",
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000); // rotate every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar bgColor='bg-[#0E1836] ' />

      {/* Hero Section */}
      <div className='bg-[#0E1836] flex flex-col md:flex-row px-8 md:px-12 lg:px-30 pt-26 md:pt-30 lg:pt-45 pb-15 lg:pb-35 '>
        <div className='text-[#FFFFFF] '>
          <p className='text-[34px] md:text-[40px] lg:text-[65px] leading-10 md:leading-11 lg:leading-20 '>AI-Powered Document Management Platform</p>
          <p className='text-[12px] md:text-[14px] lg:text-[19px] my-4 md:my-5 lg:my-9 mr-9 md:mr-19 lg:mr-60 md:leading-6 lg:leading-9 '>DocShift is a powerful suite of tools designed to streamline your workflow and boost your productivity. From AI-powered writing assistance to advanced plagiarism detection.</p>
          <button className='w-[100px] md:w-[130px] lg:w-[150px] h-[30px] md:h-[40px] lg:h-[45px] bg-[#FD6B70] rounded-sm text-[13px] md:text-[17px] lg:text-[18px] '>Get Started</button>
        </div>
        <img src={homeImage} alt="Hero" className='w-[220px] md:w-[240px] lg:w-[500px] h-full mt-12 md:mt-10 lg:mt-5 mx-auto ' />
      </div>

      {/* Why DocShift Stands Out */}
      <div className='bg-[#F5F9FE] px-8 md:px-20 lg:px-30 pb-15 md:pb-30'>
        <div className='text-[#0E1836] text-center py-10 md:py-13 lg:py-16'>
          <p className='text-[28px] md:text-[40px] lg:text-[48px] '>Why DocShift Stands Out</p>
          <p className='text-[11px] md:text-[14px] lg:text-[15px] leading-4.5 lg:leading-5 '>DocShift is more than a document management system (DMS)<br/>—it’s a comprehensive ecosystem designed to<br/> address modern document challenges.</p>
        </div>

        <div className='flex flex-wrap justify-center bg-white text-[#0E1836] rounded-lg pb-10 lg:pb-23 mb-10 lg:mb-18'>
          <WhyDocShift logo={circle1} title='Unified Platform' content='Replace multiple tools with one solution for PDF editing, AI content creation, plagiarism checks, and secure storage.' />
          <WhyDocShift logo={circle2} title='Cost Savings' content='Eliminate the need for multiple subscriptions by consolidating tools into one affordable plan.' />
          <WhyDocShift logo={circle3} title='Scalability' content='From solo freelancers to large corporates, DocShift adapts to your needs with flexible plans and integrations.' />
          <WhyDocShift logo={circle4} title='Enterprise-Grade Security' content=' Meet ISO, HIPAA, and GDPR standards with AES-256 encryption, role-based access, and detailed audit logs.' />
          <WhyDocShift logo={circle5} title='AI-Powered Efficiency' content='Leverage ChatGPT-powered tools for report generation, content rewriting, and summarization, saving hours of manual work.' />
        </div>

        <div className='flex flex-wrap gap-y-5 md:gap-y-15 lg:gap-y-25 justify-center '>
          <HomeTools image={rectangle1} subtitle='Fragmented Tools' title='Fragmented Tools' content='Instead of juggling iLovePDF for conversions, Grammarly for editing, and Dropbox for storage, DocShift centralizes everything.' />
          <HomeTools image={rectangle2} subtitle='Data Privacy Risks' title='Data Privacy Risks' content='Public tools often compromise security. DocShift’s encrypted storage and secure sharing links protect sensitive data.' className='md:flex-row-reverse ' />
          <HomeTools image={rectangle3} subtitle='Time-Intensive Tasks' title='Time-Intensive Tasks' content='Manual report writing and formatting are time-consuming. DocShift’s AI tools automate these processes, boosting productivity.' />
          <HomeTools image={rectangle4} subtitle='Compliance Challenges' title='Compliance Challenges' content='Meet regulatory requirements with built-in ISO, HIPAA, and GDPR compliance features.' className='md:flex-row-reverse' />
          <HomeTools image={rectangle5} subtitle='Collaboration Barriers' title='Collaboration Barriers' content='Role-based sharing and real-time collaboration ensure teams work seamlessly, even across geographies.' />
        </div>
      </div>

      {/* How DocShift Works */}
      <div className='bg-[#0D1632] text-[#FFFFFF] text-center px-8 lg:px-22 py-10 md:py-16'>
        <p className='text-[30px] md:text-[38px] lg:text-[47px] md:-mb-3 '>How DocShift Works</p>
        <p className='text-[10px] md:text-[15px] pt-2 pb-5 md:pb-7'>DocShift’s workflow is designed for simplicity and power:</p>

        <div className='flex flex-wrap justify-center md:gap-4 lg:gap-7'>
          <HowDocShift logo={feature1} title='Upload & Organize' content='Securely upload files to encrypted folders using drag-and-drop. Organize with AI-driven smart tagging for quick retrieval.' />
          <HowDocShift logo={feature2} title='Edit & Convert' content='Convert PDFs to Word, Excel, or JPG, merge files, or compress documents with one click. Use AI to generate or rewrite content.' />
          <HowDocShift logo={feature3} title='Collaborate Securely' content='Share files with role-based permissions (Admin, Manager, Employee) via expiring, password-protected links.' />
          <HowDocShift logo={feature4} title='Ensure Compliance' content='Track access with audit logs, set data retention rules, and meet global compliance standards.' />
          <HowDocShift logo={feature5} title='Integrate Seamlessly' content=' Connect with Google Drive, Dropbox, Zapier, or custom APIs for a tailored workflow.' />
        </div>
      </div>

      {/* Who uses Docshift */}
      <div className='flex h-[330px] md:h-[580px] lg:h-[650px]' >
        <div className='bg-[#0D1632] md:w-[280px] lg:w-[550px] ml-4 md:ml-10 lg:ml-30 px-3 md:px-6 pt-6 md:pt-6 '>
          <p className='text-[#FD6B70] text-[6px] md:text-[12px] '>Who Uses DocShift ?</p>
          <p className='text-[#EEAC5F] text-[12px] md:text-[30px] lg:text-[42px] mt-1 '>Who Uses DocShift ?</p>
          <p className='text-[#C0C0C0] text-[9px] md:text-[13px] lg:text-[18px] '>DocShift serves a diverse range of<br />industries.</p>
          <div className='text-[#C0C0C0] text-[10px] md:text-[18px] pt-7 md:pt-10 space-y-3 md:space-y-8 lg:space-y-11 '>
            {/* <p>Get Started</p> */}
            <div className='flex items-center gap-2 md:gap-5 '>
              <img src={logo2} className='w-[20px] md:w-[25px] lg:w-[33px] h-[20px] md:h-[25px] lg:h-[35px] ' /><p>Get Started</p>
            </div>
            <p>Free Trial</p>
            <p>Free Trial</p>
            <p>14 - Days Trial</p>
            <p>No Credit Card Required</p>
            <button className='bg-[#FD6B70] rounded h-[23px] md:h-[50px] w-[110px] md:w-[230px] lg:w-[320px] text-[11px] md:text-[19px] text-white '>Start Free Trial</button>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='px-5 md:px-8 lg:px-16 pt-7 md:pt-10 lg:pt-15'>
            <p className='text-[#0E1836] text-[18px] md:text-[30px] lg:text-[40px] pb-1 lg:pb-2 ' >Get Started with DocShift</p>
            <p className='text-[8px] md:text-[13px] lg:text-[20px] '>Ready to simplify your document workflows? Explore DocShift’s features, request a demo, or start with a free trial today.</p>
          </div>
          <div className='relative '>
            <img src={homeImage2} className='absolute w-[160px] md:w-[350px] lg:w-[550px] h-auto -top-13 md:-top-35 lg:-top-55 left-6 md:left-18 lg:left-50 ' />
            <img src={rectangle6} className='absolute rounded-md md:rounded-xl border border-white w-[65px] md:w-[140px] lg:w-[200px] h-auto top-6 md:top-8 lg:top-10 left-5 md:left-13 lg:left-40  ' />
          </div>
          <div className='bg-[#0D1632] h-[20px] lg:h-[25px] w-full '></div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className='text-[#FFFFFF] bg-[#18233F] flex flex-col items-center py-8 md:py-15 h-[370px] md:h-[540px] lg:h-[600px] '>
        <p className='text-[28px] md:text-[40px] lg:text-[50px] '>Customer Testimonials</p>
        <p className='text-[10px] md:text-[14px] md:mt-1 md:mb-25 '>DocShift: Smart Document Management Made Simple.</p>

        {/* md: above view without Carousel */}
        <div className='hidden lg:block'>
          <div className=' flex flex-col md:flex-row gap-12 md:gap-20  '>
            <Testimonials
              profile={customer1}
              content='“As a startup, we needed affordable tools without compromising quality. DocShift’s AI writing and PDF tools are a game-changer.”'
              name='Rajesh Kumar'
              about='Founder, TechTrend Innovations'
            />
            <Testimonials
              profile={customer2}
              content='“DocShift transformed our legal practice. We now manage contracts, NDAs, and client documents in one secure platform, saving hours each week.”'
              name='Priya Sharma'
              about='Partner, Sharma & Associates'
            />
            <Testimonials
              profile={customer3}
              content='“The plagiarism checker and secure storage make DocShift perfect for our university’s academic workflows.”'
              name='Dr. Anita Desai'
              about='Dean, City University'
            />
          </div>
        </div>

        {/* mobile view Carousel*/}
        <div className="lg:hidden relative w-full flex justify-center items-center h-[250px] md:h-[180px]">
          {testimonialsData.map((item, index) => {
            // check position relative to activeIndex
            let position = "opacity-0 scale-75 translate-x-0"; // hidden by default

            if (index === activeIndex) {
              position = "opacity-100 scale-90 z-20"; // center one
            } else if (index === (activeIndex + 1) % testimonialsData.length) {
              position = "opacity-50 scale-70 translate-x-1/2 md:translate-x-2/3 z-10"; // right faded
            } else if (
              index ===
              (activeIndex - 1 + testimonialsData.length) % testimonialsData.length
            ) {
              position = "opacity-50 scale-70 -translate-x-1/2 md:-translate-x-2/3 z-10"; // left faded
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out ${position}`}
              >
                <Testimonials
                  profile={item.profile}
                  content={item.content}
                  name={item.name}
                  about={item.about}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ConnectwithUs />

      <Footer />
    </>
  )
}

export default Home
