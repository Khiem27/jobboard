import React from "react";
import CandidateCompany from "../../../Components/ForCompany/Candidate/CandidateCompany";
import CompanyProfile from "../../../Components/ForCompany/CompanyProfile/CompanyProfile";
import Header from "../../../Components/Header/Header";

ProfileCompanyLayout.propTypes = {};

function ProfileCompanyLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CandidateCompany />
                <CompanyProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCompanyLayout;
