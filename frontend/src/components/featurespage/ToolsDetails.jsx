import React from 'react'

function ToolsDetails({isOpen, onClose, image, name, subtext, description}) {
  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 z-50 backdrop-blur-lg min-h-screen flex justify-center items-center '>
        <div className='shadow-xl bg-white pl-2 md:pl-5 py-2 md:py-4 pr-5 md:pr-12 flex items-center gap-5 md:gap-22 w-5/6 md:w-3/5 rounded-2xl md:rounded-3xl '>
            <img src={image} className='w-[100px] md:w-[340px] h-auto rounded-tl-2xl rounded-bl-2xl '/>
            <div className='relative space-y-2 md:space-y-4'>
                <p onClick={onClose} className='absolute -top-2 md:-top-20 -right-3 md:-right-8 text-[16px] md:text-[33px] text-gray-400 cursor-pointer '>&times;</p>
                <p className='text-[#170F49] text-[10px] md:text-[30px] font-bold '>{name}</p>
                <p className='text-[#3B3A4B] text-[8px] md:text-[19px] '>{subtext}</p>
                <p className='text-[#6F6C8F] text-[7px] md:text-[17px] '>{description}</p>
                <button className='w-full h-[20px] md:h-[60px] text-[9px] md:text-[16px] text-white bg-gradient-to-b from-[#183aa1] to-[#0E1836] rounded-2xl mt-2  md:mt-20' >Try Now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ToolsDetails
