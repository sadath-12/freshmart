import React, { useState } from 'react'
import Search from './Search'
import ChatIcon from '@mui/icons-material/Chat'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import NavItems from './NavItems'
import CartModal from '../Cart/CartModal'
import Login from '../Auth/Login'

const Navbar = () => {

  const [open,setOpen]=useState(false)
  const [openLogin,setLogin]=useState(false)


  return (
    <div className="flex flex-col w-full">
      <CartModal open={open} setOpen={setOpen} />
      <Login open={openLogin} setOpen={setLogin} />
      <div className="flex font-serif space-x-10 justify-between px-6 py-3 shadow-lg items-center w-full bg-green-600 text-white">
        <div className="flex-0.3">
          <h1 className="text-2xl font-bold text-white shadow-sm">FreshMart</h1>
        </div>

        <div className="flex-1 flex justify-center ">
          <Search />
        </div>

        <div className="flex-0.7 items-center lg:flex hidden space-x-10">
          <Tooltip title="Chat" className="text-white">
            <IconButton>
              <ChatIcon className="text-3xl" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart" className="text-white">
            <IconButton>
              <ShoppingBasketIcon onClick={()=>setOpen(true)} className="text-3xl" />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Profile" className="text-white">
            <IconButton>
              <PersonIcon className="text-3xl" onClick={()=>setLogin(true)} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <NavItems/>
    </div>
  )
}

export default Navbar
