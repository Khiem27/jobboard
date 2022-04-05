import React from "react";
import JobTitle from "../../Components/ForCompany/PageTitle/JobTitle";
import Header from "../../Components/Header/Header";
import JobListContent from "../../Components/JobList/JobListContent";
import Search from "../../Components/Search/Search";

JobListLayout.propTypes = {};

function JobListLayout() {
  return (
    <div>
      <Header />
      <div className="page-content bg-white">
        <JobTitle />
        <Search />
        <JobListContent />
      </div>
    </div>
  );
}

export default JobListLayout;
