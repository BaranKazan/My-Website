import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <section id="navbar">
                <div className="content-left">
                    <div className="content-left-wrapper">
                        <header>
                            <div className="toggle-holder">
                                <div id="toggle">
                                    <div className="menu-line"></div>
                                </div>
                            </div>

                            <div className="top-pagination">
                                <div className="current-num">
                                    <span>01</span>
                                </div>
                                <div className="pagination-div"></div>
                                <div className="total-pages-num"></div>
                            </div>

                            <div className="menu-holder">
                                <div className="menu-wrapper relative">
                                    <nav id="header-main-menu">
                                        <ul className="main-menu sm sm-clean">
                                            <li><a href="#home">Home</a></li>
                                            <li><a href="#service">Service</a></li>
                                            <li><a href="#portfolio">Portfolio</a></li>
                                            <li><a href="#resume">Resume</a></li>
                                            <li><a href="#skills">Skills</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="my-info-wrapper">
                                <div className="my-info">
                                    <p className="my-info-title">NAME</p>
                                    <p className="my-info-content">Baran Kazan</p>
                                </div>

                                <div className="my-info">
                                    <p className="my-info-title">ROLE</p>
                                    <p className="my-info-content">Software Developer</p>
                                </div>

                                <div className="my-info">
                                    <p className="my-info-title">EMAIL</p>
                                    <p className="my-info-content">Baran.Kazan@hotmail.com</p>
                                </div>

                                <div className="my-info">
                                    <p className="my-info-title">PHONE</p>
                                    <p className="my-info-content">+46 76 328 03 03</p>
                                </div>

                                <img className="my-info-signature" src="images/signature.png" alt="" />
                            </div>

                            <div className="big-num">
                                <div className="current-big-num">01</div>
                                <div className="icon-scroll"></div>
                            </div>
                        </header>
                    </div>

                </div>
            </section>
        );
    }
}

export default NavBar;
