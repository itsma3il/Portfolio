import React, { useState } from "react";
import "./header.css";
import Toggler from "./Toggler";
const Header = ({ setIsDarkMode }) => {
  /* ==== Toggle Menu ==== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  /* ==== Change Background Header ==== */
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.93 329.88">
            <g id="Layer_1-2" data-name="Layer 1">
              <path class="cls-1" d="M177.79,117.67s17.47-62.69,27.75-70.91c0,0-39.05,25.18-72.45,14.39,0,0,4.11,51.38-24.15,73.99,0,0,61.66-12.85,72.45,0,10.79,12.85,19.01,41.62-5.14,103.79-24.15,62.17-38.46,75.3-33.4,90.95,0,0-39.05-20.04-78.62-7.19-39.57,12.85-49.33-15.93-64.23-5.14,0,0,58.58-45.73,61.15-98.14,0,0,26.72,12.85,23.12,34.94s-11.82,22.09-11.82,22.09c0,0,26.72,7.19,46.76-13.87,20.04-21.07,46.25-98.14,49.84-108.42,0,0-18.5,18.5-58.06,13.87-39.57-4.62-37-41.11-15.93-84.27,21.07-43.16,7.71-60.63,7.71-60.63,0,0,88.38,5.65,136.17-23.12,0,0-11.3,60.12,0,73.48,0,0-42.65,10.79-61.15,44.19Z" />
            </g>
          </svg>
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-briefcase-alt nav_icon"></i> Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#Qualification"
                onClick={() => setActiveNav("#Qualification")}
                className={
                  activeNav === "#Qualification"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-scenery nav_icon"></i> Qualification
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-scenery nav_icon"></i> Porfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav_link active-link"
                    : "nav_link"
                }>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
        <Toggler setIsDarkMode={setIsDarkMode} />

      </nav>
    </header>
  );
};

export default Header;
