import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { UserApi } from "../../../Api/UserApi/UserApi";

CompanyResume.propTypes = {};

function CompanyResume() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const [applyJobData, seyApplyJobData] = useState<any>();
  useEffect(() => {
    const getAppliedJobs = async () => {
      const getApplied = await UserApi.getApplyJobCompany(page, 4);
      seyApplyJobData(getApplied.data);
      console.log(getApplied.data);
    };
    getAppliedJobs();
  }, [page]);
  return (
    <>
      <div className="col-xl-9 col-lg-8 m-b30">
        <div className="job-bx clearfix">
          <div className="job-bx-title clearfix">
            <h5 className="font-weight-700 pull-left text-uppercase">Resume</h5>
            <a
              className="site-button right-arrow button-sm float-right"
              href="/company-manage-job"
            >
              Back
            </a>
          </div>
          {applyJobData && (
            <>
              <ul className="post-job-bx browse-job-grid post-resume row">
                {applyJobData.map((item: any, index: any) => {
                  return (
                    <>
                      <li className="col-lg-6 col-md-6">
                        <div className="post-bx">
                          <div className="d-flex m-b20">
                            <div className="job-post-info">
                              {item.employments ? (
                                <>
                                  {item.employments[0] ? (
                                    <h5 className="m-b0">
                                      {item.employments[0] && (
                                        <a href="/react/demo/jobs-profile">
                                          {item.employments[0].username}
                                        </a>
                                      )}
                                    </h5>
                                  ) : null}
                                </>
                              ) : null}
                              <p className="m-b5 font-13">
                                <a
                                  className="text-primary"
                                  href="/react/demo/company-resume"
                                >
                                  {item.title}{" "}
                                </a>
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
                            <a
                              className="mr-1"
                              href="/react/demo/company-resume"
                            >
                              <span>{item.tags}</span>
                            </a>
                            <a
                              className="mr-1"
                              href="/react/demo/company-resume"
                            >
                              <span>{item.type}</span>
                            </a>
                          </div>
                          {item.employments ? (
                            <>
                              {item.employments[0] ? (
                                <a
                                  target="blank"
                                  className="job-links"
                                  href={item.employments[0].curriculum_vitae}
                                >
                                  {console.log(item.employments[0])}
                                  <i className="fa fa-download"></i>
                                </a>
                              ) : null}
                            </>
                          ) : null}
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          )}

          <div className="pagination-bx float-right">
            <ul className="pagination">
              <Pagination count={10} page={page} onChange={handleChange} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyResume;
