import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturesDetails from '../../components/featurespage/FeaturesDetails'
import Subfeature from '../../components/featurespage/Subfeature'
import StoragePlan from '../../components/featurespage/StoragePlan'
import Footer from '../../components/Footer'

function feature2() {
    return (
        <>
            <Navbar />
            <FeaturesDetails 
                name='Smart Tagging' 
                description='Finding documents quickly is critical for productivity. DocShift’s AI-driven smart tagging automatically analyzes content and assigns metadata, such as project names, dates, or keywords.'
            />

            <div className='bg-[#0E1836] text-white py-5 md:py-15 px-10 md:px-30'>
                <p className='text-[20px] md:text-[58px] font-bold text-center '>Benefits include</p>
                <div>
                    <Subfeature name='AI-Suggested Tags' description=' Automatically categorize documents based on content analysis.' />
                    <Subfeature name='Custom Tags' description=' Add manual tags for specific needs.' />
                    <Subfeature name='Fast Search' description='Retrieve files in seconds using keyword or tag-based searches.' />
                    <Subfeature name='Bulk Tagging' description=' Apply tags to multiple files for large projects.' />
                </div>
            </div>

            <StoragePlan sybtext='See Pricing for' name='Folder Based Management' description='Smart tagging reduces time spent on organization, making it perfect for teams handling high document volumes.' />
            <Footer />
        </>
    )
}

export default feature2
