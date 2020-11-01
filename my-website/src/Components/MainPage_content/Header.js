import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="home" className="section full-width-section">
                <div className="section-wrapper block">
                    <div className="home-left-part">
                        <p className="site-des">What's up. My name is</p>
                        <h1 className="entry-title">Baran Kazan</h1>
                        <p className="site-info">
                            I'm an educated computer engineer and, my ambition is to be the best full-stack developer as well as I can .
                                </p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/baran-kazan-13927317a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            <a href="https://www.instagram.com/barankazan/?hl=en" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        </div>

                    </div>
                    <div className="home-right-part">
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
