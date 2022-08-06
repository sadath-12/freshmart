import React from 'react'

const Clock = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {

  return (
    <section className='flex space-x-3'>
        <div className={`p-1 px-2 rounded-md flex items-center justify-center text-white ${timerDays > 0 ? 'bg-green-500': 'bg-red-600'}  `}>
<h3>{timerDays?.toString().padStart(2,0)} </h3>
        </div>
        <span>:</span>
        <div className={`p-1 px-2 rounded-md flex items-center justify-center text-white ${timerDays > 0 ? 'bg-green-500': 'bg-red-600'}  `}>
<h3>{timerHours?.toString().padStart(2,0)}</h3>
        </div>
        <span>:</span>
        <div className={`p-1 px-2 rounded-md flex items-center justify-center text-white ${timerDays > 0 ? 'bg-green-500': 'bg-red-600'}  `}>
<h3>{timerMinutes?.toString().padStart(2,0)}</h3>
        </div>
        <span>:</span>
        <div className={`p-1 px-2 rounded-md flex items-center justify-center text-white ${timerDays > 0 ? 'bg-green-500': 'bg-red-600'}  `}>
<h3>{timerSeconds?.toString().padStart(2,0)}</h3>
        </div>
       
       
    </section>
  )
}

export default Clock