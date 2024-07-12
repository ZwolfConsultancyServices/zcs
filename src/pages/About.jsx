import React from 'react';

const About = () => {
  return (
    <>
      <section id="advertisers" className="advertisers-service-sec mt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pt-5">
              <h2 className="fw-bold fs-1">
                About
                <span className="text-secondary main-hover"> Us </span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="aboutPage   p-5" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <p className= " text text-black text-start">
                  ZWOLF CONSULTANCY SERVICES is a leading consultancy company specializing in web development, app development, business consultation, digital marketing, DLT registration, and many more services.

                  Our team is very passionate and has deep knowledge about the services provided by us. Our team has a deep understanding of how to handle clients.

                  We truly believe that we are capable of handling our customers and the promises that we make. All things considered, our clients and ourselves benefit from our hard work and dedication. Our team creates amazing offers for our clients, and they trust us to handle their needs. We move closer to perfection and support that advancement with effort and passion. We help businesses with our deep knowledge and expertise. We build business strategies for our clients so that their profit increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
