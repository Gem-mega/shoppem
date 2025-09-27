import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay,  EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';



const HomeSliderV2 = () => {
  return (
    <>
     <Swiper
     loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="homeSliderV2 !py-1 !mt-4"
      >
        <SwiperSlide>
            <div className=" w-full rounded-md  overflow-hidden  relative">
          <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" className='w-full' />
                 

              <div className="info absolute top-0 right-0 h-full flex items-center w-[50%] z-50 p-8 opacity-0 transition-all duration-700">
  <div className="text-left w-full">
    <h3 className="text-[18px] mb-5 font-[500] relative -right-[100%] opacity-0">Big Saving Days Sale</h3>
    <h2 className="text-[35px] font-[700] relative -right-[100%] opacity-0">
      Buy New Trend Women Black Cotton Blend Top | top for women
    </h2>
    <h4 className="text-[18px] mb-5 font-[500] mt-3 flex items-center gap-3 relative -right-[100%] opacity-0">
      Starting At Only <span className="text-[#ff5252] text-[30px] font-[700]">$59.00</span>
    </h4>
    <Button className="btn-org relative -right-[100%] opacity-0">SHOP NOW</Button>
  </div>
</div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-full rounded-md  overflow-hidden relative ">
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" className='w-full' />



 
              <div className="info absolute top-0 right-0 h-full flex items-center w-[50%] z-50 p-8 opacity-0 transition-all duration-700">
  <div className="text-left w-full">
    <h3 className="text-[18px] mb-5 font-[500] relative -right-[100%] opacity-0">Big Saving Days Sale</h3>
    <h2 className="text-[35px] font-[700] relative -right-[100%] opacity-0">
     Apple Iphone 13 128GB, Pink
    </h2>
    <h4 className="text-[18px] mb-5 font-[500] mt-3 flex items-center gap-3 relative -right-[100%] opacity-0">
      Starting At Only <span className="text-[#ff5252] text-[30px] font-[700]">$312.00</span>
    </h4>
    <Button className="btn-org relative -right-[100%] opacity-0">SHOP NOW</Button>
  </div>
</div>


            </div>
        </SwiperSlide>
       
      </Swiper>
    
    </>
  );
}

export default HomeSliderV2
