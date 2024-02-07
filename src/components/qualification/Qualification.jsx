import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="Qualification">
      <Fade direction="down">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>
      </Fade>

      <div className="qualification_container container">
        <Fade duration={2000}>
          <div className="qualification_tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }>
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }>
              <i className="uil uil-briefcase-alt qualification_icon"></i>
              Experience
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={2500}>
          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Développement Web Full-Stack</h3>
                  <span className="qualification_subtitle">
                    Marrakech - ISTA NTIC SYBA
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">Baccalauréat Sciences physiques</h3>
                  <span className="qualification_subtitle">
                    Marrakech - Lycée Chouiter
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021  - 2022
                  </div>
                </div>
              </div>
              
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }>
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Designer</h3>
                  <span className="qualification_subtitle">
                    Freelance - morocco
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2023
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Qualification;
