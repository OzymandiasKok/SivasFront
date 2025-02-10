import React from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <section className="case-studies-section" id="case-studies">
      <img 
        src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/85284e53-object-8.svg"
        alt="Decorative Shape"
        className="decorative-shape"
      />
      <div className="case-studies-container">
        <div className="case-studies-text">
          <h2 className="case-studies-title">Case Studies</h2>
          <p className="case-studies-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/" className="case-studies-button">Read More</a>
        </div>
        <div className="case-studies-image">
          <img 
            src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/c5390451-case-study-2@2x.jpg"
            alt="Case Study"
            className="case-main-image"
          />
          <div className="case-caption-box">
            <p className="case-caption">
              But I must explain to you how all this mistaken idea of the denouncing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
