import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <Fade direction="down">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>
      </Fade>

        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">
              Website Design &  <br /> Development
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services_modal active-modal"
                  : "services_modal"
              }>
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Website Design and Development</h3>
                <p className="services_modal-description">
                  Service with more than 1 year of experience.Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Customized website designs tailored to your brand's unique identity and target audience.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Responsive web development ensuring seamless user experience across all devices.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Implementation of content management systems (CMS) for easy website maintenance and updates.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Optimization for speed, performance, and search engine visibility to maximize online presence.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">
              Brand Identity & <br /> Logo Design
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services_modal active-modal"
                  : "services_modal"
              }>
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Brand Identity &  Logo Design</h3>
                <p className="services_modal-description">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Creation of visually compelling logos that represent your brand's values and identity.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Development of comprehensive brand identity guidelines for consistent branding across all platforms.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Design of custom graphics and visual assets to reinforce brand messaging and identity.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Collaboration with clients to understand their vision and translate it into impactful designs.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Delivery of logo files in various formats for versatile usage across print and digital media.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">
                Visual <br /> Designer
              </h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services_modal active-modal"
                  : "services_modal"
              }>
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Visual Designer</h3>
                <p className="services_modal-description">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Creation of visually appealing posters, flyers, and promotional materials to effectively communicate your message.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">Web page development.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Design of eye-catching social media graphics and digital ads to engage your audience and increase brand awareness.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Development of cohesive visual branding elements such as color schemes, typography, and imagery to establish a strong brand identity.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                    Collaboration with clients to understand their brand vision and translate it into compelling design concepts.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Services;
