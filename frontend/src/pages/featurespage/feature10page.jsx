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
        featuresTitle='Benefits include'
      />

      <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-30'>
        <Subfeature name='Pre-Designed Templates' description='CVs, resumes, invoices, NDAs, MoUs, and more.' />
        <Subfeature name='Drag-and-Drop Editor' description='Customize layouts without coding.' />
        <Subfeature name='AI Assistance' description=' Auto-fill missing sections with ChatGPT-powered suggestions.' />
        <Subfeature name='Export Options' description='Save as PDF, Word, or share directly.' />
      </div>

      <StoragePlan subtext='See Templates in' name='Action' description='Ideal for freelancers, startups, and legal professionals.' />
      <Footer />
    </>
  )
}

export default feature10page
