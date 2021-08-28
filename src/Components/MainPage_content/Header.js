import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="home" className="section full-width-section">
                <div className="section-wrapper block">
                    <div className="home-left-part">
                        <p className="site-des">Hello. My name is</p>
                        <h1 className="entry-title">Baran Kazan</h1>
                        <p className="site-info">
                            I'm a graduated Computer Engineer and working as a Software Engineer at Sogeti.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/baran-kazan-13927317a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                            <a href="https://www.instagram.com/barankazan/?hl=en" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                            <br />
                            <a href="https://github.com/BaranKazan" target="_blank" rel="noopener noreferrer">GITHUB</a>
                            <a href="https://gitlab.com/BaranKazan" target="_blank" rel="noopener noreferrer">GITLAB</a>
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
