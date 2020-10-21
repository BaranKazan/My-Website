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
        );
    }
}

export default Contact;