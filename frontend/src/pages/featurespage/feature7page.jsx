import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature7page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='AI-Integrated Tools'
        description='Powered by ChatGPT, DocShift’s AI tools revolutionize content creation'
        featuresTitle='Benefits include'
      />

      <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-30'>
        <Subfeature name='Report Generation' description='Create professional reports from bullet points or prompts.' />
        <Subfeature name='Content Rewriting' description='Adjust tone (formal, academic, conversational) or rewrite for clarity.' />
        <Subfeature name='Smart Summarization' description=' Condense lengthy documents into concise summaries.' />
        <Subfeature name='Auto-Fill Templates' description='AI suggests content for CVs, invoices, or legal documents.' />
      </div>

      <StoragePlan subtext='See Pricing for' name='Document Builder' description='These tools save hours of manual work, making them ideal for startups and content agencies.' />
      <Footer />
    </>
  )
}

export default feature7page
