"use client";

import React, { useState } from 'react';
import { BiChevronLeftCircle } from 'react-icons/bi';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-[1000]">
      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-[999] ${
        isOpen ? "opacity-100" : "opacity-0 invisible"
      }`}
      onClick={toggleNavbar}
      ></div>

      {/* Navbar */}
      <div
        className={`fixed top-15 left-0 h-full w-64 bg-[var(--background)] border-r border-r-gray-800 text-white transform transition-transform duration-500 z-[1000] ${
          isOpen ? 'translate-x-0' : '-translate-x-58'
        }`}
      >
        <div className='flex flex-col items-center h-full justify-between w-full space-x-1'>
  `        <ul className="p-4 space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">Home</li>
            <li className="hover:bg-gray-700 p-2 rounded">Popular</li>
            <li className="hover:bg-gray-700 p-2 rounded">Explore</li>
            <li className="hover:bg-gray-700 p-2 rounded">All</li>
          </ul>

        </div>
        {/* Toggle Button */}
        <button
          className="fixed flex justify-end items-center w-full -right-7 top-5 z-[1003] bg-gray- text-gray-600 p-2 rounded "
          onClick={toggleNavbar}>
            <BiChevronLeftCircle size={40} />
          </button>      
      </div>
    </div>
  );
};

export default MobileNavbar;