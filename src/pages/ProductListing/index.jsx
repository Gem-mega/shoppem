import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import ProductItem from '../../components/ProductItem'
import ProductItemListView from '../../components/ProductItemListView'
import { IoGridSharp } from "react-icons/io5"
import { LuMenu } from "react-icons/lu"
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
  const [itemView, setItemView] = useState('grid')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // Menu Handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <section className="!py-8 !pb-0">
      <div className="container">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link transition">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/" className="link transition">
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div className="bg-white !p-3 !mt-4">
        <div className="container flex gap-3">
          {/* Sidebar */}
          <div className="sideWrapper w-[20%] h-full bg-white !p-3">
            <Sidebar />
          </div>

          {/* Right Content */}
          <div className="rightContent w-[80%] !py-3">
            {/* Toolbar */}
            <div className="bg-[#f1f1f1] !p-2 w-full !mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
            <Button
  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
    itemView === 'list' && 'active'
  }`}
  onClick={() => setItemView('list')}
>
  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
</Button>


                <Button
                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
    itemView === 'grid' && 'active'
  }`}
                  onClick={() => setItemView('grid')}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="text-[14px] font-[500] !pl-2 text-[rgba(0,0,0,0.7)]">
                  There are 27 Products.
                </span>
              </div>

              {/* Sort Menu */}
              <div className="col2 !ml-auto flex items-center justify-end gap-3">
                <span className="text-[14px] font-[500] !pl-2 text-[rgba(0,0,0,0.7)]">Sort By</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleMenuClick}
                  className="!bg-white !text-[#000] !text-[12px] !capitalize border border-[#000]"
                >
                  Sales, Highest to Lowest
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>Sales, highest to lowest</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Price, low to high</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid ${itemView=== 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1' }  'gap-4'`}>
              {itemView === 'grid' ? (
                <>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                
                </>
              ) : 
              <>
              
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
                 <ProductItemListView/>
              
              </>
              }
            </div>
          </div>
         
        </div>

          <div className="flex items-center !justify-center !mt-10">
                <Pagination count={10} showFirstButton showLastButton />

           </div>
      </div>
    </section>
  )
}

export default ProductListing
