import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartCard from './CartCard';

const CartModal = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(false)
  }

  return (
    <div className='w-full h-full !bg-gray-100'>
      <Drawer className='!w-[40rem] ' anchor={'right'} open={open} onClose={toggleDrawer}>
        <div className='  w-full'>
          <div className="w-full bg-blue-100 gap-20 py-3 px-10 flex justify-between items-center">
            <div className="flex  items-center gap-2">
                <LocalMallIcon/>
                <h3 className='font-semibold text-xl'>Shopping Cart</h3>
            </div>

<div className='flex gap-1 cursor-pointer text-red-500 items-center font-bold' onClick={()=>setOpen(false)} >
    <CloseIcon/>
    <h3>Close</h3>
</div>
        
          </div>

{/* item cart  */}
          <div className="flex flex-col ">
<CartCard/>
<CartCard/>
<CartCard/>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default CartModal
