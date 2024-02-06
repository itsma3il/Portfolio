import React from "react";
import { Zoom } from "react-awesome-reveal";
const Social = () => {
  return (
    <div className="home_social">
      <Zoom cascade>
      <a href="https://instagram.com/itsma3il" className="home_social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/mousdik-ismail-8590b41b2" className="home_social-icon" target="_blank">
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/itsma3il" className="home_social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
      </Zoom>
    </div>
  );
};

export default Social;
