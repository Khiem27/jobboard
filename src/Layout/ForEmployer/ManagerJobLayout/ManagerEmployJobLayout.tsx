import React from "react";
import CandidateCompany from "../../../Components/ForCompany/Candidate/CandidateCompany";
import CompanyManagerJob from "../../../Components/ForCompany/CompanyManagerJob/CompanyManagerJob";
import Header from "../../../Components/Header/Header";

ManagerEmployJobLayout.propTypes = {};

function ManagerEmployJobLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CandidateCompany />
                <CompanyManagerJob />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerEmployJobLayout;
