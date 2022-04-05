import React from "react";
import Header from "../../Components/Header/Header";
import JobDetails from "../../Components/JobDetails/JobDetails";
import PageTitle from "../../Components/JobDetails/PageTitle";
import "../../Css/style.css";

JobDetailsLayout.propTypes = {};

function JobDetailsLayout() {
  return (
    <div>
      <Header />
      <div className="page-content bg-white">
        <PageTitle />
        <JobDetails />
      </div>
    </div>
  );
}

export default JobDetailsLayout;
