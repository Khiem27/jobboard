import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";
import { sendUserProfile } from "./MyProfileSlice";

interface UserProfile {
  username: string;
  professional_title: string;
  languages: string;
  age: number;
  current_salary: number;
  expected_salary: number;
  description: string;
  phone: number;
  country: string;
  post_code: number;
  city: string;
  full_address: string;
  email: string;
}

MyProfile.propTypes = {};

function MyProfile() {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserProfile = async () => {
      const userProfile = await UserApi.getUserProfile();
      setUserProfile(userProfile.data);
    };
    getUserProfile();
  }, []);
  const { register, handleSubmit } = useForm<UserProfile>();
  const onSubmit: SubmitHandler<UserProfile> = (data) => {
    const newArr = {
      username: data.username,
      professional_title: data.professional_title,
      languages: data.languages,
      age: data.age,
      current_salary: data.current_salary,
      expected_salary: data.expected_salary,
      description: data.description,
      phone: data.phone,
      country: data.country,
      post_code: data.post_code,
      city: data.city,
      full_address: data.full_address,
      email: data.email,
    };

    const action = sendUserProfile(newArr);
    dispatch(action);
  };
  return (
    <div className="col-xl-9 col-lg-8 m-b30">
      <div className="job-bx job-profile">
        <div className="job-bx-title clearfix">
          <h5 className="font-weight-700 pull-left text-uppercase">
            Basic Information
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
                <label>Your Name:</label>
                <input
                  {...register("username")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.username
                      ? userProfile.username
                      : "Please enter your name"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Professional title:</label>
                <input
                  {...register("professional_title")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.professional_title
                      ? userProfile.professional_title
                      : "Please enter your professional title"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Languages:</label>
                <input
                  {...register("languages")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.languages
                      ? userProfile.languages
                      : "Please enter your languages"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Age:</label>
                <input
                  {...register("age")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.age
                      ? userProfile.age.toString()
                      : "Please enter your age"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Current Salary($):</label>
                <input
                  {...register("current_salary")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.current_salary
                      ? userProfile.current_salary.toString()
                      : "Please enter your current salary"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Expected Salary:</label>
                <input
                  {...register("expected_salary")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.expected_salary
                      ? userProfile.expected_salary.toString()
                      : "Please enter your expected salary"
                  }
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  {...register("description")}
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
                  type="text"
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
                <label>Email Address:*</label>
                <input
                  {...register("email")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.email ? userProfile.email : "info@example.com"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Country:</label>
                <input
                  {...register("country")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.country
                      ? userProfile.country
                      : "Please enter your country"
                  }
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Postcode:</label>
                <input
                  {...register("post_code")}
                  type="text"
                  className="form-control"
                  placeholder={
                    userProfile?.post_code
                      ? userProfile.post_code.toString()
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
                    userProfile?.full_address
                      ? userProfile.full_address
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

export default MyProfile;
