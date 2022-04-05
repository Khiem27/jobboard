import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";
import BlogDetail from "../../../Components/ Blog/PageTitle/BlogDetail";
import Header from "../../../Components/Header/Header";
import "../../../Css/bootstrap.min.css";

BlogDetailsLayout.propTypes = {};

function BlogDetailsLayout() {
  let { id } = useParams();
  const [blogData, setBlogData] = useState<any>([]);
  useEffect(() => {
    const getOneBlog = async () => {
      const getOne = await UserApi.getOneBlog(id);
      setBlogData(getOne.data);
    };
    getOneBlog();
  }, [id]);
  return (
    <>
      <Header />
      <BlogDetail />
      {blogData && (
        <div className="content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 m-b10">
                <div className="blog-post blog-single blog-style-1">
                  <div className="dez-post-meta">
                    <ul className="d-flex align-items-center">
                      <li className="post-date">
                        <i className="fa fa-calendar"></i>September 18, 2017
                      </li>
                    </ul>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData.content,
                    }}
                  />
                </div>
                <div className="clear"></div>
              </div>
              <div className="col-lg-4 col-md-5 sticky-top"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogDetailsLayout;
