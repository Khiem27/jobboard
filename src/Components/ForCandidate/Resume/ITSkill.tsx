import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";
import { ResumeType } from "../../../Shared/types";

ITSkill.propTypes = {};

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
  skill: "string";
  experience: "string";
  description: "string";
}
function ITSkill() {
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

  const [headlineData, setHeadlineData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const getResumeData = await UserApi.getResume();
      setHeadlineData(getResumeData.data.skills);
    };
    getData();
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const newObj: NewObj = {
        skill: data.skill,
        experience: data.experience,
        description: data.description,
      };

      const type: ResumeType = ResumeType.SKILL;
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
        skill: data.skill,
        experience: data.experience,
        description: data.description,
      };

      const type: ResumeType = ResumeType.SKILL;
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
      const type: ResumeType = ResumeType.SKILL;
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
    <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
      <div className="d-flex">
        <h5 className="m-b15">IT Skills</h5>

        <Link
          onClick={handleOpen2}
          className="site-button add-btn button-sm"
          to="#"
        >
          <i className="fa fa-pencil m-r5"></i> Create
        </Link>
      </div>
      <p>
        Mention your employment details including your current and previous
        company work experience
      </p>
      <table>
        <thead>
          <tr>
            <th>Skills</th>
            <th>Experience</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {headlineData
            ? headlineData.map((item: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{item.skill}</td>
                    <td>{item.experience}</td>
                    <td
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "150px",
                      }}
                    >
                      {item.description}
                    </td>
                    <td>
                      <Link
                        onClick={() => handleOpen3(item.id)}
                        className="m-l15 font-14"
                        data-toggle="modal"
                        data-target="#itskills"
                        to="#"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>

                      <Link
                        onClick={() => handleDelete(item.id)}
                        className="m-l15 font-14"
                        data-toggle="modal"
                        data-target="#itskills"
                        to="#"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
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
                    <h5 className="modal-title" id="EducationModalLongTitle">
                      IT Skills
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
                            <label>Skill</label>
                            <input
                              {...register("skill", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Skill"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Experience (Year)</label>
                            <input
                              {...register("experience", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Experience"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <input
                              {...register("description", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Description"
                            />
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
                    <h5 className="modal-title" id="EducationModalLongTitle">
                      IT Skills
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
                            <label>Skill</label>
                            <input
                              {...register("skill", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Skill"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Experience (Year)</label>
                            <input
                              {...register("experience", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Experience"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <input
                              {...register("description", { required: true })}
                              type="text"
                              className="form-control"
                              placeholder="Description"
                            />
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
      </table>
    </div>
  );
}

export default ITSkill;
