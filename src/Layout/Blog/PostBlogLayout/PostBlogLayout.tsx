import React from "react";
import PostBlog from "../../../Components/ Blog/PostBlog/PostBlog";
import Header from "../../../Components/Header/Header";

PostBlogLayout.propTypes = {};

function PostBlogLayout() {
  return (
    <>
      <Header />
      <PostBlog />
    </>
  );
}

export default PostBlogLayout;
