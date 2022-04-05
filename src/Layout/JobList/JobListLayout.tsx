import React from "react";
import JobTitle from "../../Components/ForCompany/PageTitle/JobTitle";
import Header from "../../Components/Header/Header";
import JobListContent from "../../Components/JobList/JobListContent";

JobListLayout.propTypes = {};

function JobListLayout() {
  return (
    <div>
      <Header />
      <div className="page-content bg-white">
        <JobTitle />
        <JobListContent />
      </div>
    </div>
  );
}

export default JobListLayout;
