import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSlider = (props) => {
  return (
 <>
<div className="!py-4 w-full">
        <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
            <div className="">
               <BannerBoxV2 img
        src={img}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt="banner"
    />
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className="">
               <BannerBoxV2 img={'./banner2.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBoxV2 img={'./banner3.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBoxV2 img={'./banner4.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBoxV2 img={'./banner1.webp'} />
            </div>
        </SwiperSlide>


        </Swiper>
</div>
      
 
 
 </>
  )
}

export default AdsBannerSlider
