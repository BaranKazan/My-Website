import React, { Component } from 'react';
import PortfolioGrid from '../Portfolio/PortfolioGrid'
import HelloWorld from '../Portfolio/HelloWorld'

class Portfolio extends Component {

    constructor(){
        super()
        this.state = {
            curentWindow: "portfoliogrid"
        }
    }

    render() {
        return (
            <div id="portfolio" className="section">
                <div className="section-wrapper block">
                    <div className="content-1300">
                        <h2 className="entry-title section-title">Portfolio</h2>
                        <div id="portfolio-wrapper" className="relative">
                            {this.changeCurrentWindow()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeCurrentWindow = () => {
        switch(this.state.curentWindow){
            case 'portfoliogrid':
                return <PortfolioGrid changeWindowFunction={this.changeWindow}/>
            default: 
                return <HelloWorld/>
        }
    }

    changeWindow = (window) => {
        this.setState({changeCurrentWindow: window})
    }
}




export default Portfolio;
