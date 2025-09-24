import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// Example nested category structure
const categories = [
  {
    name: "Fashion",
    link: "/",
    children: [
      {
        name: "Apparel",
        link: "/",
        children: [
          { name: "Apparel", link: "/" },
          { name: "Smart Tablet", link: "/" },
          { name: "Crepe T-shirt", link: "/" },
          { name: "Leather Watch", link: "/" },
          { name: "Rolling Diamond", link: "/" },
        ],
      },
      {
        name: "Shoes",
        link: "/",
        children: [
          { name: "Sneakers", link: "/" },
          { name: "Boots", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    link: "/",
    children: [
      {
        name: "Mobiles",
        link: "/",
        children: [
          { name: "Apple", link: "/" },
          { name: "Samsung", link: "/" },
        ],
      },
    ],
  },
];

function NestedMenu({ nodes, openMap, toggle }) {
  return (
    <ul className="w-full">
      {nodes.map((node, idx) => {
        const hasChildren = Array.isArray(node.children) && node.children.length > 0;
        const key = node.name + idx;
        return (
          <li className="list-none relative" key={key}>
            <div className="flex items-center relative">
              <Link to={node.link || "#"} className="w-full">
                <Button className="!w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  {node.name}
                </Button>
              </Link>
              {hasChildren &&
                (openMap[key] ? (
                  <FaRegMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => toggle(key)}
                  />
                ) : (
                  <FaRegPlusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => toggle(key)}
                  />
                ))}
            </div>
            {/* Collapse content */}
            {hasChildren && openMap[key] && (
              <div className="submenu absolute left-0 top-full w-full !pl-3 z-10 bg-white shadow-md">
                <NestedMenu nodes={node.children} openMap={openMap} toggle={toggle} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const CategoryPanel = ({ open, onClose }) => {
  // openMap: { [key]: boolean }
  const [openMap, setOpenMap] = useState({});

  const toggle = (key) => {
    setOpenMap((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="!p-3 text-[15px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp className="cursor-pointer text-[20px]" onClick={onClose} />
      </h3>
      <div className="scroll">
        <NestedMenu nodes={categories} openMap={openMap} toggle={toggle} />
      </div>
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;