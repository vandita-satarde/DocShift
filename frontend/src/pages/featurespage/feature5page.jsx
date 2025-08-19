import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/featurespage/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature5page() {
  return (
    <>
      <Navbar />
      <FeaturesDetails
        name='Role-Based Sharing'
        description='Finding documents quickly is critical for productivity. DocShift’s AI-driven smart tagging automatically analyzes content and assigns metadata, such as project names, dates, or keywords.'
      />

      <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
        <p className='text-[20px] md:text-[58px] font-bold text-center '>Benefits include</p>
        <div>
          <Subfeature name='Unlimited Uploads' description=' Based on your plan, upload files without restrictions.' />
          <Subfeature name='Drag-and-Drop Interface' description='Organize files effortlessly in a user-friendly dashboard.' />
          <Subfeature name='Cross-Device Access' description=' Access files from desktops, tablets, or mobiles with real-time syncing.' />
          <Subfeature name='Backup & Recovery' description='Automatic backups ensure data safety, with one-click recovery options.' />
          <Subfeature name='Storage Scalability' description='Add storage via affordable add-ons for growing teams.' />
        </div>
      </div>

      <StoragePlan subtext='See Pricing for' name='Storage Plans' description='This feature is ideal for businesses needing secure, scalable storage without compromising accessibility.' />
      <Footer />
    </>
  )
}

export default feature5page
