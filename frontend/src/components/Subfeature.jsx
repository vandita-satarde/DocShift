import React from 'react'

function Subfeature({textColor='', mainDiv='', name, description}) {
  return (
    <>
      <div className={`${textColor ? textColor : 'text-white'} ${mainDiv}  md:space-y-2 pt-7 md:pt-10 lg:pt-12`}>
        <p className='text-[15px] md:text-[30px] lg:text-[36px] font-semibold tracking-wider'>{name}</p>
        <p className='text-[9px] md:text-[15px] lg:text-[20px]'>{description}</p>
      </div>
    </>
  )
}

export default Subfeature
