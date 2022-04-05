import React from "react";

SliderHome.propTypes = {};

function SliderHome() {
  return (
    <div
      className="dez-bnr-inr dez-bnr-inr-md"
      style={{ backgroundImage: "url(../img/slide2.bad633df.jpg)" }}
    >
      <div className="container">
        <div className="dez-bnr-inr-entry align-m">
          <div className="find-job-bx">
            <a className="site-button button-sm" href="/react/demo/browse-job">
              Find Jobs, Employment &amp; Career Opportunities
            </a>
            <h2>
              Search Between More Then <br />{" "}
              <span className="text-primary">50,000</span> Open Jobs.
            </h2>
            <form className="dezPlaceAni">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <label>Job Title, Keywords, or Phrase</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <label>Email address</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-map-marker"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <select className="select-btn custom-select">
                      <option>Select Sector</option>
                      <option>Construction</option>
                      <option>Corodinator</option>
                      <option>Employer</option>
                      <option>Financial Career</option>
                      <option>Information Technology</option>
                      <option>Marketing</option>
                      <option>Quality check</option>
                      <option>Real Estate</option>
                      <option>Sales</option>
                      <option>Supporting</option>
                      <option>Teaching</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <button type="submit" className="site-button btn-block">
                    Find Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
