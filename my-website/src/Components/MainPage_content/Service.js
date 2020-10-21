import React, { Component } from 'react';

class Service extends Component {

    render() {
        return (
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
                                    <a className="button" href="https://www.youtube.com/watch?v=sOnqjkJTMaA">Download CV</a>
                                    <a href="#portfolio" className="button">Check My Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;
