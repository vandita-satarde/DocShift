import React from 'react'
import { IoIosStar } from "react-icons/io";
import thumbsup from '../assets/icons/thumbsup.png'

function Testimonials({profile, content, name, about}) {
  return (
    <>
      <div className='group relative w-[180px] md:w-[240px] h-[170px] md:h-[240px] md:hover:h-[295px] p-3 md:p-5 text-[#000000] bg-[#FFFFFF] rounded-[16px] transition-normal duration-150 ' >
            <img src={profile} className='absolute -top-6 md:-top-8 left-5 w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-[50%] mx-auto mb-7 ' />
            <div className='text-[#3E66DF] flex justify-end text-[11px] '>
              <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
            </div>
            <p className=' md:h-[120px] md:group-hover:h-[170px] text-[10px] md:text-[13px] md:leading-5 md:group-hover:leading-7 my-4 md:my-6 ' >{content}</p>
            <div className='flex justify-between '>
              <div>
                <ul className='list-disc ml-2 md:ml-7 text-[9px] md:text-[12px] font-[800] '>
                  <li>{name}</li>
                </ul>
                <p className='text-[#505050] text-[7px] md:text-[8px] '>{about}</p>
              </div>
              <div className='flex items-center gap-1'>
                <img src={thumbsup} className='h-2.5 md:h-3 '/>
                <p className='text-[#202020] text-[8px] md:text-[10px] font-[600] '>Testimonial</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Testimonials
