import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
  return (
   <div className="blogItem group">
    <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative ">
        <img src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
         className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt="blog image " />

         <span className="flex !items-center !bg-[#ff5252] !p-1 text-[11px] font-[500] gap-1 rounded-lg  justify-center text-white absolute  bottom-[15px] right-[15px] z-50">
          <MdAccessTime className=' text-[9px]'/> 5 APRIL, 2025 
         </span>
    </div>

    <div className="info !py-4">
      <h2 className='text-[14px] text-black font-[500] '>
        <Link to="/" className='link'>sustainable living through cutting-edge prefabricated</Link>
      </h2>
      <p className='text-[12px] text-[rgba(0,0,0,0.8)] font-[300] !mb-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry..... </p>
       <Link to="/" className="link flex items-center gap-1 font-[500] underline text-[#ff5252]">Read More <IoIosArrowForward /></Link>
    </div>
   </div>
  )
}

export default BlogItem
