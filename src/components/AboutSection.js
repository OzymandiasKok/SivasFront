import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/image/about/image.png'; // Caminho correto da imagem

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We provide the best consulting services for businesses all over the world and in every industry.
          Whether you are a new startup or a large company looking to broaden your horizons, our team of 
          experts will help you make the right decisions for you.
        </p>
        <p className="about-description">
          From helping you refine your supply chain management, enhance human resource strategies, guiding you 
          to choose the right corporate social responsibilities and managing your public relations, we provide 
          all services to ensure the success of your business.
        </p>
        <button className="about-button">Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Consulting" />
      </div>
    </section>
  );
};

export default AboutSection;
