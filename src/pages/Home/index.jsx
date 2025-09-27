import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogItem from "../../components/BlogItem";
import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />

      <section>
        <div className="container flex items-center gap-5 ">
          <div className="part1 w-[70%] flex items-center justify-center">
           <HomeSliderV2/>

          </div>


<div className="part2 w-[30%] gap-6 flex-col flex items-center justify-between !pl-3">
  {/* First Banner */}
  <BannerBoxV2
    img="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
    title="Buy Men's Footwear with low price"
    price="$6"
    position="right"
  />

  {/* Second Banner */}
  <BannerBoxV2
    img="https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg"
    title="Buy Apple iPhone"
    price="$499"
    position="left"
  />
</div>




           
    
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white !py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the offers until the end of March.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Box
                sx={{
                  maxWidth: { xs: 600, sm: 900 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="  Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="!py-16  bg-white mt-5">
        <div className="container">
          <div className="freeShipping w-full !p-4 border !rounded-md !mb-7  border-[#ff5252] flex items-center justify-between">
            <div className="col1 flex items-center  gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600]  uppercase">
                Fast Shipping
              </span>
            </div>

            <div className="col2">
              <p className="!mb-0  font-[500]">
                Free Delivery Now On Your First Order And Over $200
              </p>
            </div>

            <div className="col3">
              <p className="mb-0 text-[25px] font-bold">- Only $200*</p>
            </div>
          </div>

          <AdsBannerSliderV2 items={4} />
        </div>
      </section>

      <section className="!p-4 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>

          <ProductsSlider items={6} />

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="!p-4 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>

          <ProductsSlider items={6} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <div className="!py-5 !pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="!mb-3 !mt-4 text-[20px] font-[600]">From The Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


    </div>
  );
};

export default Home;
