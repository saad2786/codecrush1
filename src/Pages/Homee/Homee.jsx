import React, { useState } from "react";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import BlogList from "../../components/Home/BlogList/BlogList";
import { blogListData } from "../../config/data";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import Navbar from "../../components/container/Navbar/Navbar"

const Homee = () => {
  const [blogs, setBlogs] = useState(blogListData);
  const [searchKey, setSearchKey] = useState("");

  // search submit function
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogListData;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

   // Clear search and show all blogs
   const handleClearSearch = () => {
    setBlogs(blogListData);
    setSearchKey('');
  };

  return (
    <div>
      {/* page header */}
      {/* <Header /> */}

      <Navbar />      

      {/* search bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* blog list and empty list */}
      {!blogs.length ? <EmptyList /> :  <BlogList blogs={blogs} />}
    </div>
  );
};

export default Homee;
