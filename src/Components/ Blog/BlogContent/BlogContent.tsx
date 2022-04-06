import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";

function BlogContent() {
  const [blogData, setBlogData] = useState<any>([]);
  useEffect(() => {
    const getAllBlog = async () => {
      const getAll = await UserApi.getAllBlog();
      setBlogData(getAll.data);
    };

    getAllBlog();
  }, []);
  return (
    <>
      {blogData
        ? blogData.map((item: any, index: any) => {
            return (
              <div key={index} className="content-area">
                <div className="container max-w900">
                  <div className="blog-post blog-lg blog-style-1">
                    <div className="dez-post-media dez-img-effect zoom-slow radius-sm">
                      <Link to={`/blog-classic/detail/${item.id}`}>
                        <img src={item.picture} alt="" />
                      </Link>
                    </div>
                    <div className="dez-info">
                      <div className="dez-post-meta">
                        <ul className="d-flex align-items-center">
                          <li className="post-date">
                            <i className="fa fa-calendar"></i>
                            {item.created_at}
                          </li>
                        </ul>
                      </div>
                      <div className="dez-post-title">
                        <h4 className="post-title font-24">
                          <Link to={`/blog-classic/detail/${item.id}`}>
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                      <div className="dez-post-text">
                        <p>{item.headline}</p>
                      </div>
                      <div className="dez-post-readmore blog-share">
                        <Link
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button-link"
                          to={`/blog-classic/detail/${item.id}`}
                        >
                          <span className="fw6">READ MORE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default BlogContent;
