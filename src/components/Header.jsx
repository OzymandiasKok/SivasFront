import React, { useState } from 'react';
import './Header.css'; // Estilos do Header

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="header-section">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/Frame-1.svg"
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Menu de Navegação */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
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

        {/* Ícone de hambúrguer para dispositivos móveis */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="screen-reader-text">Menu</span>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
