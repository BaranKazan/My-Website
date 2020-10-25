import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="portfolio" className="section">
                <div className="section-wrapper block">
                    <div className="content-1300">
                    <h2 className="entry-title section-title">Portfolio</h2>
                    <p className="site-des">Coming out soon ;)</p>

                        {/* <div id="portfolio-wrapper" className="relative">
                            <div className="category-filter">
                                <div className="category-filter-icon"></div>
                            </div>
                            <div className="category-filter-list button-group filters-button-group">
                                <div className="button is-checked" data-filter="*">All</div>
                                <div className="button" data-filter=".text">Text</div>
                                <div className="button" data-filter=".video">Video</div>
                                <div className="button" data-filter=".image">Image</div>
                            </div>
                            <div className="portfolio-load-content-holder"></div>
                            <div className="grid" id="portfolio-grid">
                                <div className="grid-sizer"></div>

                                <div id="p-item-1" className="grid-item element-item p-one-third text">
                                    <a className="item-link ajax-portfolio" href="portfolio-1.html" data-id="1">
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
                                    <a className="item-link ajax-portfolio" href="portfolio-2.html" data-id="2">
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
                                    <a className="item-link ajax-portfolio" href="portfolio-3.html" data-id="3">
                                        <img src="images/portfolio3.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <div className="portfolio-text-wrapper">
                                                <p className="portfolio-text">Sneakers</p>
                                                <p className="portfolio-cat">Text</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p-one-third video">
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
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
