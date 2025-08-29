import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      {/* Sidebar */}
        <div className='fixed bg-[#0E1836] text-[#F5F9FE] p-5 w-[300px] min-h-screen '>
            <p className='text-[25px] '>Admin Panel</p>
            <div className='py-10 px-5 space-y-4'>
                <p>Dashboard</p>
                <p><Link to='/contact' >Contact Submission</Link></p>
            </div>
        </div>
    </>
  )
}

export default Sidebar
