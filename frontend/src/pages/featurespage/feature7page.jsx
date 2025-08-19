import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/featurespage/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature7page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='AI-Integrated Tools'
        description='Powered by ChatGPT, DocShift’s AI tools revolutionize content creation'
      />

      <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
        <p className='text-[20px] md:text-[58px] font-bold text-center '>Benefits include</p>
        <div>
          <Subfeature name='Report Generation' description='Create professional reports from bullet points or prompts.' />
          <Subfeature name='Content Rewriting' description='Adjust tone (formal, academic, conversational) or rewrite for clarity.' />
          <Subfeature name='Smart Summarization' description=' Condense lengthy documents into concise summaries.' />
          <Subfeature name='Auto-Fill Templates' description='AI suggests content for CVs, invoices, or legal documents.' />
        </div>
      </div>

      <StoragePlan subtext='See Pricing for' name='Document Builder' description='These tools save hours of manual work, making them ideal for startups and content agencies.' />
      <Footer />
    </>
  )
}

export default feature7page
