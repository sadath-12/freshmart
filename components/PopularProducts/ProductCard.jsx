import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image';
import ProductDetails from './ProductDetails';

const ProductCard = ({item}) => {

  const [open,setOpen]=useState(false)

  return (
    <>
     {open && <ProductDetails open={open} setOpen={setOpen} item={item}  /> } 
    <div onClick={()=>setOpen(true)} className='px-4 transition-all duration-400 ease-in-out cursor-pointer rounded-md group bg-white shadow-md py-3  flex flex-col' >
<Image src={item.image} width={200} height={150} objectFit='contain' className='group-hover:scale-125 transition-all ease-in-out'  />
<h2 className='text-gray-700' >{item.title}</h2>
<div className='flex justify-between'>
<h3> $ {item.price} </h3>
<AddShoppingCartIcon className='text-green-800'/>
</div>

    </div>
    </>
  )
}

export default ProductCard