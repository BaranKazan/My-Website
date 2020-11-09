import React, { Component } from 'react';
import PortfolioGrid from '../Portfolio/PortfolioGrid'

class Portfolio extends Component {

    render() {
        return (
            <div id="portfolio" className="section">
                <div className="section-wrapper block">
                    <div className="content-1300">
                        <h2 className="entry-title section-title">Portfolio</h2>

                        <div id="portfolio-wrapper" className="relative">
                            <PortfolioGrid />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
