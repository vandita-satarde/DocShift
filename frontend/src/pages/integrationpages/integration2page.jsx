import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function integration2page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Dropbox'
                subcontent='**Integrate with Dropbox for Additional Storage**'
                content='Connect DocShift with Dropbox to leverage additional cloud storage and collaboration features.'
                showButton={false}
                features='Benefits include'
            />

            <div className='flex flex-wrap justify-center gap-x-9 md:gap-x-70 -gap-y-1 md:gap-y-10 bg-[#F5F9FE] pb-5 md:pb-15 md:px-50'>
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Seamless File Transfer' description='Upload files to Google Drive or import them to DocShift.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Backup Redundancy' description='Use OAuth2 for secure authentication.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Team Collaboration' description='Changes in DocShift reflect instantly in Google Drive.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='New Version Syncing' description='Sync specific folders for organized workflows.' />
            </div>

            <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='Explore' name='Role-Based Sharing' description='Perfect for businesses using Dropbox for storage.' showButton={false} />
            <Footer />
        </>
    )
}

export default integration2page
