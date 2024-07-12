import React, { useState } from "react";

import { FaCommentAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import "../componentsCss/FloatingBtn.css";

const Floatingbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <div id="floating-button" onClick={togglePopup}>
        <FaCommentAlt id="toggle-icon" className={isOpen ? "rotated" : ""} />
      </div>
      <div id="pop-up" className={isOpen ? "visible" : "hidden"}>
        <a
          href="tel:+917900671757"
          target="_blank"
          className="contact-icon"
          id="phone-icon"
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/917900671757"
          target="_blank"
          className="contact-icon"
          id="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:zwolfconsultancyservices@gmail.com"
          className="contact-icon"
          id="email-icon"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Floatingbtn;
