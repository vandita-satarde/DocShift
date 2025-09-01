import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature8page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Plagiarism Checker'
        description='Ensure originality with DocShift’s integrated plagiarism scanner.'
        featuresTitle='Features include'
      />

      <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-30'>
        <Subfeature name='Source Detection' description=' Identify original sources with detailed reports.' />
        <Subfeature name='AI Rewriting Suggestions' description=' Rewrite flagged content to maintain originality.' />
        <Subfeature name='Exportable Reports' description=' Share plagiarism reports for academic or legal use.' />
        <Subfeature name='Batch Scanning' description=' Check multiple documents simultaneously.' />
      </div>

      <StoragePlan subtext='See Use Cases for' name='Education' description='Ideal for educational institutes and content agencies.' />
      <Footer />
    </>
  )
}

export default feature8page
