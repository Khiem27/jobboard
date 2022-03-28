import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./Components/404/Loading";
import Page404 from "./Components/404/Page404";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import "./Css/bootstrap.min.css";
import "./Css/line-awesome.min.css";
import "./Css/main.c65b4059.chunk.css";
import "./Css/plugins.css";
import "./Css/scrollbar.css";
import "./Css/slick-theme.min.css";
// import "./Css/style.css";
import "./Css/switcher.css";
import "./Css/templete.css";
import "./Css/themify-icons.css";
import LoginLayout from "./Layout/Authentication/Register/LoginLayout";
import RegisterLayout from "./Layout/Authentication/Register/RegisterLayout";
import BlogClassicLayout from "./Layout/Blog/BlogClassic/BlogClassicLayout";
import BlogDetailsLayout from "./Layout/Blog/BlogDetails/BlogDetailsLayout";
import PostBlogLayout from "./Layout/Blog/PostBlogLayout/PostBlogLayout";
import MyProfileLayout from "./Layout/ForCandidates/MyProfile/MyProfileLayout";
import Home from "./Layout/Home/Home";

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
        <Route path="/register" element={<RegisterLayout />} />
        <Route path="/loading" element={<Loading />} />

        <Route path="/login" element={<LoginLayout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
