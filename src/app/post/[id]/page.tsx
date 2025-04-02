import React from "react";

const PostPage = async ({params} : {params: {id:string}} ) => {
  const id = (await params).id;
  return (
    <div className="text-5x1 text-orange-700 font-bold">
      Post with id: {id}
    </div>
  );
}
export default PostPage;