import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {

    constructor() {
        super();

        this.state = {
            eventTarget: null,

            validName: null,
            validEmail: null,
            validMessage: null,

            successMessage: false,
            failedMessage: false
        }
    }

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
                                <div className="contact-form" onSubmit={this.buttonClicked}>
                                    <form>
                                        <p>
                                            <input id="name" type="text" name="name" placeholder="Name*" onChange={this.changeName} />
                                        </p>
                                        <p>
                                            <input id="contact-email" type="email" name="email" placeholder="Email*" onChange={this.changeEmail} />
                                        </p>
                                        <p>
                                            <input id="subject" type="text" name="subject" placeholder="Subject" />
                                        </p>
                                        <p>
                                            <textarea id="message" name="message" placeholder="Message*" onChange={this.changeMessage} />
                                        </p>
                                        <p className="contact-submit-holder">
                                            <input type="submit" value="SEND"/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    buttonClicked = (e) => {
        e.preventDefault()
        let promise = new Promise((resolve, rejected) => {
            let pass = true
            if (this.state.validName === null || this.state.validName === false) {
                pass = false
                this.setState({ validName: false })
                //document.getElementById("firstName").style.border = "2px groove red";
            }
            if (this.state.validEmail === null || this.state.validEmail === false) {
                pass = false
                this.setState({ validEmail: false })
                //document.getElementById("lastName").style.border = "2px groove red";
            }
            if (this.state.validMessage === null || this.state.validMessage === false) {
                pass = false
                this.setState({ validMessage: false })
                //document.getElementById("companyName").style.border = "2px groove red";
            }
            if (pass) {
                this.setState({ eventTarget: e.target })
                resolve('Passed')
            } else {
                rejected('Failed')
            }
        });

        promise.then((message) => {
            console.log(message);
            this.sendEmail()
        }).catch((message) => {
            console.log(message);
        })
    }

    sendEmail = () => {
        emailjs.sendForm('service_bvf8f8s', 'template_ijwdd0s', this.state.eventTarget, 'user_tiZidkGI3U0Mv4FPxXAlO')
            .then((result) => {
                console.log(result.text);
                this.setState({ successMessage: true })
            }, (error) => {
                console.log(error.text);
                this.setState({ failedMessage: true })
            });
    }

    changeName = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ validName: true })
            //document.getElementById("firstName").style.border = "2px groove green";
        } else {
            this.setState({ validName: false })
            //document.getElementById("firstName").style.border = "2px groove red";
        }
    }

    changeEmail = (e) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regex.test(e.target.value)) {
            this.setState({ validEmail: true });
            //document.getElementById("email").style.border = "2px groove green";
        } else {
            this.setState({ validEmail: false });
            //document.getElementById("email").style.border = "2px groove red";
        }
    }

    changeMessage = (e) => {
        if (!(e.target.value === "")) {
            this.setState({ validMessage: true })
            //document.getElementById("message").style.border = "2px groove green";
        } else {
            this.setState({ validMessage: false })
            //document.getElementById("message").style.border = "2px groove red";
        }
    }

}

export default Contact;