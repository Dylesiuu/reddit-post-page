"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BiBell, BiSearch, BiPlus, BiMessageRoundedDots } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [notificationCount, setNotificationCount] = useState(5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleNotificationClick = () => {
    setNotificationCount(0);
    alert("Notifications cleared");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-15 shadow-md p-2 sm:p-3 border-b bg-[var(--background)] border-b-gray-800 z-[1001]">
      <div className="flex items-center h-full justify-between w-full space-x-1">
        {/* Left Section. Logo */}
        <Link href="/" className="flex items-center space-x-1.5">
          <div className="w-8 h-8 hidden rounded-full sm:flex items-center justify-center">
            <Image
              src="/images/Reddit_Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl sm:text-orange-600 md:text-white font-bold pl-1.5">
            reddit
          </h1>
        </Link>
        {/* Center Section */}
        <div className="flex-1 flex items-center justify-center p-1">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <BiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
              size={19}
            />
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Search Reddit"
              className="w-full pl-9 py-2 rounded-full bg-gray-700 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center sm:space-x-4 space-x-2">
          {/* Message Icon */}
          <button
            aria-label="messages-button"
            className=" w-full max-w-md"
            onClick={() => alert("Messages")}
          >
            <BiMessageRoundedDots className="text-white" size={26} />
          </button>
          {/* Create Post Button */}
          <button
            className="relative  w-full max-w-md text-white flex items-center"
            onClick={() => alert("Create Post")}
          >
            <BiPlus size={24} />
            <p className="text-white text-sm hidden sm:flex">Create</p>
          </button>
          {/*Bell icon*/}
          <button
            className="relative w-full max-w-md"
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <BiBell className="text-white" size={24} />
            {/* Notification Badge */}
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                {notificationCount}
              </span>
            )}
          </button>
          {/* User Profile Icon */}
          <button
            className="relative w-full max-w-md"
            onClick={() => alert("User Profile")}
          >
            <Image
              src="/images/hexagon.png"
              alt="user profile"
              width={30}
              height={30}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
