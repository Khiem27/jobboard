import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { UserDataLogin } from "../../../Shared/types";
import { LoginSliceAction } from "./LoginSlice";
Login.propTypes = {};

type Inputs = {
  registerEmail: string;
  registerPassword: string;
};

const schema = yup
  .object({
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
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  const onSubmit = async (data: Inputs) => {
    try {
      const userDataLogin: UserDataLogin = {
        email: data.registerEmail,
        password: data.registerPassword,
      };
      await dispatch(LoginSliceAction(userDataLogin));
      window.location.href = "/";
    } catch (error: any) {
      setAlert(error.message);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 d-flex">
        <div className="text-white max-w400 align-self-center">
          <div className="logo">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAA9CAMAAACqcT2MAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMA3ndEEWbuM7uqmYhVzCJA8uYI2cc490mvUAP7j3Fc1bYWwTwoHYAuoCthaaWdLS78AAAFxElEQVR42u2c2XbaMBBAR7Is7y4QIEDYydIk1f//XiPkZCyNkWgWTs/B96m17EG6aBnJpeBhPngjgp4O1uqNOfR0UGo3t9DTu+ndfBMT7eYJelxGyctMu9k+lvfQg4zWs6FC2O9+ZDU8LIfKZbMaQc+iuFNdDGO4dqIb9c6UadBUWsNV86gatvHTzoywCR+/y7rqJPl3I6F4tlfz5rpawdUyMwaWO1Ly3BRxuFJM79hMoIu1VJpX+C6YUup/nd+Z2w24mWhOLdY7M0v/ukY3iVEDJxFM3zDocBcpG/5lNxgTKfiFFkrqZnhcp8HD7njL7OJukCqCi4BucPVmTh44cmbkY7JzuLwbpICfhroRSmNtK+PtUI4fF+Qo8OaSbi4vh7pZms+luc7G6jtV8EyHfacbawhxpvAa4efcLKY65WtrmKuGJbR40lfGl3WDZPpaBh5+ws2adJu9arizOk6qLz1c3g0+w8DDT7jZagkCnGXL8ESqzP/JTcJTMwvxTjeJGSsZF2E3hb7oD44BeGbWNm5HYU1czi3PpalGzt1GLAbu4iym6p1bcJ3t/8FNVCmEEzd1iqVZ7XGD6ak/ON6JVInrxpSjm5i14tiN+KWvlWe5yUn+53WTKwuW2G6c1ag8o9+wM4KXUtnEjptUtd2I1Lo5Fe1GrHBIBcYU3OpLk3PdpMolat9YuKU8PN/k4eCCkRL7O6lU242olE1qGoEr+JDsyQ1yYV2v9bX1mW7MiM+T1hosa7zxSGYaFJsKlsF1KvIGx4fzuOlDFVpofa7kmJiQQBoO6Vgj6SSSqO4zm5HUHvVD26CbGHs6tqay6igje6KVIpDfFHBO8CwTrlLbTYrlnAYybtQH246xjcoQPDQNumHmq3QmiLhdx8T9RO7Pi3OAQHCKkNqp5YYJu5QGUhwGOMjAYSWtumDshmHITUwqKxh+twxNtDu39LlhGM0fnH7NqVX/CEKBsN9QN4cJwCFagLgljQ/3G+ycrGMRFvi9C/qWOfLvNQWcE5wWMJI/BgJxqG40U3dMPSyVWt4D7FZTNZuQxsvN20P7kBtJt4YC51tm5f/4BPe6UTIJBafElht80BuIo7v2LmnUvKOaNknOnxrLdnf4nN8NVpUW45/IoMpPzcURrkWB4JgwI4zc5BHqWcNn5MtafGINr+3WYU5SnNxPZdQN7expODim29QNfq6nlm7ut8PbCbG9P0++5IZ/yg0uZUkweCLVt7mZ6BtecA0j3FgLnIRLjik6EwSDm0woIfMNceMPZJCthWqkCPh6YTHEO799LhbuXBx1hs9DwUvs2yE34bkYZq1BxRUBdZSh15vqC2t4jG3yugkFz1G7x01oDbdmkRx7BuUeez3JIYSz1ShbHjnJqtKu3A91QXBM5aHgqVPEfW5iGsip2sC0+f1eysxkhF0ZdF45m5Ok3dbE+o7CewbqhjQkFDy1+02ifG6EpIE03G7Tb3MI0ckjbqYmpAdWdbsalZXnysj+0PSTe01cf5JQ8MKynjCvG+AkkONmNP1o9f2vDib4EqvqelnCTZ+T9oKfn39GwVnwjCIy4VJvcNTWZBKFdw2nZxSSHiO+6r8PBPhIyFkXWfIddylN+a1Z1Xu21Q2rw8Erp0ZeN/Rsi2XOFLRx3kZRnqdmJnQpaN2xzHsmGsWeM1GPmlDwmllrbORzQ89Eqzp33NQqIOd5QE8m6JF2Jpyy1HOWHtmP1hByI/l5wUWG13PwuaFn6QWA6wbWRk4N3UwG5LUw2QemnDztfQcTHR+V3e9gCBkvw8Gx4Gi94jV43CAlvgpCN24XHczBArdcV/27mGWTyjyRknnT9V/gailUY+cALRbl/mOuvGJe7pThpphPHt6oD+t8qAxsAlfN/Vid4k//z/Zfmepi3P/e443FakPM7K96prE4LKsp5lv7x2foabG7zbWY/OUgoKfzN4n9j+7637L2bpD+/xX4Ev3/R3Gavwc7ChND0FF0AAAAAElFTkSuQmCC"
                alt=""
              />
            </Link>
          </div>
          <h2 className="m-b10">Login To You Now</h2>
          <p className="m-b30">
            JobBoard is a recruitment platform that assists you in finding the
            greatest colleagues and the most professional company.
          </p>
          <ul className="list-inline m-a0">
            <li>
              <a
                className="m-r10 text-white "
                href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                className="m-r10 text-white "
                href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914"
              >
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a
                className="m-r10 text-white "
                href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="m-r10 text-white "
                href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="m-r10 text-white"
                href="https://www.topcv.vn/xem-cv/B1VYBQAEBgRRUQZTUAJUBQZbVgYDUAsBUwFTWg7914"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="login-2 submit-resume p-a30 seth">
          <div className="nav">
            <form onSubmit={handleSubmit(onSubmit)} className="col-12 p-a0 ">
              <p className="font-weight-600">
                If you have an account with us, please log in.
              </p>
              <div className="form-group ">
                <label>E-Mail Address*</label>
                <div className="input-group">
                  <input
                    {...register("registerEmail", { required: true })}
                    type="email"
                    className="form-control"
                    placeholder="Type Your Email Address"
                  />
                </div>
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
                <label>Password *</label>
                <div className="input-group">
                  <input
                    {...register("registerPassword", { required: true })}
                    type="password"
                    className="form-control"
                    placeholder="Type Your Password"
                  />
                </div>
                <div style={{ fontSize: "12px" }} className="text-danger">
                  {errors.registerPassword?.message}
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="site-button float-left">
                  Login
                </button>
                <Link
                  className="site-button-link forget-pass m-t15 float-right"
                  to="/register"
                >
                  <i className="fa fa-unlock-alt"></i> Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
