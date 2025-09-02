import React from 'react'

function ToolsDetails({isOpen, onClose, image, name, subtext, description}) {
  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 backdrop-blur-lg min-h-screen flex justify-center items-center '>
        <div className='shadow-xl bg-white pl-2 md:pl-3 lg:pl-5 py-2 md:py-3 lg:py-4 pr-5 md:pr-5 lg:pr-12 flex items-center gap-3 md:gap-8 lg:gap-22 w-5/6 md:w-4/5 lg:w-3/5 rounded-2xl md:rounded-3xl '>
            <img src={image} className='w-[130px] md:w-[240px] lg:w-[340px] h-auto rounded-tl-2xl rounded-bl-2xl '/>
            <div className='relative space-y-1 md:space-y-2 lg:space-y-4'>
                <p onClick={onClose} className='absolute -top-3.5 md:-top-11 lg:-top-20 -right-1.5 md:-right-0 lg:-right-8 text-[20px] md:text-[33px] text-gray-400 cursor-pointer '>&times;</p>
                <p className='text-[#170F49] text-[17px] md:text-[28px] lg:text-[30px] font-bold '>{name}</p>
                <p className='text-[#3B3A4B] text-[11px] md:text-[19px] '>{subtext}</p>
                <p className='text-[#6F6C8F] text-[9px] md:text-[17px] '>{description}</p>
                <button className='w-full h-[24px] md:h-[55px] lg:h-[60px] text-[10px] md:text-[16px] text-white bg-gradient-to-b from-[#183aa1] to-[#0E1836] rounded-2xl mt-2 md:mt-8 lg:mt-20' >Try Now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ToolsDetails
