import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeSearchTitle } from "../Slider/SliderHomeSlice";

FilterCategories.propTypes = {};

function FilterCategories() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClick = (
    tag: any,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    history("/browse-job-list");

    e.preventDefault();
    const data = {
      tag,
      // title: titleRef.current.value,
      // address: addressRef.current.value,
    };
    dispatch(ChangeSearchTitle(data));
  };
  return (
    <div className="section-full job-categories content-inner-2 bg-white">
      <div className="container">
        <div className="section-head d-flex head-counter clearfix">
          <div className="mr-auto">
            <h2 className="m-b5">Popular Categories</h2>
            <h6 className="fw3">8 Catetories work wating for you</h6>
          </div>
        </div>
        <div className="row sp20">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-location-pin"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Internship", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Internship
                </a>
                <div className="rotate-icon">
                  <i className="ti-location-pin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-wand"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Freelance", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Freelance
                </a>
                <div className="rotate-icon">
                  <i className="ti-wand"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-wallet"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Part Time", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Part Time
                </a>
                <div className="rotate-icon">
                  <i className="ti-wallet"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-cloud-up"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Full Time", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Full Time
                </a>
                <div className="rotate-icon">
                  <i className="ti-cloud-up"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-bar-chart"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Web Developer", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Web Developer
                </a>
                <div className="rotate-icon">
                  <i className="ti-bar-chart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-tablet"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Backend", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Backend
                </a>
                <div className="rotate-icon">
                  <i className="ti-tablet"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-camera"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Frontend", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Frontend
                </a>
                <div className="rotate-icon">
                  <i className="ti-camera"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="icon-bx-wraper">
              <div className="icon-content">
                <div className="icon-md text-primary m-b20">
                  <i className="ti-panel"></i>
                </div>
                <a
                  onClick={(e) => handleClick("Fullstack", e)}
                  className="dez-tilte"
                  href="/react/demo/company-manage-job"
                >
                  Fullstack
                </a>
                <div className="rotate-icon">
                  <i className="ti-panel"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCategories;
