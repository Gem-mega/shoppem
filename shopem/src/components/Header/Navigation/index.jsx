import React, { useState } from "react";
import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./categoryPanel";
import '../Navigation/style.css';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [showFashionSubmenu, setShowFashionSubmenu] = useState(false);
  const [showMenSubmenu, setShowMenSubmenu] = useState(false);

  const openCategoryPanel = () => setIsOpenCatPanel(true);
  const closeCategoryPanel = () => setIsOpenCatPanel(false);

  // Handlers for hover
  const handleFashionMouseEnter = () => setShowFashionSubmenu(true);
  const handleFashionMouseLeave = () => {
    setShowFashionSubmenu(false);
    setShowMenSubmenu(false);
  };
  const handleMenMouseEnter = () => setShowMenSubmenu(true);
  const handleMenMouseLeave = () => setShowMenSubmenu(false);

  return (
    <>
      <nav className="!py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-1 !w-full"
              onClick={openCategoryPanel}
            >
              <HiOutlineMenuAlt1 className="text-[18px] cursor-pointer" />
              Shop by categories
              <FaAngleDown className="text-[14px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col2 w-[60%]">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">
                    Home
                  </Button>
                </Link>
              </li>

              {/* Fashion menu with vertical submenu and a sub-submenu for Men */}
              <li 
                className="list-none relative group"
                onMouseEnter={handleFashionMouseEnter}
                onMouseLeave={handleFashionMouseLeave}
              >
                <Link to="/">
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400] flex items-center gap-1">
                    Fashion
                    <FaAngleDown className="text-[12px] ml-1" />
                  </Button>
                </Link>
                {/* Submenu */}
                {showFashionSubmenu && (
                  <div className="absolute top-full left-0 min-w-[180px] bg-white shadow-md z-50 flex flex-col py-2 rounded-xl">
                    {/* Men with submenu */}
                    <div
                      className="relative"
                      onMouseEnter={handleMenMouseEnter}
                      onMouseLeave={handleMenMouseLeave}
                    >
                      <Link to="/">
                        <Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">
                          Men
                        </Button>
                      </Link>
                      {/* Sub-submenu */}
                      {showMenSubmenu && (
                        <div className="absolute top-0 left-full min-w-[180px] bg-white shadow-md z-50 flex flex-col py-2 ml-2 rounded-xl">
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Jeans</Button></Link>
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Footwears</Button></Link>
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">T-shirts</Button></Link>
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Pants</Button></Link>
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Watches</Button></Link>
                          <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Shoes</Button></Link>
                        </div>
                      )}
                    </div>
                    <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Women</Button></Link>
                    <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Kids</Button></Link>
                    <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Girls</Button></Link>
                    <Link to="/"><Button className="link !justify-start !text-[rgba(0,0,0,0.6)] !px-4 py-2 !w-full hover:!text-[#ff5252]  text-left rounded-lg transition">Boys</Button></Link>
                  </div>
                )}
              </li>

              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Electronics</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Bags</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Footwears</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Groceries</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Beauty</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Wellness</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" >
                  <Button className="link !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] transition !font-[400]">Jewellery</Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col3 w-[20%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket />
              Free International delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Drawer overlay, does NOT affect nav position */}
      <CategoryPanel open={isOpenCatPanel} onClose={closeCategoryPanel} />
    </>
  );
};

export default Navigation;