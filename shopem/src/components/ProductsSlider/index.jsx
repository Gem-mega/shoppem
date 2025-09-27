import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductItem from '../ProductItem'
// import '../ProductsSlider/style.css'

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider">
      <Swiper
        slidesPerView={props.items}  
        spaceBetween={20}                 
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
         <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
         <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
         <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
         <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default ProductsSlider
