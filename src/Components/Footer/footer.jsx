import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <ScrollReveal delay={0.1}>
          <div className="footer-section brand">
            <h2 className="text-gradient">SparkproDetails</h2>
            <p>Elevating automotive excellence in Islamabad. Premium detailing, ceramic coating, and paint protection services tailored for the most discerning enthusiasts.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="footer-section links">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointment">Booking</Link></li>
              <li><Link to="/services/ppf">PPF</Link></li>
              <li><Link to="/services/ceramic-coating">Ceramic Coating</Link></li>
              <li><Link to="/services/detailing">360 Detailing</Link></li>
              <li><Link to="/services/chromic-rims">Dechroming</Link></li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="footer-section contact">
            <h4>Get in Touch</h4>
            <p>Islamabad, Rwalpindi</p>
            <p><a href="tel:+923105555027">+92 (310) 5555 027</a></p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="footer-section social">
            <h4>Experience More</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/sparkpro.details/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556978987668" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/@Sparkprodetails/shorts" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>

      <ScrollReveal delay={0.5}>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SparkproDetails. All rights reserved. Premium Detailing in Islamabad.</p>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
