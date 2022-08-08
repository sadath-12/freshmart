import React from 'react'
import img from '../../public/cta/cta-bg-1.jpg'

const BannerCard = () => {
  return <div style={{ backgroundImage: `url('/cta/cta-bg-1.jpg')` , backgroundPosition:'center', backgroundSize:"cover",backgroundAttachment:"fixed"  }} className="rounded-lg text-white h-[100px]">
    <h1>Taste of</h1>
    <h2>Fresh & Natural</h2>
    <p>Weekend discount offer</p>
    <button  >Shop Now</button>
  </div>
}

export default BannerCard
