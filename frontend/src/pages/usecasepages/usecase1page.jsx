import React from 'react'
import Navbar from '../../components/Navbar'
import UsecasesDetails from '../../components/usecasespage/UsecasesDetails'
import Subfeature from '../../components/Subfeature'
import Footer from '../../components/Footer'

function usecase1page() {
    return (
        <>
            <Navbar />
            <UsecasesDetails
                name='CA Firms'
                about='**Streamline Financial Document Management with DocShift** For chartered accountants (CA) firms, managing financial documents—tax filings, balance sheets, audit reports, and client records—is a core challenge. DocShift simplifies these tasks with a secure, AI-powered platform that replaces fragmented tools like iLovePDF and Dropbox.'
                div1='Eliminates manual document organization with AI-driven tagging.'
                div2='Ensures compliance with secure storage and audit logs.'
                div3='Speeds up client approvals with integrated e-signatures.'
                features='Key Benefits'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Secure Storage' description='Store sensitive client data in AES-256 encrypted folders, ensuring confidentiality and compliance with financial regulations.' />
                <Subfeature textColor='text-[#0E1836]' name='Document Conversion' description='Convert tax forms, financial statements, and reports between PDF, Word, Excel, or JPG formats with one click. Merge or split PDFs for audit-ready submissions.' />
                <Subfeature textColor='text-[#0E1836]' name='AI-Powered Reports' description=' Use ChatGPT-powered tools to generate financial summaries, compliance reports, or client communications, saving hours of manual drafting.' />
                <Subfeature textColor='text-[#0E1836]' name='Digital Signatures' description='Add legally binding e-signatures to engagement letters, tax filings, or contracts directly within DocShift, streamlining approvals.' />
                <Subfeature textColor='text-[#0E1836]' name='Version Control' description='Track changes to financial documents, revert to previous versions, and maintain an audit trail for transparency.' />
                <Subfeature textColor='text-[#0E1836]' name='Smart Tagging' description='Automatically tag documents with metadata (e.g., client name, tax year) for quick retrieval during audits or reviews.' />
            </div>

            <Footer />
        </>
    )
}

export default usecase1page
