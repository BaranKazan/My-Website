import React, { Component } from 'react';
import Header from "./MainPage_content/Header";
import Service from "./MainPage_content/Service";
import Portfolio from "./MainPage_content/Portfolio"
import Resume from "./MainPage_content/Resume"
import Skills from "./MainPage_content/Skills"
import Contact from "./MainPage_content/Contact"

class MainPage extends Component {

    render() {
        return (

            <div className="content-right">
                <div className="content-right-wrapper">
                    <Header/>
                    {/* <Service/> */}
                    <Portfolio/>
                    <Resume/>
                    <Skills/>
                    <Contact/>
                </div>
            </div>

        );
    }
}

export default MainPage;
