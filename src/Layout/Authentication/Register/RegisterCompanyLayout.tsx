import React from "react";
import RegisterCompany from "../../../Components/Authentication/Register/RegisterCompany";

RegisterCompanyLayout.propTypes = {};

function RegisterCompanyLayout() {
  return (
    <div className="vh-100">
      <div className="page-wraper">
        <div className="browse-job login-style3">
          <div
            className="bg-img-fix"
            style={{
              backgroundImage:
                "url(https://job-board.dexignzone.com/react/demo/static/media/bg6.9d838a09.jpg)",
              height: "100vh",
            }}
          >
            <RegisterCompany />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompanyLayout;
