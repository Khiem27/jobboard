import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";

CompanyResume.propTypes = {};

function CompanyResume() {
  const [applyJobData, seyApplyJobData] = useState<any>();
  useEffect(() => {
    const getAppliedJobs = async () => {
      const getApplied = await UserApi.getApplyJobCompany(1, 10000);
      seyApplyJobData(getApplied.data);
      console.log(getApplied.data);
    };
    getAppliedJobs();
  }, []);
  return (
    <>
      <div className="col-xl-9 col-lg-8 m-b30">
        <div className="job-bx clearfix">
          <div className="job-bx-title clearfix">
            <h5 className="font-weight-700 pull-left text-uppercase">Resume</h5>
            <Link
              className="site-button right-arrow button-sm float-right"
              to="/company-manage-job"
            >
              Back
            </Link>
          </div>
          <ul className="post-job-bx browse-job-grid post-resume row">
            {applyJobData && (
              <>
                {applyJobData.map((item: any, index: any) => {
                  return (
                    <>
                      {item.employments.length ? (
                        <li className="col-lg-6 col-md-6">
                          <div className="post-bx">
                            <div className="d-flex m-b20">
                              <div className="job-post-info">
                                {item.employments[0] ? (
                                  <h5 className="m-b0">
                                    {item.employments[0] && (
                                      <Link to="#">
                                        {item.employments[0].username}
                                      </Link>
                                    )}
                                  </h5>
                                ) : null}
                                <p className="m-b5 font-13">
                                  <Link
                                    className="text-primary"
                                    to="/company-resume"
                                  >
                                    {item.title}{" "}
                                  </Link>
                                </p>
                                <ul>
                                  {item.employments ? (
                                    <>
                                      {item.employments[0] ? (
                                        <li>
                                          <i className="fa fa-map-marker"></i>
                                          {item.employments[0].city},{" "}
                                          {item.employments[0].country}
                                        </li>
                                      ) : null}
                                    </>
                                  ) : null}

                                  <li>
                                    <i className="fa fa-money"></i> ${" "}
                                    {item.max_salary}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="job-time m-t15 m-b10">
                              <Link className="mr-1" to="/company-resume">
                                <span>{item.tags}</span>
                              </Link>
                              <Link className="mr-1" to="/company-resume">
                                <span>{item.type}</span>
                              </Link>
                            </div>
                            {item.employments ? (
                              <>
                                {item.employments[0] ? (
                                  <Link
                                    target="blank"
                                    className="job-links"
                                    to={item.employments[0].curriculum_vitae}
                                  >
                                    {console.log(item.employments[0])}
                                    <i className="fa fa-download"></i>
                                  </Link>
                                ) : null}
                              </>
                            ) : null}
                          </div>
                        </li>
                      ) : null}
                    </>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CompanyResume;
