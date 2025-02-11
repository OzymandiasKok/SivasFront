import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contactus"> {/* Alterei o id para 'contactus' */}
      <div className="elementor-container">
        {/* Coluna Esquerda - Texto */}
        <div className="elementor-column elementor-col-33 text-column">
          <h2 className="elementor-heading-title">Fale Conosco</h2>
          <p className="contact-info">
            contato@sivassecuritizadora.com.br<br />
            +55 31 9975-1404
          </p>
          <p className="info-text">
            Ligue para nós ou nos visite a qualquer momento, nós nos esforçamos para responder a todas as consultas em até 24 horas úteis.
          </p>
        </div>

        {/* Coluna Direita - Formulário */}
        <div className="elementor-column elementor-col-66 form-column">
          <form className="contact-form">
            <fieldset>
              <div className="name-container">
                <div className="name-field">
                  <label htmlFor="first-name">Primeiro Nome</label>
                  <input type="text" id="first-name" placeholder="Primeiro Nome" />
                </div>
                <div className="name-field">
                  <label htmlFor="last-name">Último Nome</label>
                  <input type="text" id="last-name" placeholder="Último Nome" />
                </div>
              </div>

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="Endereço de E-mail" required />

              <label htmlFor="subject">Assunto</label>
              <input type="text" id="subject" placeholder="Assunto" />

              <label htmlFor="message">Sua Mensagem</label>
              <textarea id="message" placeholder="Sua Mensagem" rows="4"></textarea>

              <button type="submit" className="submit-button">Enviar Formulário</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
