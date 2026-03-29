import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { assets } from '@assets/icon';
import { Link } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";
import "../Services.css"; // Master CSS

const Cardetailing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page-elite animate-fade">
      <Helmet>
        <title>Professional 360° Car Detailing | SparkproDetails</title>
        <meta name="description" content="Flawless from every angle. 360 professional car detailing services in Islamabad. Deep interior and exterior care." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="service-hero-elite">
        <img src={assets.d8} alt="360 Detailing" className="service-hero-bg" loading="eager" decoding="async" />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <ScrollReveal delay={0.1}>
            <div className="service-hero-badge">Sparkpro Elite Restoration</div>
            <h1 className="service-hero-title">360° Detailing</h1>
            <p className="service-hero-subtitle">Meticulously cared for from every conceivable angle. Our comprehensive interior and exterior detailing service delivers an uncompromising showroom-quality finish for your entire vehicle.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterclass Overview */}
      <section className="service-overview-elite container">
        <div className="overview-split">
          <div className="overview-left">
            <ScrollReveal delay={0.2}>
              <h2 className="overview-title">Absolute<span className="text-gradient d-block">Perfection.</span></h2>
            </ScrollReveal>
          </div>
          <div className="overview-right">
            <ScrollReveal delay={0.3}>
              <p className="overview-text">A quick car wash merely removes the top layer of dust. True automotive detailing is the meticulous science of restoring a vehicle to its absolute factory-best condition—and then exceeding it.</p>
              <p className="overview-text">Our 360° Detailing package tackles every crevice of your vehicle. From deep steam-cleaning your interior leather to precision multi-stage paint correction on the exterior, we leave no stone unturned. We revive the joy and prestige of driving a flawless machine. <strong>Experience the elite difference.</strong></p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Benefits Bento Box */}
      <section className="service-benefits-elite">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="section-header-centered">
              <h2 className="section-title">The Masterworks Detailing</h2>
              <p className="section-subtitle">What sets our 360° package apart from the rest.</p>
            </div>
          </ScrollReveal>
          
          <div className="bento-glass-grid">
            <ScrollReveal delay={0.2} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-couch bento-icon"></i></div>
              <h3>Deep Interior Revival</h3>
              <p>We extract stains from upholstery, deep clean all carpets, and treat leather with premium UV-resistant conditioners to restore its supple, luxurious feel.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-sparkles bento-icon"></i></div>
              <h3>Multi-Stage Polishing</h3>
              <p>Our machine polishing process safely removes oxidation, swirl marks, and minor scratches from the clear coat, restoring depth and vibrant color.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-truck-monster bento-icon"></i></div>
              <h3>Wheels, Wells & Trims</h3>
              <p>We deeply decontaminate oxidized wheels, dress the tires, clean the wheel wells, and restore faded black plastics to an elegant satin finish.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="bento-card-elite bento-span-2">
              <div className="bento-flex-horizontal">
                <div className="bento-content">
                  <h3>Engine Bay & Odor Elimination</h3>
                  <p>A pristine exterior deserves a pristine engine. We carefully degrease and dress your engine bay. Inside the cabin, strict ozone treatments are used to completely neutralize lingering odors, leaving a fresh, neutral scent.</p>
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
            <h2 className="section-title">The Detailing Ritual</h2>
            <p className="section-subtitle">A systematic approach to automotive restoration.</p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          <ScrollReveal delay={0.2}>
             <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Exterior Decontamination</h3>
                <p>We begin with a pH-neutral snow foam bath, followed by iron fallout removers and clay bar treatments to pull out embedded contaminants from the clear coat.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Cabin Disinfection & Extraction</h3>
                <p>The interior is vacuumed and subjected to high-pressure hot water extraction and steam cleaning, targeting vents, seams, and fabrics to banish hidden dirt.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Correction & Protection</h3>
                <p>The paintwork is machine-polished to remove defects, and finally sealed with premium synthetic sealants, giving your vehicle a brilliant, protected shine for months to come.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">Our Detailing Results</h2>
          </div>
        </ScrollReveal>
        
        <div className="masonry-gallery">
          {/* Featuring the best Detailing assets */}
          {[assets.d1, assets.d2, assets.d3, assets.d4, assets.d5, assets.d6, assets.d7, assets.d9].map((img, index) => (
            <ScrollReveal delay={0.1 + (index * 0.1)} key={index}>
              <div className="masonry-item">
                <img src={img} alt={`Detailing Work ${index + 1}`} loading="lazy" decoding="async" />
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
            <h2>Demand absolute perfection.</h2>
            <p>Revive the thrill of a brand-new car. Treat your vehicle right.</p>
            <Link to="/appointment" className="btn-primary btn-glow mt-4">
              Book 360° Detailing
            </Link>
          </ScrollReveal>
        </div>
        <div className="cta-elite-bg"></div>
      </section>
    </div>
  );
};

export default Cardetailing;
