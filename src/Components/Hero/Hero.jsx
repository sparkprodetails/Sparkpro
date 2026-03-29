import React, { useEffect, useState } from "react";
import "./Hero.css";
import { assets } from "../../assets/icon";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollReveal from "../ScrollReveal";

const Hero = () => {
  const [reviewText, setReviewText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredService, setHoveredService] = useState("ppf");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() !== "") {
      setIsSubmitted(true);
      setReviewText("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const services = [
    { id: 'ppf', title: 'Paint Protection Film', desc: 'Self-healing technology from the UK & US. Invisible armor for your investment.', img: assets.P11, link: '/services/ppf' },
    { id: 'ceramic', title: 'Ceramic Coating', desc: 'Molecular level bonding that delivers extreme hydrophobicity and glass-like gloss.', img: assets.C1, link: '/services/ceramic-coating' },
    { id: 'detailing', title: '360° Detailing', desc: 'Complete restoration from engine bay to interior. Perfection in every corner.', img: assets.d1, link: '/services/detailing' },
    { id: 'glass', title: 'Glass Coating', desc: 'Advanced water beading and UV shielding for crystal clear, durable windows.', img: assets.G1, link: '/services/glass-coating' },
    { id: 'dechrome', title: 'Dechrome Solutions', desc: 'Modern blackout aesthetics with premium vinyl for a sleek, stealthy vibe.', img: assets.t1, link: '/services/dechrome' }
  ];

  return (
    <>
      <Helmet>
        <title>SparkproDetails | Premium Automotive Protection Studio</title>
      </Helmet>
      
      <div className="hero">
        <div className="hero-bg">
          <div className="hero-video-wrapper">
             <video autoPlay loop muted playsInline className="hero-video">
                <source src={assets.videoFile} type="video/mp4" />
             </video>
             <div className="hero-overlay"></div>
             <div className="hero-vignette"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="hero-text-wrapper">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                Islamabad's Elite Auto Spa
              </div>
              <h1 className="hero-heading">
                <span className="line-1">Beyond</span>
                <span className="line-2">Perfection</span>
              </h1>
              <p className="hero-description">
                Elevating automotive aesthetics through precision engineering, bespoke detailing, and world-class ceramic protection.
              </p>
              
              <div className="hero-actions">
                <Link to="/appointment" className="btn-primary btn-glow">
                  Book Your Experience
                </Link>
                <div className="hero-metrics">
                   <div className="metric"><strong>5.0</strong> <i className="fas fa-star" style={{color: '#0070f3'}}></i></div>
                   <div className="metric-divider"></div>
                   <div className="metric">1K+ Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>

      <div className="trust-marquee">
        <div className="marquee-content">
          <span>CERTIFIED INSTALLERS FOR</span>
          <span className="dot">•</span>
          <span>XPEL ULTIMATE PLUS</span>
          <span className="dot">•</span>
          <span>SUNTEK FILMS</span>
          <span className="dot">•</span>
          <span>GTECHNIQ CRYSTAL SERUM</span>
          <span className="dot">•</span>
          <span>3M WRAPS</span>
          <span className="dot">•</span>
          <span>AUTO FINESSE</span>
          <span className="dot">•</span>
          <span>CERTIFIED INSTALLERS FOR</span>
          <span className="dot">•</span>
          <span>XPEL ULTIMATE PLUS</span>
          <span className="dot">•</span>
          <span>SUNTEK FILMS</span>
          <span className="dot">•</span>
          <span>GTECHNIQ CRYSTAL SERUM</span>
          <span className="dot">•</span>
          <span>3M WRAPS</span>
          <span className="dot">•</span>
          <span>AUTO FINESSE</span>
        </div>
      </div>
      
      <section id="services" className="elite-showcase-section">
        <div className="container showcase-container">
          <ScrollReveal delay={0.1}>
            <div className="showcase-header">
              <h2 className="section-title">Our Portfolio of Care</h2>
              <p className="section-subtitle">Select an expertise to explore our uncompromising quality and craftsmanship.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="services-expanding-grid">
              {services.map((srv) => (
                <Link 
                  to={srv.link}
                  key={srv.id}
                  className={`service-expand-card ${hoveredService === srv.id ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredService(srv.id)}
                  onClick={() => setHoveredService(srv.id)}
                >
                  <div className="card-bg-wrapper">
                    <img src={srv.img} alt={srv.title} className="card-bg-img" />
                    <div className="card-gradient-overlay"></div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-icon-indicator">
                      <div className="pulse-ring"></div>
                    </div>
                    <div className="card-text-content">
                      <h3 className="card-title">{srv.title}</h3>
                      <div className="card-details">
                        <p>{srv.desc}</p>
                        <span className="explore-btn">Explore <i className="fas fa-arrow-right"></i></span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="testimonials-wrap-section">
        <div className="container">
          <ScrollReveal delay={0.2}>
            <div className="testimonials-section">
              <h2 className="section-title">Client Experiences</h2>
              <p className="section-subtitle">Read what our clients have to say about our premium services down below.</p>
              
              <div className="testimonials-grid">
                
                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">ZA</div>
                    <div className="avatar-meta">
                      <h4>Zain Ahmed</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>Absolutely stunning work on my Civic RS. The PPF installation is truly invisible, and the gloss is insane. Best auto spa in Islamabad.</p>
                  <span className="service-tag">Paint Protection Film</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">UK</div>
                    <div className="avatar-meta">
                      <h4>Usman Khan</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>Got 360 detailing and ceramic coating for my Prado. The team is hyper professional. It looks better than when it left the showroom.</p>
                  <span className="service-tag">Ceramic & Detailing</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">FM</div>
                    <div className="avatar-meta">
                      <h4>Fahad Mustafa</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>The dechrome package totally transformed my Revo. Flawless finish on the grille and window trims. Highly recommended for premium wraps.</p>
                  <span className="service-tag">Dechrome Solutions</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">AR</div>
                    <div className="avatar-meta">
                      <h4>Ali Raza</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>Got my windows coated and the visibility during heavy rain is unbelievable. Great team and very professional setup. Will be back for sure.</p>
                  <span className="service-tag">Glass Coating</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">HM</div>
                    <div className="avatar-meta">
                      <h4>Hassan Mahmood</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>They brought my old interior completely back to life. It smells and looks like a brand new car. Definitely coming back for maintenance washes.</p>
                  <span className="service-tag">360° Detailing</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">BT</div>
                    <div className="avatar-meta">
                      <h4>Bilal Tariq</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>Impeccable attention to detail. The PPF on my front bumper is completely invisible. Highly recommend these guys for paint protection in the area.</p>
                  <span className="service-tag">Paint Protection Film</span>
                </div>

                <div className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="avatar">OF</div>
                    <div className="avatar-meta">
                      <h4>Omer Farooq</h4>
                      <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p>The gloss finish on my car is insane after the ceramic coating. Dust doesn't even stick to it anymore. Best investment for my daily driver.</p>
                  <span className="service-tag">Ceramic Coating</span>
                </div>

              </div>

              {/* Interactive Feedback Form */}
              <div className="testimonial-form-wrapper">
                <div className="testimonial-form-card glass-card">
                  <div className="form-header">
                    <h3>Share Your Experience</h3>
                    <p>We value the feedback from our growing family of automotive enthusiasts. Leave a review below.</p>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="success-message">
                      <i className="fas fa-check-circle"></i>
                      <h4>Thank you for your feedback!</h4>
                      <p>Your review has been submitted and is currently being verified by our team.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="review-form">
                      <div className="form-group">
                        <textarea 
                          placeholder="Write your comment here..." 
                          rows="4"
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn-primary btn-glow submit-btn">Post Comment</button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Hero;
