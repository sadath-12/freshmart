import React from 'react'
import CorouselBanner from './corouselBanner'
import DiscountCard from './DiscountCard'

const HomeBanner = () => {
  return (
    <div className='px-4 py-2 w-full max-w-screen items-center flex space-x-3'>
        <CorouselBanner/>
<DiscountCard/>
    </div>
  )
}

export default HomeBanner