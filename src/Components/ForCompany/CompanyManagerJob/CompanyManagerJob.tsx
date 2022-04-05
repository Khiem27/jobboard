import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";
CompanyManagerJob.propTypes = {};

function CompanyManagerJob() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    setPage(value);
  };
  const userData: any = localStorage.getItem("user");
  const userDataParse = JSON.parse(userData).id;
  const [companyJob, setCompanyJob] = useState<any>([]);
  useEffect(() => {
    const getOneApi = async () => {
      const getOne = await UserApi.getOneCompany(userDataParse, page, 5);
      const companyData = getOne.data;
      setCompanyJob(companyData);
    };

    getOneApi();
  }, [userDataParse, page]);

  const time = (dateInput: any) => {
    const date: any = new Date(dateInput);
    return " " + date.toISOString().substring(0, 10);
  };

  const handleDelete = async (id: any) => {
    await UserApi.deleteOneJob(id);
    window.location.reload();
  };
  return (
    <>
      {companyJob ? (
        <>
          <div className="col-xl-9 col-lg-8 m-b30">
            <div className="job-bx browse-job clearfix">
              <div className="job-bx-title  clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">
                  Manage jobs
                </h5>
              </div>
              <table className="table-job-bx cv-manager company-manage-job">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {companyJob.map((item: any, index: any) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td className="job-name">
                          <a href="/react/demo/company-manage-job">
                            {item.title}
                          </a>
                          <ul className="job-post-info">
                            <li>
                              <i className="fa fa-map-marker"></i>{" "}
                              {item.address}
                            </li>
                            <li>
                              <i className="fa-solid fa-bookmark"></i>{" "}
                              {item.type}
                            </li>
                            <li>
                              <i className="fa fa-filter"></i> {item.tags}
                            </li>
                          </ul>
                        </td>

                        <td className="expired pending">
                          {time(item.updated_at)}
                        </td>
                        <td className="job-links">
                          <Link to={`/job-detail/${item.id}`}>
                            <i className="fa fa-eye"></i>
                          </Link>
                          <Link onClick={() => handleDelete(item.id)} to="#">
                            <i className="ti-trash"></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <div className="pagination-bx m-t30 float-right">
                <ul className="pagination">
                  <Pagination count={10} page={page} onChange={handleChange} />
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CompanyManagerJob;
