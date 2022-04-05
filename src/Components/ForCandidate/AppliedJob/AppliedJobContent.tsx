import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";

AppliedJobContent.propTypes = {};

function AppliedJobContent() {
  const [applyData, setApplyData] = useState<any>();

  useEffect(() => {
    const getAppliedJobs = async () => {
      const getApply = await UserApi.getApplyJobCandidate(1, 1000);
      const getApplyData = getApply.data;
      setApplyData(getApplyData);
    };
    getAppliedJobs();
  }, []);
  return (
    <div className="col-xl-9 col-lg-8 m-b30 browse-job">
      <div className="job-bx-title  clearfix">
        {applyData ? (
          <h5 className="font-weight-700 pull-left text-uppercase">
            {applyData.length} Jobs Found
          </h5>
        ) : (
          <h5 className="font-weight-700 pull-left text-uppercase">
            0 Jobs Found
          </h5>
        )}
      </div>
      <ul className="post-job-bx browse-job">
        {applyData &&
          applyData.map((item: any, index: any) => {
            return (
              <li key={index}>
                <div className="post-bx">
                  <div className="job-post-info m-a0">
                    <h4>
                      <Link to={`/job-detail/${item.id}`}>{item.title}</Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i> {item.address}
                      </li>
                      <li>
                        <i className="fa fa-money"></i>$ {item.max_salary}
                      </li>
                    </ul>
                    <div className="job-time m-t15 m-b10">
                      <Link className="mr-1" to="#">
                        <span>{item.tags}</span>
                      </Link>
                      <Link className="mr-1" to="#">
                        <span>{item.type}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default AppliedJobContent;
