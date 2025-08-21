import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function security4page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Data Retention Rules'
                subcontent='Automate Compliance with Retention Policies'
                content='Set retention periods for documents to comply with regulatory requirements or internal policies.'
                features='Features include'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Custom Retention Periods' description='Adheres to information security management standards.' />
                <Subfeature textColor='text-[#0E1836]' name='Auto-Archive/Delete' description='Protects patient data with encrypted storage and access logs.' />
                <Subfeature textColor='text-[#0E1836]' name='Alerts' description='Supports data subject rights, including data deletion and portability.' />
                <Subfeature textColor='text-[#0E1836]' name='Compliance Integration' description='Built-in tools for compliance monitoring and reporting.' />
            </div>

            <StoragePlan
                color='px-8 md:px-[460px] bg-[#0E1836] text-white '
                subtext='See Restore' name='Deleted Files'
                description='This feature reduces manual oversight and ensures compliance.'
                showButton={false}
            />

            <Footer />
        </>
    )
}

export default security4page
