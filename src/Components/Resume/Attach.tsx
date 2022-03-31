import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";

Attach.propTypes = {};

function Attach() {
  const [url, setUrl] = useState<any>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const userProfile = await UserApi.getUserProfile();
      setUrl(userProfile.data.curriculum_vitae);
    };
    getUserProfile();
  }, []);
  const handleImageChange = async (e: any) => {
    try {
      if (e.target.files[0]) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        await UserApi.uploadFileCV(formData);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="attach_resume_bx" className="job-bx bg-white m-b30">
      <h5 className="m-b10">Attach Resume</h5>
      <p>
        Resume is the most important document recruiters look for. Recruiters
        generally do not look at profiles without resumes.
      </p>
      <form className="attach-resume">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <div className="custom-file">
                {url && (
                  <embed
                    src={url}
                    style={{ height: "100px", width: "100px" }}
                  />
                )}
                <p className="m-auto align-self-center">
                  <i className="fa fa-upload"></i>Upload Resume File size is 3
                  MB
                </p>
                <input
                  onChange={handleImageChange}
                  type="file"
                  className="site-button form-control"
                  id="customFile"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <p className="text-center">
        If you do not have a resume document, you may write your brief
        professional profile{" "}
        <Link className="site-button-link" to="/jobs-my-resume">
          here
        </Link>
        .
      </p>
    </div>
  );
}

export default Attach;
