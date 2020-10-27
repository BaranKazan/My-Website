import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div id="contact" className="section">
                <div className="section-wrapper block">
                    <div className="content-1300">
                        <div className="row">
                            <h2 className="entry-title section-title">Get in touch</h2>
                            <div className="one-half width-40">

                                <p className="section-info">
                                    Do not hesitate to contact me!
                                        </p>
                                <p>
                                    If there are any questions, such as if I have any experience with something I haven't mentioned or other questions, please make sure to contact me then.
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
        );
    }
}

export default Contact;