import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const FeatureCard = ({item}) => {
  return (
    <div className="px-3 py-5 cursor-pointer shadow-md bg-white rounded-md items-center justify-center flex gap-3">
      <div className='max-w-[60px]'>
        <img src={item.icon} alt="" />
      </div>

      <div className="flex flex-col gap-3">
        <h2>{item.parent}</h2>
        <div className="flex flex-col gap-3">
            {item?.children?.slice(0,3).map((item,index)=>(
          <div className="flex gap-2" key={index} >
            <AiOutlineRight />
            <p className="text-xs text-gray-500">{item}</p>
          </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
