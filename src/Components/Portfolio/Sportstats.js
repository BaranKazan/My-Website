import React, { Component } from 'react';

class Sportstats extends Component {

    render() {
        return (
            <div className="portfolio-item-wrapper center-relative">
                <div className="portfolio-content">
                    <div onClick={() => this.props.changeWindowFunction('portfoliogrid')} className="close-icon" />
                    <div className="row">
                        <div className="one-half width-40">
                            <h2 className="entry-title section-title">RESTful API w/ Website</h2>

                            <p className="section-info">
                                Sports Statistics API
                                            </p>

                            <p>
                                The sports statistics API was developed and deployed as my first RESTful API project. The API communicates with the database that each table has connections with the other table, such as all players are connected to a team. The API has functionalities such as showing the history and upcoming matches of a team, listing all the games between two inputted dates, showing all the players in a team, etc. Creating unit and integration testing was also a considerable part of the API to ensure that every service layer functionalities works as intended. There is also a website that was developed for the API after when the API has been deployed.

                                            </p>
                                            <p>
                                <b>Programing languages:</b> Java, JavaScript, MySQL
                                            </p>
                            <p>
                                <b>Frameworks and Formats:</b> React, Mockito, JSON
                                            </p>
                                            <p>
                                <b>Design patterns:</b> DDD, TDD, Command, DAO, Singleton
                                            </p>
                                            <p>
                                <b>Tests:</b> Junit and Integration
                                            </p>

                        </div>

                        <div className="one-half width-55 last">
                            <div class="slider">
                                <div class="slides">
                                    <input type="radio" name="radio-btn" id="radio1" />
                                    <input type="radio" name="radio-btn" id="radio2" />
                                    <input type="radio" name="radio-btn" id="radio3" />
                                    <input type="radio" name="radio-btn" id="radio4" />
                                    <input type="radio" name="radio-btn" id="radio5" />
                                    <input type="radio" name="radio-btn" id="radio6" />

                                    <div class="slide first">
                                        <img src="images/portfolio/sportstats/image1.png" alt="" />
                                    </div>
                                    <div class="slide">
                                        <img src="images/portfolio/sportstats/image2.png" alt="" />
                                    </div>
                                    <div class="slide">
                                        <img src="images/portfolio/sportstats/image3.png" alt="" />
                                    </div>
                                    <div class="slide">
                                        <img src="images/portfolio/sportstats/image4.png" alt="" />
                                    </div>
                                    <div class="slide">
                                        <img src="images/portfolio/sportstats/image5.png" alt="" />
                                    </div>
                                    <div class="slide">
                                        <img src="images/portfolio/sportstats/image6.png" alt="" />
                                    </div>
                                </div>

                                <div class="navigation">
                                    <label for="radio1" class="btn"></label>
                                    <label for="radio2" class="btn"></label>
                                    <label for="radio3" class="btn"></label>
                                    <label for="radio4" class="btn"></label>
                                    <label for="radio5" class="btn"></label>
                                    <label for="radio6" class="btn"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="portfolio-item-wrapper center-relative">
                    <div className="portfolio-content">
                        <div onClick={() => this.props.changeWindowFunction('portfoliogrid')} className="close-icon" />
                        <div className="row">
                            <div className="one-half width-55">
                                <div className="image-slider-wrapper relative">
                                    <div className="owl-carousel owl-theme image-slider slider" data-speed="2000" data-auto="false" data-hover="true">
                                        <div className="owl-item">
                                            <img src="images/item_01.jpg" alt="" />
                                        </div>
                                        <div className="owl-item">
                                            <img src="images/item_02.jpg" alt="" />
                                        </div>
                                        <div className="owl-item">
                                            <img src="images/item_03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="one-half width-40 last">

                                <h2 className="entry-title section-title">Transfer Learning</h2>

                                <p className="section-info">
                                    Additional Classes Effect on Model Accuracy using Transfer Learning
                                            </p>

                                <p>
                                    The research was about using transfer learning to determine how much accuracy changes when adding a new imagery class into an existing model. Transfer learning is a machine learning method that will focus on storing knowledge gained while solving one problem and then using it to solve another related problem. For instance, the knowledge gained while recognizing a bicycle could also be used when trying to identify a motorbike.
                                            </p>
                                <p>
                                    There are different amount of models that could be used to transfer weights and bias of the neural networks. The ImageNet model created by Google has 1000 different classes, and 1.4 million images were used to train the model. The goal was to use a pre-trained model to train a new model and then measure the accuracy of the model, and precision of each class in the model.
                                            </p>
                                <p>
                                    The precision or accuracy drop happens when there are features that belong in the class but have different varieties. For instance, a German Shepherd looks utterly different than Maltese, but both of them are dogs. Several other things also cause accuracy and precision drop that this research goes through.
                                            </p>

                                <p>
                                    <a className="button" href="https://www.diva-portal.org/smash/record.jsf?dswid=-8740&pid=diva2%3A1468015&c=1&searchType=SIMPLE&language=en&query=Additional+Classes+Effect+on+Model+Accuracy+using+Transfer+Learning&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all" target="_blank" rel="noopener noreferrer">Check Project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Sportstats;
