import React from 'react'
import Navbar from '../../components/Navbar'
import UsecasesDetails from '../../components/usecasespage/UsecasesDetails'
import Subfeature from '../../components/Subfeature'
import Footer from '../../components/Footer'

function usecase3page() {
  return (
    <>
            <Navbar />
            <UsecasesDetails
                name='Medical Records'
                about='**Manage Patient Records with HIPAA-Compliant Security** Healthcare providers handle sensitive patient records, requiring strict compliance and secure storage. DocShift ensures HIPAA-compliant document management with robust features tailored for medical records.'
                div1='Ensures HIPAA compliance with encrypted storage and logs.'
                div2='Simplifies record digitization with OCR and templates.'
                div3='Enables secure sharing with patients and specialists.'
                features='Key Benefits'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30 -space-y-2 md:space-y-0'>
                <Subfeature textColor='text-[#0E1836]' name='Encrypted Storage' description='Store patient records in AES-256 encrypted folders, accessible only to authorized personnel.' />
                <Subfeature textColor='text-[#0E1836]' name='Access Logs' description='Track who accessed records and when, ensuring compliance with HIPAA regulations.' />
                <Subfeature textColor='text-[#0E1836]' name='Secure Sharing' description=' Share medical reports with patients or specialists via expiring, encrypted links.' />
                <Subfeature textColor='text-[#0E1836]' name='OCR Extraction' description='Convert scanned medical forms into editable text using Tesseract.js OCR, simplifying data entry.' />
                <Subfeature textColor='text-[#0E1836]' name='Document Templates' description='Create standardized medical forms or consent documents with customizable templates.' />
                <Subfeature textColor='text-[#0E1836]' name='Data Retention Rules' description='Set retention periods for patient records to comply with regulatory requirements.' />
                <Subfeature textColor='text-[#0E1836]' name='Case Study' description='CityCare Clinic reduced administrative overhead by 20% using DocShift’s HIPAA-compliant storage and OCR tools for patient records.' />            
            </div>

            <Footer />
        </>
  )
}

export default usecase3page
