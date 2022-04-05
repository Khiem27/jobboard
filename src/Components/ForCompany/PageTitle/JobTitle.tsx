import React from "react";

JobTitle.propTypes = {};

function JobTitle() {
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
          <h1 className="text-white">Browse Job List</h1>
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li>
                <a href="/react/demo/blog-classic">Home</a>
              </li>
              <li>Browse Job List</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobTitle;
