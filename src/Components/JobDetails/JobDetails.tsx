import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";

JobDetails.propTypes = {};

function JobDetails() {
  const history = useNavigate();

  let { id } = useParams();
  const [jobDetail, setJobDetail] = useState<any>({});

  const [jobId, setJobId] = useState<any>();
  const [jobType, setJobType] = useState<any>();

  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData).type;
    const getOneApi = async () => {
      const getOne = await UserApi.getOneJob(id);
      const jobData = getOne.data;
      console.log(jobData);
      setJobType(userDataParse);
      setJobDetail(jobData);
      setJobId(jobData.id);
    };
    getOneApi();
  }, [id]);

  const handleApplyJob = async (id: any) => {
    try {
      await UserApi.applyJob(id);
      history("/jobs-applied-job");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      {jobDetail && (
        <div className="content-block">
          <div className="section-full content-inner-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="sticky-top">
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <div className="m-b30">
                          <img
                            src="/react/demo/static/media/pic1.4da8584c.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                          <h4 className="text-black font-weight-700 p-t10 m-b15">
                            Job Details
                          </h4>
                          <ul>
                            <li>
                              <i className="ti-location-pin"></i>
                              <strong className="font-weight-700 text-black">
                                {jobDetail.address}
                              </strong>
                            </li>
                            <li>
                              <i className="ti-money"></i>
                              <strong className="font-weight-700 text-black">
                                Salary
                              </strong>{" "}
                              ${jobDetail.max_salary} Monthy
                            </li>
                            <li>
                              <i className="ti-shield"></i>
                              <strong className="font-weight-700 text-black">
                                Experience
                              </strong>
                              {jobDetail.exp} Year Experience
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="job-info-box">
                    <h3 className="m-t0 m-b10 font-weight-700 title-head">
                      <a
                        className="text-secondry m-r30"
                        href="/react/demo/job-detail"
                      >
                        {jobDetail.title}
                      </a>
                    </h3>
                    <ul className="job-info">
                      <li>
                        <strong>Job Tags: </strong> {jobDetail.tags}
                      </li>
                      <li>
                        <strong>Deadline:</strong> 25th January 2022
                      </li>
                      <li>
                        <i className="ti-location-pin text-black m-r5"></i>{" "}
                        {jobDetail.address}{" "}
                      </li>
                    </ul>

                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{jobDetail.description}</p>
                    <h5 className="font-weight-600">How to Apply</h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{jobDetail.how_to_apply}</p>
                    <h5 className="font-weight-600">Job Requirements</h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <ul className="list-num-count no-round">
                      <li>{jobDetail.job_requirements}</li>
                    </ul>
                    {jobId && (
                      <>
                        {jobType !== "Company" && (
                          <Link
                            onClick={() => handleApplyJob(jobId)}
                            className="site-button"
                            to="#"
                          >
                            Apply This Job
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner"></div>
        </div>
      )}
    </>
  );
}

export default JobDetails;
