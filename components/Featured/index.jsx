import React from 'react'
import { category } from '../../utils/category'
import FeatureCard from './FeatureCard'

const Featured = () => {
  return (
    <div className='w-full px-3  bg-gray-100 py-7 flex flex-col gap-10 items-center justify-center'>
        {/* heading  */}
        <div className='flex items-center flex-col gap-4'>
<h2 className='font-bold text-lg'>Featured Categories</h2>
<p className='text-sm text-gray-500'>Choose your necessary proucts from this feature categories</p>
        </div>

{/* cards  */}
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
  {category?.slice(0,12).map((item,index)=>(

<FeatureCard item={item} />
  ))}
</div>

    </div>
  )
}

export default Featured