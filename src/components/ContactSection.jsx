import React from 'react';
import './ContactSection.css'; // Certifique-se de que este arquivo CSS seja importado

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="text-column">
          <h2 className="heading">Contact Us</h2>
          <p className="contact-info">
            devscread@info.com<br />
            +613 4827 2294
          </p>
          <p className="info-text">
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
          </p>
        </div>
        <div className="form-column">
          <form className="contact-form">
            <fieldset>
              <div className="name-container">
                <div className="name-field">
                  <label htmlFor="first-name" className="input-label">First Name</label>
                  <input type="text" id="first-name" className="input-field" placeholder="First Name" />
                </div>
                <div className="name-field">
                  <label htmlFor="last-name" className="input-label">Last Name</label>
                  <input type="text" id="last-name" className="input-field" placeholder="Last Name" />
                </div>
              </div>

              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" id="email" className="input-field" placeholder="Email Address" required />

              <label htmlFor="subject" className="input-label">Subject</label>
              <input type="text" id="subject" className="input-field" placeholder="Subject" />

              <label htmlFor="message" className="input-label">Your Message</label>
              <textarea id="message" className="input-field" placeholder="Your Message" rows="4"></textarea>

              <button type="submit" className="submit-button">Submit Form</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
