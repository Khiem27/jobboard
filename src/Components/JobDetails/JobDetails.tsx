import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";

JobDetails.propTypes = {};

function JobDetails() {
  let { id } = useParams();
  const [jobDetail, setJobDetail] = useState<any>({});

  const [jobId, setJobId] = useState<any>();
  useEffect(() => {
    const getOneApi = async () => {
      const getOne = await UserApi.getOneJob(id);
      const jobData = getOne.data;
      setJobDetail(jobData);
      console.log(jobData);

      setJobId(jobData.id);
    };
    getOneApi();
  }, [id]);

  const handleApplyJob = async (id: any) => {
    try {
      const res = await UserApi.applyJob(id);
      console.log(res);
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
                        <strong>Deadline:</strong> 25th January 2018
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
                        {jobId !== "Company" && (
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
          <div className="section-full content-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="m-b30 blog-grid">
                    <div className="dez-post-media dez-img-effect ">
                      <a href="/react/demo/blog-details">
                        <img
                          src="/react/demo/static/media/pic1.4da8584c.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="dez-info p-a20 border-1">
                      <div className="dez-post-title ">
                        <h5 className="post-title">
                          <a href="/react/demo/blog-details">
                            Title of blog post
                          </a>
                        </h5>
                      </div>
                      <div className="dez-post-meta ">
                        <ul>
                          <li className="post-date">
                            {" "}
                            <i className="ti-location-pin"></i> London{" "}
                          </li>
                          <li className="post-author">
                            <i className="ti-user"></i>By{" "}
                            <a href="/react/demo/job-detail">Jone</a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="dez-post-text">
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks.
                        </p>
                      </div>
                      <div className="dez-post-readmore">
                        <a
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button-link"
                          href="/react/demo/blog-details"
                        >
                          <span className="fw6">READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="m-b30 blog-grid">
                    <div className="dez-post-media dez-img-effect ">
                      <a href="/react/demo/blog-details">
                        <img
                          src="/react/demo/static/media/pic2.32b62dc5.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="dez-info p-a20 border-1">
                      <div className="dez-post-title ">
                        <h5 className="post-title">
                          <a href="/react/demo/blog-details">
                            Title of blog post
                          </a>
                        </h5>
                      </div>
                      <div className="dez-post-meta ">
                        <ul>
                          <li className="post-date">
                            {" "}
                            <i className="ti-location-pin"></i> London{" "}
                          </li>
                          <li className="post-author">
                            <i className="ti-user"></i>By{" "}
                            <a href="/react/demo/job-detail">Jone</a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="dez-post-text">
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks.
                        </p>
                      </div>
                      <div className="dez-post-readmore">
                        <a
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button-link"
                          href="/react/demo/blog-details"
                        >
                          <span className="fw6">READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="m-b30 blog-grid">
                    <div className="dez-post-media dez-img-effect ">
                      <a href="/react/demo/blog-details">
                        <img
                          src="/react/demo/static/media/pic3.a60300d4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="dez-info p-a20 border-1">
                      <div className="dez-post-title ">
                        <h5 className="post-title">
                          <a href="/react/demo/blog-details">
                            Title of blog post
                          </a>
                        </h5>
                      </div>
                      <div className="dez-post-meta ">
                        <ul>
                          <li className="post-date">
                            {" "}
                            <i className="ti-location-pin"></i> London{" "}
                          </li>
                          <li className="post-author">
                            <i className="ti-user"></i>By{" "}
                            <a href="/react/demo/job-detail">Jone</a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="dez-post-text">
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks.
                        </p>
                      </div>
                      <div className="dez-post-readmore">
                        <a
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button-link"
                          href="/react/demo/blog-details"
                        >
                          <span className="fw6">READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="m-b30 blog-grid">
                    <div className="dez-post-media dez-img-effect ">
                      <a href="/react/demo/blog-details">
                        <img
                          src="/react/demo/static/media/pic4.b5347aaf.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="dez-info p-a20 border-1">
                      <div className="dez-post-title ">
                        <h5 className="post-title">
                          <a href="/react/demo/blog-details">
                            Title of blog post
                          </a>
                        </h5>
                      </div>
                      <div className="dez-post-meta ">
                        <ul>
                          <li className="post-date">
                            {" "}
                            <i className="ti-location-pin"></i> London{" "}
                          </li>
                          <li className="post-author">
                            <i className="ti-user"></i>By{" "}
                            <a href="/react/demo/job-detail">Jone</a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="dez-post-text">
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks.
                        </p>
                      </div>
                      <div className="dez-post-readmore">
                        <a
                          title="READ MORE"
                          rel="bookmark"
                          className="site-button-link"
                          href="/react/demo/blog-details"
                        >
                          <span className="fw6">READ MORE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobDetails;
