import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../pagesCss/Howwework.css'

const Howwework = () => {
    const data = [{
        icon: '/images/analytics.png', step: "1", heading: "Analysis of Requirements"
    },{
        icon: '/images/ux-design.png', step: "2", heading: "UX/UI Designing"
    },{
        icon: '/images/development.png', step: "3", heading: "Development"
    },{
        icon: '/images/testing.png', step: "4", heading: "Testing"
    },{
        icon: '/images/deployment.png', step: "5", heading: "Deployment"
    }];

    return (
        <section id="advertisers" className="section-how-we-work pt-5 pb-5 mt-5 mb-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center col-12">
                        <h2 className="fw-bold fs-1">
                            How
                            <span className="b-class-secondary main-hover"> We Work </span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <Carousel interval={3000} pause={false} indicators={false} controls={false}>
                            {data.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex justify-content-around position-relative">
                                        {index > 0 && (
                                            <div className="arrow-animation"></div>
                                        )}
                                        <div className="cardss rounded shadow-sm border-0 flex-fill animated-border" style={{ maxWidth: '300px' }}>
                                            <div className="card-body p-4 text-center animate-card">
                                                <h3>{`Step ${item.step}`}</h3>
                                                <img src={item.icon} alt="" className="img-fluid d-block mx-auto mb-3 small-img"/>
                                                <h5>{item.heading}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Howwework;
