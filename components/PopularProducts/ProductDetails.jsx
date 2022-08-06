import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import Image from 'next/image'
import ClearIcon from '@mui/icons-material/Clear'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
}

const ProductDetails = ({ open, setOpen, item }) => {
  const [quantity, setQuantity] = useState(1)

  console.log('open', open)

  const handleClose = () => {
   setOpen(false)
    console.log('closed',open)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className=" relative shadow-lg rounded-lg gap-6 w-[40rem]  flex flex-col justify-center items-center"
        >
          <div
            onClick={handleClose}
            className="absolute top-5 right-5 rounded-full text-red-500 bg-white"
          >
            <ClearIcon className="cursor-pointer" />
          </div>

          <Image src={item?.image} width={400} height={300} objectFit="cover" />
          <div className="flex gap-5 flex-col items-start">
            <h2 className="font-bold text-md">{item?.parent} </h2>
            <h3 className="px-3 py-2 bg-green-200 text-green-500 font-bold rounded-full">
              In Stock
            </h3>
            <p>{item?.description}</p>
            <p className="font-bold text-lg">${item.price}</p>
            <div className="flex gap-2 w-full">
              <div className="p-1 cursor-pointer border-[1px] rounded-md flex gap-2 items-center border-gray-500">
                <RemoveIcon
                  onClick={() => {
                    quantity >= 0 && setQuantity(quantity--)
                  }}
                />
                <p className="font-bold text-sm">{quantity}</p>
                <AddIcon onClick={() => setQuantity(quantity++)} />
              </div>

              <div className="bg-green-500 w-full flex items-center cursor-pointer justify-center py-2 rounded-md">
                <p className="font-bold text-white">Add to Cart</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ProductDetails
