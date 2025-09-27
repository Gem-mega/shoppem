import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5]  flex items-center  rounded-[10px] relative !p-2'>
   <input type="text" placeholder='Search for products...' className='w-full h-[35px]  focus:outline-none bg-inherit !p-2 text-[15px] '/>
  <Button   className='!w-[37px] !min-w-[37px] !h-[37px] !text-black  !rounded-full '><IoSearch className='text-black text-[22px]'/></Button>
      </div>
  )
}

export default search