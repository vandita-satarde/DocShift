import React from 'react'
import Navbar from '../../components/Navbar'
import UsecasesDetails from '../../components/usecasespage/UsecasesDetails'
import Subfeature from '../../components/Subfeature'
import Footer from '../../components/Footer'

function usecase5page() {
  return (
    <>
            <Navbar />
            <UsecasesDetails
                name='Educational Institutes'
                about='**Simplify Academic Document Management and Plagiarism Checks** Educational institutes handle student reports, research papers, and administrative documents, often requiring originality checks and secure storage.'
                div1='Ensures academic integrity with plagiarism checks.'
                div2='Simplifies administrative tasks with templates and OCR.'
                div3='Secures student data with encrypted storage.'
                features='Key Benefits'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Plagiarism Checker' description='Scan student papers for originality, with detailed reports and AI rewriting suggestions.' />
                <Subfeature textColor='text-[#0E1836]' name='Document Templates' description='Create syllabi, certificates, or grading sheets with customizable templates.' />
                <Subfeature textColor='text-[#0E1836]' name='Secure Storage' description='Store student records in encrypted folders, accessible only to authorized faculty.' />
                <Subfeature textColor='text-[#0E1836]' name='AI Summarization' description='Summarize lengthy research papers or lecture notes with ChatGPT-powered tools.' />
                <Subfeature textColor='text-[#0E1836]' name='Collaboration Tools' description='Share course materials with students or faculty via role-based access.' />
                <Subfeature textColor='text-[#0E1836]' name='OCR for Scanned Documents' description='Convert handwritten notes or scanned exams into editable text.' />
                <Subfeature textColor='text-[#0E1836]' name='Case Study' description='City University reduced plagiarism check time by 40% using DocShift’s integrated scanner and secure storage.' />
            </div>

            <Footer />
        </>
  )
}

export default usecase5page
