import React from "react";
import Login from "../../../Components/Authentication/Login/Login";

LoginLayout.propTypes = {};

function LoginLayout() {
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
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
