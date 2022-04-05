import React from "react";
import BlogContent from "../../../Components/ Blog/BlogContent/BlogContent";
import BlogClassic from "../../../Components/ Blog/PageTitle/BlogClassic";
import Header from "../../../Components/Header/Header";

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
