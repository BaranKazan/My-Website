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
                            A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.
                                </p>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/baran-kazan-13927317a/">LINKEDIN</a>
                            <a href="https://www.instagram.com/barankazan/?hl=en">INSTAGRAM</a>
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
