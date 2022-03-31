import React from "react";
import Loading from "../../Components/404/Loading";
import Header from "../../Components/Header/Header";
import Attach from "../../Components/Resume/Attach";
import Education from "../../Components/Resume/Education";
import Employment from "../../Components/Resume/Employment";
import Headline from "../../Components/Resume/Headline";
import ITSkill from "../../Components/Resume/ITSkill";
import Menu from "../../Components/Resume/Menu";
import Project from "../../Components/Resume/Project";

function ResumeLayout() {
  return (
    <div className="page-wraper">
      <Loading />
      <Header />
      <div className="page-content">
        <div className="content-block">
          <div className="section-full browse-job content-inner-2">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                  <Menu />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                  <Headline />
                  <Employment />
                  <Education />
                  <ITSkill />
                  <Project />
                  <Attach />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeLayout;
