import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/featurespage/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature9page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Image & Visual Tools'
        description='Enhance visuals with DocShift’s image processing tools'
      />

      <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
        <p className='text-[20px] md:text-[58px] font-bold text-center '>Benefits include</p>
        <div>
          <Subfeature name='Background Removal' description='Use Remove.bg API to remove image backgrounds.' />
          <Subfeature name='OCR Extraction' description='Convert images to editable text with Tesseract.js.' />
          <Subfeature name='Format Conversion' description=' Turn images into PDFs or resize/crop for documents.' />
          <Subfeature name='Auto-Enhancement' description='Adjust brightness, contrast, or resolution.' />
        </div>
      </div>

      <StoragePlan subtext='Learn About' name='Integrations' description='Perfect for designers and content creators needing professional visuals.' />
      <Footer />
    </>
  )
}

export default feature9page
