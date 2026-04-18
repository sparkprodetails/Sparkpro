import React, { useState as S, useRef as R, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet'; // Import Helmet for meta tag management
import './appointment.css';
import ScrollReveal from '../ScrollReveal';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize EmailJS with Public Key
    emailjs.init("ZxXEXqXzV4MZOYLhk");
  }, []);

  const F = R();
  const [isSuccess, setIsSuccess] = S(false);
  const [isSubmitting, setIsSubmitting] = S(false);
  const [errorMessage, setErrorMessage] = S('');
  const [D, U] = S({
    name: '',
    email: '',
    phone: '',
    carName: '',
    carModel: '',
    service: '',
    ppfType: ''
  });

  const Z = (e) => {
    const { name: N, value: V } = e.target;
    if (N === 'service' && V !== 'PPF') {
      U((p) => ({ ...p, [N]: V, ppfType: '' }));
    } else {
      U((p) => ({ ...p, [N]: V }));
    }
  };

  const W = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setIsSuccess(false);

    emailjs
      .sendForm(
        'service_p58k9vs',
        'template_c2xaixi',
        F.current,
        'ZxXEXqXzV4MZOYLhk'
      )
      .then(
        (r) => {
          console.log('SUCCESS!', r.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          // Clear form only on success
          U({
            name: '',
            email: '',
            phone: '',
            carName: '',
            carModel: '',
            service: '',
            ppfType: ''
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        (err) => {
          console.error('FAILED TO SEND EMAIL:', err);
          setIsSubmitting(false);
          setErrorMessage('❌ Failed to send appointment. Please contact Via Whatsapp or Phone Num 0310555527.');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      );

    setTimeout(() => {
      setIsSuccess(false);
    }, 30000);
  };

  return (
    <div className="service-page animate-fade">
      <Helmet>
        <title>Book Your Appointment | SparkproDetails</title>
        <meta name="description" content="Schedule your car detailing, ceramic coating, or PPF service today. Professional car care in Islamabad." />
      </Helmet>

      <div className="container">
        <header className="service-header" style={{ marginBottom: '40px' }}>
          <ScrollReveal delay={0.1}>
            <h1 className="text-gradient">Book Your Service</h1>
            <p className="hero-subtitle">Fill out the form below and our team will contact you within 30 minutes to confirm your appointment.</p>
          </ScrollReveal>
        </header>

        {isSuccess && (
          <ScrollReveal delay={0.1}>
            <div className="form-success" style={{ padding: '1.5rem', textAlign: 'center', marginBottom: '2rem', backgroundColor: '#e6fffa', border: '1px solid #38b2ac', color: '#2c7a7b', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
              <i className="fas fa-check-circle"></i> Appointment submitted successfully! We'll call you shortly.
            </div>
          </ScrollReveal>
        )}

        {errorMessage && (
          <ScrollReveal delay={0.1}>
            <div className="form-error" style={{ padding: '1.5rem', textAlign: 'center', marginBottom: '2rem', backgroundColor: '#fff5f5', border: '1px solid #feb2b2', color: '#c53030', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
              <i className="fas fa-exclamation-circle"></i> {errorMessage}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.2}>
          <div className="form-container">
            <form onSubmit={W} ref={F}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ex. John Doe"
                  value={D.name}
                  onChange={Z}
                  required
                />
              </div>

              <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '0' }}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@example.com"
                    value={D.email}
                    onChange={Z}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="03XX XXXXXXX"
                    value={D.phone}
                    onChange={Z}
                    required
                  />
                </div>
              </div>

              <div className="info-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '0' }}>
                <div className="form-group">
                  <label htmlFor="carName">Car Make & Model</label>
                  <input
                    className="form-control"
                    type="text"
                    name="carName"
                    id="carName"
                    placeholder="Ex. Honda Civic"
                    value={D.carName}
                    onChange={Z}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="carModel">Year</label>
                  <input
                    className="form-control"
                    type="text"
                    name="carModel"
                    id="carModel"
                    placeholder="Ex. 2023"
                    value={D.carModel}
                    onChange={Z}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select
                  className="form-control"
                  name="service"
                  id="service"
                  value={D.service}
                  onChange={Z}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="PPF">Paint Protection Film (PPF)</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="360 Car Detailing">Deep Detailing</option>
                  <option value="Glass Coating">Glass Coating</option>
                  <option value="Chromic Rims">Chromic Rims</option>
                </select>
              </div>

              {D.service === 'PPF' && (
                <div className="form-group animate-fade">
                  <label htmlFor="ppfType">PPF Thickness</label>
                  <select
                    className="form-control"
                    name="ppfType"
                    id="ppfType"
                    value={D.ppfType}
                    onChange={Z}
                    required
                  >
                    <option value="">Select thickness</option>
                    <option value="7 mil">7 mil</option>
                    <option value="9 mil">9 mil</option>
                    <option value="10 mil">10 mil</option>
                  </select>
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
                      Sending...
                    </>
                  ) : 'Confirm Appointment'}
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Appointment;
