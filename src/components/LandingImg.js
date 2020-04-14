import React from "react";
import LandingText from "./LandingText";

const LandingImg = (props) => {
  return (
    <div className="landing-img-box">
      <img
        className="landing-img"
        src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg"
      />
      <LandingText />
    </div>
  );
};

export default LandingImg;
