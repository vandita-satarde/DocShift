import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function integration5page() {
  return (
    <>
      <Navbar />

      <SecurityDetails
        name='APIs for Custom Portals'
        subcontent='**Build Custom Integrations with DocShift’s API**'
        content='DocShift’s robust API allows enterprises to integrate document management into custom portals or internal systems.'
        showButton={false}
        features='Features include'
      />

      <div className='flex flex-wrap justify-center gap-x-9 md:gap-x-70 -gap-y-1 md:gap-y-10 bg-[#F5F9FE] pb-5 md:pb-15 md:px-50'>
        <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='RESTful API' description='Access DocShift’s features (upload, edit, share) programmatically.' />
        <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Our Custom Workflows' description=' Integrate with ERP, CRM, or proprietary systems.' />
        <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Scalable Endpoints' description='Handle large-scale document processing for enterprises.' />
        <Subfeature textColor='text-[#0E1836]' mainDiv='w-28 md:w-100' name='Secure Authentication' description='Use JWT or OAuth2 for secure API access.' />
      </div>

      <StoragePlan color='px-8 md:px-8 md:px-[460px] bg-[#0E1836] text-white ' subtext='Contact Us for' name='API Access' description='This is perfect for organizations needing tailored solutions.' showButton={false} />
      <Footer />
    </>
  )
}

export default integration5page
