import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { assets } from '@assets/icon';
import { Link } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";
import SkeletonImage from "../../Common/SkeletonImage";
import "../Services.css";

const Dechrome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page-elite animate-fade">
      <Helmet>
        <title>Professional Dechroming Services | SparkproDetails</title>
        <meta name="description" content="Bold new vibes. dechroming done right. Blackout your vehicle's chrome for a sleek, stealthy, and modern look in Islamabad." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="service-hero-elite">
        <SkeletonImage 
          src={assets.t8} 
          alt="Dechrome Services" 
          className="service-hero-bg" 
          priority={true}
          width="100%"
          height="100vh"
        />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <ScrollReveal delay={0.1}>
            <div className="service-hero-badge">Sparkpro Elite Aesthetics</div>
            <h1 className="service-hero-title">Custom Dechroming</h1>
            <p className="service-hero-subtitle">Transform your vehicle's presence. Eliminate dated shiny trim for a bold, stealthy, and inherently modern aesthetic using premium architectural vinyl wraps.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterclass Overview */}
      <section className="service-overview-elite container">
        <div className="overview-split">
          <div className="overview-left">
            <ScrollReveal delay={0.2}>
              <h2 className="overview-title">Stealth<span className="text-gradient d-block">& Style.</span></h2>
            </ScrollReveal>
          </div>
          <div className="overview-right">
            <ScrollReveal delay={0.3}>
              <p className="overview-text">Factory chrome accents often visually distract from a vehicle's natural, aggressive bodylines, especially on modern performance cars and luxury SUVs.</p>
              <p className="overview-text">Our bespoke dechroming (also known as a 'Chrome Delete') service surgically covers window trims, grilles, and badges with ultra-premium satin, gloss, or matte black vinyl. The result is a radically transformed, cohesive, and commanding presence on the road. <strong>Command attention natively.</strong></p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Benefits Bento Box */}
      <section className="service-benefits-elite">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="section-header-centered">
              <h2 className="section-title">The Blackout Advantage</h2>
              <p className="section-subtitle">Why premium vinyl wrapping is the smarter choice.</p>
            </div>
          </ScrollReveal>
          
          <div className="bento-glass-grid">
            <ScrollReveal delay={0.2} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-brush bento-icon"></i></div>
              <h3>Modern "Blackout" Aesthetic</h3>
              <p>Instantly updates older or base-model vehicles to look like high-end factory 'Night' or 'Shadowline' editions.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-undo-alt bento-icon"></i></div>
              <h3>100% Reversible</h3>
              <p>Unlike painting over chrome (which often chips and flakes), vinyl wrapping protects the original trim and can be safely removed at any time for resale.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-palette bento-icon"></i></div>
              <h3>Bespoke Customization</h3>
              <p>Choose from High Gloss Black for a factory-painted look, Satin Black for an aggressive edge, or Matte Black for pure stealth.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="bento-card-elite bento-span-2">
              <div className="bento-flex-horizontal">
                <div className="bento-content">
                  <h3>Precision Fit & Scratch Resistance</h3>
                  <p>Our imported automotive-grade vinyl acts as an extra layer of protection against minor rock chips and scratches on your trim, while looking completely painted on to the untrained eye.</p>
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
            <h2 className="section-title">The Transformation Process</h2>
            <p className="section-subtitle">Surgical application utilizing knifeless technology.</p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          <ScrollReveal delay={0.2}>
             <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Intensive Trim Degreasing</h3>
                <p>Chrome surfaces are notoriously non-porous. We aggressively clean and degrease all trims, ensuring zero wax or oil remains, which is critical for long-term vinyl adhesion.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Knifeless Tape Placement</h3>
                <p>We use carbon-filament knifeless tape around the intricate edges of your vehicle's trim. This completely eliminates the use of blades near your delicate rubber seals and paintwork.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Post-Heating & Edge Sealing</h3>
                <p>The vinyl is laid down tension-free. Once cut, the edges are meticulously tucked behind the rubber seals. Finally, the wrap is post-heated to 90°C to permanently lock its shape.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">The Stealth Gallery</h2>
          </div>
        </ScrollReveal>
        
        <div className="masonry-gallery">
          {/* Featuring the best Dechrome assets */}
          {[assets.t1, assets.t2, assets.t3, assets.t4, assets.t5, assets.t6, assets.t7].map((img, index) => (
            <ScrollReveal key={index} delay={0.1}>
              <div className="masonry-item">
                <SkeletonImage 
                  src={img} 
                  alt={`Dechrome Work ${index + 1}`} 
                  width={400} 
                  height={500} 
                />
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
            <h2>Ready to go stealth?</h2>
            <p>Elevate your vehicle's stance and attitude with our bespoke blackout packages.</p>
            <Link to="/appointment" className="btn-primary btn-glow mt-4">
              Book Dechroming Now
            </Link>
          </ScrollReveal>
        </div>
        <div className="cta-elite-bg"></div>
      </section>
    </div>
  );
};

export default Dechrome;
