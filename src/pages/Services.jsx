// src/components/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../pagesCss/Services.css'
const Services = () => {
    const serviceData = [
        { id: 1, icon: '/images/webDevloper.png', heading: "Web Development" },
        { id: 2, icon: '/images/webDevloper.png', heading: "App Development" },
        { id: 3, icon: '/images/digitalmarketing.png', heading: "Digital Marketing" },
        { id: 4, icon: '/images/designer.png', heading: "Graphic Designing" },
        { id: 5, icon: '/images/contentwriting.png', heading: "Content Writing" },
        { id: 6, icon: '/images/meeting.png', heading: "Business Consultation" },
        { id: 7, icon: '/images/leadgeneration.png', heading: "Lead Generation" },
        { id: 8, icon: '/images/legalworks.png', heading: "All Legal Works" },
        { id: 9, icon: '/images/domainhosting.png', heading: "Domain Hosting" }
    ];

    return (
        <section id="advertisers" className="advertisers-service-sec pt-5 mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="fw-bold fs-1">
                            Our
                            <span className="b-class-secondary main-hover"> Services </span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                {serviceData.map((service) => (
                        <div className="col" key={service.id}>
                            <Link className='text-decoration-none' to={`/services/${service.id}`}>
                                <div className="service-card rounded-bottom">
                                    <div className="icon-wrapper">
                                        <img src={service.icon} alt={service.heading} />
                                    </div>
                                    <h3 >{service.heading}</h3>
                                </div>
                            </Link>
                        </div>
                
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
