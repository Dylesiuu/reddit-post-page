"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { BiBell, BiSearch } from 'react-icons/bi'

const Navbar = () => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className='w-full h-13 bg-gray shadow-md p-3 border-b border-b-gray-800'>
      <div className='flex items-center h-full justify-between w-full'>
        {/* Logo */}
        <div className='flex items-center space-x2'>
            <div className='w-8 h-8 sm:block rounded-full flex items-center justify-center'>
                <Image src="/images/Reddit_Logo.png" alt="logo" width={100} height={100} className='rounded-full' />
            </div>
            <h1 className='text-3xl sm:text-orange-600 md:text-white font-bold pl-1.5'>reddit</h1>
        </div>
        {/* Search Bar */}
        <div className='flex-1 flex items-center justify-center p-1'>
          <div className='relative w-full max-w-md'>
            <BiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300' size={19} />
            <input 
              type="text" 
              value={searchText}
              onChange={handleInputChange}
              placeholder="Search Reddit" 
              className='w-full pl-9 py-2 rounded-full bg-gray-700 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white'/>
          </div>
          
        </div>

        {/* User Profile */}
        <div className='flex items-center space-x-3'>
            <BiBell className='text-white' size={24} />
            <p className='text-white'>Profile</p> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
