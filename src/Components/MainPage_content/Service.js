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
                                        <img src="images/service/service1.png" alt="" />
                                        <h4 className="service-title">Front-end</h4>
                                        <div className="service-text">
                                            Capable of developing modern-looking graphical interfaces for the user to have a great user experience.
                                        </div>
                                    </div>

                                    <div className="service-holder m-right-0">
                                        <img src="images/service/service2.png" alt="" />
                                        <h4 className="service-title">Back-end</h4>
                                        <div className="service-text">
                                            Developing software using different design patterns and making sure everything works as intended with unit or integration tests.
                                        </div>
                                    </div>

                                    <div className="service-holder m-bottom-0">
                                        <img src="images/service/service3.png" alt="" />
                                        <h4 className="service-title">Clean code</h4>
                                        <div className="service-text">
                                            Writing non-repetitive and flexible code for understandable and changeable code for other developers to understand.
                                        </div>
                                    </div>

                                    <div className="service-holder m-right-0 m-bottom-0">
                                        <img src="images/service/service4.png" alt="" />
                                        <h4 className="service-title">Adaptive</h4>
                                        <div className="service-text">
                                            Responsive to the changes that are required from the customer and can comfortably fit in a team environment. Teamwork makes the dream work.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="one-half width-40 last">
                                <h2 className="entry-title section-title">Services</h2>
                                <p className="section-info">
                                    Short summary of myself.
                                </p>
                                <p>
                                    From the beginning, it was complicated to choose if I wanted to be a front- or back-end developer. Then I asked myself, why not both? I choose to be both a front-end and back-end developer because I like designing graphical interfaces since I started programming and languages such as Java, Python, and C# are currently my favorite languages that are mostly used for back-end services.
                                </p>
                                <p>
                                    I have done several front-end developments, such as creating a website for my customer and school projects. The tricky part was not developing the code but creating a good UX for the users without going overboard with the UI.
                                </p>
                                <p>
                                    I have done many back-end projects from managing the database to transfer learning, a machine learning technique used to have a more precise model. I have created several API, especially in the school projects, together with the class that can communicate with the database and the website that was created for the later projects.
                                </p>

                                <div className="button-group-wrapper">
                                    <a className="button" href="https://drive.google.com/file/d/1K5Bb7lMX_MMnw_EgWbGQGVcY1z7nO7or/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
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
