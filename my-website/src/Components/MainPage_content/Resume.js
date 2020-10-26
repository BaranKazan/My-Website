import React, { Component } from 'react';

class Resume extends Component {

    render() {
        return (
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
                                            <b>2014 - 2017</b> Hello
                                                </div>
                                        <div className="timeline-event-date">2014</div>
                                    </li>

                                    <li className="timeline-event">
                                        <span className="timeline-circle"></span>
                                        <div className="timeline-event-content">
                                            <b>2017 - 2020</b> Hello
                                                </div>
                                        <div className="timeline-event-date">2017</div>
                                    </li>
                                </ul>
                            </div>

                            <div className="one-half width-40 last">
                                <h2 className="entry-title section-title">Cover letter</h2>
                                <p className="section-info">
                                    Hello
                                        </p>
                                <p>
                                    Hello
                                        </p>
                                <p>
                                    Hello
                                        </p>
                                <p>
                                    Hello
                                        </p>

                                <img className="my-signature" src="images/signature.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
