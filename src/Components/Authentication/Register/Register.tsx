import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { UserData } from "../../../Shared/types";
import { RegisterSliceAction } from "./RegisterSlice";

Register.propTypes = {};

type UserInputs = {
  registerUserName: string;
  registerEmail: string;
  registerPassword: string;
  registerRetypePassword: string;
};

const schema = yup
  .object({
    registerUserName: yup
      .string()
      .required("Please enter user name.")
      .min(4, "Invalid username (more than 4 characters)"),
    registerEmail: yup
      .string()
      .required("Please enter email.")
      .email("The email address is not valid."),
    registerPassword: yup
      .string()
      .required("Please enter password.")
      .min(8, "Password must be 8 characters or more")
      .test(
        "password",
        "The password that you've entered is incorrect.",
        (data: any) => {
          const dataSplit = data.split(" ");
          if (dataSplit.length < 2) {
            return data;
          }
        }
      ),
    registerRetypePassword: yup
      .string()
      .required("Please enter retype password.")
      .oneOf([yup.ref("registerPassword")], "The password is not the same"),
  })
  .required();
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(false);

  const onSubmit = async (data: UserInputs) => {
    try {
      const userData: UserData = {
        username: data.registerUserName,
        email: data.registerEmail,
        password: data.registerPassword,
      };
      const resultAction: any = await dispatch(RegisterSliceAction(userData));
      unwrapResult(resultAction);
      window.location.href = "/login";
    } catch (error: any) {
      setAlert(error.message);
    }
  };
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
        <div className="login-form style-2">
          <div className="logo-header text-center p-tb30">
            <Link to="/">
              <img src="./img/logo1.png" alt="" />
            </Link>
          </div>
          <div className="clearfix"></div>
          <div className="tab-content nav p-b30 tab">
            <h3>For Candidate</h3>
            <div id="login" className="tab-pane active ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" dez-form p-b30"
              >
                <div className="dez-separator-outer m-b5">
                  <div className="dez-separator bg-primary style-liner"></div>
                </div>
                <div className="form-group">
                  <input
                    {...register("registerUserName", { required: true })}
                    className="form-control"
                    placeholder="User Name"
                    defaultValue=""
                  />
                  <div style={{ fontSize: "12px" }} className="text-danger">
                    {errors.registerUserName?.message}
                  </div>
                </div>

                <div className="form-group">
                  <input
                    {...register("registerEmail", { required: true })}
                    className="form-control"
                    placeholder="hello@example.com"
                    defaultValue=""
                  />
                  <div style={{ fontSize: "12px" }} className="text-danger">
                    {errors.registerEmail?.message}
                  </div>
                  {alert && (
                    <div style={{ fontSize: "12px" }} className="text-danger">
                      {alert}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    {...register("registerPassword", { required: true })}
                    className="form-control"
                    placeholder="Password"
                    defaultValue=""
                    type={"password"}
                  />
                  <div style={{ fontSize: "12px" }} className="text-danger">
                    {errors.registerPassword?.message}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    {...register("registerRetypePassword", { required: true })}
                    className="form-control"
                    placeholder="Retype Password"
                    defaultValue=""
                    type={"password"}
                  />
                  <div style={{ fontSize: "12px" }} className="text-danger">
                    {errors.registerRetypePassword?.message}
                  </div>
                </div>
                <div className="form-group text-left">
                  <button type="submit" className="site-button dz-xs-flex m-r5">
                    Sign me up
                  </button>
                  <span className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="check1"
                      name="example1"
                    />
                    <label className="custom-control-label" htmlFor="check1">
                      Remember me
                    </label>
                  </span>
                  <Link
                    data-toggle="tab"
                    className="forget-pass m-l5"
                    to="/register-company"
                  >
                    <i className="fa fa-unlock-alt"></i> You are a company?
                  </Link>
                </div>
              </form>
              <div className="text-center bottom">
                <Link
                  className="site-button button-md btn-block text-white"
                  to="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom-footer clearfix m-t10 m-b20 row text-center">
            <div className="col-lg-12 text-center">
              <span>
                {" "}
                © Design by <i className="fa fa-heart m-lr5 text-red heart"></i>
                <a href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914">
                  The Khiem{" "}
                </a>{" "}
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
