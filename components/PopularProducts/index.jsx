import React from 'react'
import products from '../../utils/products'
import ProductCard from './ProductCard'

const PopularProducts = () => {
  return (
    <div className="px-5 py-10 bg-gray-100 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-xl">
          Popular Products for Daily Shopping
        </h1>
        <p className="text-sm text-gray-800 text-center ">
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.slice(0, 12).map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PopularProducts
