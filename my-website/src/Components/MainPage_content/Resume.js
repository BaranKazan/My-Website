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
                                            <b>2017 - 2020: Bachelor degree as a Computer Engineer at the University of Gävle</b>
                                            <br/>
                                            The University I attempted to educate us with a more complicated problem that developers usually face to solve. We did not only learn how to break complicated barriers but also different approaches to developing projects and working together with other developers by using agile software development. The University had academic courses that were required to be an official engineer, but at the same time, we had courses that taught us some theories and tools to use that were demanded in working life. We learned several languages and tools such as Java, Git, SQL, and JavaScript. I learned several more languages in my free time, such as Python and C#. 
                                                </div>
                                        <div className="timeline-event-date">2017</div>
                                    </li>

                                    <li className="timeline-event">
                                        <span className="timeline-circle"></span>
                                        <div className="timeline-event-content">
                                            <b>2014 - 2017: Information and Media Technology program at Polhemsskolan in Gävle</b>
                                            <br/>
                                            In high school, we learned what it means to be a programmer by encountering several obstacles that needed solutions. We learned the fundamental principle of language and have learned several languages such as Java, HTML, CSS, JavaScript, and PHP.
                                                </div>
                                        <div className="timeline-event-date">2014</div>
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
