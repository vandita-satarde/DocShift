import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function security3page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='ISO / HIPAA / GDPR Ready'
                subcontent='Meet Global Compliance Standards'
                content='DocShift is designed to comply with ISO 27001, HIPAA, and GDPR, ensuring your documents meet regulatory requirements.'
                features='Features include'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='ISO 27001' description='Adheres to information security management standards.' />
                <Subfeature textColor='text-[#0E1836]' name='HIPAA Compliance' description='Protects patient data with encrypted storage and access logs.' />
                <Subfeature textColor='text-[#0E1836]' name='GDPR Compliance' description='Supports data subject rights, including data deletion and portability.' />
                <Subfeature textColor='text-[#0E1836]' name='Regular Audits' description='Built-in tools for compliance monitoring and reporting.' />
            </div>

            <StoragePlan
                color='px-8 md:px-[460px] bg-[#0E1836] text-white '
                subtext='See Medical Records' name='Use Case'
                description='This ensures trust for healthcare providers, legal firms, and corporates.'
                showButton={false}
            />

            <Footer />
        </>
    )
}

export default security3page
