import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md !mt-5 shadow-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper group w-full h-[220px] rounded-md overflow-hidden relative">
        <Link to="/">
          <div className="img h-[220px]  overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
              className="w-full"
              alt=""
            />

            <img
              src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
              className="w-full transition-all duration-1000 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 "
              alt=""
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white !p-1 text-[15px] font-[500] rounded-full">
          10%
        </span>

        {/*  sliding buttons */}
        <div className="actions absolute top-[10px] opacity-0 group-hover:opacity-100 right-[-200px] group-hover:right-[-10px] transition duration-1000 ease-in-out z-50 flex items-center gap-4 flex-col w-[80px]">
          <Tooltip title="Add" placement="left-start">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] group !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
              <MdZoomOutMap className="text-[18px] text-black group-hover:text-black  hover:!bg-[#ff5252] hover:!text-white " />
            </Button>
          </Tooltip>

          <Tooltip
            title="WishList"
            className="!bg-white "
            placement="left-start"
          >
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] group !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
              <FaRegHeart className="text-[18px] text-black group-hover:text-black  hover:!bg-[#ff5252] hover:!text-white " />
            </Button>
          </Tooltip>

          <Tooltip title="Add" placement="left-start">
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] group !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
              <IoIosGitCompare className="text-[18px] text-black group-hover:text-black  hover:!bg-[#ff5252] hover:!text-white " />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* ...info section same as yours */}
      <div className="info !p-3 bg-[#f1f1f1]  ">
        <h6 className="text-[11px]">
          <Link to="/" className="link transition-all">
            Sloyent
          </Link>
        </h6>
        <h3 className="text-[12px] font-[500] title !mb-1 mt-1 text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link transition-all">
            JEWAR trendy jewellery set for jewellery set
          </Link>{" "}
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="Price text-[#ff5252] font-[600]">$58.00</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
