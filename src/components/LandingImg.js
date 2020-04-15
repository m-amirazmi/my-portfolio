import React from "react";
import LandingText from "./LandingText";

const LandingImg = (props) => {
  return (
    <React.Fragment>
      <div className="landing-img-box">
        <img
          alt="landing-page"
          className="landing-img"
          src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg"
        />
      </div>
      <LandingText />
    </React.Fragment>
  );
};

export default LandingImg;
