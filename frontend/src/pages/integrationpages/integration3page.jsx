import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function integration3page() {
  return (
    <>
            <Navbar />

            <SecurityDetails
                name='Email Upload'
                subcontent='**Upload Documents Directly via Email**'
                content='DocShift’s email upload feature allows you to send documents to your dashboard via a dedicated email address.'
                showButton={false}
                features='Features include'
            />

            <div className='flex gap-50 bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-50'>
                <div>
                    <Subfeature textColor='text-[#0E1836]' name='Unique Email Address' description='Each user gets a unique upload email.' />
                    <Subfeature textColor='text-[#0E1836]' name='Supported Formats' description='Upload PDFs, Word, Excel, or images.' />
                </div>
                <div>
                    <Subfeature textColor='text-[#0E1836]' name='Automatic Processing' description='Uploaded files are tagged and stored in designated folders.' />
                    <Subfeature textColor='text-[#0E1836]' name='Batch Uploads' description='Send multiple files in one email.' />
                </div>
            </div>

            <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='See' name='Smart Tagging' description='This simplifies document collection for CA firms and legal offices.' showButton={false} />
            <Footer />
        </>
  )
}

export default integration3page
