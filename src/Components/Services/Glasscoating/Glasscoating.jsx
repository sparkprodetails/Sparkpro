import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { assets } from "@assets/icon";
import { Link } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";
import "../Services.css";

const Glasscoating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page-elite animate-fade">
      <Helmet>
        <title>Premium Glass Coating Services | SparkproDetails</title>
        <meta name="description" content="Crystal clear protection for your vehicle. Premium glass coating services in Islamabad for ultimate clarity and shield." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="service-hero-elite">
        <img src={assets.G1} alt="Glass Coating" className="service-hero-bg" loading="eager" decoding="async" />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <ScrollReveal delay={0.1}>
            <div className="service-hero-badge">Sparkpro Elite Shields</div>
            <h1 className="service-hero-title">Crystal Glass Coating</h1>
            <p className="service-hero-subtitle">The perfect shield for daily drivers. Our high-performance aerospace-grade glass coating technology forms a resilient, transparent barrier against the elements.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterclass Overview */}
      <section className="service-overview-elite container">
        <div className="overview-split">
          <div className="overview-left">
            <ScrollReveal delay={0.2}>
              <h2 className="overview-title">Maximum<span className="text-gradient d-block">Visibility.</span></h2>
            </ScrollReveal>
          </div>
          <div className="overview-right">
            <ScrollReveal delay={0.3}>
              <p className="overview-text">Driving in adverse weather conditions shouldn't be a hazard. Water spots, blinding rain, and severe glare significantly reduce your reaction time on the road.</p>
              <p className="overview-text">Our professional glass coating service chemically bonds with your vehicle's glass surfaces. By smoothing out the microscopic peaks and valleys of factory glass, we create an ultra-slick, hydrophobic layer. Rain beads and flies off, ice struggles to stick, and your safety is dramatically increased. <strong>See the elite difference.</strong></p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Benefits Bento Box */}
      <section className="service-benefits-elite">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="section-header-centered">
              <h2 className="section-title">Optical Perfection</h2>
              <p className="section-subtitle">Why our glass technology guarantees safety and style.</p>
            </div>
          </ScrollReveal>
          
          <div className="bento-glass-grid">
            <ScrollReveal delay={0.2} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-eye bento-icon"></i></div>
              <h3>Mirror-Like Clarity</h3>
              <p>Significantly improves nighttime visibility by reducing scattered light and blinding glare from oncoming headlights and street lamps.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-cloud-showers-heavy bento-icon"></i></div>
              <h3>Advanced Water Beading</h3>
              <p>At speeds over 40mph, rain water instantly beads and rolls off the windshield, often eliminating the need to use windshield wipers during heavy storms.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-snowflake bento-icon"></i></div>
              <h3>Frost & Ice Repellent</h3>
              <p>In winter months, the non-stick properties of the coating make scraping frost and ice effortlessly easy compared to untreated glass.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="bento-card-elite bento-span-2">
              <div className="bento-flex-horizontal">
                <div className="bento-content">
                  <h3>Stain & Streak Resistance</h3>
                  <p>Say goodbye to stubborn hard water spots, bug splatter, and tree sap etching into your windshield. Our coating acts as an impenetrable barrier, keeping your glass permanently spotless with just a simple wipe.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Masterclass Process */}
      <section className="service-process-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">The Application Ritual</h2>
            <p className="section-subtitle">A clinical approach to optical clarity.</p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          <ScrollReveal delay={0.2}>
             <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Glass Polishing & Decontamination</h3>
                <p>We start by machine polishing the exterior glass to remove existing mineral deposits, microscopic scratches, and stubborn road film, revealing perfectly bare glass.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Surgical Pre-Wipe</h3>
                <p>An alcohol-based prep solvent is used to strip any remaining polishing oils. The surface must be completely surgically clean to allow the coating to bond effectively.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Coating Cross-Linking</h3>
                <p>The ceramic-infused glass coating is hand-applied in a cross-hatch pattern. Once flashed, the excess is leveled off, leaving a permanent crystal-clear barrier that cures into an invisible shield.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">Our Glass Coating Gallery</h2>
          </div>
        </ScrollReveal>
        
        <div className="masonry-gallery">
          {/* Featuring the best Glass assets */}
          {[assets.G1, assets.G2, assets.G3, assets.G4, assets.G5, assets.G6, assets.G7, assets.G8].map((img, index) => (
            <ScrollReveal delay={0.1 + (index * 0.1)} key={index}>
              <div className="masonry-item">
                <img src={img} alt={`Glass Work ${index + 1}`} loading="lazy" decoding="async" />
                <div className="masonry-overlay">
                  <span className="masonry-zoom"><i className="fas fa-search-plus"></i></span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Ultimate CTA */}
      <section className="service-cta-elite">
        <div className="cta-elite-content">
          <ScrollReveal delay={0.1}>
            <h2>Do you see clearly?</h2>
            <p>Upgrade your daily commute with uncompromising safety and clarity.</p>
            <Link to="/appointment" className="btn-primary btn-glow mt-4">
              Book Glass Coating
            </Link>
          </ScrollReveal>
        </div>
        <div className="cta-elite-bg"></div>
      </section>
    </div>
  );
};

export default Glasscoating;
