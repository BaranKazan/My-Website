import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from "./Components/Index"

class PreLoad extends Component {

    render() {
        return (

            <div className="doc-loader">
                <img src="images/preloader.gif" alt="Loading"></img>
            </div>

        );
    }
}

export default PreLoad;
