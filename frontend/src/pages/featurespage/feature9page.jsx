import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature9page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Image & Visual Tools'
        description='Enhance visuals with DocShift’s image processing tools'
        featuresTitle='Benefits include'
      />

      <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-30'>
        <Subfeature name='Background Removal' description='Use Remove.bg API to remove image backgrounds.' />
        <Subfeature name='OCR Extraction' description='Convert images to editable text with Tesseract.js.' />
        <Subfeature name='Format Conversion' description=' Turn images into PDFs or resize/crop for documents.' />
        <Subfeature name='Auto-Enhancement' description='Adjust brightness, contrast, or resolution.' />
      </div>

      <StoragePlan subtext='Learn About' name='Integrations' description='Perfect for designers and content creators needing professional visuals.' />
      <Footer />
    </>
  )
}

export default feature9page
