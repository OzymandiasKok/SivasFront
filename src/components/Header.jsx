import React, { useState } from 'react';
import './Header.css'; // Estilos do Header
import logo from '../assets/image/logo/sivas.avif'; // Importação correta da imagem

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
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Menu de Navegação */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="#contactus">Contato</a></li>
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
