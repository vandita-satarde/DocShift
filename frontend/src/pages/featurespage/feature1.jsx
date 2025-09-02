import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature1() {
    return (
        <>
            <Navbar />
            <FeaturesDetails
                name='File Upload & Storage'
                description='DocShift’s secure file upload and storage system is the backbone of its document management capabilities. Upload files in multiple formats (PDF, Word, Excel, PPT, JPG) to encrypted folders powered by AWS S3 and AES-256 encryption.'
                featuresTitle='Key Features'
            />

            <div className='bg-[#0E1836] text-white pb-5 md:pb-10 lg:pb-15 px-10 md:px-22 lg:px-30'>
                <Subfeature name='Unlimited Uploads' description=' Based on your plan, upload files without restrictions.' />
                <Subfeature name='Drag-and-Drop Interface' description=' Organize files effortlessly in a user-friendly dashboard.' />
                <Subfeature name='Cross-Device Access' description=' Access files from desktops, tablets, or mobiles with real-time syncing.' />
                <Subfeature name='Backup & Recovery' description=' Automatic backups ensure data safety, with one-click recovery options.' />
                <Subfeature name='Storage Scalability' description=' Add storage via affordable add-ons for growing teams.' />
            </div>

            <StoragePlan subtext='See Pricing for' name='Storage Plans' description='This feature is ideal for businesses needing secure, scalable storage without compromising accessibility.' />
            <Footer />
        </>
    )
}

export default feature1
