import React from 'react'
import Image from 'next/image'
import { BiBell } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray shadow-md p-4 border-b border-b-gray-800'>
      <div className='flex items-center h-full justify-between w-full px-4'>
        {/* Logo */}
    <div className='flex items-center space-x2'>
        <div className='w-10 h-10 rounded-full flex items-center justify-center'>
            <Image src="/images/Reddit_Logo.png" alt="logo" width={100} height={100} className='rounded-full' />
        </div>
        </div>
    {/* Search Bar */}
    <div className='flex-1 flex items-center justify-center'>
        <p className='text-white'>Search Reddit</p>
    </div>

    {/* User Profile */}
    <div className='flex items-center space-x-4'>
        <BiBell className='text-white' size={24} />
        <p className='text-white'>Profile</p> 
        </div>
    </div>
    </div>
  )
}

export default Navbar
