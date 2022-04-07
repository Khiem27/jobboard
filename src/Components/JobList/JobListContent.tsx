import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";
import { RootState } from "../../store";
JobListContent.propTypes = {};

function JobListContent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const [allJobs, setAllJobs] = useState<any>([]);
  const [total, setTotal] = useState<any>();
  const searchJobs = useSelector(
    (state: RootState) => state.sliderHomeSlice.search
  );
  useEffect(() => {
    const getAllJob = async () => {
      const getJOBS = await UserApi.getJob({ page, limit: 5, ...searchJobs });
      const allJob = getJOBS.data.jobs;
      console.log(allJob);

      const totalJob = getJOBS.data.total / 5;
      setTotal(Math.ceil(totalJob));
      setAllJobs(allJob);
    };
    getAllJob();
  }, [page, searchJobs]);

  const listJobs = useSelector(
    (state: RootState) => state.sliderHomeSlice.jobs
  );

  useEffect(() => {
    setAllJobs(listJobs);
  }, [listJobs]);

  const time = (dateInput: any) => {
    const date: any = new Date(dateInput);
    return " " + date.toISOString().substring(0, 10);
  };
  return (
    <>
      <div className="section-full browse-job-find">
        <div className="container">
          <div className="find-job-bx"></div>
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
                    {" "}
                    <button
                      onClick={() => {
                        window.location.reload();
                      }}
                      type="submit"
                      className="site-button btn-block"
                    >
                      Clear
                    </button>
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
                                    {item.address}
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
                {allJobs.length && (
                  <div
                    className="m-t30"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="d-flex">
                      <Pagination
                        count={total}
                        page={page}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="sticky-top">
                  <div className="candidates-are-sys m-b30">
                    <div className="candidates-bx">
                      <div className="testimonial-pic radius">
                        <img
                          src="../img/aiu.jpg"
                          alt=""
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="testimonial-text">
                        <p>
                          <b>Tech:</b> Golang, NestJs, SpringBoot, React,
                          Docker, K8S, Redis, ElasticSearch, CI/CD ...
                        </p>
                      </div>

                      <div className="testimonial-detail">
                        {" "}
                        <strong className="testimonial-name">
                          Lang Minh Nguyên
                        </strong>{" "}
                        <span className="testimonial-position">
                          CN20E <i>Senior Backend</i>
                        </span>{" "}
                        <a href="https://github.com/3langn">
                          https://github.com/3langn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="candidates-are-sys m-b30">
                    <div className="candidates-bx">
                      <div className="testimonial-pic radius">
                        <img
                          src="../img/eiu.jpg"
                          alt=""
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="testimonial-text">
                        <p>
                          <b>Tech:</b> HTML, CSS, JavaScript, ReactJS,
                          TypeScript, SASS, Firebase, Redux Toolkit, Axios Api
                          ...
                        </p>
                      </div>

                      <div className="testimonial-detail">
                        {" "}
                        <strong className="testimonial-name">
                          Lê Thế Khiêm
                        </strong>{" "}
                        <span className="testimonial-position">
                          CN20D <i>Junior Frontend</i>
                        </span>{" "}
                        <a href="https://github.com/Khiem27">
                          https://github.com/Khiem27
                        </a>
                      </div>
                    </div>
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
