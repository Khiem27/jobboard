import React from "react";

function BlogDetail() {
  return (
    <div
      className="dez-bnr-inr overlay-black-middle"
      style={{
        backgroundImage:
          "url(https://job-board.dexignzone.com/react/demo/static/media/bnr1.823f624b.jpg)",
      }}
    >
      <div className="container">
        <div className="dez-bnr-inr-entry">
          <h1 className="text-white">Blog Details</h1>
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <a href="/react/demo/blog-classic">Home</a>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
