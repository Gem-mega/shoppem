import React from 'react'
import { Link } from 'react-router-dom'



const BannerBox = (props) => {
  return (
    <div className="box bannerBox flex justify-center overflow-hidden !rounded-lg group" >
     <Link to="/">
         <img 
        src={props.img} 
        alt="banner"
        className="w-[200px] md:w-[250px] lg:w-[300px] h-auto object-contain transition-all group-hover:scale-105 group-hover:rotate-2 rounded-lg" 
      />
     </Link>
    </div>
  )
}

export default BannerBox
