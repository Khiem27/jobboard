import React from "react";
import LoginCompany from "../../../Components/Authentication/Login/LoginCompany";

LoginCompanyLayout.propTypes = {};

function LoginCompanyLayout() {
  return (
    <div
      className="page-content bg-white login-style2"
      style={{
        backgroundImage:
          'url("https://job-board.dexignzone.com/react/demo/static/media/bg6.9d838a09.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="section-full">
        <div className="container">
          <LoginCompany />
        </div>
      </div>
    </div>
  );
}

export default LoginCompanyLayout;
