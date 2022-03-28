import React from "react";
import BlogContent from "../../../Components/ Blog/BlogContent/BlogContent";
import Header from "../../../Components/Header/Header";
import BlogClassic from "../../../Components/PageTitle/Blog/BlogClassic";

BlogClassicLayout.propTypes = {};

function BlogClassicLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <BlogClassic />
        <BlogContent />
      </div>
    </>
  );
}

export default BlogClassicLayout;
