import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesProvide from '../data/data';
import '../pagesCss/ServiceDetails.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesProvide.find(service => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  // Function to determine background color based on service ID
  const getTitleBackgroundColor = (id) => {
    return id % 2 === 0 ? 'green' : '#6a504f'; // Example: alternate colors
  };

  const getDetailsBackgroundColor = (id) => {
    return id % 2 === 0 ? 'red' : 'blue'; // Example: alternate colors
  };

  return (
    <div className="service-detail">
      <div className="container mt-5 pt-5">
        <h2 className="text-center slide-in-left title" style={{ backgroundColor: getTitleBackgroundColor(service.id) }}>
          <strong>{service.title}</strong>
        </h2>
        <div className="row">
          <div className="col-md-6">
            <img src={service.imgSrc} alt={service.title} className="img-fluid slide-in-right" />
          </div>
          <div className="col-md-6 ">
            <p className="details-background" style={{ backgroundColor: getDetailsBackgroundColor(service.id) }}>
              {service.details}
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
