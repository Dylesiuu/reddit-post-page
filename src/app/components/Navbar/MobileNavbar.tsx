"use client";

import React, { useState } from "react";
import {
  BiChevronDown,
  BiChevronLeftCircle,
  BiChevronUp,
  BiMenu,
} from "react-icons/bi";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    feeds: false,
    recent: false,
    communities: false,
    resources: false,
  });
  const [activeItem, setActiveItem] = useState<string>("Home");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleMenuClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="relative z-[1000]">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-[999] ${
          isOpen ? "opacity-100" : "opacity-0 invisible"
        }`}
        onClick={toggleNavbar}
      ></div>

      {/* Navbar */}
      <div
        className={`fixed left-0 top-[60px] h-[calc(100vh-60px)] w-64 bg-[var(--background)] border-r border-r-gray-800 text-white transform transition-transform duration-500 z-[1000] ${
          isOpen ? "translate-x-0" : "-translate-x-58"
        }`}
      >
        <div className="flex flex-col h-full justify-items-end w-full py-4 overflow-hidden hover:overflow-y-scroll">
          <div className="pl-6 w-58 space-x-1">
            {/* Top Section */}
            <ul className="space-y-2 border-b border-gray-700 text-sm">
              <li
                className={`p-2 rounded cursor-pointer ${
                  activeItem === "Home"
                    ? "bg-gray-700 rounded-md"
                    : "hover:bg-gray-800/25"
                }`}
                onClick={() => handleMenuClick("Home")}
              >
                Home
              </li>
              <li
                className={`p-2 rounded cursor-pointer ${
                  activeItem === "Popular"
                    ? "bg-gray-700 rounded-md"
                    : "hover:bg-gray-800/25 hover:rounded-md"
                }`}
                onClick={() => handleMenuClick("Popular")}
              >
                Popular
              </li>
              <li
                className={`p-2 rounded cursor-pointer ${
                  activeItem === "Explore"
                    ? "bg-gray-700 rounded-md"
                    : "hover:bg-gray-800/25 hover:rounded-md"
                }`}
                onClick={() => handleMenuClick("Explore")}
              >
                Explore
              </li>
              <li
                className={`p-2 rounded cursor-pointer ${
                  activeItem === "All"
                    ? "bg-gray-700 rounded-md"
                    : "hover:bg-gray-800/25 hover:rounded-md"
                }`}
                onClick={() => handleMenuClick("All")}
              >
                All
              </li>
            </ul>

            {/* Custom Feeds */}
            <ul className="p-4 space-y-2 border-b border-gray-700">
              <li>
                <div
                  className="flex justify-between items-center hover:bg-gray-800/25 p-2 rounded cursor-pointer"
                  onClick={() => toggleSection("customFeeds")}
                >
                  <span className="text-gray-600 text-sm">CUSTOM FEEDS</span>
                  {expandedSections.customFeeds ? (
                    <BiChevronUp size={25} />
                  ) : (
                    <BiChevronDown size={25} />
                  )}
                </div>
                {expandedSections.customFeeds && (
                  <ul className="pl-4 space-y-2 text-sm">
                    <li className="hover:bg-gray-800/25 p-2 rounded ">
                      Feed 1
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">Feed 2</li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">Feed 3</li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Recent */}
            <ul className="p-4 space-y-2 border-b border-gray-700">
              <li>
                <div
                  className="flex justify-between items-center hover:bg-gray-800/25 p-2 rounded cursor-pointer"
                  onClick={() => toggleSection("recent")}
                >
                  <span className="text-gray-600 text-sm">RECENT</span>
                  {expandedSections.recent ? (
                    <BiChevronUp size={25} />
                  ) : (
                    <BiChevronDown size={25} />
                  )}
                </div>
                {expandedSections.recent && (
                  <ul className="pl-4 space-y-2 text-sm">
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Recent Item 1
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Recent Item 2
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Recent Item 3
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Communities */}
            <ul className="p-4 space-y-2 border-b border-gray-700">
              <li>
                <div
                  className="flex justify-between items-center hover:bg-gray-800/25 p-2 rounded cursor-pointer"
                  onClick={() => toggleSection("communities")}
                >
                  <span className="text-gray-600 text-sm">COMMUNITIES</span>
                  {expandedSections.communities ? (
                    <BiChevronUp size={25} />
                  ) : (
                    <BiChevronDown size={25} />
                  )}
                </div>
                {expandedSections.communities && (
                  <ul className="pl-4 space-y-2 text-sm">
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Community Item 1
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Community Item 2
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Community Item 3
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            {/* Resources */}
            <ul className="p-4 space-y-2 border-b border-gray-700">
              <li>
                <div
                  className="flex justify-between items-center hover:bg-gray-800/25 p-2 rounded cursor-pointer"
                  onClick={() => toggleSection("resources")}
                >
                  <span className="text-gray-600 text-sm">RESOURCES</span>
                  {expandedSections.resources ? (
                    <BiChevronUp size={25} />
                  ) : (
                    <BiChevronDown size={25} />
                  )}
                </div>
                {expandedSections.resources && (
                  <ul className="pl-4 space-y-2 text-sm">
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Resource Item 1
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Resource Item 2
                    </li>
                    <li className="hover:bg-gray-800/25 p-2 rounded">
                      Resource Item 3
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            {/* Bottom Section */}
            <ul className=" space-y-2 text-sm">
              <li className="hover:bg-gray-800/25 p-2 rounded">Communities</li>
              <li className="hover:bg-gray-800/25 p-2 rounded">
                Best of Reddit
              </li>
              <li className="hover:bg-gray-800/25 p-2 rounded">Topics</li>
              <li className="hover:bg-gray-800/25 p-2 rounded">All</li>
            </ul>
          </div>
        </div>
        {/* Toggle Button */}
        <button
          className="fixed flex justify-end items-center -right-7 top-5 z-[1003] text-gray-800 p-2 rounded "
          onClick={toggleNavbar}
        >
          {isOpen ? <BiChevronLeftCircle size={40} /> : <BiMenu size={40} />}
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
