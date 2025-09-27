import React from "react";
import { PostsProvider } from "./Context/PostsContext";
import PostsGrid from "./components/PostsGrid";
import Pagination from "./components/Pagination";

const App = () => (
  <PostsProvider>
    <div className="p-10 min-h-screen bg-gray-50 text-black">
      <PostsGrid />
      <Pagination />
    </div>
  </PostsProvider>
);

export default App;
