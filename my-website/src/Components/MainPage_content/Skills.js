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
                                    <div className="skill-circle-wrapper relative" data-value="0.92" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">Java</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.83" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">Python</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.81" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">C#</p>
                                </div>

                                <div className="skill-circle">
                                    <div className="skill-circle-wrapper relative" data-value="0.76" data-color="#d43641" data-empty-color="#522629">
                                        <span className="skill-circle-num"></span>
                                    </div>
                                    <p className="skill-circle-text">JavaScript</p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="one-half">
                                <div className="skills-holder">
                                    <div className="skill-holder">
                                        <div className="skill-text">
                                            <div className="skill">
                                                <div className="skill-fill" data-fill="93%"></div>
                                            </div>
                                            <span>Agile Software Development</span>
                                        </div>
                                        <div className="skill-percent">93%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="one-half last">
                                <div className="skills-holder sec-skills-holder">
                                    <div className="skill-holder">
                                        <div className="skill-text">
                                            <div className="skill">
                                                <div className="skill-fill" data-fill="79%"></div>
                                            </div>
                                            <span>Machine Learning</span>
                                        </div>
                                        <div className="skill-percent">79%</div>
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
