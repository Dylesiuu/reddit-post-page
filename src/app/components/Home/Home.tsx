"use client";
import React from "react";
import { mockPosts } from "../__mocks__/mockData";
import Image from "next/image";
import {
  BiSolidUpvote,
  BiSolidDownvote,
  BiMessageRounded,
  BiShare,
} from "react-icons/bi";

const Home = () => {
  const [likeState, setLikeState] = React.useState(
    mockPosts.map((post) => ({ postId: post.id, like: false })),
  );

  const [dislikeState, setDislikeState] = React.useState(
    mockPosts.map((post) => ({ postId: post.id, dislike: false })),
  );

  const [currentIndices, setCurrentIndices] = React.useState(
    mockPosts.map((post) => ({ postId: post.id, currentImageIndex: 0 })),
  );

  const [shareState, setSharesState] = React.useState(
    mockPosts.map((post) => ({ postId: post.id, shares: post.shares })),
  );

  const [commentState, setcommentState] = React.useState(
    mockPosts.map((post) => ({ postId: post.id, comments: post.comments })),
  );

  const handleNextImageChange = (postId: number) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((item) =>
        item.postId === postId
          ? {
              ...item,
              currentImageIndex:
                (item.currentImageIndex + 1) %
                mockPosts.find((post) => post.id === postId)?.imagesUrl.length,
            }
          : item,
      ),
    );
  };

  const handlePrevImageChange = (postId: number) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((item) =>
        item.postId === postId
          ? {
              ...item,
              currentImageIndex:
                (item.currentImageIndex -
                  1 +
                  (mockPosts.find((post) => post.id === postId)?.imagesUrl
                    ?.length || 0)) %
                mockPosts.find((post) => post.id === postId)?.imagesUrl.length,
            }
          : item,
      ),
    );
  };

  const handleLike = (postId: number) => {
    setLikeState((prev) =>
      prev.map((item) =>
        item.postId === postId ? { ...item, like: !item.like } : item,
      ),
    );
    setDislikeState((prev) =>
      prev.map((item) =>
        item.postId === postId ? { ...item, dislike: false } : item,
      ),
    );
  };
  const handleDislike = (postId: number) => {
    setDislikeState((prev) =>
      prev.map((item) =>
        item.postId === postId ? { ...item, dislike: !item.dislike } : item,
      ),
    );
    setLikeState((prev) =>
      prev.map((item) =>
        item.postId === postId ? { ...item, like: false } : item,
      ),
    );
  };

  const handleShareState = (postId: number) => {
    setSharesState((prev) =>
      prev.map((item) =>
        item.postId === postId ? { ...item, shares: item.shares + 1 } : item,
      ),
    );
  };

  const handleCommentState = (postId: number) => {
    setcommentState((prev) =>
      prev.map((item) =>
        item.postId === postId
          ? { ...item, comments: item.comments + 1 }
          : item,
      ),
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
            className="min-h-[400px] w-[35vw] border-t border-t-gray-800 bg-[var(--background)] space-y-1 mb-2"
          >
            <div className="flex flex-col space-y-1 pb-1">
              {post.subbreddit ? (
                <div className="text-gray-400 text-sm">{post.subbreddit}</div>
              ) : null}
              {post.flair ? (
                <div className="text-[12px]">{post.flair}</div>
              ) : null}
            </div>
            <h2 className="text-[17px] font-bold">{post.title}</h2>
            {/* Post Content */}
            <div className="flex w-[90%] h-[300px] sm:h-[400px] lg:h-[450px] mx-auto mb-2">
              {post.videoUrl ? (
                <div className="flex w-full h-full justify-center">
                  <video
                    className="w-full h-full rounded-lg"
                    controls
                    preload="metadata"
                  >
                    <source src={post.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative w-full h-ful">
                  <Image
                    key={post.id}
                    src={
                      post.imagesUrl[
                        currentIndices.find((item) => item.postId === post.id)
                          ?.currentImageIndex ?? 0
                      ]
                    }
                    width={400}
                    height={500}
                    alt={`Post image ${post.id}`}
                    className="w-full h-full object-cover justify-center rounded-lg"
                  />
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => handlePrevImageChange(post.id)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 rounded hover:bg-gray-600"
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={() => handleNextImageChange(post.id)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 rounded hover:bg-gray-600"
                  >
                    {">"}
                  </button>
                  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-[12px] bg-gray-800 rounded-lg px-2 py-1">
                    {(currentIndices.find((item) => item.postId === post.id)
                      ?.currentImageIndex ?? 0) + 1}
                    /{post.imagesUrl.length}
                  </span>
                </div>
              )}
            </div>
            {/*Likes, comments, etc*/}
            <div className="flex justify-between items-center text-gray-400 text-sm pt-2">
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      handleLike(post.id);
                      if (
                        likeState.find((item) => item.postId === post.id)?.like
                      ) {
                        post.likes -= 1;
                      } else {
                        post.likes += 1;
                      }
                    }}
                  >
                    {likeState.find((item) => item.postId === post.id)?.like ? (
                      <BiSolidUpvote size={20} className="text-red-500" />
                    ) : (
                      <BiSolidUpvote size={20} />
                    )}
                  </button>
                  <span>{post.likes - post.dislikes}</span>
                  <button
                    onClick={() => {
                      handleDislike(post.id);
                      if (
                        dislikeState.find((item) => item.postId === post.id)
                          ?.dislike
                      ) {
                        post.dislikes -= 1;
                      } else {
                        post.dislikes += 1;
                      }
                    }}
                  >
                    {dislikeState.find((item) => item.postId === post.id)
                      ?.dislike ? (
                      <BiSolidDownvote size={20} className="text-blue-500" />
                    ) : (
                      <BiSolidDownvote size={20} />
                    )}
                  </button>
                </span>
                <span className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      alert("You left a comment.");
                      handleCommentState(post.id);
                    }}
                  >
                    <BiMessageRounded size={20} />
                  </button>
                  <span>
                    {commentState.find((item) => item.postId === post.id)
                      ?.comments ?? 0}
                  </span>
                </span>
              </div>
              <div className="flex items-end">
                <span className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      alert("You shared this post. Are you proud of yourself?");
                      handleShareState(post.id);
                    }}
                  >
                    <BiShare size={20} />
                  </button>
                  <span>
                    {shareState.find((item) => item.postId === post.id)
                      ?.shares ?? 0}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
