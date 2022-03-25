import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";

Home.propTypes = {};

function Home() {
  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    const userDataParse = JSON.parse(userData);

    if (!userDataParse) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default Home;
