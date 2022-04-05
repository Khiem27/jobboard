import React from "react";
import CandidateCompany from "../../../Components/ForCompany/Candidate/CandidateCompany";
import PostAJob from "../../../Components/ForCompany/PostAJob/PostAJob";
import Header from "../../../Components/Header/Header";

function PostAJobLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CandidateCompany />
                <PostAJob />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostAJobLayout;
