import React from "react";
import Attach from "../../../Components/ForCandidate/Resume/Attach";
import Education from "../../../Components/ForCandidate/Resume/Education";
import Employment from "../../../Components/ForCandidate/Resume/Employment";
import Headline from "../../../Components/ForCandidate/Resume/Headline";
import ITSkill from "../../../Components/ForCandidate/Resume/ITSkill";
import Menu from "../../../Components/ForCandidate/Resume/Menu";
import Project from "../../../Components/ForCandidate/Resume/Project";
import Header from "../../../Components/Header/Header";

function ResumeLayout() {
  return (
    <div className="page-wraper">
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
