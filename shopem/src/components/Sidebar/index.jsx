import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);

  return (
    <aside className="sidebar">
      <div className="box">
        <h3 className="!mb-3 text-[16px] font-[500]  flex items-center ">
          Shop by Categories
          <Button
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
            className="!rounded-full !w-[30px] !ml-auto !min-w-[30px] !text-[#000] !h-[30px]"
          >
            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll !px-3 relative -left-[10px] ">
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Fashion"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Electronics"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Bags"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Footwear"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Groceries"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Beauty"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Wellness"
            />
            <FormControlLabel
              control={<Checkbox />}
              className="w-full"
              size="small"
              label="Jewellery"
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mt-5">
        <h3 className="!mb-3 text-[16px] font-[500]  flex items-center ">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex !pt-2 !pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: {100}</strong>
          </span>

          <span className="!ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {5000}</strong>
          </span>
        </div>
      </div>

      <div className="box !mt-5">
        <h3 className="!mb-3 text-[16px] font-[500]  flex items-center ">
          Filter By Rating
        </h3>
        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={4}
            size="small"
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={3}
            size="small"
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={2}
            size="small"
            readOnly
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={1}
            size="small"
            readOnly
            className="w-full"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
