import React from 'react';
import './Header.css'; // Estilos do Header

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/Frame-1.svg"
            alt="Logo"
          />
        </div>

        {/* Menu de Navegação */}
        <div className="nav-menu">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#ourteam">Our Team</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
