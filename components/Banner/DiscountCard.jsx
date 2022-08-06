import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Clock from '../Clock'

const DiscountCard = () => {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer = () => {
    const countDownDate = new Date('May 30,2023 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <div className=" hidden lg:flex flex-col border-green-500 px-3 py-3 rounded-md">
      {/* title  */}
      <div className="px-3 py-2 bg-red-300 text-gray-800">
        <h2>Latest Super Discount Active Coupon Code</h2>
      </div>

      <div className="flex flex-col space-y-3 shadow-md px-2 py-3">
        <div className="flex space-x-3 items-center">
          <Image
            src="/couponimage.webp"
            width={200}
            height={200}
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="flex flex-col space-y-2">
            <p className="space-x-1 gap-2">
              <span>10% off</span>{' '}
              <span className="px-2 py-1 rounded-md bg-red-200 text-red-600">
                Inactive
              </span>
            </p>

            <h2 className=" font-semibold text-sm">October gift Vouncher</h2>
          </div>

          {/* discount  */}
          <div className="flex flex-col space-y-3">
            <h1 className="px-2 py-1 rounded-md bg-green-300 text-green-600">
              OCTOBER18
            </h1>
            <p className="text-sm text-gray-500">
              Coupon code applicable for orders above 500$
            </p>
          </div>
        </div>

        {/* coupon  */}
        <div className="flex items-center justify-center py-2">
          <Clock
            timerDays={0}
            timerHours={0}
            timerMinutes={0}
            timerSeconds={0}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3 shadow-md px-2 py-3">
        <div className="flex space-x-3 items-center">
          <Image
            src="/couponimage.webp"
            width={200}
            height={200}
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="flex flex-col space-y-2">
            <p className="space-x-1">
              <span>10% off</span>{' '}
              <span className="px-2 py-1 rounded-md bg-green-200 text-green-600">
                Active
              </span>
            </p>

            <h2 className=" font-semibold text-sm">October gift Vouncher</h2>
          </div>

          {/* discount  */}
          <div className="flex flex-col space-y-3">
            <h1 className="px-2 py-1 rounded-md bg-green-300 text-green-600">
              OCTOBER17
            </h1>
            <p className="text-sm text-gray-500">
              Coupon code applicable for orders above 500$
            </p>
          </div>
        </div>

        {/* coupon  */}
        <div className="flex items-center justify-center py-2">
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>
      </div>
    </div>
  )
}

export default DiscountCard
