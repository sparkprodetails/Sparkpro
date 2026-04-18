import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { assets } from "@assets/icon";
import { Link } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";
import "../Services.css"; // Master CSS

const Cermaiccoating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page-elite animate-fade">
      <Helmet>
        <title>Professional Ceramic Coating | SparkproDetails</title>
        <meta name="description" content="Next-level paint protection. Showroom finish every day with our premium Ceramic Coating." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="service-hero-elite">
        {/* Use a hero image. Assets.C1 or similar */}
        <img src={assets.C3} alt="Ceramic Coating" className="service-hero-bg" loading="eager" decoding="async" />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <ScrollReveal delay={0.1}>
            <div className="service-hero-badge">Sparkpro Elite Protection</div>
            <h1 className="service-hero-title">Ceramic Coating</h1>
            <p className="service-hero-subtitle">Showroom finish every single day. Our premium nanotechnology bonds at the molecular level, creating a permanent, glass-like shield over your vehicle's factory paint.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterclass Overview */}
      <section className="service-overview-elite container">
        <div className="overview-split">
          <div className="overview-left">
            <ScrollReveal delay={0.2}>
              <h2 className="overview-title">Molecular<span className="text-gradient d-block">Brilliance.</span></h2>
            </ScrollReveal>
          </div>
          <div className="overview-right">
            <ScrollReveal delay={0.3}>
              <p className="overview-text">Traditional waxes and sealants wash away in a matter of weeks. The modern vehicle demands modern, permanent protection that actively resists dirt, water, and contaminants.</p>
              <p className="overview-text">Our cutting-edge nano-ceramic coatings form an inseparable molecular bond with your vehicle's clear coat. Upon curing, it transforms into a rigid glass-like matrix. This provides jaw-dropping, mirror-like gloss and unparalleled resistance against chemical stains and UV fading. <strong>Exceed perfection.</strong></p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Benefits Bento Box */}
      <section className="service-benefits-elite">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="section-header-centered">
              <h2 className="section-title">Beyond Wax & Sealants</h2>
              <p className="section-subtitle">Why Ceramic Coating is the ultimate gloss enhancer.</p>
            </div>
          </ScrollReveal>
          
          <div className="bento-glass-grid">
            <ScrollReveal delay={0.2} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-gem bento-icon"></i></div>
              <h3>Glass-Like Reflective Gloss</h3>
              <p>The nano-particles fill in microscopic pores in the paint, creating a perfectly smooth, hyper-reflective surface that magnifies your car’s depth and color.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-water bento-icon"></i></div>
              <h3>Extreme Hydrophobia</h3>
              <p>Water, mud, and grime instantly bead up and roll off the ultra-slick surface. Washing your car becomes effortless, requiring half the time and effort.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-sun bento-icon"></i></div>
              <h3>UV & Oxidation Shielding</h3>
              <p>Prevents the sun's harsh ultraviolet rays from oxidizing your paint, ensuring your car never looks faded, dull, or aged over the years.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="bento-card-elite bento-span-2">
              <div className="bento-flex-horizontal">
                <div className="bento-content">
                  <h3>Chemical & Etch Resistance</h3>
                  <p>A 9H hardness layer protects the clear coat from tree sap, acidic bug splatter, and bird droppings. These corrosive contaminants will wipe away cleanly without etching into your underlying factory paint system.</p>
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
            <h2 className="section-title">Our Coating Process</h2>
            <p className="section-subtitle">Flawless execution guarantees a permanent bond.</p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          <ScrollReveal delay={0.2}>
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Multi-Stage Paint Correction</h3>
                <p>Because Ceramic Coating is permanent, any existing scratches or swirl marks must be entirely removed first. We perform up to 3 stages of intensive machine polishing to achieve a flawless, mirror finish.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Surface Preparation</h3>
                <p>An intricate wipedown using specialized isopropyl alcohol solutions removes all remaining polishing oils and residues. The paint must be completely bare to allow the ceramic molecules to cross-link properly.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Nano Application & Curing</h3>
                <p>The liquid ceramic is meticulously applied by hand. It flashes and levels over the paintwork before being buffed off. Finally, the vehicle cures under short-wave infrared heat lamps to harden the 9H glass shield.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">Our Ceramic Excellence</h2>
          </div>
        </ScrollReveal>
        
        <div className="masonry-gallery">
          {/* Featuring the best Ceramic assets */}
          {[assets.C1, assets.C4, assets.C5, assets.C10, assets.C12, assets.C16].map((img, index) => (
            <ScrollReveal delay={0.1 + (index * 0.1)} key={index}>
              <div className="masonry-item">
                <img src={img} alt={`Ceramic Work ${index + 1}`} loading="lazy" decoding="async" />
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
            <h2>Ready to command attention?</h2>
            <p>Lock in a permanent, high-gloss finish that turns heads on every drive.</p>
            <Link to="/appointment" className="btn-primary btn-glow mt-4">
              Book Your Coating
            </Link>
          </ScrollReveal>
        </div>
        <div className="cta-elite-bg"></div>
      </section>
    </div>
  );
};

export default Cermaiccoating;
