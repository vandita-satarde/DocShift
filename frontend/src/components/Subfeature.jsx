import React from 'react'

function Subfeature({textColor='', name, description}) {
  return (
    <>
      <div className={`${textColor ? textColor : 'text-white'} space-y-1 md:space-y-4 pt-7 md:pt-18`}>
        <p className='text-[15px] md:text-[40px] font-semibold tracking-wider'>{name}</p>
        <p className='text-[9px] md:text-[25px] '>{description}</p>
      </div>
    </>
  )
}

export default Subfeature
