import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function integration4page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Zapier'
                subcontent='**Automate Workflows with Zapier**'
                content='Connect DocShift to over 5,000 apps via Zapier for automated workflows.'
                showButton={false}
                features='Features include'
            />

            <div className='flex flex-wrap justify-center gap-x-9 md:gap-x-70 -gap-y-1 md:gap-y-10 bg-[#F5F9FE] pb-5 md:pb-15 md:px-50'>
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Custom Zaps' description='Automate tasks like uploading files to DocShift or sharing documents.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Integration Examples' description='Sync with Slack for notifications, Trello for project tracking, or CRM tools for client management.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='No-Code Setup' description='Create automations without coding expertise.' />
                <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Scalable Workflows' description='Automate repetitive tasks for large teams.' />
            </div>

            <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='See Secure' name='Start Free Trial' description='Ideal for startups and corporates automating document processes.' showButton={false} />
            <Footer />
        </>
    )
}

export default integration4page
