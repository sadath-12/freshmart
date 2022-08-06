import { Box, Modal } from '@mui/material'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

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

const Login = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
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
          className="flex flex-col rounded-lg w-full max-w-[40rem]"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl gap-3">Login</h1>
            <p>Login with your email and password</p>
          </div>

          <div className='flex flex-col gap-3'>

            <div className='flex flex-col gap-3'>
              <h3 className="text-gray-600">Email</h3>
              <div className='flex items-center gap-3 rounded-md border px-2 py-2'>
                <MailOutlineIcon className='text-gray-500' />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className="text-gray-600">Password</h3>
              <div className='flex items-center gap-3 rounded-md border px-2 py-2'>
                <VpnKeyIcon className='text-gray-500' />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none bg-transparent placeholder:text-gray-500"
                />
              </div>

<h3 className='font-semibold underline'>Forgot Password ?</h3>
<button className='w-full py-2.5 text-white rounded-lg font-semibold bg-green-500'>Login</button>

<h3 className='text-gray-700 text-lg text-center py-5' >OR</h3>

<div className='flex flex-col gap-2' >

<div className='bg-gray-200 flex cursor-pointer gap-2 items-center justify-center py-3 rounded-md'>
<FaFacebook className='text-gray-800 text-2xl' />
<h3 className='font-semibold font-md text-gray-800'>Login with Facebook</h3>
</div>
<div className='bg-gray-200 flex cursor-pointer gap-2 items-center justify-center py-3 rounded-md'>
<FcGoogle className='text-gray-800 text-2xl' />
<h3 className='font-semibold font-md text-gray-800'>Login with Google</h3>
</div>

<div>

</div>

</div>

            </div>


          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Login
