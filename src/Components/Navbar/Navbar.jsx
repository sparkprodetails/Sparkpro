import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/icon";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setNavOpen((prev) => !prev);
    if (isDropdownOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 991) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const closeMenus = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setNavOpen(false);
      setDropdownOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
    setDropdownOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeMenus);
    return () => document.removeEventListener("mousedown", closeMenus);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
      <div className="container">
        <Link className="logo" to="/" onClick={handleNavLinkClick}>
          Sparkpro<span className="accent-blue">Details</span>
        </Link>

        <div className="mobile-toggle" onClick={toggleNavbar}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
          
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => window.innerWidth > 900 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setDropdownOpen(false)}
          >
            <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Services <i className="fas fa-chevron-down"></i>
            </button>
            <div className={`drop-menu glass ${isDropdownOpen ? "show" : ""}`}>
              <Link className="drop-item" to="/services/ppf" onClick={handleNavLinkClick}>PPF</Link>
              <Link className="drop-item" to="/services/ceramic-coating" onClick={handleNavLinkClick}>Ceramic Coating</Link>
              <Link className="drop-item" to="/services/detailing" onClick={handleNavLinkClick}>360 Detailing</Link>
              <Link className="drop-item" to="/services/glass-coating" onClick={handleNavLinkClick}>Glass Coating</Link>
              <Link className="drop-item" to="/services/chromic-rims" onClick={handleNavLinkClick}>Dechroming</Link>
            </div>
          </div>

          <Link className="btn-nav-appointment" to="/appointment" onClick={handleNavLinkClick}>
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
