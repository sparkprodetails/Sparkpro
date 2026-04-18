import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const ContactIcons = () => {
  const phoneNumber = "923105555027";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="contact-icons animate-slide-up">
      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="contact-btn whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Icon */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        className="contact-btn phone"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
};

export default ContactIcons;
