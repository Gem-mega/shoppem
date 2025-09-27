import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'
import ProductZoom from '../../components/ProductZoom'
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';

const ProductDetails = () => {

const [productionActionIndex, setProductionActionIndex] = useState(null)

  return (
 <>
 <div className="!py-5">
     <div className="container">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link transition">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/" className="link transition">
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>
 </div>



    <div className="container flex items-center gap-4 bg-white !py-5">
      <div className="productZoomContainer w-[40%] h-[auto]  overflow-hidden">
        <ProductZoom/>
      </div>

      <div className="productContent w-[60%]">
        <h1 className='text-[22px] font-[500] !mb-2 '>Women Wide Leg High-Rise Light Fade Stretchable Jeans</h1>

        <div className="flex items-center gap-3">
            <span className="text-gray-400  text-[13px]">
                Brands : <span className="text-black font-[500] opacity-75 ">Flying Machine</span>
            </span>

            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <span className='text-[13px] cursor-pointer '>Review (5)</span>


        </div>
        
             <div className="flex items-center gap-4 !mt-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="Price text-[#ff5252] font-[600]">$58.00</span>

          <span className='text-[14px]'>Available in Stock: <span className='text-green-600  text-[14px]  font-bold  '>147 Items</span></span>
        </div>

        <p className='!mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus voluptatem voluptas assumenda, harum ipsa eaque cumque debitis beatae deserunt id quis sapiente minus magnam accusantium qui corrupti culpa alias!</p>
         

         <div className="flex items-center gap-3 !py-5">
            <span className='text-[16px]'>Size:</span>
            <div className="flex items-center gap-1">
               <Button
               className={`${productionActionIndex === 0 ? 'bg-[#ff5252] text-white' : ''}`}
               onClick={()=>setProductionActionIndex(0)}
                className='!min-w-[40px] !border !border-[#000] !text-black'>S</Button>
               <Button
               className={`${productionActionIndex === 0 ? 'bg-[#ff5252] text-white' : ''}`}
               onClick={()=>setProductionActionIndex(1)}
               className='!min-w-[40px] !border !border-[#000] !text-black'>M</Button>
               <Button
               className={`${productionActionIndex === 0 ? 'bg-[#ff5252] text-white' : ''}`}
               onClick={()=>setProductionActionIndex(2)}
                className='!min-w-[40px] !border !border-[#000] !text-black'>L</Button>
               <Button
               className={`${productionActionIndex === 0 ? 'bg-[#ff5252] text-white' : ''}`}
               onClick={()=>setProductionActionIndex(3)}
               className='!min-w-[40px] !border !border-[#000] !text-black'>XL</Button>
            </div>
         </div>
    </div>
    </div>


    
 </>
  )
}

export default ProductDetails;
