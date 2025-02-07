import React from 'react';
import './InfoSection.css'; // Importa o CSS para o componente

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="content-container">
        {/* Coluna das imagens */}
        <div className="image-column">
          {/* Primeira Linha */}
          <div className="info-box">
            <div className="icon">
              <img 
                decoding="async" 
                src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/customer-service.svg" 
                alt="Customer Service" 
              />
            </div>
            <div className="content">
              <h4>24/7 Support</h4>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <img 
                decoding="async" 
                src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/badge.svg" 
                alt="Award Winner" 
              />
            </div>
            <div className="content">
              <h4>Award Winner</h4>
            </div>
          </div>

          {/* Segunda Linha */}
          <div className="info-box">
            <div className="icon">
              <img 
                decoding="async" 
                src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/insurance-1.svg" 
                alt="100% Secure" 
              />
            </div>
            <div className="content">
              <h4>100% Secure</h4>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <img 
                decoding="async" 
                src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/support.svg" 
                alt="Mutual Help" 
              />
            </div>
            <div className="content">
              <h4>Mutual Help</h4>
            </div>
          </div>
        </div>

        {/* Coluna de texto "Why Choose Us" */}
        <div className="text-column">
          <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="contact-btn">Contact Us Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
