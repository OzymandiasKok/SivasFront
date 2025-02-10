// src/components/ExperienceSection.js

import React from 'react';
import './ExperienceSection.css'; // Importe o arquivo CSS para o componente

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="image-container">
          <img 
            src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/kevin-matos-Nl_FMFpXo2g-unsplash-scaled.jpeg" 
            alt="Experience" 
            className="experience-image"
          />
        </div>
        
        <div className="text-container">
          <h2 className="experience-title">Our Experience</h2>
          <p className="experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="progress-container">
            <div className="progress-bar">
              <span className="progress-title">Statistic & Analytic</span>
              <div className="progress-line" style={{ width: '70%' }}>
                <span className="progress-count">70%</span>
              </div>
            </div>
            <div className="progress-bar">
              <span className="progress-title">Audit Preparation</span>
              <div className="progress-line" style={{ width: '90%' }}>
                <span className="progress-count">90%</span>
              </div>
            </div>
            <div className="progress-bar">
              <span className="progress-title">Management Consulting</span>
              <div className="progress-line" style={{ width: '87%' }}>
                <span className="progress-count">87%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
