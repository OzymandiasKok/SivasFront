import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo à Nossa Landing Page!</h1>
        <p className="hero-description">
          Estamos aqui para ajudar você a alcançar o sucesso. Conheça nossos serviços.
        </p>

        {/* Botão de chamada à ação */}
        <button className="cta-button">Saiba Mais</button>
      </div>
    </section>
  );
};

export default HeroSection;
