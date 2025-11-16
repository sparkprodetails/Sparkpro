import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import "./ppf.css";
import { assets } from '@assets/icon';
import { Link } from "react-router-dom"; // At the top of your file

const PPF = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this will only run on mount

  return (
    <div className="maincontainer">
      {/* Add  elements */}
      
              <div className="car-animation-container">
        <img className="car-animation" src={assets.logo_icon} alt="Car Animation" />
      </div>
      
      <h1 className="ppf-heading">Premium Paint Protection Film (PPF) Services</h1>
      
      <p className="ppf-intro">
        Looking for top-rated, authentic Paint Protection Films at affordable prices?
        You've come to the right place! Our premium PPF is imported from the UK and USA,
        delivering unbeatable quality, durability, and value.
        <br /><br />
        <strong>What are the benefits of PPF?</strong> It acts as an invisible armor for your vehicle —
        shielding your paint from scratches, rock chips, UV damage, water spots, and swirl marks.
        Not only does it preserve your car’s showroom finish, but it also boosts resale value
        and makes maintenance a breeze.
      </p>

      <h2 className="ppf-subheading">Why Choose Our PPF?</h2>
      <ul className="ppf-features">
        <li>✔️ <strong>High Gloss Finish</strong> – Up to 1.5x glossier than untreated paint.</li>
        <li>✔️ <strong>Scratch & Dent Resistance</strong> – Shields from rock chips & light impacts.</li>
        <li>✔️ <strong>Hydrophobic Coating</strong> – Dirt and water slide off with ease.</li>
        <li>✔️ <strong>UV Protection</strong> – Defends paint from fading and oxidation.</li>
        <li>✔️ <strong>Swirl Mark Resistance</strong> – Keeps paint looking fresh longer.</li>
        <li>✔️ <strong>Low Maintenance</strong> – Less cleaning, more driving.</li>
      </ul>

      <h2 className="ppf-subheading">Professional Installation</h2>
      <p>
        Your vehicle will be handled by certified professionals, and completed within 12 hours — so you're back on the road in no time.
      </p>

      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
    
          src="https://www.youtube.com/embed/LHADtSQBQ0w?rel=0"

          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="ppf-subheading">Complete PPF Package Includes:</h2>
      <ul className="ppf-package">
        <li>✔️🔧 <strong>1-Time Free Replacement</strong> – Coverage for life’s unexpected moments.</li>
        <li>✔️🧼 <strong>2 Premium Washes</strong> – Keep that shine going strong.</li>
        <li>✔️🧽 <strong>Clay Bar Treatment</strong> – Removes deep contaminants for smooth paint.</li>
        <li>✔️🛠️ <strong>Paint Correction</strong> – Fixes imperfections before applying film.</li>
        <li>✔️🛋️ <strong>Interior Restoration</strong> – Freshens up your cabin's look and feel.</li>
        <li>✔️✨ <strong>Ceramic Coating on Plastic Parts</strong> – Extra defense where it counts.</li>
      </ul>

      <h2>PPF Protects Your Car</h2>
      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/U2v08ogqypo?rel=0"

          
          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <p className="ppf-cta">
        Give your car the protection it deserves — with style, shine, and long-lasting value.
      </p>
      <h2 className="ppf-subheading">Which kind of PPF We have:</h2>
      <ul className="ppf-package">
      <li>✔️🛡️ <strong>XPEL Ultimate Plus (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>XPEL Stealth (Matte Finish):</strong> 7 mil (0.178 mm)</li>
  <li>✔️🛡️ <strong>XPEL Defender (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
  <li>✔️🛡️ <strong>XPEL Fusion Plus (Self-Healing):</strong> 8 mil (0.203 mm)</li>

  
  <li>✔️🛡️ <strong>3M Scotchgard Pro Series (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>3M Scotchgard Pro Series (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>3M Scotchgard Clear Shield (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>

  
  <li>✔️🛡️ <strong>SunTek Ultra (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>SunTek Matte PPF:</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>SunTek PPF (Standard Clear):</strong> 6–8 mil (0.152–0.203 mm)</li>

 
  <li>✔️🛡️ <strong>Ceramic Pro PPF (Standard Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Ceramic Pro PPF (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Ceramic Pro PPF (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>

 
  <li>✔️🛡️ <strong>Llumar PPF (Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Llumar PPF (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Llumar PPF (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>

 
  <li>✔️🛡️ <strong>PremiumShield Elite (Gloss & Clear):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>PremiumShield Elite (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>PremiumShield (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>

 
  <li>✔️🛡️ <strong>Stek Dynoshield (Clear & Gloss):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Stek Dynoshield (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Stek DynoArmor (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>


  <li>✔️🛡️ <strong>Avery Dennison Supreme PPF (Clear & Gloss):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Avery Dennison Supreme PPF (Matte):</strong> 8 mil (0.203 mm)</li>
  <li>✔️🛡️ <strong>Avery Dennison Supreme PPF (Heavy-Duty):</strong> 10 mil (0.254 mm)</li>
  <li>✔️🛡️ <strong>TeckWrap PPF290-G75 (Gloss):</strong> 12.6 mil (0.320 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-M75 (Matte):</strong> 10.6 mil (0.270 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-X75M (Matte):</strong> 10.3 mil (0.262 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-X85 (Gloss):</strong> 13.0 mil (0.330 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-BLK (Black):</strong> 12.5 mil (0.318 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-E75 (Gloss):</strong> 13.1 mil (0.332 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-E65 (Gloss):</strong> 12.3 mil (0.312 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-S75 (Gloss):</strong> 11.4 mil (0.290 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-S75+ (Gloss):</strong> 12.3 mil (0.312 mm)</li>
<li>✔️🛡️ <strong>TeckWrap PPF290-X75 (Gloss):</strong> 11.8 mil (0.300 mm)</li>

<h2 className="colored-ppf-note">
  🎨 Also, We Offer a Full Range of <span>Colored PPF</span> Options!
</h2>


      </ul>
      <div className="ppf-button-container">
      <Link to="/appointment" className="book-btn">📅 Book Your Appointment Now</Link>
</div>

      <h2 className="ppf-subheading">Gallery: Our PPF Work</h2>
      <div className="ppf-gallery">
  {[assets.p1_icon, assets.p2_icon,assets.P10,assets.P11,assets.P12,assets.P13,assets.P14,assets.P15,assets.P16,assets.P17,assets.P18,assets.P19, assets.p3_icon, assets.p4_icon, assets.p5_icon, assets.p7_icon, assets.p8_icon, assets.ppfmain_icon].map((img, index) => (
    <div className="img-wrapper" key={index}>
      <img src={img} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>

      <h2 className="ppf-subheading">"100% Trustworthy, Every Time – Quality You Can Rely On!"</h2>
      <div className="ppf-button-container">
      <Link to="/appointment" className="book-btn">📅 Book Your Appointment Now</Link>
</div>
    </div>
  );
};

export default PPF;
