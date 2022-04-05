import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";

CandidateCompany.propTypes = {};

function CandidateCompany() {
  const [url, setUrl] = useState<any>(null);
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    setUserName(userDataParse.company_name);
    const userID = userDataParse.id;
    const getUserProfile = async () => {
      const userProfile = await UserApi.getCompanyProfile(userID);
      setUrl(userProfile.data.avatar);
    };
    getUserProfile();
  }, []);

  const handleImageChange = async (e: any) => {
    try {
      if (e.target.files[0]) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        await UserApi.postAvatarCompany(formData);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-xl-3 col-lg-4 m-b30">
      <div className="sticky-top">
        <div className="candidate-info">
          <div className="candidate-detail text-center">
            <div className="canditate-des">
              <Link to="#">
                <Avatar alt="" src={url} sx={{ width: 146, height: 146 }} />
              </Link>
              <div
                className="upload-link"
                title="update"
                data-toggle="tooltip"
                data-placement="right"
              >
                <input
                  onChange={handleImageChange}
                  style={{ height: "100%", cursor: "pointer" }}
                  type="file"
                  className="update-flie"
                />
                <i style={{ cursor: "pointer" }} className="fa fa-camera"></i>
              </div>
            </div>
            <div className="candidate-title">
              <div className="">
                <h4 className="m-b5">
                  <Link to="#">{userName}</Link>
                </h4>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Link
                // className={pageName === "/company-profile" ? "active" : " "}
                to="/company-profile"
              >
                <i className="fa-solid fa-user-tie"></i>
                <span>Company Profile</span>
              </Link>
            </li>
            <li>
              <Link
                // className={pageName === "/company-post-jobs" ? "active" : " "}s
                to="/company-post-jobs"
              >
                <i className="fa-solid fa-square-poll-horizontal"></i>
                <span>Post A Job</span>
              </Link>
            </li>

            <li>
              <Link to="/company-manage-job">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <span>Manage Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/company-resume">
                <i className="fa-solid fa-bell"></i>
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CandidateCompany;
