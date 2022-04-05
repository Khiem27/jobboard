import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";
import { ResumeType } from "../../../Shared/types";
type Inputs = {
  headline: string;
};
Headline.propTypes = {};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function Headline() {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [headlineData, setHeadlineData] = useState<string>();
  useEffect(() => {
    const getData = async () => {
      const getResumeData = await UserApi.getResume();
      setHeadlineData(getResumeData.data.headline);
    };
    getData();
  }, []);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const type: ResumeType = ResumeType.HEADLINE;
      await UserApi.putResume(type, data);
      enqueueSnackbar("Succcess", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      window.location.reload();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div id="headline_bx" className=" job-bx bg-white m-b30">
      <div className="d-flex">
        <h5 className="m-b15">Resume Headline</h5>
        <Link
          onClick={handleOpen}
          className="site-button add-btn button-sm"
          to="#"
        >
          <i className="fa fa-pencil m-r5"></i> Create
        </Link>
      </div>
      {headlineData ? <p className="m-b0">{headlineData}</p> : null}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ResumeheadlineModalLongTitle">
                Resume Headline
              </h5>
              <button onClick={handleClose} type="button" className="close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                It is the first thing recruiters notice in your profile. Write
                concisely what makes you unique and right person for the job you
                are looking for.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        {...register("headline", { required: true })}
                        className="form-control"
                        placeholder={
                          headlineData ? `${headlineData}` : "Type Description"
                        }
                      ></textarea>
                      {errors.headline && (
                        <span
                          style={{
                            color: "red",
                            lineHeight: "40px",
                            marginLeft: "5px",
                          }}
                        >
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleClose}
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
        </Box>
      </Modal>
    </div>
  );
}

export default Headline;
