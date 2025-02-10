import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Amazing Service. They are very professional and sincere about helping people. I would definitely recommend their consultants to everybody.",
    name: "Leo Ward",
    job: "CEO, Unipie",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/840916e2-team-5.@2x.jpg"
  },
  {
    quote: "Amazing Service. They are very professional and sincere about helping people. I would definitely recommend their consultants to everybody.",
    name: "Mila Blide",
    job: "Manager",
    image: "https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/151ccef2-team-6@2x.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      {/* Title Section */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonial</h2>
        <p className="testimonials-subtitle">Don’t take our word for it, hear what our happy clients have to say</p>
      </div>
      
      <img 
        src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/85284e53-object-8.svg"
        alt="Decorative Circle"
        className="decorative-circle"
      />
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-box" key={index}>
            <div className="quote-background">“</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-info">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-job">{testimonial.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

