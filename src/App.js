// src/App.js
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';  // Importando o Header
import HeroSection from './components/HeroSection';  // Importando o HeroSection
import AboutSection from './components/AboutSection';  // Importando o HeroSection
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
function App() {
  return (
    <div className="App">
      {/* Cabeçalho da página */}
      <Header />

      {/* Seção Hero */}
      <HeroSection />

      {/* Seção about */}
      <AboutSection />

      {/* Seção serviços */}
      <ServicesSection />

      <div>
      <InfoSection />
      </div>

      {/* Conteúdo da página */}
      <div className="content">
        <p>Bem-vindo ao nosso site! Estamos felizes em tê-lo aqui.</p>
      </div>

      {/* Outras seções podem ser adicionadas aqui */}
      {/* Exemplo: <FeaturesSection /> ou <AboutSection /> */}
    </div>
  );
}

export default App;
