import React, { Component } from 'react';

class Skills extends Component {

    render() {
        return (
            <div id="skills" className="section">
                <div className="section-wrapper block">
                    <div className="content-1300">
                        <div className="row m-bottom-60">
                            <h2 className="entry-title section-title">Skills</h2>

                            <div className="skill-circle-holder">
                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.82" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">Photoshop</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.6" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">Marketing</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.75" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">PhP</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.31" data-color="#d43641" data-empty-color="#522629">
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
        );
    }
}

export default Skills;
