import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function security1page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Document Access Logs'
                subcontent='Track Every Interaction with Detailed Audit Logs'
                content='DocShift’s document access logs provide a comprehensive record of who accessed, viewed, edited, or shared your documents, ensuring transparency and compliance.'
                features='Key Features'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Real-Time Tracking' description='Log every action with timestamps and user details.' />
                <Subfeature textColor='text-[#0E1836]' name='Exportable Reports' description='Generate audit reports for compliance reviews or audits.' />
                <Subfeature textColor='text-[#0E1836]' name='Searchable Logs' description='Filter logs by user, date, or document for quick analysis.' />
                <Subfeature textColor='text-[#0E1836]' name='Compliance Support' description='Align with ISO, HIPAA, and GDPR requirements for auditability.' />
            </div>

            <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='See Industry' name='Use Cases' description='This feature is essential for industries like healthcare and legal, where tracking access is mandatory.' showButton={false} />
            <Footer/>
        </>
    )
}

export default security1page
