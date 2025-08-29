import React from 'react'

function permission({bgColor='', name, subtext, image, imgTag=''}) {
  return (
    <>
      <div className={`${bgColor} text-[#0E1836] text-center px-6 md:px-30 pt-5 md:pt-20 pb-8 md:pb-30 `}>
        <p className='text-[16px] md:text-[48px] '>{name}</p>
        <p className='text-[8px] md:text-[17px] -mt-1 md:mt-1 mb-2 md:mb-15'>{subtext}</p>
        <img src={image}  className={`${imgTag} rounded-lg w-[1300px]`} />
      </div>
    </>
  )
}

export default permission
