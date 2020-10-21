import React, { Component } from 'react';
import Header from "./MainPage_content/Header";
import Skill from "./MainPage_content/Skill";

class MainPage extends Component {

    render() {
        return (

            <div className="content-right">
                <div className="content-right-wrapper">
                    <Header/>
                    <Skill/>
                </div>
            </div>

        );
    }
}

export default MainPage;
