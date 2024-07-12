import React, { useState } from 'react';
import   emailjs  from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, contact, message });

    const serviceId = "service_sf8f4aa";
    const templateId = "template_trtd6wu";
    const publicKey = "jZFWOq8yf2Bj8Y_CL";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_contact: contact,
      to_name: "Zwolf Consultancy Services",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Enquiry sent successfully!", response);
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
        toast.success("Enquiry sent successfully! We will contact you soon.");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="container mt-5 contact-container " style={{ maxWidth: '450px' }}>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="contact-section mt-5 p-3 rounded shadow">
            <h2 className="text-center mb-4"><strong>Contact <span className='main-hover'>Us</span></strong></h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="inputName" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputEmail" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputContact" className="form-label">Contact:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputContact"
                  value={contact}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="inputMessage" className="form-label">Message:</label>
                <textarea
                  className="form-control"
                  id="inputMessage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  required
                />
              </div>
              <button type="submit" className="btn main-hover-2 w-100">Submit</button>
            </form>
          <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs