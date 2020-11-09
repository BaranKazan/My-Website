import React, { Component } from 'react';

class PortfolioGrid extends Component {

    render() {
        return (
            <div>
                <div className="category-filter">
                    <div className="category-filter-icon"></div>
                </div>
                <div className="category-filter-list button-group filters-button-group">
                    <div className="button is-checked" data-filter="*">All</div>
                    <div className="button" data-filter=".text">Text</div>
                    <div className="button" data-filter=".video">Video</div>
                    <div className="button" data-filter=".image">Image</div>
                </div>

                <div className="portfolio-load-content-holder">
                </div>

                <div className="grid" id="portfolio-grid">
                    <div className="grid-sizer"></div>

                    <div id="p-item-1" className="grid-item element-item p-one-third text">
                        <a className="item-link" href="portfolio-1.html">
                            <img src="images/portfolio1.jpg" alt="" />
                            <div className="portfolio-text-holder">
                                <div className="portfolio-text-wrapper">
                                    <p className="portfolio-text">Home</p>
                                    <p className="portfolio-cat">Text</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div id="p-item-2" className="grid-item element-item p-one-third text">
                        <a className="item-link" href="portfolio-2.html">
                            <img src="images/portfolio2.jpg" alt="" />
                            <div className="portfolio-text-holder">
                                <div className="portfolio-text-wrapper">
                                    <p className="portfolio-text">Stairways</p>
                                    <p className="portfolio-cat">Text</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div id="p-item-3" className="grid-item element-item p-one-third text">
                        <a className="item-link" href="portfolio-3.html">
                            <img src="images/portfolio3.jpg" alt="" />
                            <div className="portfolio-text-holder">
                                <div className="portfolio-text-wrapper">
                                    <p className="portfolio-text">Sneakers</p>
                                    <p className="portfolio-cat">Text</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <div className="grid-item element-item p-one-third video">
                                    <a className="item-link" href="https://vimeo.com/199192931" data-rel="prettyPhoto[portfolio]">
                                        <img src="images/portfolio4.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <div className="portfolio-text-wrapper">
                                                <p className="portfolio-text">Design</p>
                                                <p className="portfolio-cat">Video</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p-one-third image">
                                    <a className="item-link" href="images/item_03.jpg" data-rel="prettyPhoto[portfolio]">
                                        <img src="images/portfolio5.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <div className="portfolio-text-wrapper">
                                                <p className="portfolio-text">Leaf</p>
                                                <p className="portfolio-cat">Image</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p-one-third image">
                                    <a className="item-link" href="images/item_02.jpg" data-rel="prettyPhoto[portfolio]">
                                        <img src="images/portfolio6.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <div className="portfolio-text-wrapper">
                                                <p className="portfolio-text">Bottle</p>
                                                <p className="portfolio-cat">Image</p>
                                            </div>
                                        </div>
                                    </a>
                                </div> */}

                </div>
            </div>
        );
    }
}

export default PortfolioGrid;
