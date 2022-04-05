import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { UserApi } from "../../../Api/UserApi/UserApi";

AppliedJobContent.propTypes = {};

function AppliedJobContent() {
  const [applyData, setApplyData] = useState<any>();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  useEffect(() => {
    const getAppliedJobs = async () => {
      const getApply = await UserApi.getApplyJobCandidate(page, 1);
      const getApplyData = getApply.data;
      setApplyData(getApplyData);
    };
    getAppliedJobs();
  }, [page]);
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
                      <a href="/react/demo/job-detail">{item.title}</a>
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
                      <a className="mr-1" href="/react/demo/">
                        <span>{item.tags}</span>
                      </a>
                      <a className="mr-1" href="/react/demo/">
                        <span>{item.type}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="pagination-bx m-t30">
        <ul className="pagination">
          <Pagination count={10} page={page} onChange={handleChange} />
        </ul>
      </div>
    </div>
  );
}

export default AppliedJobContent;
