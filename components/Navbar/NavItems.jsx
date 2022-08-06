import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pagesData } from '../../utils/dummyData';
import Link from 'next/link'

const NavItems = () => {

    const [showPages,setShowPages]=useState(false)

  return (
    
<div className='px-10 py-3 relative z-10 bg-white shadow-md  text-gray-500 text-md hidden lg:flex w-full items-center justify-between'>

<div className='flex items-center space-x-5 '>
<h3 className='hover:text-gray-700 cursor-pointer'>Categories</h3>
<h3 className='hover:text-gray-700 cursor-pointer'>AboutUs</h3>
<h3 className='hover:text-gray-700 cursor-pointer'>Contact Us</h3>
<h3 className='text-red-700 bg-red-200 p-1 rounded-lg cursor-pointer'>Offers</h3>
<div className='flex items-center cursor-pointer'>
<h3 className='hover:text-gray-700 ' onMouseLeave={()=>setShowPages(false)} onMouseEnter={()=>setShowPages(true)} >Pages</h3>
<ExpandMoreIcon className='text-gray-500' />
{showPages && (
    <div className='flex flex-col absolute top-8   px-8 py-3 ' onMouseEnter={()=>setShowPages(true)}  onMouseLeave={()=>setShowPages(false)}>
     
     {pagesData.map(({title,Icon,link},index)=>(
      <Link href={link} passHref key={index}>
        <div className='flex space-x-3 p-3 bg-white shadow-md rounded-lg hover:text-green-600 hover:bg-gray-100'>
{Icon && <Icon/> }
<h3>{title}</h3>


        </div>
      </Link>
    ) )}

    </div>
)}
</div>
</div>

<div className='flex items-center space-x-4'>
<h3 className='hover:text-gray-700 cursor-pointer'>Privacy Policy</h3>
<h3 className='hover:text-gray-700 cursor-pointer'>Terms and Conditions</h3>
</div>



</div>
  )
}

export default NavItems