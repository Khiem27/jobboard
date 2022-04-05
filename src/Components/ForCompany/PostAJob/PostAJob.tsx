import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserApi } from "../../../Api/UserApi/UserApi";

const optionsType = ["Internship", "Freelance", "Part Time", "Full Time"];
const optionsTags = [
  "Web Developer",
  "DevOps",
  "Backend",
  "Frontend",
  "Fullstack",
  "MERN",
  "Designer",
  "Tester",
  "Leader",
  "Fuho",
  "Graphics",
  "Other",
];

interface UserProfile {
  title: string;
  tags: string;
  type: string;
  exp: number;
  min_salary: number;
  max_salary: number;
  deadline: string;
  address: string;
  description: string;
  how_to_apply: string;
  job_requirements: string;
}

PostAJob.propTypes = {};

function PostAJob() {
  const { enqueueSnackbar } = useSnackbar();

  const [valueType, setValueType] = React.useState(optionsType[0]);
  const [inputValueType, setInputValueType] = React.useState("");

  const [valueTags, setValueTags] = React.useState(optionsTags[0]);
  const [inputValueTags, setInputValueTags] = React.useState("");

  const { register, handleSubmit } = useForm<UserProfile>();
  const onSubmit: SubmitHandler<UserProfile> = async (data) => {
    try {
      const newArr = {
        title: data.title,
        tags: valueTags,
        type: valueType,
        exp: data.exp,
        min_salary: data.min_salary,
        max_salary: data.max_salary,
        deadline: data.deadline,
        address: data.address,
        description: data.description,
        how_to_apply: data.how_to_apply,
        job_requirements: data.job_requirements,
      };

      await UserApi.postJob(newArr);
      enqueueSnackbar("Successful", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      window.location.reload();
    } catch (error) {
      enqueueSnackbar("Failed", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };
  return (
    <div className="col-xl-9 col-lg-8 m-b30">
      <div className="job-bx job-profile">
        <div className="job-bx-title clearfix">
          <h5 className="font-weight-700 pull-left text-uppercase">
            POST A JOB
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
                <label>Job Title</label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Job Tags</label>
                <Autocomplete
                  value={valueTags}
                  onChange={(event, newValue: any) => {
                    setValueTags(newValue);
                  }}
                  inputValue={inputValueTags}
                  onInputChange={(event, newInputValue) => {
                    setInputValueTags(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={optionsTags}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Job Type</label>
                <Autocomplete
                  value={valueType}
                  onChange={(event, newValue: any) => {
                    setValueType(newValue);
                  }}
                  inputValue={inputValueType}
                  onInputChange={(event, newInputValue) => {
                    setInputValueType(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={optionsType}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Experience (Years)</label>
                <input
                  {...register("exp", { required: true })}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Minimum Salary ($):</label>
                <input
                  {...register("min_salary", { required: true })}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Maximum Salary ($):</label>
                <input
                  {...register("max_salary", { required: true })}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Deadline ($):</label>
                <input
                  {...register("deadline", { required: true })}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Address ($):</label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Desciption:</label>
                <textarea
                  {...register("description", { required: true })}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>How To Apply:</label>
                <textarea
                  {...register("how_to_apply", { required: true })}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Job Requirements:</label>
                <textarea
                  {...register("job_requirements", { required: true })}
                  className="form-control"
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

export default PostAJob;
