import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    return (
        <section className="team-section" id="ourteam">
            <div className="team-container">
                <div className="team-header">
                    <h2 className="team-title">Our Team</h2>
                    <p className="team-subtitle">Meet our team of expert business consultants</p>
                </div>
                <div className="team-members">
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/2e6a159a-team-image-1@2x.jpg" alt="Rose Merry" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-member-name">Rose Merry</h3>
                                <h4 className="team-member-position">Research Consultant</h4>
                                <p className="team-member-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/1a03b02c-team-image-2@2x.jpg" alt="Sarah Tylor" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-member-name">Sarah Tylor</h3>
                                <h4 className="team-member-position">Research Consultant</h4>
                                <p className="team-member-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/5c84c04b-team-image-3@2x.jpg" alt="Jonathon Smith" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-member-name">Jonathon Smith</h3>
                                <h4 className="team-member-position">Research Consultant</h4>
                                <p className="team-member-text">Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-column">
                        <div className="team-card">
                            <div className="team-image">
                                <img src="https://life.lp.elementor.design-lt.com/wp-content/uploads/2021/07/61b90c56-team-image-4@2x.jpg" alt="Aikin Ward" />
                            </div>
                            <div className="team-content">
                                <h3 className="team-member-name">Aikin Ward</h3>
                                <h4 className="team-member-position">Research Consultant</h4>
                                <p className="team-member-text">Mauris gravida massa at dui vehicula, ac pharetra nunc volutpat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;