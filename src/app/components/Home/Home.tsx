"use client";
import React from "react";
import { mockPosts } from "../__mocks__/mockData";
import Image from "next/image";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNextImageChange = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % mockPosts[0].imagesUrl.length,
    );
  };

  const handlePrevImageChange = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1) % mockPosts[0].imagesUrl.length,
    );
  };

  return (
    <div className="h-screen w-screen pt-[60px] overflow-y-auto justify-center">
      {/* Main Content */}
      <div className="flex flex-col px-[calc(100vw/3)] space-y-6">
        {/* Posts Cards*/}
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="border-t border-t-gray-800 mb-4 bg-[var(--background)] space-y-1"
          >
            <div className="flex flex-col space-y-1">
              <div className="text-gray-400 text-sm">{post.subbreddit}</div>
              <div className="text-[12px]">{post.flair}</div>
            </div>
            <h2 className="text-[17px] font-bold">{post.title}</h2>
            {/* Post Content */}
            <div>
              {post.videoUrl ? (
                <video className="w-full h-auto rounded-lg">
                  <source src={post.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative">
                  <Image
                    key={post.id}
                    src={post.imagesUrl[currentImageIndex]}
                    width={400}
                    height={400}
                    alt={`Post image ${post.id}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => handlePrevImageChange}
                      className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => handleNextImageChange}
                      className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/*Likes, comments, etc*/}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
