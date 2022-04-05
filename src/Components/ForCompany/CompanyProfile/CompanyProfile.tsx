import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendCompanyProfile } from "./CompanyProfileSlice";

CompanyProfile.propTypes = {};

function CompanyProfile() {
  const [userProfile, setUserProfile] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);
    setUserProfile(userDataParse);
  }, []);
  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    const newArr = {
      company_name: data.company_name,
      founded_date: data.founded_date,
      country: data.country,
      description: data.description,
      phone: data.phone,
      city: data.city,
      zip: data.post_code,
      address: data.full_address,
    };
    const action = sendCompanyProfile(newArr);
    dispatch(action);
  };
  return (
    <div className="col-xl-9 col-lg-8 m-b30">
      <div className="job-bx job-profile">
        <div className="job-bx-title clearfix">
          <h5 className="font-weight-700 pull-left text-uppercase">
            COMPANY PROFILE
          </h5>
          <Link
            className="site-button right-arrow button-sm float-right"
            to="/"
          >
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row m-b30">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Company Name:</label>
                <input
                  {...register("company_name")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.company_name
                      ? userProfile.company_name
                      : "Please enter company name"
                  }
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Founded Date</label>
                <input
                  {...register("founded_date")}
                  required
                  type="date"
                  className="form-control"
                  value={userProfile && userProfile.founded_date}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Country</label>
                <input
                  {...register("country")}
                  required
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.country
                      ? userProfile.country.toString()
                      : "Please enter country"
                  }
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Description:</label>

                <textarea
                  {...register("description")}
                  required
                  className="form-control"
                  placeholder={
                    userProfile?.description
                      ? userProfile.description
                      : "Please enter your description"
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="job-bx-title clearfix">
            <h5 className="font-weight-700 pull-left text-uppercase">
              Contact Information
            </h5>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Phone:</label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="form-control"
                  placeholder={
                    userProfile?.phone
                      ? userProfile.phone.toString()
                      : "Please enter your phone"
                  }
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Postcode:</label>
                <input
                  {...register("post_code")}
                  type="number"
                  className="form-control"
                  placeholder={
                    userProfile?.zip
                      ? userProfile.zip.toString()
                      : "Please enter your postcode"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>City:</label>
                <input
                  {...register("city")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.city
                      ? userProfile.city
                      : "Please enter your city"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Full Address:</label>
                <input
                  {...register("full_address")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.address
                      ? userProfile.address
                      : "Please enter your full address"
                  }
                />
              </div>
            </div>
          </div>
          <button className="site-button m-b30">Save Setting</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
