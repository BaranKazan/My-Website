import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <section id="index">

                <div className="doc-loader">
                    <img src="images/preloader.gif" alt="Loading"></img>
                </div>
                <div id="content" className="site-content">

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
                                        <p className="my-info-content">Amy Stone</p>
                                    </div>

                                    <div className="my-info">
                                        <p className="my-info-title">ROLE</p>
                                        <p className="my-info-content">Designer</p>
                                    </div>

                                    <div className="my-info">
                                        <p className="my-info-title">EMAIL</p>
                                        <p className="my-info-content">stone@example.com</p>
                                    </div>

                                    <div className="my-info">
                                        <p className="my-info-title">PHONE</p>
                                        <p className="my-info-content">(+987) 987 654 321</p>
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

                    <div className="content-right">
                        <div className="content-right-wrapper">

                            <div id="home" className="section full-width-section">
                                <div className="section-wrapper block">
                                    <div className="home-left-part">
                                        <p className="site-des">Hello. My name is</p>
                                        <h1 className="entry-title">Amy Stone</h1>
                                        <p className="site-info">
                                            A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.
                                </p>

                                        <div className="social-links">
                                            <a href="#">LINKEDIN</a>
                                            <a href="#">TWITTER</a>
                                            <a href="#">INSTAGRAM</a>
                                        </div>

                                    </div>
                                    <div className="home-right-part">
                                    </div>
                                </div>
                            </div>

                            <div id="service" className="section">
                                <div className="section-wrapper block">
                                    <div className="content-1300">
                                        <div className="row">
                                            <div className="one-half width-55">
                                                <div className="services-wrapper">
                                                    <div className="service-holder">
                                                        <img src="images/service1.png" alt="" />
                                                        <h4 className="service-title">Design</h4>
                                                        <div className="service-text">
                                                            A full stack allaround designer that may or may not include a guide for specific creative people
                                                </div>
                                                    </div>

                                                    <div className="service-holder m-right-0">
                                                        <img src="images/service2.png" alt="" />
                                                        <h4 className="service-title">Develop</h4>
                                                        <div className="service-text">
                                                            Tellus pharetra erat tristique erat donec dignissim etiam sed malesik enim sodales lorem ipsum
                                                </div>
                                                    </div>

                                                    <div className="service-holder m-bottom-0">
                                                        <img src="images/service3.png" alt="" />
                                                        <h4 className="service-title">Write</h4>
                                                        <div className="service-text">
                                                            Vestibulum consequat, dignissim tellus sollicitudin vulputate elit aliquet ullamcorper feugiat nisi
                                                </div>
                                                    </div>

                                                    <div className="service-holder m-right-0 m-bottom-0">
                                                        <img src="images/service4.png" alt="" />
                                                        <h4 className="service-title">Promote</h4>
                                                        <div className="service-text">
                                                            Quam facilisi nunc faucibus at porttitor vestibulum consequat dignissim tellus sollicitudin
                                                </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="one-half width-40 last">
                                                <h2 className="entry-title section-title">Services</h2>
                                                <p className="section-info">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.
                                        </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet.
                                        </p>
                                                <p>
                                                    Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus
                                        </p>

                                                <div className="button-group-wrapper">
                                                    <a className="button">Download CV</a>
                                                    <a href="#portfolio" className="button">Check My Portfolio</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="portfolio" className="section">
                                <div className="section-wrapper block">
                                    <div className="content-1300">
                                        <div id="portfolio-wrapper" className="relative">
                                            <div className="category-filter">
                                                <div className="category-filter-icon"></div>
                                            </div>
                                            <div className="category-filter-list button-group filters-button-group">
                                                <div className="button is-checked" data-filter="*">All</div>
                                                <div className="button" data-filter=".text">Text</div>
                                                <div className="button" data-filter=".video">Video</div>
                                                <div className="button" data-filter=".image">Image</div>
                                            </div>
                                            <div className="portfolio-load-content-holder"></div>
                                            <div className="grid" id="portfolio-grid">
                                                <div className="grid-sizer"></div>

                                                <div id="p-item-1" className="grid-item element-item p-one-third text">
                                                    <a className="item-link ajax-portfolio" href="portfolio-1.html" data-id="1">
                                                        <img src="images/portfolio1.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Home</p>
                                                                <p className="portfolio-cat">Text</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div id="p-item-2" className="grid-item element-item p-one-third text">
                                                    <a className="item-link ajax-portfolio" href="portfolio-2.html" data-id="2">
                                                        <img src="images/portfolio2.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Stairways</p>
                                                                <p className="portfolio-cat">Text</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div id="p-item-3" className="grid-item element-item p-one-third text">
                                                    <a className="item-link ajax-portfolio" href="portfolio-3.html" data-id="3">
                                                        <img src="images/portfolio3.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Sneakers</p>
                                                                <p className="portfolio-cat">Text</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid-item element-item p-one-third video">
                                                    <a className="item-link" href="https://vimeo.com/199192931" data-rel="prettyPhoto[portfolio]">
                                                        <img src="images/portfolio4.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Design</p>
                                                                <p className="portfolio-cat">Video</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid-item element-item p-one-third image">
                                                    <a className="item-link" href="images/item_03.jpg" data-rel="prettyPhoto[portfolio]">
                                                        <img src="images/portfolio5.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Leaf</p>
                                                                <p className="portfolio-cat">Image</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="grid-item element-item p-one-third image">
                                                    <a className="item-link" href="images/item_02.jpg" data-rel="prettyPhoto[portfolio]">
                                                        <img src="images/portfolio6.jpg" alt="" />
                                                        <div className="portfolio-text-holder">
                                                            <div className="portfolio-text-wrapper">
                                                                <p className="portfolio-text">Bottle</p>
                                                                <p className="portfolio-cat">Image</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="resume" className="section">
                                <div className="section-wrapper block">
                                    <div className="content-1300">
                                        <div className="row">
                                            <div className="one-half width-55">
                                                <h2 className="entry-title section-title">Experience</h2>

                                                <ul className="timeline-holder">
                                                    <li className="timeline-event">
                                                        <span className="timeline-circle"></span>
                                                        <div className="timeline-event-content">
                                                            <b>2015 - 2017</b> Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit lectus diam feugiat. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod.
                                                </div>
                                                        <div className="timeline-event-date">2015</div>
                                                    </li>

                                                    <li className="timeline-event">
                                                        <span className="timeline-circle"></span>
                                                        <div className="timeline-event-content">
                                                            <b>2017 - 2018</b> Rings of Uranus the only home we’ve ever known. Permanence of the stars Tunguska event drake equation encyclopaedia galactica great turbulent quisque risus arcu, ullamcorper id nunc quis, euismod tincidunt.
                                                </div>
                                                        <div className="timeline-event-date">2017</div>
                                                    </li>

                                                    <li className="timeline-event">
                                                        <span className="timeline-circle"></span>
                                                        <div className="timeline-event-content">
                                                            <b>2018 - 2020</b> Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sit diam purus leo in varius. Nunc amet tristique volutpat adipiscing vulputate phasellus eget enim.
                                                </div>
                                                        <div className="timeline-event-date">2018</div>
                                                    </li>

                                                    <li className="timeline-event">
                                                        <span className="timeline-circle"></span>
                                                        <div className="timeline-event-content">
                                                            <b>2020 - 2022</b> Tendrils of gossamer clouds, the ash of stellar alchemy tendrils of true gossamer clouds vangelis the sky calls to us rich in heavy atoms something. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit lectus diam feugiat.
                                                </div>
                                                        <div className="timeline-event-date">2020</div>
                                                    </li>

                                                    <li className="timeline-event">
                                                        <span className="timeline-circle"></span>
                                                        <div className="timeline-event-content">
                                                            <b>2022 - 2025</b> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In nec ipsum risus. Nulla vulputate pulvinar consectetur. Praesent semper sem eget nisl viverra, vitae vulputate metus placerat.
                                                </div>
                                                        <div className="timeline-event-date">2025</div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="one-half width-40 last">
                                                <h2 className="entry-title section-title">Cover letter</h2>
                                                <p className="section-info">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.
                                        </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet.  Mauris egestas nulla arcu, ut vestibulum diam vulputate non. Ut massa mauris, condimentum ut tincidunt eu, mattis euismod dolor.
                                        </p>
                                                <p>
                                                    Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus sed condimentum aliquet mi, nec lobortis neque gravida tempor. Praesent vel commodo dolor, at vehicula turpis.
                                        </p>

                                                <p>
                                                    Phasellus non dui sed eros scelerisque gravida eu lobortis magna. Sed vulputate, lacus blandit posuere aliquet, enim purus dignissim nunc, at efficitur nulla lacus id quam. Morbi feugiat neque a quam viverra auctor.
                                        </p>

                                                <img className="my-signature" src="images/signature2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="skills" className="section">
                                <div className="section-wrapper block">
                                    <div className="content-1300">
                                        <div className="row m-bottom-60">
                                            <h2 className="entry-title section-title">Skills</h2>

                                            <div className="skill-circle-holder">
                                                <div className="skill-circle">
                                                    <div className="skill-circle-wrapper relative" data-value="0.82" data-color="#f37b83" data-empty-color="#554247">
                                                        <span className="skill-circle-num"></span>
                                                    </div>
                                                    <p className="skill-circle-text">Photoshop</p>
                                                </div>

                                                <div className="skill-circle">
                                                    <div className="skill-circle-wrapper relative" data-value="0.6" data-color="#f37b83" data-empty-color="#554247">
                                                        <span className="skill-circle-num"></span>
                                                    </div>
                                                    <p className="skill-circle-text">Marketing</p>
                                                </div>

                                                <div className="skill-circle">
                                                    <div className="skill-circle-wrapper relative" data-value="0.75" data-color="#f37b83" data-empty-color="#554247">
                                                        <span className="skill-circle-num"></span>
                                                    </div>
                                                    <p className="skill-circle-text">PhP</p>
                                                </div>

                                                <div className="skill-circle">
                                                    <div className="skill-circle-wrapper relative" data-value="0.31" data-color="#f37b83" data-empty-color="#554247">
                                                        <span className="skill-circle-num"></span>
                                                    </div>
                                                    <p className="skill-circle-text">3D</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="one-half">
                                                <div className="skills-holder">
                                                    <div className="skill-holder">
                                                        <div className="skill-text">
                                                            <div className="skill">
                                                                <div className="skill-fill" data-fill="75%"></div>
                                                            </div>
                                                            <span>Creativity</span>
                                                        </div>
                                                        <div className="skill-percent">75%</div>
                                                    </div>

                                                    <div className="skill-holder">
                                                        <div className="skill-text">
                                                            <div className="skill">
                                                                <div className="skill-fill" data-fill="48%"></div>
                                                            </div>
                                                            <span>Cooking</span>
                                                        </div>
                                                        <div className="skill-percent">48%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="one-half last">
                                                <div className="skills-holder sec-skills-holder">
                                                    <div className="skill-holder">
                                                        <div className="skill-text">
                                                            <div className="skill">
                                                                <div className="skill-fill" data-fill="90%"></div>
                                                            </div>
                                                            <span>PhP</span>
                                                        </div>
                                                        <div className="skill-percent">90%</div>
                                                    </div>

                                                    <div className="skill-holder">
                                                        <div className="skill-text">
                                                            <div className="skill">
                                                                <div className="skill-fill" data-fill="62%"></div>
                                                            </div>
                                                            <span>Marketing</span>
                                                        </div>
                                                        <div className="skill-percent">62%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="contact" className="section">
                                <div className="section-wrapper block">
                                    <div className="content-1300">
                                        <div className="row">
                                            <h2 className="entry-title section-title">Get in touch</h2>
                                            <div className="one-half width-40">

                                                <p className="section-info">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur quisque nunc fames.
                                        </p>
                                                <p>
                                                    Magni dolores eos qui sed quia consequuntur ratione voluptatem sequi nesciunt permano Nence of the stars from which we spring muse about as a patch of light billions upon billions.
                                        </p>
                                                <p>
                                                    Energy hidden in matter a mote of lorem ipsum dust suspended in a sunbeam billions upon ratione voluptatem sequi nesciunt permano lorem ipsum.
                                        </p>
                                                <p>
                                                    <b>ADDRESS:</b> Some Street 987, USA <br />
                                                    <b>EMAIL:</b> company@youremail.com <br />
                                                    <b>WEBSITE:</b> www.yourwebsite.com <br />
                                                </p>
                                            </div>

                                            <div className="one-half width-55 last">
                                                <div className="contact-form">
                                                    <p>
                                                        <input id="name" type="text" name="your-name" placeholder="Name" />
                                                    </p>
                                                    <p>
                                                        <input id="contact-email" type="email" name="your-email" placeholder="Email" />
                                                    </p>
                                                    <p>
                                                        <input id="subject" type="text" name="your-subject" placeholder="Subject" />
                                                    </p>
                                                    <p>
                                                        <textarea id="message" name="your-message" placeholder="Message" />
                                                    </p>
                                                    <p className="contact-submit-holder">
                                                        <input type="submit" value="SEND" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Index;
