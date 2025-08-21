import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function security5page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Secure Sharing Links'
                subcontent='Share Documents with Confidence'
                content='Share documents securely with expiring, password-protected links.'
                features='Features include'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Expiring Links' description='Set time limits (e.g., 24 hours, 7 days) for shared links.' />
                <Subfeature textColor='text-[#0E1836]' name='Password Protection' description='Add passwords for additional security.' />
                <Subfeature textColor='text-[#0E1836]' name='Access Tracking' description='Monitor who accessed shared links via audit logs.' />
                <Subfeature textColor='text-[#0E1836]' name='Revoke Access' description='Instantly revoke links if needed.' />
            </div>

            <StoragePlan
                color='px-8 md:px-[460px] bg-[#0E1836] text-white '
                subtext='Explore' name='Role-Based Sharing'
                description='This ensures secure collaboration with clients or external partners.'
                showButton={false}
            />

            <Footer />
        </>
    )
}

export default security5page
