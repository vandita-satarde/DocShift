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


const  testimonialsData = [
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
      <Navbar />

      {/* Hero Section */}
      <div className='bg-[#0E1836] flex flex-col md:flex-row h-[590px] md:h-[625px] px-8 md:px-30 py-8 md:py-18 mt-[80px] md:mt-[105px] '>
        <div className='text-[#FFFFFF] '>
          <p className='text-[34px] md:text-[65px] md:leading-20 '>AI-Powered Document Management Platform</p>
          <p className='text-[12px] md:text-[19px] my-4 md:my-9 mr-1 md:mr-60 md:leading-9 '>DocShift is a powerful suite of tools designed to streamline your workflow and boost your productivity. From AI-powered writing assistance to advanced plagiarism detection.</p>
          <button className='w-[100px] md:w-[150px] h-[30px] md:h-[45px] bg-[#FD6B70] rounded-sm text-[13px] md:text-[18px] '>Get Started</button>
        </div>
        <img src={homeImage} alt="Hero" className='w-[180px] md:w-[500px]  md:h-[370px] mt-10 mx-auto  md:mt-5 ' />
      </div>

      {/* Why DocShift Stands Out */}
      <div className='bg-[#F5F9FE] px-8 md:px-30 pb-15 md:pb-30'>
        <div className='text-[#0E1836] text-center py-16'>
          <p className='text-[28px] md:text-[48px] '>Why DocShift Stands Out</p>
          <p className='text-[11px] md:text-[15px] md:px-100'>DocShift is more than a document management system (DMS)—it’s a comprehensive ecosystem designed to address modern document challenges.</p>
        </div>

        <div className='flex flex-wrap justify-center bg-white text-[#0E1836] rounded-lg pb-10 md:pb-23 mb-10 md:mb-18'>
          <WhyDocShift logo={circle1} title='Unified Platform' content='Replace multiple tools with one solution for PDF editing, AI content creation, plagiarism checks, and secure storage.' />
          <WhyDocShift logo={circle2} title='Cost Savings' content='Eliminate the need for multiple subscriptions by consolidating tools into one affordable plan.' />
          <WhyDocShift logo={circle3} title='Scalability' content='From solo freelancers to large corporates, DocShift adapts to your needs with flexible plans and integrations.' />
          <WhyDocShift logo={circle4} title='Enterprise-Grade Security' content=' Meet ISO, HIPAA, and GDPR standards with AES-256 encryption, role-based access, and detailed audit logs.' />
          <WhyDocShift logo={circle5} title='AI-Powered Efficiency' content='Leverage ChatGPT-powered tools for report generation, content rewriting, and summarization, saving hours of manual work.' />
        </div>

        <div className='flex flex-wrap md:gap-x-41 gap-y-5 md:gap-y-20 justify-center '>
          <HomeTools image={rectangle1} subtitle='Fragmented Tools' title='Fragmented Tools' content='Instead of juggling iLovePDF for conversions, Grammarly for editing, and Dropbox for storage, DocShift centralizes everything.' className='text-center md:text-left items-center' img='w-80 h-full' />
          <HomeTools image={rectangle2} subtitle='Data Privacy Risks' title='Data Privacy Risks' content='Public tools often compromise security. DocShift’s encrypted storage and secure sharing links protect sensitive data.' className='md:flex-row-reverse text-center md:text-left items-center' img='w-80 h-full' />
          <HomeTools image={rectangle3} subtitle='Time-Intensive Tasks' title='Time-Intensive Tasks' content='Manual report writing and formatting are time-consuming. DocShift’s AI tools automate these processes, boosting productivity.' className='text-center md:text-left items-center' img='w-80 h-full' />
          <HomeTools image={rectangle4} subtitle='Compliance Challenges' title='Compliance Challenges' content='Meet regulatory requirements with built-in ISO, HIPAA, and GDPR compliance features.' className='md:flex-row-reverse text-center md:text-left items-center' img='w-80 h-full' />
          <HomeTools image={rectangle5} subtitle='Collaboration Barriers' title='Collaboration Barriers' content='Role-based sharing and real-time collaboration ensure teams work seamlessly, even across geographies.' className='text-center md:text-left items-center' img='w-80 h-full' />
        </div>
      </div>

      {/* How DocShift Works */}
      <div className='bg-[#0D1632] text-[#FFFFFF] text-center px-8 md:px-22 py-10 md:py-30'>
        <p className='text-[30px] md:text-[50px] '>How DocShift Works</p>
        <p className='text-[10px] md:text-[15px] pt-2 pb-14'>DocShift’s workflow is designed for simplicity and power:</p>

        <div className='flex flex-wrap justify-center gap-7'>
          <HowDocShift logo={feature1} title='Upload & Organize' content='Securely upload files to encrypted folders using drag-and-drop. Organize with AI-driven smart tagging for quick retrieval.' />
          <HowDocShift logo={feature2} title='Edit & Convert' content='Convert PDFs to Word, Excel, or JPG, merge files, or compress documents with one click. Use AI to generate or rewrite content.' />
          <HowDocShift logo={feature3} title='Collaborate Securely' content='Share files with role-based permissions (Admin, Manager, Employee) via expiring, password-protected links.' />
          <HowDocShift logo={feature4} title='Ensure Compliance' content='Track access with audit logs, set data retention rules, and meet global compliance standards.' />
          <HowDocShift logo={feature5} title='Integrate Seamlessly' content=' Connect with Google Drive, Dropbox, Zapier, or custom APIs for a tailored workflow.' />
        </div>
      </div>

      {/* Who uses Docshift */}
      <div className='flex ' >
        <div className='bg-[#0D1632] h-[350px] md:h-[1020px] w-[350px] md:w-[700px] ml-4 md:ml-30 pl-3 md:pl-13 pt-6 md:pt-22 '>
          <p className='text-[#FD6B70] text-[6px] md:text-[15px] '>Who Uses DocShift ?</p>
          <p className='text-[#EEAC5F] text-[12px] md:text-[48px] md:pt-2 pb-1 md:pb-3 '>Who Uses DocShift ?</p>
          <p className='text-[#C0C0C0] text-[9px] md:text-[19px] '>DocShift serves a diverse range of<br />industries.</p>
          <div className='text-[#C0C0C0] text-[10px] md:text-[21px] pt-7 md:pt-20 space-y-3 md:space-y-13 '>
            <p>Get Started</p>
            <div className='flex items-center gap-2 md:gap-5 '>
              <img src={logo2} className='w-[20px] md:w-[42px] h-[20px] md:h-[45px] ' /><p>Get Started</p>
            </div>
            <p>Free Trial</p>
            <p>Free Trial</p>
            <p>14 - Days Trial</p>
            <p>No Credit Card Required</p>
            <button className='bg-[#FD6B70] rounded h-[23px] md:h-[50px] w-[110px] md:w-[320px] text-[11px] md:text-[19px] text-white '>Start Free Trial</button>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='px-5 md:px-20 pt-7 md:pt-30'>
            <p className='text-[#0E1836] text-[18px] md:text-[40px] pb-1 md:pb-8 ' >Get Started with DocShift</p>
            <p className='text-[8px] md:text-[20px] '>Ready to simplify your document workflows? Explore DocShift’s features, request a demo, or start with a free trial today.</p>
          </div>
          <div className='relative '>
            <img src={homeImage2} className='absolute w-[160px] md:w-[740px] md:h-[480px] -top-13 md:-top-65 left-6 md:left-25 ' />
            <img src={rectangle6} className='absolute rounded-md md:rounded-xl border border-white w-[65px] md:w-[300px] h-[42px] md:h-[200px] top-6 md:top-25 left-5 md:left-20  ' />
          </div>
          <div className='bg-[#0D1632] h-[20px] md:h-[45px] w-full '></div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className='text-[#FFFFFF] bg-[#18233F] flex flex-col items-center py-10 md:py-30 md:h-[700px] '>
        <p className='text-[28px] md:text-[50px] '>Customer Testimonials</p>
        <p className='text-[10px] md:text-[14px] md:mt-1 md:mb-25 '>DocShift: Smart Document Management Made Simple.</p>
        
        {/* md: above view without Carousel */}
        <div className='hidden md:block'>
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
        <div className="md:hidden relative w-full flex justify-center items-center h-[300px]">
        {testimonialsData.map((item, index) => {
          // check position relative to activeIndex
          let position = "opacity-0 scale-75 translate-x-0"; // hidden by default

          if (index === activeIndex) {
            position = "opacity-100 scale-90 z-20"; // center one
          } else if (index === (activeIndex + 1) % testimonialsData.length) {
            position = "opacity-50 scale-70 translate-x-1/2 z-10"; // right faded
          } else if (
            index ===
            (activeIndex - 1 + testimonialsData.length) % testimonialsData.length
          ) {
            position = "opacity-50 scale-70 -translate-x-1/2 z-10"; // left faded
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
