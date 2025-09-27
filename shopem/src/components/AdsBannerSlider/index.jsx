import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import BannerBox from '../BannerBox';

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
               <BannerBox img={'./banner1.webp'} />
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className="">
               <BannerBox img={'./banner2.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBox img={'./banner3.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBox img={'./banner4.webp'} />
            </div>
        </SwiperSlide>


         <SwiperSlide>
            <div className="">
               <BannerBox img={'./banner1.webp'} />
            </div>
        </SwiperSlide>


        </Swiper>
</div>
      
 
 
 </>
  )
}

export default AdsBannerSlider
