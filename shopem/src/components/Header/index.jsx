import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import Search from '../search/index'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/index';




const Header=()=>{


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


    return(
        <>
 <header className='bg-white'>
   <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
     <div className="container">
       <div className='flex items-center justify-between'>
         <div className='col1 w-[50%]'>
            <p className='text-[12px] font-[500]'>Get up to 50% off new seasons styles</p>
         </div>

         <div className="col2 flex items-center justify-end">
            <ul className='flex items-center gap-2'>
                <li className="list-none">
                    <Link to="/help-center" className='text-[12px] link font-[500] transition'>Help Center {" "}</Link>
                </li>

                <li className="list-none">
                    <Link to="/help-center" className='text-[12px] link font-[500] transition'>Order Tracking</Link>
                </li>
            </ul>
         </div>
       </div>
    </div>
   </div>


   <div className="header border !py-5">
    <div className="container flex items-center justify-between">
      <div className="col1 w-[25%]">
        <Link to={'/'} >
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="col2 w-[45%]">
        <Search/>
      </div>
      <div className="col3 w-[30%] flex items-center !pl-5 ">
        <ul className="flex items-center gap-3 justify-end w-full">
          <li className="list-none">
          <Link to='/login' className='link transition text-[15px] font-[500] '>Login</Link>|
          <Link to='/Register' className='link transition text-[15px] font-[500]'>Register</Link>  
          </li>


          <li className="list-none">
                 <Tooltip title="compare">
                   <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <IoIosGitCompare  />
      </StyledBadge>
    </IconButton>
                 </Tooltip>
          </li>
          
          <li className="list-none">
               <Tooltip title="wishlist">
               <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <FaRegHeart />
      </StyledBadge>
    </IconButton>
    </Tooltip>
          </li>
          
          <li className="list-none">
               <Tooltip title="cart">
               <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <MdOutlineShoppingCart />
      </StyledBadge>
    </IconButton>
    </Tooltip>
          </li>


        </ul>
      </div>

    
    </div>
   </div>


   <Navigation/>
   
 </header>
        </>
    );
};

export default Header;