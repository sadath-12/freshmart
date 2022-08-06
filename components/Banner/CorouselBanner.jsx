import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CorouselBanner() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/slider/slider-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/slider-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider/slider-1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
