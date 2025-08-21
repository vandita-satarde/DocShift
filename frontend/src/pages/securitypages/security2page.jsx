import React from 'react'
import Navbar from '../../components/Navbar'
import SecurityDetails from '../../components/securitycomponents/securityDetails'
import Subfeature from '../../components/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function security2page() {
    return (
        <>
            <Navbar />

            <SecurityDetails
                name='Permission Groups'
                subcontent='Control Access with Granular Permissions'
                content='DocShift’s permission groups allow you to assign roles (Admin, Manager, Employee) to control who can view, edit, or download documents.'
                features='Benefits include'
            />

            <div className='bg-[#F5F9FE] pb-5 md:pb-15 px-10 md:px-30'>
                <Subfeature textColor='text-[#0E1836]' name='Custom Roles' description='Create specific roles tailored to your organization’s hierarchy.' />
                <Subfeature textColor='text-[#0E1836]' name='Granular Controls' description='Set permissions at the folder or document level.' />
                <Subfeature textColor='text-[#0E1836]' name='Real-Time Updates' description='Instantly update permissions for new or departing team members.' />
                <Subfeature textColor='text-[#0E1836]' name='Collaboration Safety' description='Prevent unauthorized access during team projects.' />
            </div>

            <StoragePlan
                color='px-8 md:px-[460px] bg-[#0E1836] text-white '
                subtext='Learn About' name='Role-Based Sharing'
                description='Permission groups ensure secure collaboration for corporates and legal firms.'
                showButton={false}
            />

            <Footer />
        </>
    )
}

export default security2page
