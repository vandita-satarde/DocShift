import React from 'react'
import Navbar from '../../components/Navbar'
import UsecasesDetails from '../../components/usecasespage/UsecasesDetails'
import Subfeature from '../../components/Subfeature'
import Footer from '../../components/Footer'

function usecase2page() {
  return (
    <>
            <Navbar />
            <UsecasesDetails
                name='Legal Offices'
                about='**Empower Legal Workflows with Secure Document Tools** Legal offices handle sensitive documents like contracts, NDAs, and case files, requiring precision, security, and collaboration. DocShift offers a centralized platform to edit, share, and manage legal documents efficiently.'
                div1='Simplifies contract editing and clause analysis.'
                div2='Enhances security with encrypted sharing and audit trails.'
                div3='Speeds up approvals with integrated e-signatures.'
                features='Key Benefits'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='PDF Editing Tools' description='Merge, split, or annotate contracts, add watermarks, or reorder pages for professional outputs. Convert contracts to Word for clause editing.' />
                <Subfeature textColor='text-[#0E1836]' name='Secure Sharing' description='Share case files with clients or colleagues via expiring, password-protected links, ensuring confidentiality.' />
                <Subfeature textColor='text-[#0E1836]' name='AI Clause Extraction' description='Use AI to identify and extract key clauses from lengthy contracts, reducing manual review time.' />
                <Subfeature textColor='text-[#0E1836]' name='Digital Signatures' description='Sign NDAs, MoUs, or legal notices electronically, with audit trails for compliance.' />
                <Subfeature textColor='text-[#0E1836]' name='Version Control' description='Track edits to legal documents, ensuring no changes are lost during revisions.' />
                <Subfeature textColor='text-[#0E1836]' name='Compliance Ready' description='Meet ISO and GDPR standards with encrypted storage and access logs.' />
            </div>

            <Footer />
        </>
  )
}

export default usecase2page
