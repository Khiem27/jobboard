import React from "react";
import AppliedJobContent from "../../../Components/ForCandidate/AppliedJob/AppliedJobContent";
import Candidate from "../../../Components/ForCandidate/Candidate/Candidate";
import Header from "../../../Components/Header/Header";

ApplyedJobLayout.propTypes = {};

function ApplyedJobLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Candidate />
                <AppliedJobContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyedJobLayout;
