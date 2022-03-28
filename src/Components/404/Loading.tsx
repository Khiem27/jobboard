import React, { useEffect, useState } from "react";

Loading.propTypes = {};

function Loading() {
  const [counter, setCounter] = useState<any>(0);
  useEffect(() => {
    if (counter < 100) {
      const timer = setInterval(() => {
        setCounter(counter * 2 + 5);
      }, 40);

      return () => {
        clearInterval(timer);
      };
    }
  }, [counter]);
  return (
    <body
      className="home page-template page-template-template page-template-HomePage page-template-templateHomePage-php page page-id-92 mll_custom_loader unscrollable noscroll"
      style={{ display: "block" }}
    >
      <div id="mll_preloader">
        <div className="mll_preloader_top active-top-loader">
          <div
            id="mll_preloader_loading_percentage"
            style={{ left: `${counter}%` }}
          >
            <span id="page-loading-percentage">{counter}</span>
            <span>%</span>
          </div>
        </div>
        <div className="mll_preloader_bottom active-bottom-loader"></div>
        <div
          id="mll_preloader_loading_line"
          style={{ width: `${counter}%` }}
        ></div>
      </div>
    </body>
  );
}

export default Loading;
