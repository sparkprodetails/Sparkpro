import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import { useCart } from './CartContext';
import ScrollReveal from '../ScrollReveal';
import './Checkout.css';

// ─── EmailJS credentials ───────────────────────────────────────────────────
// ⚠️  Replace these with your actual EmailJS IDs before going live
const EMAILJS_SERVICE_ID = 'service_p58k9vs';
const EMAILJS_TEMPLATE_ID = 'template_b5rytf9'; // ← create & paste your order template ID here
const EMAILJS_PUBLIC_KEY = 'ZxXEXqXzV4MZOYLhk';

// ─── WhatsApp number ──────────────────────────────────────────────────────
// ⚠️  Replace with your actual WhatsApp number (e.g. 923105555027)
const WHATSAPP_NUMBER = '923105555027';

// ─── Payment Account Details ──────────────────────────────────────────────
const EASYPAISA_NAME = 'SparkproDetails';
const EASYPAISA_NUMBER = '0310-5555027';
const BANK_NAME = 'HBL';
const BANK_ACCOUNT = 'PK00HABB0000000000000000'; // ← replace with real IBAN
const BANK_TITLE = 'SparkproDetails';

// ─── Confirmation Modal ───────────────────────────────────────────────────
function ConfirmationModal({ order, onClose }) {
  const whatsappMsg = encodeURIComponent(
    `Assalam o Alaikum! I have placed an order for:\n\nPackage: ${order.package}\nQty: ${order.quantity}\nTotal: Rs. ${order.total}\n\nPlease confirm my payment. My name is ${order.name}.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Order Confirmation">
      <div className="modal-box">
        <div className="modal-success-icon">✓</div>

        <h2 className="modal-title">Order Confirmed!</h2>
        <p className="modal-subtitle">
          Thank you, <strong>{order.name}</strong>! Your order has been received.<br />
          Please complete your payment and send the screenshot on WhatsApp for confirmation.
          We will contact you shortly via WhatsApp or call.
        </p>

        {/* EasyPaisa Details */}
        <div className="modal-payment-details">
          <h4>📱 EasyPaisa Payment</h4>
          <div className="payment-detail-row">
            <span className="pd-icon">👤</span>
            <div className="pd-info">
              <div className="pd-label">Account Name</div>
              <div className="pd-value">{EASYPAISA_NAME}</div>
            </div>
          </div>
          <div className="payment-detail-row">
            <span className="pd-icon">📞</span>
            <div className="pd-info">
              <div className="pd-label">Account Number</div>
              <div className="pd-value">{EASYPAISA_NUMBER}</div>
            </div>
          </div>
          <div className="payment-detail-row">
            <span className="pd-icon">💰</span>
            <div className="pd-info">
              <div className="pd-label">Amount to Send</div>
              <div className="pd-value" style={{ color: 'var(--accent-primary)' }}>Rs. {order.total}</div>
            </div>
          </div>
        </div>

        {/* Bank Transfer Details */}
        <div className="modal-payment-details">
          <h4>🏦 Bank Transfer</h4>
          <div className="payment-detail-row">
            <span className="pd-icon">🏛️</span>
            <div className="pd-info">
              <div className="pd-label">Bank</div>
              <div className="pd-value">{BANK_NAME}</div>
            </div>
          </div>
          <div className="payment-detail-row">
            <span className="pd-icon">👤</span>
            <div className="pd-info">
              <div className="pd-label">Account Title</div>
              <div className="pd-value">{BANK_TITLE}</div>
            </div>
          </div>
          <div className="payment-detail-row">
            <span className="pd-icon">🔢</span>
            <div className="pd-info">
              <div className="pd-label">IBAN / Account Number</div>
              <div className="pd-value" style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>{BANK_ACCOUNT}</div>
            </div>
          </div>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          id="whatsapp-screenshot-btn"
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }} />
          👉 Send Screenshot on WhatsApp
        </a>

        <button className="modal-close-link" onClick={onClose}>
          Close — I'll send the screenshot later
        </button>
      </div>
    </div>
  );
}

// ─── Main Checkout Component ──────────────────────────────────────────────
export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', city: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('easypaisa');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!form.phone.trim()) return 'Please enter your phone number.';
    if (form.phone.trim().length < 10) return 'Please enter a valid phone number.';
    if (!form.address.trim()) return 'Please enter your delivery address.';
    if (!form.city.trim()) return 'Please enter your city.';
    if (items.length === 0) return 'Your cart is empty. Please add a product first.';
    return null;
  };

  const packageSummary = items.map(i => `${i.name} × ${i.quantity}`).join(', ');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError('');
    setLoading(true);
    const orderId = Math.floor(Math.random() * 1000000);

    const templateParams = {
      customer_name: form.name,
      customer_phone: form.phone,
      customer_email: form.email || 'Not provided',
      customer_address: `${form.address}, ${form.city}`,
      package_name: packageSummary,
      quantity: items.reduce((s, i) => s + i.quantity, 0),
      total_amount: `Rs. ${totalPrice.toLocaleString()}`,
      payment_method: paymentMethod === 'easypaisa' ? 'EasyPaisa' : 'Bank Transfer',

      // ✅ NEW FIELDS (for your new EmailJS template)
      order_id: orderId,
      order_date: new Date().toLocaleString(),

      // ✅ WhatsApp link (dynamic with order ID + name)
      whatsapp_link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Assalam o Alaikum! Order ID: ${orderId}\nName: ${form.name}\nTotal: Rs. ${totalPrice}`
      )}`
    };
    try {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
} catch (err) {
  console.error('EmailJS Error:', err);
  setError('Order placed, but email failed. Please contact via WhatsApp.');
}

setConfirmedOrder({
  name: form.name,
  package: packageSummary,
  quantity: items.reduce((s, i) => s + i.quantity, 0),
  total: totalPrice.toLocaleString(),
});

clearCart();
setLoading(false);

   

    const handleModalClose = () => {
      setConfirmedOrder(null);
      navigate('/shop');
    };

    return (
      <div className="checkout-page">
        <Helmet>
          <title>Checkout | SparkproDetails Shop</title>
          <meta name="description" content="Complete your order for Ceramic Safe Car Wash Shampoo. Fast delivery across Pakistan." />
        </Helmet>

        {confirmedOrder && (
          <ConfirmationModal order={confirmedOrder} onClose={handleModalClose} />
        )}

        <div className="container">
          {/* Header */}
          <ScrollReveal delay={0.05}>
            <div className="checkout-header">
              <h1 className="text-gradient">Checkout</h1>
              <p>You're one step away from premium car care</p>
            </div>
          </ScrollReveal>

          {/* Progress Steps */}
          <ScrollReveal delay={0.1}>
            <div className="checkout-steps">
              <div className="step-item done">
                <span className="step-num">✓</span>
                <span>Cart</span>
              </div>
              <div className="step-line" />
              <div className="step-item active">
                <span className="step-num">2</span>
                <span>Details</span>
              </div>
              <div className="step-line" />
              <div className="step-item">
                <span className="step-num">3</span>
                <span>Confirm</span>
              </div>
            </div>
          </ScrollReveal>

          <Link to="/shop" className="btn-back-shop">← Back to Shop</Link>

          <div className="checkout-layout">
            {/* ── Form ── */}
            <ScrollReveal delay={0.15}>
              <form
                className="checkout-form-card"
                onSubmit={handleSubmit}
                ref={formRef}
                noValidate
              >
                {/* Customer Info */}
                <div className="checkout-section-title">
                  <span className="section-icon">👤</span> Customer Information
                </div>

                <div className="form-group">
                  <label htmlFor="co-name">Full Name *</label>
                  <input
                    className="form-control"
                    type="text"
                    id="co-name"
                    name="name"
                    placeholder="e.g. Ali Hassan"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="co-phone">Phone Number *</label>
                    <input
                      className="form-control"
                      type="tel"
                      id="co-phone"
                      name="phone"
                      placeholder="03XX XXXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="co-email">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="co-email"
                      name="email"
                      placeholder="optional"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="co-address">Full Address *</label>
                  <input
                    className="form-control"
                    type="text"
                    id="co-address"
                    name="address"
                    placeholder="House No., Street, Area"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="co-city">City *</label>
                  <input
                    className="form-control"
                    type="text"
                    id="co-city"
                    name="city"
                    placeholder="e.g. Islamabad"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Payment Methods */}
                <div className="payment-section">
                  <div className="checkout-section-title" style={{ marginTop: '0.5rem' }}>
                    <span className="section-icon">💳</span> Payment Method
                  </div>

                  <div className="payment-methods-grid">
                    <button
                      type="button"
                      className={`payment-method-card${paymentMethod === 'easypaisa' ? ' selected' : ''}`}
                      onClick={() => setPaymentMethod('easypaisa')}
                      id="pay-easypaisa"
                    >
                      <span className="pm-logo">📱</span>
                      <span className="pm-name">EasyPaisa</span>
                      <span className="pm-sub">Mobile wallet transfer</span>
                    </button>

                    <button
                      type="button"
                      className={`payment-method-card${paymentMethod === 'bank' ? ' selected' : ''}`}
                      onClick={() => setPaymentMethod('bank')}
                      id="pay-bank"
                    >
                      <span className="pm-logo">🏦</span>
                      <span className="pm-name">Bank Transfer</span>
                      <span className="pm-sub">Direct bank deposit</span>
                    </button>
                  </div>

                  {/* Inline Payment Details */}
                  <div className="inline-payment-details">
                    {paymentMethod === 'easypaisa' ? (
                      <div className="ipd-card easypaisa">
                        <div className="ipd-header">
                          <span className="ipd-badge">EasyPaisa Details</span>
                        </div>
                        <div className="ipd-body">
                          <div className="ipd-row">
                            <span className="label">Name:</span>
                            <span className="value">{EASYPAISA_NAME}</span>
                          </div>
                          <div className="ipd-row">
                            <span className="label">Number:</span>
                            <span className="value highlight">{EASYPAISA_NUMBER}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="ipd-card bank">
                        <div className="ipd-header">
                          <span className="ipd-badge">Bank Details</span>
                        </div>
                        <div className="ipd-body">
                          <div className="ipd-row">
                            <span className="label">Bank:</span>
                            <span className="value">{BANK_NAME}</span>
                          </div>
                          <div className="ipd-row">
                            <span className="label">Title:</span>
                            <span className="value">{BANK_TITLE}</span>
                          </div>
                          <div className="ipd-row">
                            <span className="label">IBAN/Acc:</span>
                            <span className="value highlight" style={{ fontSize: '0.75rem' }}>{BANK_ACCOUNT}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="payment-note">
                    <span className="note-icon">ℹ️</span>
                    <span>
                      Please complete the payment to the details shown above and
                      <strong> take a screenshot</strong>. After clicking "Place Order",
                      you'll be able to send it to us via WhatsApp.
                    </span>
                  </div>
                </div>

                {/* Error */}
                {error && <div className="form-error-msg">{error}</div>}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-place-order"
                  id="place-order-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="btn-spinner" />
                      Placing Order…
                    </>
                  ) : (
                    <>🚀 Place Order</>
                  )}
                </button>
              </form>
            </ScrollReveal>

            {/* ── Order Summary ── */}
            <ScrollReveal delay={0.2}>
              <div className="order-summary-card">
                <h3>🧴 Order Summary</h3>

                {items.length === 0 ? (
                  <p className="order-empty-msg">
                    No items in cart.{' '}
                    <Link to="/shop" style={{ color: 'var(--accent-primary)' }}>
                      Go to Shop →
                    </Link>
                  </p>
                ) : (
                  <>
                    {items.map(item => (
                      <div key={item.id} className="order-item-row">
                        <div className="order-item-info">
                          <div className="order-item-name">Ceramic Safe Car Wash Shampoo</div>
                          <div className="order-item-pkg">{item.name} × {item.quantity}</div>
                        </div>
                        <div className="order-item-price">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}

                    <hr className="order-total-divider" />

                    <div className="order-total-line">
                      <span className="label">Total</span>
                      <span className="amount">
                        <span className="cur">Rs.</span>
                        {totalPrice.toLocaleString()}
                      </span>
                    </div>

                    <p className="summary-note">
                      🚚 Free delivery on orders above Rs. 3,000<br />
                      🔒 Payment verified via screenshot
                    </p>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    );
  }
}