import React, { Component } from 'react';
import PortfolioGrid from '../Portfolio/PortfolioGrid'
import TransferLearning from '../Portfolio/TransferLearning'
//import Sportstats from '../Portfolio/Sportstats'

class Portfolio extends Component {

    constructor() {
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
                        {this.state.curentWindow === "portfoliogrid" &&
                            <h2 className="entry-title section-title">Portfolio</h2>
                        }
                        <div id="portfolio-wrapper" className="relative">
                            {this.changeCurrentWindow()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeCurrentWindow = () => {
        
        switch (this.state.curentWindow) {
            case 'transferLearning':
                return <TransferLearning changeWindowFunction={this.changeWindow} />
                    {/*
            case 'sportstats':
                return <Sportstats changeWindowFunction={this.changeWindow}/>
                */}
            default:
                return <PortfolioGrid changeWindowFunction={this.changeWindow} />
        }
    }

    changeWindow = (window) => {
        this.setState({ curentWindow: window })
    }
}




export default Portfolio;
