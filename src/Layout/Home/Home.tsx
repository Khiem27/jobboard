import React from "react";
import FilterCategories from "../../Components/FilterCategories/FilterCategories";
import Header from "../../Components/Header/Header";
import SliderHome from "../../Components/Slider/SliderHome";

Home.propTypes = {};

function Home() {
  return (
    <>
      <Header />
      <div className="page-content">
        <SliderHome />
        <FilterCategories />
      </div>
    </>
  );
}

export default Home;
