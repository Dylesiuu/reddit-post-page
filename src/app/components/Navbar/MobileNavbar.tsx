"use client";

import React, { useState } from 'react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Navbar */}
      <div
        className={`fixed top-15 left-0 h-full w-64 bg-gray border-r border-r-gray-800 text-white transform transition-transform duration-500 z-[1002] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="p-4 text-lg font-bold">Mobile Navbar</h2>
        <ul className="p-4 space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">About</li>
          <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className={`fixed top-[calc(15 + 1rem)] left-4 z-[1003] bg-gray-700 text-white p-2 rounded transform transition-transform duration-500 ${
          isOpen ? 'translate-x-64' : ''
        }`}
        onClick={toggleNavbar}
      >
        Menu
      </button>
    </div>
  );
};

export default MobileNavbar;