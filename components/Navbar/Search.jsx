import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='shadow-md rounded-md flex justify-between w-full items-center bg-white  px-3 py-2.5 max-w-[40rem]'>

<input type="text" placeholder='Search for your products now ......'  className='bg-transparent outline-none w-full text-black'   />
<SearchIcon  className='text-gray-400 cursor-pointer' />
    </div>
  )
}

export default Search