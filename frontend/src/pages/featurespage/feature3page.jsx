import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature3page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Document Version Control'
        description='Never lose track of document changes with DocShift’s version control system. Every edit is tracked, allowing you to revert to previous versions or compare changes.'
        featuresTitle='Feature include'
      />

      <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-30'>
        <Subfeature name='Timestamped History' description='View a complete log of edits with timestamps and user details.' />
        <Subfeature name='Conflict Detection' description='Prevent overwrite issues during collaborative editing.' />
        <Subfeature name='One-Click Revert' description='Restore older versions instantly.' />
        <Subfeature name='Version Comparison' description='Highlight differences between versions for easy review.' />
      </div>

      <StoragePlan subtext='Explore' name='Compliance Features' description='This feature is essential for legal firms and corporates managing iterative documents.' />
      <Footer />
    </>
  )
}

export default feature3page

