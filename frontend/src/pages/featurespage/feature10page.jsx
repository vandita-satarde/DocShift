import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature10page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Document Builder'
        description='Create professional documents with ease using customizable templates.'
      />

      <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
                <p className='text-[20px] md:text-[58px] font-bold text-center '>Benefits include</p>
        <div>
          <Subfeature name='Pre-Designed Templates' description='CVs, resumes, invoices, NDAs, MoUs, and more.' />
          <Subfeature name='Drag-and-Drop Editor' description='Customize layouts without coding.' />
          <Subfeature name='AI Assistance' description=' Auto-fill missing sections with ChatGPT-powered suggestions.' />
          <Subfeature name='Export Options' description='Save as PDF, Word, or share directly.' />
        </div>
      </div>

      <StoragePlan subtext='See Templates in' name='Action' description='Ideal for freelancers, startups, and legal professionals.' />
      <Footer />
    </>
  )
}

export default feature10page
