import React from 'react'
import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer';

const SmallNav = () => {

    const [open,setOpen]=useState(false)

  return (
    <div className='flex lg:hidden justify-between bg-green-600 py-4 px-4 text-white'>
<NavDrawer open={open} setOpen={setOpen} />
<MenuIcon className='cursor-pointer' onClick={()=>setOpen(true)} />
<HomeIcon className='cursor-pointer'/>
<ShoppingBasketIcon className='cursor-pointer'/>
<PersonIcon className='cursor-pointer'/>

    </div>
  )
}

export default SmallNav