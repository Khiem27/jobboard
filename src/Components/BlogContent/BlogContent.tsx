import React from "react";

function BlogContent() {
  return (
    <div className="content-area">
      <div className="container max-w900">
        <div className="blog-post blog-lg blog-style-1">
          <div className="dez-post-media dez-img-effect zoom-slow radius-sm">
            <a href="/react/demo/blog-details">
              <img
                src="https://job-board.dexignzone.com/react/demo/static/media/thum2.d0302c61.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="dez-info">
            <div className="dez-post-meta">
              <ul className="d-flex align-items-center">
                <li className="post-date">
                  <i className="fa fa-calendar"></i>September 18, 2017
                </li>
                <li className="post-author">
                  <i className="fa fa-user"></i>By{" "}
                  <a href="/react/demo/blog-classic">demongo</a>{" "}
                </li>
              </ul>
            </div>
            <div className="dez-post-title">
              <h4 className="post-title font-24">
                <a href="/react/demo/blog-details">
                  Do you have a job that the average person doesn’t even know
                  exists?
                </a>
              </h4>
            </div>
            <div className="dez-post-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="dez-post-readmore blog-share">
              <a
                title="READ MORE"
                rel="bookmark"
                className="site-button-link"
                href="/react/demo/blog-details"
              >
                <span className="fw6">READ MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
