// src/components/HeroSection.js
import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Bem-vindo à Nossa Landing Page!</h1>
        <p className="hero-description">
          Estamos aqui para ajudar você a alcançar o sucesso. Conheça nossos serviços.
        </p>

        {/* Miniatura do vídeo (clique para abrir o modal) */}
        <div className="video-thumbnail" onClick={openModal}>
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" 
            alt="Clique para assistir"
          />
          <div className="play-button">▶</div> {/* Ícone de play no centro */}
        </div>

        {/* Botão abaixo do vídeo */}
        <button className="cta-button">Saiba Mais</button>
      </div>

      {/* Modal do vídeo */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Substitua pelo link do vídeo real
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-modal" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
