import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductZoom = () => {
  // Product images array (your images)
  const images = [
    "https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg",
    "https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg",
    "https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg",
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-3">
      {/* Thumbnail Slider */}
      <div className="slider w-[20%] relative">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          spaceBetween={10}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`item cursor-pointer border rounded ${
                  selectedImage === img ? "border-red-500" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`thumbnail-${index}`}
                  className="w-full h-auto rounded"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !left-0 !top-2 !w-6 !h-6 !bg-black/50 !rounded-full after:!text-white"></div>
        <div className="swiper-button-next !left-0 !bottom-2 !w-6 !h-6 !bg-black/50 !rounded-full after:!text-white"></div>
      </div>

      {/* Zoom Section */}
      <div className="zoomContainer w-[80%]">
        <InnerImageZoom
          zoomType="hover"
          zoomScale={1}
          src={selectedImage}
          alt="Main Product"
        />
      </div>
    </div>
  );
};

export default ProductZoom;
