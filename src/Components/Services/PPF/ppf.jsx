import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../Services.css"; // Master CSS
import { assets } from '@assets/icon';
import { Link } from "react-router-dom";
import ScrollReveal from "../../ScrollReveal";

const PPF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page-elite animate-fade">
      <Helmet>
        <title>Premium PPF Services in Islamabad | SparkproDetails</title>
        <meta name="description" content="Best Paint Protection Film (PPF) in Islamabad. Imported from UK & US. Unbeatable quality and durability." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="service-hero-elite">
        <img src={assets.P11} alt="PPF Shield" className="service-hero-bg" loading="eager" decoding="async" />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <ScrollReveal delay={0.1}>
            <div className="service-hero-badge">Sparkpro Elite Protection</div>
            <h1 className="service-hero-title">Paint Protection Film</h1>
            <p className="service-hero-subtitle">The ultimate highly-engineered armor for your vehicle. Shield your car from stone chips, scratches, and UV damage with our optically-clear, self-healing polyurethane barrier.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterclass Overview */}
      <section className="service-overview-elite container">
        <div className="overview-split">
          <div className="overview-left">
            <ScrollReveal delay={0.2}>
              <h2 className="overview-title">The Invisible<span className="text-gradient d-block">Armor.</span></h2>
            </ScrollReveal>
          </div>
          <div className="overview-right">
            <ScrollReveal delay={0.3}>
              <p className="overview-text">Modern driving conditions present countless hazards to your vehicle's pristine finish. From loose gravel and acidic bird droppings to harsh UV rays and road debris, your factory paint is under constant assault.</p>
              <p className="overview-text">Our premium imported Paint Protection Film (PPF) from industry-leading manufacturers in the US and UK provides an elite polyurethane shield perfectly contoured to your vehicle's unique bodylines. Experience peace of mind without compromising aesthetic brilliance. <strong>Preserve perfection.</strong></p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Benefits Bento Box */}
      <section className="service-benefits-elite">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="section-header-centered">
              <h2 className="section-title">Uncompromising Defense</h2>
              <p className="section-subtitle">The technical advantages of choosing Sparkpro PPF.</p>
            </div>
          </ScrollReveal>
          
          <div className="bento-glass-grid">
            <ScrollReveal delay={0.2} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-magic bento-icon"></i></div>
              <h3>Self-Healing Technology</h3>
              <p>Advanced elastomeric polymers flow back into their original state when exposed to heat from the engine or sun, erasing swirl marks and minor scratches instantly.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-shield-alt bento-icon"></i></div>
              <h3>Maximum Impact Resistance</h3>
              <p>Engineered to absorb the impact of rocks, road debris, and physical abrasions that would otherwise chip or ruin your delicate OEM paintwork.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="bento-card-elite">
              <div className="bento-icon-wrapper"><i className="fas fa-tint bento-icon"></i></div>
              <h3>Stain & Discoloration Proof</h3>
              <p>Formulated to resist yellowing and protect against chemical stains, bug splatter, bird droppings, and harmful acidic contaminants indefinitely.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.5} className="bento-card-elite bento-span-2">
              <div className="bento-flex-horizontal">
                <div className="bento-content">
                  <h3>Hydrophobic Finish & High Gloss</h3>
                  <p>Our top-tier films feature a built-in ceramic topcoat. This ensures water beads and rolls right off the surface, making maintenance washes incredibly easy while enhancing the depth and mirror-like gloss of your paint.</p>
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
            <h2 className="section-title">Our Installation Process</h2>
            <p className="section-subtitle">Precision engineering meets obsessive attention to detail.</p>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          <ScrollReveal delay={0.2}>
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Decontamination & Paint Correction</h3>
                <p>Before any film touches the car, the paint is thoroughly washed, clayed, and meticulously machine-polished. We ensure the surface is 100% flawless because the PPF acts as a magnifying glass for the paint beneath.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Custom Mapping & Plotting</h3>
                <p>Using industry-leading precision plotting software, the film is digitally cut to perfectly match your vehicle’s specific body panels, ensuring seamless edge-wrapping and zero use of blades on your car’s paint.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Expert Application & Curing</h3>
                <p>Our certified technicians perform a flawless application in our climate-controlled studio. The vehicle is then securely cured under infrared lamps, ensuring a perfect molecular bond with zero lifting.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-elite container">
        <ScrollReveal delay={0.1}>
          <div className="section-header-centered">
            <h2 className="section-title">Recent PPF Commissions</h2>
          </div>
        </ScrollReveal>
        
        <div className="masonry-gallery">
          {/* Featuring the best PPF assets */}
          {[assets.ppfmain_icon, assets.P11, assets.P12, assets.P14, assets.P15, assets.P16, assets.P18, assets.P19, assets.p1_icon].map((img, index) => (
            <ScrollReveal delay={0.1 + (index * 0.1)} key={index}>
              <div className="masonry-item">
                <img src={img} alt={`PPF Work ${index + 1}`} loading="lazy" decoding="async" />
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
            <h2>Ready to protect your investment?</h2>
            <p>Join the elite tier of automotive enthusiasts who trust Sparkpro Details with their most prized possessions.</p>
            <Link to="/appointment" className="btn-primary btn-glow mt-4">
              Book Your Consultation
            </Link>
          </ScrollReveal>
        </div>
        <div className="cta-elite-bg"></div>
      </section>
    </div>
  );
};

export default PPF;
