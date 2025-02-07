// src/components/ServicesSection.js
import React from "react";
import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Home Insurance",
    description: "Proteja sua casa contra imprevistos e garanta segurança para sua família.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/home-insurance.svg",
  },
  {
    id: 2,
    title: "Car Insurance",
    description: "Cobertura completa para seu veículo, esteja você onde estiver.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/car-insurance.svg",
  },
  {
    id: 3,
    title: "Travel Insurance",
    description: "Viaje com tranquilidade e segurança em qualquer parte do mundo.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/travel-insurance-1.svg",
  },
  {
    id: 4,
    title: "Health Insurance",
    description: "Planos de saúde personalizados para cuidar de você e sua família.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/shield.svg",
  },
  {
    id: 5,
    title: "Life Insurance",
    description: "Garanta proteção financeira para seus entes queridos no futuro.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/life-insurance.svg",
  },
  {
    id: 6,
    title: "Business Insurance",
    description: "Proteja seu negócio contra riscos e mantenha sua operação segura.",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/insurance.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="icon-container">
              <img src={service.image} alt={service.title} />
            </div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

