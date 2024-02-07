import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.93 329.88">
            <g id="Layer_1-2" data-name="Layer 1">
              <path class="cls-1" d="M177.79,117.67s17.47-62.69,27.75-70.91c0,0-39.05,25.18-72.45,14.39,0,0,4.11,51.38-24.15,73.99,0,0,61.66-12.85,72.45,0,10.79,12.85,19.01,41.62-5.14,103.79-24.15,62.17-38.46,75.3-33.4,90.95,0,0-39.05-20.04-78.62-7.19-39.57,12.85-49.33-15.93-64.23-5.14,0,0,58.58-45.73,61.15-98.14,0,0,26.72,12.85,23.12,34.94s-11.82,22.09-11.82,22.09c0,0,26.72,7.19,46.76-13.87,20.04-21.07,46.25-98.14,49.84-108.42,0,0-18.5,18.5-58.06,13.87-39.57-4.62-37-41.11-15.93-84.27,21.07-43.16,7.71-60.63,7.71-60.63,0,0,88.38,5.65,136.17-23.12,0,0-11.3,60.12,0,73.48,0,0-42.65,10.79-61.15,44.19Z" />
            </g>
          </svg>
        </h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">Projects</a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer_link">Testimonials</a>
          </li> */}
        </ul>
        <div className="footer_social">
          <a href="https://www.facebook.com/" className="footer_social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/itsma3il" className="footer_social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://behance.net/itsma3il" className="footer_social-link" target="_blank">
            <i className="bx bxl-behance"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Ismail Mousdik. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
