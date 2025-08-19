import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/featurespage/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature4page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Expiry Date Tracking'
        description='Manage sensitive documents with DocShift’s expiry date tracking. Set expiration dates for contracts, NDAs, or temporary files, and receive automated alerts.'
      />

      <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
        <p className='text-[20px] md:text-[58px] font-bold text-center '>Key Features</p>
        <div>
          <Subfeature name='Custom Expiry Periods' description='Set expiration for days, weeks, or months.' />
          <Subfeature name='Auto-Archive/Delete' description='Automatically archive or delete expired files based on retention rules.' />
          <Subfeature name='Notifications' description=' Get email or dashboard alerts before expiration.' />
          <Subfeature name='Compliance Support' description='Align with regulatory requirements for data retention.' />
        </div>
      </div>

      <StoragePlan subtext='See Security Feature' name='Security Feature' description='This ensures compliance and reduces manual oversight for time-sensitive documents.' />
      <Footer />
    </>
  )
}

export default feature4page
