import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";

JobListContent.propTypes = {};

function JobListContent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const [allJobs, setAllJobs] = useState<any>([]);
  useEffect(() => {
    const getAllJob = async () => {
      const getJOBS = await UserApi.getJob(page, 5);
      const allJob = getJOBS.data;
      setAllJobs(allJob);
    };
    getAllJob();
  }, [page]);

  const time = (dateInput: any) => {
    const date: any = new Date(dateInput);
    return " " + date.toISOString().substring(0, 10);
  };
  return (
    <>
      <div className="section-full browse-job-find">
        <div className="container">
          <div className="find-job-bx">
            <form className="dezPlaceAni">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label>Job Title, Keywords, or Phrase</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <label>City, State or ZIP</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-map-marker"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <select className="select-btn custom-select">
                      <option>Select Sector</option>
                      <option>Construction</option>
                      <option>Corodinator</option>
                      <option>Employer</option>
                      <option>Financial Career</option>
                      <option>Information Technology</option>
                      <option>Marketing</option>
                      <option>Quality check</option>
                      <option>Real Estate</option>
                      <option>Sales</option>
                      <option>Supporting</option>
                      <option>Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <button type="submit" className="site-button btn-block">
                    Find Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="section-full browse-job p-b50">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="job-bx-title clearfix">
                  {allJobs && (
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      {allJobs.length} JOBS FOUND
                    </h5>
                  )}
                  <div className="float-right">
                    <span className="select-title">Sort by freshness</span>
                    <select className="custom-btn">
                      <option>Last 2 Months</option>
                      <option>Last Months</option>
                      <option>Last Weeks</option>
                      <option>Last 3 Days</option>
                    </select>
                  </div>
                </div>
                <ul className="post-job-bx">
                  {allJobs &&
                    allJobs.map((item: any, index: any) => {
                      return (
                        <li key={index}>
                          <div className="post-bx">
                            <div className="d-flex m-b30">
                              <div className="job-post-company">
                                <Link to={`/job-detail/${item.id}`}>
                                  <span>
                                    {item.company && (
                                      <Avatar
                                        alt=""
                                        src={item.company.avatar}
                                        sx={{
                                          display: "block",
                                          width: "60px",
                                          height: "60px",
                                          borderRadius: "6px",
                                          backgroundColor: "#e1e7ff",
                                          textAlign: "center",
                                          overflow: "hidden",
                                        }}
                                      />
                                    )}
                                  </span>
                                </Link>
                              </div>
                              <div className="job-post-info">
                                <h4>
                                  <Link to={`/job-detail/${item.id}`}>
                                    {item.title}
                                  </Link>
                                </h4>
                                <ul>
                                  <li>
                                    <i className="fa fa-map-marker"></i>{" "}
                                    Sacramento, California
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-bookmark"></i>{" "}
                                    {item.type}
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-clock"></i>{" "}
                                    Published
                                    {time(item.updated_at)}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="job-time mr-auto">
                                <Link to={`/job-detail/${item.id}`}>
                                  <span>{item.type}</span>
                                </Link>
                              </div>
                              <div className="salary-bx">
                                <span>
                                  ${item.min_salary} - $ {item.max_salary}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
                <div className="m-t30">
                  <div className="d-flex">
                    <Pagination
                      count={10}
                      page={page}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobListContent;
