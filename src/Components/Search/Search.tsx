import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChangeSearchTitle } from "../Slider/SliderHomeSlice";
Search.propTypes = {};
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
function Search() {
  const searchJobs = useSelector(
    (state: RootState) => state.sliderHomeSlice.search
  );

  const [valueTags, setValueTags] = React.useState<string | undefined>(
    optionsTags[0]
  );
  const [inputValueTags, setInputValueTags] = React.useState("");
  const titleRef = useRef<any>(undefined);
  const addressRef = useRef<any>(undefined);
  useEffect(() => {
    setValueTags(searchJobs.tag);
  }, [searchJobs.tag]);
  const dispatch = useDispatch();

  return (
    <div className="section-full browse-job-find">
      <div className="container">
        <div className="find-job-bx">
          <form className="dezPlaceAni">
            <div className="row">
              <div className="col-lg-4-fix col-md-6">
                <div className="form-group">
                  {console.log(searchJobs.title)}
                  <div className="input-group">
                    <input
                      ref={titleRef}
                      type="text"
                      value={
                        searchJobs.title ? `${searchJobs.title}` : undefined
                      }
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
                      value={
                        searchJobs.address ? `${searchJobs.address}` : undefined
                      }
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
                    value={valueTags ? `${valueTags}` : undefined}
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
  );
}

export default Search;
