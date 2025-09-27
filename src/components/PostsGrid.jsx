import React from "react";
import { usePosts } from "../Context/PostsContext";
import { XCircleIcon } from "@heroicons/react/24/solid";

const PostsGrid = () => {
  const { posts, currentPage, postsPerPage, removePost } = usePosts();

  const start = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(start, start + postsPerPage);

  if (!posts.length) return <p>Loading or no posts...</p>;

  return (
    <div className="grid grid-cols-3 gap-8 mb-8">
      {currentPosts.map((p) => (
        <div key={p.id} className="relative bg-white shadow-xl rounded-2xl p-6 w-72">
          <button
            onClick={() => removePost(p.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <XCircleIcon className="w-6 h-6" />
          </button>

          <h4 className="font-bold text-lg h-14 overflow-hidden mb-1">
            {p.title}
          </h4>
          <p className="text-gray-700 text-sm h-10 overflow-hidden">
            {p.body}
          </p>
          <p className="text-gray-400 text-xs mt-3">
            Mon, 21 Dec 2020 14:57 GMT
          </p>
          <div className="bg-white h-32 w-full mt-4 rounded overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
