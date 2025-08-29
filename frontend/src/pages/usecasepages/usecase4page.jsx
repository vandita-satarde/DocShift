import React from 'react'
import Navbar from '../../components/Navbar'
import UsecasesDetails from '../../components/usecasespage/UsecasesDetails'
import Subfeature from '../../components/Subfeature'
import Footer from '../../components/Footer'

function usecase4page() {
  return (
    <>
            <Navbar />
            <UsecasesDetails
                name='Corporates'
                about='**Streamline Corporate Workflows with AI and Collaboration** Corporates manage diverse documents—proposals, reports, invoices, and compliance documents—across departments. DocShift centralizes these workflows with AI-powered tools and secure collaboration.'
                div1='Automates report creation and formatting.'
                div2='Enhances team collaboration with secure sharing.'
                div3='Reduces costs by replacing multiple tools.'
                features='Key Benefits'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30 -space-y-2 md:space-y-0'>
                <Subfeature textColor='text-[#0E1836]' name='AI Report Generation' description='Generate board reports, financial summaries, or proposals using ChatGPT-powered tools, with tone control (formal, conversational).' />
                <Subfeature textColor='text-[#0E1836]' name='Document Conversion' description=' Convert presentations to PDF or merge multiple reports into a single file for stakeholder reviews.' />
                <Subfeature textColor='text-[#0E1836]' name='Role-Based Sharing' description='Share documents with specific teams (e.g., HR, Finance) using granular permissions.' />
                <Subfeature textColor='text-[#0E1836]' name='Version Control' description='Track changes to collaborative documents, ensuring alignment across departments.' />
                <Subfeature textColor='text-[#0E1836]' name='Smart Tagging' description='Organize project files with AI-driven metadata for quick access.' />
                <Subfeature textColor='text-[#0E1836]' name='Custom Templates' description='Create branded proposals, invoices, or letters with drag-and-drop editing.' />
                <Subfeature textColor='text-[#0E1836]' name='Case Study' description='TechCorp saved 15 hours weekly by using DocShift’s AI tools and role-based sharing for cross-departmental workflows.' />
            </div>

            <Footer />
        </>
  )
}

export default usecase4page
