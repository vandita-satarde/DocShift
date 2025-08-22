import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function integration1page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Google Drive'
                subcontent='**Sync Documents with Google Drive**'
                content='DocShift’s Google Drive integration allows you to sync documents for easy access and collaboration.'
                showButton={false}
                features='Features include'
            />

            <div className='flex flex-wrap justify-center gap-x-9 md:gap-x-70 -gap-y-1 md:gap-y-10 bg-[#F5F9FE] pb-5 md:pb-15 md:px-50'>
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Two-Way Sync' description='Upload files to Google Drive or import them to DocShift.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Secure Access' description='Use OAuth2 for secure authentication.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Real-Time Updates' description='Changes in DocShift reflect instantly in Google Drive.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Folder Mapping' description='Sync specific folders for organized workflows.' />
            </div>

            <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='See Secure' name='Storage' description='This integration is ideal for teams already using Google Workspace.' showButton={false} />
            <Footer />
        </>
    )
}

export default integration1page
