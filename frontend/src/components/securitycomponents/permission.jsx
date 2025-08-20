import React from 'react'

function permission({bgColor='', name, subtext, image}) {
  return (
    <>
      <div className={`text-[#0E1836] text-center px-30 pt-20 pb-30 ${bgColor}`}>
        <p className='text-[48px] '>{name}</p>
        <p className='text-[17px] mt-1 mb-15'>{subtext}</p>
        <img src={image}  className=' rounded-lg '/>
      </div>
    </>
  )
}

export default permission
