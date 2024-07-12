import React from 'react';
import '../pagesCss/MeetOurTeam.css'

const MeetClient = () => {
  return (
    <>
      <section id="our-client-section" className="pt-5 bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col text-center text-dark">
              <h2 className="fw-bold fs-1">
                Meet Our  <span className="text-primary main-hover">Experience Team</span>
              </h2>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 animate-card">
                <img src="images/first.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body">
                  <h5 className="card-title text-center">Mohit Rathor</h5>
                  <p className="card-text text-center">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 animate-card">
                <img src="images/first.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body">
                  <h5 className="card-title text-center">Krishna Singh</h5>
                  <p className="card-text text-center">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-center text-dark">
              <h3 className="fw-bold">Let's Talk About Business</h3>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetClient;
