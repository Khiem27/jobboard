import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";
Candidate.propTypes = {};

function Candidate() {
  const [url, setUrl] = useState<any>(null);
  const [userName, setUserName] = useState([]);
  const [userProf, setUserProf] = useState([]);

  useEffect(() => {
    const getUserProfile = async () => {
      const userProfile = await UserApi.getUserProfile();
      setUrl(userProfile.data.avatar);
    };
    getUserProfile();

    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    setUserName(userDataParse.username);
    setUserProf(userDataParse.professional_title);
  }, []);

  const handleImageChange = async (e: any) => {
    try {
      if (e.target.files[0]) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        await UserApi.postAvatar(formData);
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
              {/* {url && <h2>{url}</h2>} */}
            </div>
            <div className="candidate-title">
              <div className="">
                <h4 className="m-b5">
                  <Link to="#">{userName}</Link>
                </h4>
                <p className="m-b0">
                  <Link style={{ textTransform: "capitalize" }} to="#">
                    {userProf ? `${userProf}` : "Professional Title*"}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Link className="active" to="/my-profile">
                <i className="fa-solid fa-user-tie"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-my-resume">
                <i className="fa-solid fa-square-poll-horizontal"></i>
                <span>My Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-saved-jobs">
                <i className="fa-solid fa-heart-pulse"></i>
                <span>Saved Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-applied-job">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <span>Applied Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-alerts">
                <i className="fa-solid fa-bell"></i>
                <span>Job Alerts</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-cv-manager">
                <i className="fa-solid fa-address-card"></i>
                <span>CV Manager</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs-change-password">
                <i className="fa fa-key" aria-hidden="true"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
