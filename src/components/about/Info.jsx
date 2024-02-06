import React from "react";
import { Fade } from "react-awesome-reveal";
const Info = () => {
  return (
    <div className="about_info grid">
      <Fade direction="down" cascade="true">
        <div className="about_box">
          <i className="bx bx-award about_icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">3 Years</span>
        </div>
        <div className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">5 + Projects</span>
        </div>
        <div className="about_box">
          <div className="bx bx-support about_icon"></div>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </div>
      </Fade>
    </div>
  );
};

export default Info;
