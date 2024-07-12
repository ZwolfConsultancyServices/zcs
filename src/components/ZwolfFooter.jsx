import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import "../componentsCss/Footer.css";

const Zwolfooter = () => {
  return (
    <footer className="mt-4 footer-main bg-dark text-white">
      <ScrollToTop />
      <div className="container">
        <div className="row py- text-center">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle me-3"
                src="/images/logo.jpeg"
                alt="Zwolf Logo"
                style={{ width: "50px", height: "50px" }}
              />
              <h3 className="mb-0">Zwolf Consultancy Service</h3>
            </div>
            <p className="texxy">
              ZWOLF CONSULTANCY SERVICES is a leading consultancy company
              specializing in web development, app  development, business
              consultation, digital marketing, DLT registration, and many more services.
              Our team is very passionate and has deep knowledge about the
              services provided by us. We truly think that we are capable of
              handling our customers and the promises that we make. Our clients
              and ourselves benefit from our hard work and dedication.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-2">
            <h3>Contact Us</h3>
            <p>
              <a
                className="text-white text-decoration-none"
                href="tel:+919758242279"
              >
                📞 +91 9758242279
              </a>
              <br />
              <a
                className="text-white text-decoration-none"
                href="tel:+917900671757"
              >
                📞 +91 7900671757
              </a>
            </p>
            <p>
              📧{" "}
              <a
                className="text-white text-decoration-none"
                href="mailto:Zwolfconsaltancyservices@gmail.com"
              >
                Zwolfconsaltancyservices@gmail.com
              </a>
            </p>
            <p>📍 C-285 Pul Pehladpur, New Delhi 110044</p>
              <div className="social-icons d-flex justify-content-center">
                <a
                  className="p-2"
                  href="https://wa.me/917900671757"
                  rel="noopener"
                  target="_blank"
                >
                  <FaWhatsapp size={30} color="green" />
                </a>
                <a
                  className="p-2"
                  href="https://www.facebook.com/share/Jz8eL66guZLRVvUw/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebook size={30} color="#1877F2" />
                </a>
                <a
                  className="p-2"
                  href="https://www.instagram.com/zwolfconsultancyservices?igsh=d2pzOWJmeDBnbWZx"
                  target="_blank"
                  rel="noopener"
                >
                  <FaInstagram size={30} color="#833ab4" />
                </a>
                <a
                  className="p-2"
                  href="https://x.com/Zwolfconsu6617?t=7FMu89ki1YCAjGJpJZ3q-Q&s=09"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
              </div>
          </div>
          <div className="col-md-4 mb-4 mt-2 text-align-end">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li className="fff">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="fff">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="fff">
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="fff">
                <Link
                  to="/terms-and-conditions"
                  className="text-white text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="fff">
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary py-2">
        <p className="text-center mb-0">
          &copy; 2024 Zwolf Consultancy Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Zwolfooter;
