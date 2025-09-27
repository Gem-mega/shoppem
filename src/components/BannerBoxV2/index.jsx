import React from 'react'
import { Link } from 'react-router-dom'
import '../BannerBoxV2/style.css'

const BannerBoxV2 = ({ position = "right", img, title, price }) => {
  return (
    <div className="bannerBoxV2 w-full h-[200px] overflow-hidden rounded-md relative group">
      {/* Background Image */}
      <img
        src={img}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt="banner"
      />

      {/* Text Overlay */}
      <div
        className={`info absolute top-0 h-full flex items-center w-1/2 z-20 p-4 ${
          position === "right"
            ? "right-3 justify-end text-right"
            : "left-3 justify-start text-left"
        }`}
      >
        <div>
          <h2 className="text-[15px] font-[500] leading-snug">{title}</h2>

          {price && (
            <h4 className="text-[13px] mt-4">
              <span className="text-[#ff5252] font-[700] text-[22px]">
                {price}
              </span>
            </h4>
          )}

          <Link
            to="/shop"
            className="mt-3 inline-block px-4 py-2 text-[#ff5252] text-[14px] font-semibold rounded underline transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2
