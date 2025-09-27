import React, { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext();
export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const removePost = (id) => {
    setPosts((prev) => {
      const newPosts = prev.filter((p) => p.id !== id);
      const maxPage = Math.ceil(newPosts.length / postsPerPage) || 1;
      if (currentPage > maxPage) setCurrentPage(maxPage);
      return newPosts;
    });
  };

  const value = {
    posts,
    currentPage,
    setCurrentPage,
    postsPerPage,
    totalPages,
    removePost,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};
