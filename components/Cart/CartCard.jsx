import Image from 'next/image'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add'

const CartCard = () => {

    const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col cursor-pointer bg-white  border-b-2 py-4'>

<div className='flex items-center gap-5 px-4'>

<div>
<Image src={'https://i.ibb.co/sWBMfVP/Freshmaker-Baby-Wet-Wipes-With-Cover-72pcs.jpg'} width={100} height={100}  />
</div>

<div>

<h1 className='font-semibold text-lg'>Title</h1>
<h3 className='text-sm text-gray-500'>Price $</h3>

</div>

{/* plus minus and delete  */}
<div className='flex items-center gap-3 justify-center'>


<div className="p-1 cursor-pointer border-[1px] rounded-md flex gap-2 items-center border-gray-500">
                <RemoveIcon
                  onClick={() => {
                    quantity >= 0 && setQuantity(quantity--)
                  }}
                />
                <p className="font-bold text-sm">{quantity}</p>
                <AddIcon onClick={() => setQuantity(quantity++)} />
          
</div>

<DeleteIcon className='text-red-600 text-3xl hover:bg-red-200 p-1 bg-white  rounded-full'  />

</div>
</div>



    </div>
  )
}

export default CartCard