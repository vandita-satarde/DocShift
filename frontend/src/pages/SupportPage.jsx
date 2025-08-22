import React from 'react'
import Navbar from '../components/Navbar'
import ConnectwithUs from '../components/ConnectwithUs'
import Footer from '../components/Footer'
import Support from '../components/Support'

function SupportPage() {
    return (
        <>
            <Navbar />
            <div className='bg-[#F5F9FE] text-[#0E1836] text-center px-3 md:px-30 py-14 md:py-18 mt-[80px] md:mt-[110px] '>
                <p className='text-[26px] md:text-[75px] font-semibold leading-8 md:leading-23 tracking-wider '> Support – DocShift: Your<br /> Success, Our Priority</p>
                <p className='text-[12px] md:text-[24px] py-4 md:py-13 md:leading-11'>DocShift’s 24/7 support ensures you get the most out of our platform. Whether you’re<br /> troubleshooting uploads, setting up folder sharing, or recovering files, our team is here to help.<br /> Below is an accordion-style breakdown of common support topics.</p>
            </div>

            {/* upload reports */}
            <Support 
                title1='Upload Failures'
                subtext1='Troubleshoot common upload issues fast'
                listItem1='File exceeds plan‑limit sizes (e.g. 50 MB Free, 500 MB Enterprise)'
                listItem2='Unsupported formats (PDF, Word, Excel, PPT, JPG are accepted)'
                listItem3='Network interruptions—test connections or switch browsers (Chrome, Firefox recommended)'
                listItem4='Browser caching issues—clear cache or try another browser'
                listItem5='Detailed error logs available in dashboard for diagnosis'
                title2='-Still blocked ?'
                button='Submit a Report'
                subtext2='our support team responds within 24 hours, often faster'
            />
            <Support 
                mainDiv='text-[#0E1836] bg-white'
                title1='Folder Sharing Help'
                subtext1='Set up secure, collaborative folder access with ease'
                listItem1='Assign roles: Admin, Manager, Employee permission levels'
                listItem2='Generate expiring, password‑protected links for external sharing'
                listItem3='Monitor sharing activity with audit logs'
                listItem4='Revoke access instantly if needed'
                listItem5='Real‑time collaboration on shared folders supported'
                title2='Questions?'
                button='Vistit Now'
                subtext2='Visit our Sharing Guide or contact support'
            />
            <Support 
                title1='Restore Deleted Files'
                subtext1='Recover files deleted within retention period'
                listItem1='Navigate to the “Trash” section in your dashboard'
                listItem2='Restore files instantly with one click (within 30 days)'
                listItem3='Enterprise plans support extended retention'
                listItem4='Enable “Delete Confirmation” in settings to prevent accidental deletion'
                listItem5='For recovery beyond retention, contact our support team'
                title2='Data Retention Rules'
                button='Know more'
                subtext2='Learn more about our Data Retention Rules'
            />

            <ConnectwithUs />
            <Footer />
        </>
    )
}

export default SupportPage
