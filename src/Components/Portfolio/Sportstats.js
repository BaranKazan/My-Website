import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

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
                            The sports statistics API was developed and deployed as my biggest RESTful API project. The API communicates with the database that each table has connections with the other table, such as all players are connected to a team. The API has functionalities such as showing the history and upcoming matches of a team, listing all the games between two inputted dates, showing all the players in a team, etc. Creating unit and integration testing was also a considerable part of the API to ensure that every service layer functionalities works as intended. There is also a website that was developed for the API after when the API has been deployed.

                                            </p>
                            <p>
                                <b>Programing languages:</b> Java, JavaScript, MySQL
                                            </p>
                            <p>
                                <b>Frameworks and Formats:</b> React, Mockito, Maven, JSON
                                            </p>
                            <p>
                                <b>Design patterns:</b> DDD, TDD, Command, DAO, Singleton
                                            </p>
                            <p>
                                <b>Tests:</b> Junit and Integration
                                            </p>
                                            <p>
                                <b>Agile Development Method:</b> SCRUM
                                            </p>
                                            <p>
                                <a className="button" href="https://github.com/BaranKazan/Sportstats" target="_blank" rel="noopener noreferrer">Check Project</a>
                            </p>

                        </div>

                        <div className="one-half width-55 last">
                            <Carousel autoPlay={true} showIndicators={false} useKeyboardArrows={true} dynamicHeight={true} infiniteLoop={true}>
                                <div>
                                    <img src="images/portfolio/sportstats/image1.png" alt=""/>
                                </div>
                                <div>
                                    <img src="images/portfolio/sportstats/image2.png" alt=""/>
                                </div>
                                <div>
                                    <img src="images/portfolio/sportstats/image3.png" alt=""/>
                                </div>
                                <div>
                                    <img src="images/portfolio/sportstats/image4.png" alt=""/>
                                </div>
                                <div>
                                    <img src="images/portfolio/sportstats/image5.png" alt=""/>
                                </div>
                                <div>
                                    <img src="images/portfolio/sportstats/image6.png" alt=""/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sportstats;
