import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
Header.propTypes = {};

function Header() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    setUserName(userDataParse.username);
  }, []);
  const handleLogout = () => {
    localStorage.setItem("user", JSON.stringify(""));
    window.location.href = "/login";
  };
  return (
    <header className="site-header mo-left header fullwidth">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link to="/">
                <img
                  src="data:image/png;base64,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"
                  className="logo"
                  alt="img"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler collapsed navicon  justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="extra-nav">
              <div className="extra-cell">
                {userName ? (
                  <Link className="site-button" to="/my-profile">
                    <i className="fa fa-user"></i> {userName}
                  </Link>
                ) : (
                  <Link className="site-button" to="#">
                    <i className="fa fa-user"></i> Sign Up
                  </Link>
                )}

                <Link
                  onClick={handleLogout}
                  title="READ MORE"
                  className="site-button"
                  to="#"
                >
                  <i className="fa fa-lock"></i> Logout
                </Link>
              </div>
            </div>
            <div
              className="header-nav navbar-collapse collapse myNavbar justify-content-start"
              id="navbarNavDropdown"
            >
              <div className="logo-header mostion d-md-block d-lg-none">
                <Link className="dez-page" to="/">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="">
                  <Link to="/">
                    Home <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link className="dez-page" to="/">
                        Home 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/index-2">
                        Home 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    For Candidates <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link className="dez-page" to="/my-profile">
                        My Profile<span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-my-resume">
                        My Resume <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-applied-job">
                        Applied Job <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-alerts">
                        Jobs Alerts <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-saved-jobs">
                        Saved Job <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-cv-manager">
                        CV Manager <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/jobs-change-password">
                        Change Password <span className="new-page">New</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    For Employers <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link className="dez-page" to="/company-profile">
                        Company Profile <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/company-resume">
                        Employer Resume <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/company-post-jobs">
                        Post A Jobs <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/company-manage-job">
                        Manage jobs <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/company-transactions">
                        Transactions <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/browse-candidates">
                        Browse Candidates
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    Pages <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link className="dez-page" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/job-detail">
                        Job Detail
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/companies">
                        companies
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/free-job-alerts">
                        free job alerts <span className="new-page">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/">
                        Browse Job <i className="fa fa-angle-right"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="dez-page" to="/browse-job-list">
                            browse job list
                          </Link>
                        </li>
                        <li>
                          <Link className="dez-page" to="/browse-job-grid">
                            browse job grid{" "}
                            <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dez-page"
                            to="/browse-job-filter-list"
                          >
                            browse filter list{" "}
                            <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dez-page"
                            to="/browse-job-filter-grid"
                          >
                            browse filter grid{" "}
                            <span className="new-page">New</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dez-page" to="/">
                        Jobs<i className="fa fa-angle-right"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="dez-page" to="/category-all-jobs">
                            all jobs <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dez-page"
                            to="/category-company-jobs"
                          >
                            company jobs <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dez-page"
                            to="/category-designations-jobs"
                          >
                            designations jobs{" "}
                            <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dez-page" to="/category-jobs">
                            category jobs <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dez-page"
                            to="/category-location-jobs"
                          >
                            location jobs <span className="new-page">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dez-page" to="/category-skill-jobs">
                            skill jobs <span className="new-page">New</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dez-page" to="/">
                        Portfolio <i className="fa fa-angle-right"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="dez-page" to="/portfolio-grid-2">
                            Portfolio Grid 2{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dez-page" to="/">
                        register <i className="fa fa-angle-right"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="dez-page" to="/register">
                            register 1
                          </Link>
                        </li>
                        <li>
                          <Link className="dez-page" to="/register-2">
                            register 2 <span className="new-page">New</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dez-page" to="/error-404">
                        Error 404
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">
                    Blog <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link className="dez-page" to="/blog-classic">
                        Classic
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/post-blog">
                        Post Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/blog-classic-sidebar">
                        Classic Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/blog-detailed-grid">
                        Detailed Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dez-page"
                        to="/blog-detailed-grid-sidebar"
                      >
                        Detailed Grid Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/blog-left-img">
                        Left Image Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link className="dez-page" to="/blog-details">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
