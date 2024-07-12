import React from 'react';
import '../pagesCss/AboutFounder.css'

const AboutFounder = () => {
  return (    <>
      <section id="advertisers" className="advertisers-service-sec pt-5 bg-light mb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col text-center text-dark">
              <h2 className="fw-bold fs-1">
                About
                <span className="text-primary main-hover"> Founder</span>
              </h2>
            </div>
          </div>        
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center text-dark" style={{ maxWidth: '800px', margin: 'auto' }}>
              <div className="aboutPage p-4" style={{ maxHeight: '60vh', overflowY: 'auto', fontSize: '1.25rem' }}>
                <p className="text text-dark">
                Praveen Kumar is an Indian entrepreneur. He co-founded the social media service Zwölf and Consultancy company  Zwolf Consultancy Services, and its parent company ZWOLF OPC PVT LTD, of which he is chairman, chief executive officer and controlling shareholder.
                Praveen Kumar was born in Vrindavan, Uttar Pradesh, India. He left his school to concentrate to build Zwölf.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-dark ">
            <img src="/images/praveen.jpg" alt="Zwolf Consultancy Service Logo" className="new-images mt-2 rounded-circle " />
              <div className='Text-Praveen'>Praveen Kumar</div>
              <div className='Text-ceo'>CEO and Founder</div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default AboutFounder;
