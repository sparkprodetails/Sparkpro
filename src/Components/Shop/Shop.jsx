import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCart, PACKAGES } from './CartContext';
import ScrollReveal from '../ScrollReveal';
import SkeletonImage from '../Common/SkeletonImage';
import './Shop.css';

// Image paths — place actual images at /public/assets/sh1.jpg … sh4.jpg
const IMAGES = [
  { src: '/assets/sh1.jpg', label: 'sh1' },
  { src: '/assets/sh2.jpg', label: 'sh2' },
  { src: '/assets/sh3.jpg', label: 'sh3' },
  { src: '/assets/sh4.jpg', label: 'sh4' },
];

const FEATURES = [
  'pH Neutral Formula',
  'High Foam Technology',
  'Scratch-Free Wash',
  'Ceramic Coating Safe',
  'Safe on PPF Film',
  'Professional Grade',
];

// SkeletonImage handles the fallback and blur-up loading


function PricingCard({ pkg, index }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const savings = {
    combo: 600,
    pro: 1500,
  };

  const handleAdd = () => {
    addToCart(pkg, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Professional Deal (4 Pack) gets a special diamond/pro tier look
  const isProDeal = pkg.id === 'pro';

  return (
    <ScrollReveal delay={0.1}>
      <div className={`pricing-card${pkg.highlight ? ' highlighted' : ''}${isProDeal ? ' pro-tier' : ''}`}>
        {pkg.highlight && <div className="card-badge">Most Popular</div>}
        {isProDeal && <div className="card-badge pro">Elite Pro Deal</div>}

        <div className="pricing-card-label">{pkg.label}</div>
        <div className="pricing-card-name">{pkg.name}</div>

        <div className="pricing-card-price">
          <span className="price-currency">Rs.</span>
          <span className="price-amount">{pkg.price.toLocaleString()}</span>
        </div>

        {savings[pkg.id] && (
          <div className="pricing-card-savings">
            <span>✓</span>
            Save Rs. {savings[pkg.id].toLocaleString()}
          </div>
        )}

        <div className="add-to-cart-row">
          <div className="qty-control">
            <button
              className="qty-btn"
              onClick={() => setQty(q => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >−</button>
            <span className="qty-display">{qty}</span>
            <button
              className="qty-btn"
              onClick={() => setQty(q => q + 1)}
              aria-label="Increase quantity"
            >+</button>
          </div>
          <button
            className={`btn-add-cart${added ? ' added' : ''}`}
            onClick={handleAdd}
            id={`add-to-cart-${pkg.id}`}
          >
            {added ? '✓ Added!' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}



export default function Shop() {
  const [activeImg, setActiveImg] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Swipe logic for mobile/tablet gallery
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe left (next)
    if (diff > 50) {
      setActiveImg(prev => (prev + 1) % IMAGES.length);
    }
    // Swipe right (previous)
    if (diff < -50) {
      setActiveImg(prev => (prev - 1 + IMAGES.length) % IMAGES.length);
    }
    setTouchStart(null);
  };

  return (
    <div className="shop-page">
      <Helmet>
        <title>Ceramic Safe Car Wash Shampoo | SparkproDetails Shop</title>
        <meta
          name="description"
          content="Buy professional-grade Ceramic Safe Car Wash Shampoo. pH Neutral, High Foam, Scratch-Free — safe for ceramic coatings and PPF."
        />
      </Helmet>

      {/* ── Product Section ── */}
      <section className="product-section">
        <div className="container">
          <div className="product-layout">

            {/* Gallery */}
            <ScrollReveal delay={0.1}>
              <div 
                className="product-gallery"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="main-image-wrapper">
                  <SkeletonImage
                    src={IMAGES[activeImg].src}
                    alt={`Ceramic Safe Car Wash Shampoo — view ${activeImg + 1}`}
                    width={600}
                    height={600}
                    priority={true}
                  />
                  {/* Swipe Indicators for Mobile */}
                  <div className="swipe-hint">Swipe to view more</div>
                </div>
                <div className="thumbnail-row">
                  {IMAGES.map((img, i) => (
                    <ScrollReveal key={i} delay={0.2 + i * 0.05}>
                      <button
                        className={`thumb-btn${activeImg === i ? ' active' : ''}`}
                        onClick={() => setActiveImg(i)}
                        aria-label={`View product image ${i + 1}`}
                      >
                        <SkeletonImage
                          src={img.src}
                          alt={`Thumbnail ${i + 1}`}
                          width={100}
                          height={100}
                        />
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal delay={0.2}>
              <div className="product-info">
                <div className="product-badge-row">
                  <span className="badge-tag blue">Professional Grade</span>
                  <span className="badge-tag green">✓ In Stock</span>
                  <span className="badge-tag blue">Ceramic Safe</span>
                </div>

                <h1 className="product-title">
                  Ceramic Safe<br />
                  <span className="text-gradient">Car Wash Shampoo</span>
                </h1>

                <p className="product-description">
                  High-performance car wash shampoo designed for professional detailing. Safe for
                  ceramic coatings and PPF, delivering a scratch-free, high-foam wash that leaves
                  your vehicle spotless and gleaming after every use.
                </p>

                <hr className="shop-divider" />

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.8rem' }}>
                    Key Features
                  </div>
                  <div className="features-grid">
                    {FEATURES.map(f => (
                      <div key={f} className="feature-item">
                        <span className="feat-icon">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="shop-divider" />

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>📦 Free delivery</span> across Pakistan on orders above Rs. 3,000 &nbsp;·&nbsp;
                  <span style={{ color: 'var(--text-secondary)' }}>🔒 Secure payment</span> via EasyPaisa & Bank Transfer
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="pricing-section">
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div className="pricing-section-header">
              <h2 className="text-gradient">Choose Your Package</h2>
              <p>Select the deal that works best for you — bigger packs mean bigger savings.</p>
            </div>
          </ScrollReveal>

          <div className="pricing-grid">
            {PACKAGES.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
