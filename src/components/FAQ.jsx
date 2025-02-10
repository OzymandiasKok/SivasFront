import React, { useState } from "react";
import "./FAQ.css"; // Estilos específicos do FAQ, se necessário

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Fechar a pergunta se já estiver aberta
    } else {
      setActiveIndex(index); // Abrir a pergunta
    }
  };

  const faqItems = [
    {
      question: "What is HTML?",
      answer:
        "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    },
    {
      question: "What is JavaScript?",
      answer:
        "JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      question: "What is PHP?",
      answer:
        "PHP is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">FAQ</h2>
        <div className="faq-columns">
          <div className="faq-column">
            {faqItems.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-title" onClick={() => toggleAccordion(index)}>
                  <span className="faq-icon">
                    <i
                      className={`fas ${
                        activeIndex === index ? "fa-angle-up" : "fa-angle-down"
                      }`}
                    ></i>
                  </span>
                  <h3>{item.question}</h3>
                </div>
                <div
                  className={`faq-content ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {faqItems.slice(2, 5).map((item, index) => (
              <div
                key={index + 2}
                className={`faq-item ${activeIndex === index + 2 ? "active" : ""}`}
              >
                <div className="faq-title" onClick={() => toggleAccordion(index + 2)}>
                  <span className="faq-icon">
                    <i
                      className={`fas ${
                        activeIndex === index + 2 ? "fa-angle-up" : "fa-angle-down"
                      }`}
                    ></i>
                  </span>
                  <h3>{item.question}</h3>
                </div>
                <div
                  className={`faq-content ${
                    activeIndex === index + 2 ? "show" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
