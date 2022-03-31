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
  details_of_project: "string";
  project_title: "string";
}
function Project() {
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
      setHeadlineData(getResumeData.data.projects);
    };

    getData();
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const newObj: NewObj = {
        project_title: data.project_title,
        details_of_project: data.details_of_project,
      };

      const type: ResumeType = ResumeType.PROJECT;
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
        project_title: data.project_title,
        details_of_project: data.details_of_project,
      };
      const type: ResumeType = ResumeType.PROJECT;
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
      const type: ResumeType = ResumeType.PROJECT;
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
        <h5 className="m-b15">Project</h5>

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
                <h6 className="font-14 m-b0">{item.project_title}</h6>
                <p className="m-b0">{item.details_of_project}</p>

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
                  <h5 className="modal-title" id="ProjectsModalLongTitle">
                    Add Projects
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
                          <label>Project Title</label>
                          <input
                            {...register("project_title", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Project Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Details of Project</label>
                          <textarea
                            {...register("details_of_project", {
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
                  <h5 className="modal-title" id="ProjectsModalLongTitle">
                    Add Projects
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
                          <label>Project Title</label>
                          <input
                            {...register("project_title", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Enter Project Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Details of Project</label>
                          <textarea
                            {...register("details_of_project", {
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

export default Project;
