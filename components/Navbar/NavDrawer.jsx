import React, { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Drawer from '@mui/material/Drawer'
import { category } from '../../utils/category'
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { pagesData } from '../../utils/dummyData'
import Link from 'next/link'

const NavDrawer = ({ open, setOpen }) => {

  const [showSub,setSub]=useState(false)
  const [subParent , setParent]=useState('')

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor} >
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)} className='!scrollbar-hide' >
            <div>
                <SmallNavContent setOpen={setOpen} showSub={showSub} setSub={setSub} subParent={subParent} setParent={setParent} />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavDrawer

const SmallNavContent = ({setOpen,showSub,setSub,subParent,setParent}) => {

 

  return (
    <div className="  flex flex-col space-y-4 items-start  min-w-[25rem] w-full !scrollbar-hide">
      {/* head  */}
      <div className="bg-green-500 flex items-center w-full py-3 px-3 text-white justify-between">
        <h1 className="font-semibold text-lg">SaduMart</h1>
        <HighlightOffIcon className="text-white cursor-pointer" onClick={()=>setOpen(false)} />
      </div>

      {/* categories  */}
      <div className='w-full flex flex-col'>
        <h2 className='text-2xl font-semibold border-b p-3 block !mx-auto'>All Categories</h2>
        <div className='w-full '>
            {category?.slice(0,7).map(({parent,icon,children},i)=>(
                <div key={i} className='flex flex-col hover:text-green-600  justify-between py-3 px-4 rounded-lg cursor-pointer '>
                  <div className='flex justify-between items-center' onClick={()=>{setParent(parent);setSub(!showSub) }} >

                    <Image src={icon} width={30} height={30} objectFit='contain' />
                    <h3 className='font-medium' >{parent}</h3>
                    <NavigateNextIcon className='text-gray-500' />
                  </div>
                
                <div>
                  {showSub && children && parent===subParent && (
                 <div>
                  {children.map((title,index)=>(
                    <div className='flex justify-center py-1.5 bg-white rounded-md' key={index} >
                      <Link href={'/'}>
                      <h3 className='text-sm p-2' >{title}</h3>
                      </Link>
                    </div>
                  ))}
                 </div>
                  )}
                </div>

                </div>

            ))}
        </div>

      </div>

      {/* pages  */}
      <div className='flex flex-col w-full px-4'>
      <h2 className='text-2xl font-semibold border-b p-3 block !mx-auto'>Pages</h2>
      {pagesData?.map(({title,Icon,link},index)=>(
      <Link href={link} passHref key={index}>
        <div className='flex space-x-3  p-3 cursor-pointer  hover:text-green-600 hover:bg-gray-100'>
{Icon && <Icon/> }
<h3>{title}</h3>


        </div>
      </Link>
    ) )}
      </div>
    </div>
  )
}
