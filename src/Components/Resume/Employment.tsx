import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserApi } from "../../Api/UserApi/UserApi";
import { ResumeType } from "../../Shared/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface NewObj {
  id?: string;
  designation: string;
  organization: string;
  is_current_company: boolean;
  started_working_year: number;
  started_working_month: string;
  worked_till_year: string;
  worked_till_month: number;
  describe_profile: string;
}
function Employment() {
  const { enqueueSnackbar } = useSnackbar();
  const [idEmployment, setIdImployment] = useState<string>();

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = (id: any) => {
    setOpen3(true);
    setIdImployment(id);
  };
  const handleClose3 = () => setOpen3(false);

  const [typeRa, setType] = useState<boolean>(true);
  const [headlineData, setHeadlineData] = useState<any>();

  const handleBolean = (type: boolean) => {
    setType(type);
  };

  useEffect(() => {
    const getData = async () => {
      const getResumeData = await UserApi.getResume();
      setHeadlineData(getResumeData.data.employments);
    };
    getData();
  }, []);

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const newObj: NewObj = {
        designation: data.designation,
        organization: data.organization,
        is_current_company: typeRa,
        started_working_year: data.started_working_from_years,
        started_working_month: data.started_working_from_month,
        worked_till_year: data.started_working_still_years,
        worked_till_month: data.started_working_still_month,
        describe_profile: data.describe_profile,
      };

      const type: ResumeType = ResumeType.EMPLOYMENT;
      await UserApi.putResume(type, newObj);

      enqueueSnackbar("Succcess", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      window.location.reload();
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  const onSubmit2: SubmitHandler<any> = async (data) => {
    try {
      const newObj: NewObj = {
        id: idEmployment,
        designation: data.designation,
        organization: data.organization,
        is_current_company: typeRa,
        started_working_year: data.started_working_from_years,
        started_working_month: data.started_working_from_month,
        worked_till_year: data.started_working_still_years,
        worked_till_month: data.started_working_still_month,
        describe_profile: data.describe_profile,
      };

      const type: ResumeType = ResumeType.EMPLOYMENT;
      await UserApi.putResume(type, newObj);

      enqueueSnackbar("Succcess", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      window.location.reload();
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  const handleDelete = async (id: any) => {
    try {
      const type: ResumeType = ResumeType.EMPLOYMENT;
      await UserApi.deleteResume(id, type);
      enqueueSnackbar("Succcess", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      window.location.reload();
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  return (
    <div id="employment_bx" className="job-bx bg-white m-b30 ">
      <div className="d-flex">
        <h5 className="m-b15">Employment</h5>
        <Link
          onClick={handleOpen2}
          className="site-button add-btn button-sm"
          to="#"
        >
          <i className="fa fa-pencil m-r5"></i> Create
        </Link>
      </div>
      {headlineData
        ? headlineData.map((item: any, index: any) => {
            return (
              <div key={index}>
                <h6 className="font-14 m-b0">{item.designation}</h6>
                <p className="m-b0">{item.organization}</p>
                <p className="m-b0">
                  {item.started_working_year} {item.started_working_month} to{" "}
                  {item.worked_till_year} {item.worked_till_month}
                </p>
                <p className="m-b0">{item.describe_profile}</p>
                <Link
                  onClick={() => handleOpen3(item.id)}
                  style={{ margin: "10px 10px 10px 0px" }}
                  className="site-button add-btn button-sm"
                  to="#"
                >
                  <i className="fa fa-pencil m-r5"></i> Edit
                </Link>
                <Link
                  onClick={() => handleDelete(item.id)}
                  style={{ margin: "5px 10px" }}
                  className="site-button add-btn button-sm"
                  to="#"
                >
                  <i className="fa fa-pencil m-r5"></i> Delete
                </Link>
              </div>
            );
          })
        : null}
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
            <div className="modal-dialog my-0" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="EmploymentModalLongTitle">
                    Add Employment
                  </h5>
                  <button
                    onClick={handleClose2}
                    type="button"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Designation</label>
                          <input
                            {...register("designation", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Designation"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Organization</label>
                          <input
                            {...register("organization", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Organization"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Is this your current company?</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  {...register("is_current_company")}
                                  onClick={() => handleBolean(true)}
                                  type="radio"
                                  className="custom-control-input"
                                  id="employ_yes"
                                  checked={typeRa ? true : false}
                                  name="example1"
                                  value="true"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="employ_yes"
                                >
                                  Yes
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  {...register("is_current_company")}
                                  onClick={() => handleBolean(false)}
                                  type="radio"
                                  checked={!typeRa ? true : false}
                                  className="custom-control-input"
                                  id="employ_no"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="employ_no"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Started Working From</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_from_years", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_from_month", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Worked Till</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_still_years", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_still_month", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Describe your Job Profile</label>
                          <textarea
                            {...register("describe_profile", {
                              required: true,
                            })}
                            className="form-control"
                            placeholder="Type Description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={handleClose2}
                    type="button"
                    className="site-button"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                    className="site-button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
            <div className="modal-dialog my-0" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="EmploymentModalLongTitle">
                    Edit Employment
                  </h5>
                  <button
                    onClick={handleClose3}
                    type="button"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Designation</label>
                          <input
                            {...register("designation", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Designation"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Organization</label>
                          <input
                            {...register("organization", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Organization"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Is this your current company?</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  {...register("is_current_company")}
                                  onClick={() => handleBolean(true)}
                                  type="radio"
                                  className="custom-control-input"
                                  id="employ_yes"
                                  checked={typeRa ? true : false}
                                  name="example1"
                                  value="true"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="employ_yes"
                                >
                                  Yes
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  {...register("is_current_company")}
                                  onClick={() => handleBolean(false)}
                                  type="radio"
                                  checked={!typeRa ? true : false}
                                  className="custom-control-input"
                                  id="employ_no"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="employ_no"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Started Working From</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_from_years", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_from_month", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Worked Till</label>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_still_years", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                              </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <select
                                {...register("started_working_still_month", {
                                  required: true,
                                })}
                                className="form-control"
                              >
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Describe your Job Profile</label>
                          <textarea
                            {...register("describe_profile", {
                              required: true,
                            })}
                            className="form-control"
                            placeholder="Type Description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={handleClose3}
                    type="button"
                    className="site-button"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit(onSubmit2)}
                    type="button"
                    className="site-button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Employment;
