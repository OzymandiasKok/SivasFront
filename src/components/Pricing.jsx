import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <h2 className="pricing-section-title">PREÇO</h2>
            <div className="pricing-container">
                {/* Card 1 */}
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <h3 className="pricing-card-title">Basic</h3>
                        <p className="pricing-card-subtitle">Best suited for personal use</p>
                        <div className="pricing-card-price">
                            <span className="currency">$</span>
                            <span className="price">50</span>
                            <span className="price-period">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-card-body">
                        <a href="/" className="pricing-card-action">Get Started</a>
                        <ul className="pricing-card-features">
                            <li><i className="fas fa-check-circle"></i> Responsive Live</li>
                            <li><i className="fas fa-check-circle"></i> Adaptive Bitrate</li>
                            <li><i className="fas fa-check-circle"></i> Analytics</li>
                            <li><i className="fas fa-times-circle"></i> Creative Layouts</li>
                            <li><i className="fas fa-times-circle"></i> Free Support</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="pricing-card featured">
                    <div className="pricing-card-header">
                        <h3 className="pricing-card-title">Premium</h3>
                        <p className="pricing-card-subtitle">Best suited for teams</p>
                        <div className="pricing-card-price">
                            <span className="currency">$</span>
                            <span className="price">100</span>
                            <span className="price-period">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-card-body">
                        <a href="/" className="pricing-card-action">Get Started</a>
                        <ul className="pricing-card-features">
                            <li><i className="fas fa-check-circle"></i> Responsive Live</li>
                            <li><i className="fas fa-check-circle"></i> Adaptive Bitrate</li>
                            <li><i className="fas fa-check-circle"></i> Analytics</li>
                            <li><i className="fas fa-check-circle"></i> Creative Layouts</li>
                            <li><i className="fas fa-times-circle"></i> Free Support</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="pricing-card">
                    <div className="pricing-card-header">
                        <h3 className="pricing-card-title">Professional</h3>
                        <p className="pricing-card-subtitle">For businesses</p>
                        <div className="pricing-card-price">
                            <span className="currency">$</span>
                            <span className="price">350</span>
                            <span className="price-period">/mo</span>
                        </div>
                    </div>
                    <div className="pricing-card-body">
                        <a href="/" className="pricing-card-action">Get Started</a>
                        <ul className="pricing-card-features">
                            <li><i className="fas fa-check-circle"></i> Responsive Live</li>
                            <li><i className="fas fa-check-circle"></i> Adaptive Bitrate</li>
                            <li><i className="fas fa-check-circle"></i> Analytics</li>
                            <li><i className="fas fa-check-circle"></i> Creative Layouts</li>
                            <li><i className="fas fa-check-circle"></i> Free Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
