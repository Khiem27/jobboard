import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Page404 from "./Components/404/Page404";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import "./Css/bootstrap.min.css";
import "./Css/line-awesome.min.css";
import "./Css/main.c65b4059.chunk.css";
import "./Css/plugins.css";
import "./Css/scrollbar.css";
import "./Css/slick-theme.min.css";
import "./Css/switcher.css";
import "./Css/templete.css";
import "./Css/themify-icons.css";
import LoginCompanyLayout from "./Layout/Authentication/Register/LoginCompanyLayout";
import LoginLayout from "./Layout/Authentication/Register/LoginLayout";
import RegisterCompanyLayout from "./Layout/Authentication/Register/RegisterCompanyLayout";
import RegisterLayout from "./Layout/Authentication/Register/RegisterLayout";
import BlogClassicLayout from "./Layout/Blog/BlogClassic/BlogClassicLayout";
import BlogDetailsLayout from "./Layout/Blog/BlogDetails/BlogDetailsLayout";
import PostBlogLayout from "./Layout/Blog/PostBlogLayout/PostBlogLayout";
import ApplyedJobLayout from "./Layout/ForCandidates/ApplyedJob/ApplyedJobLayout";
import MyProfileLayout from "./Layout/ForCandidates/MyProfile/MyProfileLayout";
import ResumeLayout from "./Layout/ForCandidates/Resume/ResumeLayout";
import ManagerEmployJobLayout from "./Layout/ForEmployer/ManagerJobLayout/ManagerEmployJobLayout";
import PostAJobLayout from "./Layout/ForEmployer/PostAJob/PostAJobLayout";
import ProfileCompanyLayout from "./Layout/ForEmployer/Profile/ProfileCompanyLayout";
import ResumeEmployerLayout from "./Layout/ForEmployer/Resume/ResumeEmployerLayout";
import Home from "./Layout/Home/Home";
import JobDetailsLayout from "./Layout/JobDetails/JobDetailsLayout";
import JobListLayout from "./Layout/JobList/JobListLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path="post-blog"
          element={
            <RequireAuth>
              <PostBlogLayout />
            </RequireAuth>
          }
        />
        <Route
          path="blog-classic"
          element={
            <RequireAuth>
              <BlogClassicLayout />
            </RequireAuth>
          }
        />
        <Route
          path="my-profile"
          element={
            <RequireAuth>
              <MyProfileLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/blog-classic/detail/:id"
          element={
            <RequireAuth>
              <BlogDetailsLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/job-detail/:id"
          element={
            <RequireAuth>
              <JobDetailsLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/jobs-my-resume"
          element={
            <RequireAuth>
              <ResumeLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/company-post-jobs"
          element={
            <RequireAuth>
              <PostAJobLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/company-profile"
          element={
            <RequireAuth>
              <ProfileCompanyLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/browse-job-list"
          element={
            <RequireAuth>
              <JobListLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/company-resume"
          element={
            <RequireAuth>
              <ResumeEmployerLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/company-manage-job"
          element={
            <RequireAuth>
              <ManagerEmployJobLayout />
            </RequireAuth>
          }
        />

        <Route
          path="/jobs-applied-job"
          element={
            <RequireAuth>
              <ApplyedJobLayout />
            </RequireAuth>
          }
        />
        <Route path="/register-candidate" element={<RegisterLayout />} />
        <Route path="/register-company" element={<RegisterCompanyLayout />} />

        <Route path="/login" element={<LoginLayout />} />
        <Route path="/login-company" element={<LoginCompanyLayout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
