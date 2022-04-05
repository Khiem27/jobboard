import React from "react";
import CandidateCompany from "../../../Components/ForCompany/Candidate/CandidateCompany";
import CompanyResume from "../../../Components/ForCompany/CompanyResume/CompanyResume";
import Header from "../../../Components/Header/Header";

ResumeEmployerLayout.propTypes = {};

function ResumeEmployerLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CandidateCompany />
                <CompanyResume />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeEmployerLayout;
