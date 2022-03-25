import React from "react";
import Candidate from "../../../Components/Candidate/Candidate";
import Header from "../../../Components/Header/Header";
import MyProfile from "../../../Components/MyProfile/MyProfile";

MyProfileLayout.propTypes = {};

function MyProfileLayout() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Candidate />
                <MyProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfileLayout;
