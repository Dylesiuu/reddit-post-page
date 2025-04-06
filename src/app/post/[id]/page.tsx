import React from "react";

const PostPage = async ({params} : {params: {id:string}} ) => {
  const id = params.id;
  return (
     <div className="overflow-hidden justify-center">
     <div className="flex flex-col items-center justify-center h-screen">
         <h1 className="text-4xl text-orange-700 font-bold">Post with id: {id}</h1>
     </div>
 </div>
  );
}
export default PostPage;