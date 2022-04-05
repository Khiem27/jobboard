import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChangeSearchTitle } from "./SliderHomeSlice";

SliderHome.propTypes = {};

const optionsTags = [
  "Internship",
  "Freelance",
  "Part Time",
  "Full Time",
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
function SliderHome() {
  const history = useNavigate();
  const [valueTags, setValueTags] = React.useState(optionsTags[0]);
  const [inputValueTags, setInputValueTags] = React.useState("");
  const titleRef = useRef<any>(undefined);
  const addressRef = useRef<any>(undefined);
  const dispatch = useDispatch();

  return (
    <div
      className="dez-bnr-inr dez-bnr-inr-md"
      style={{ backgroundImage: "url(../img/slide2.bad633df.jpg)" }}
    >
      <div className="container">
        <div className="dez-bnr-inr-entry align-m">
          <div className="find-job-bx">
            <a className="site-button button-sm" href="/react/demo/browse-job">
              Find Jobs, Employment &amp; Career Opportunities
            </a>
            <h2>
              Search Between More Then <br />{" "}
              <span className="text-primary">50,000</span> Open Jobs.
            </h2>
            <form className="dezPlaceAni">
              <div className="row">
                <div className="col-lg-4-fix col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        ref={titleRef}
                        type="text"
                        className="form-control"
                        placeholder="Job Title, Keywords, or Phrase"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        ref={addressRef}
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-map-marker"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
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

                <div className="col-lg-2 col-md-6">
                  <button
                    onClick={(e) => {
                      history("/browse-job-list");
                      e.preventDefault();
                      const data = {
                        tag: valueTags,
                        title: titleRef.current.value,
                        address: addressRef.current.value,
                      };
                      dispatch(ChangeSearchTitle(data));
                    }}
                    type="submit"
                    className="site-button btn-block"
                  >
                    Find Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
