import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./cardetailing.css";
import { assets } from '@assets/icon';

const Cardetailing = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this will only run on mount

  return (
    <div className="maincontainer">
    
{/* here mark dont uncomment plz */}

      <div className="car-animation-container">
        <img className="car-animation" src={assets.logo_icon} alt="Car Animation" />
      </div>

      <h1 className="ppf-heading">From Every Angle—Flawless. 360 Detailing, Every Day Shine</h1>
      
      <p className="ppf-intro">
        At <strong>360 Car Detailing</strong>, we believe a truly flawless vehicle is more than just clean —<br />
        <strong>it’s meticulously cared for from every angle.</strong><br /><br />

        Our comprehensive <strong>360° Detailing Service</strong> is designed to deliver a <strong>showroom-quality finish</strong> every single day, while offering <strong>next-level protection</strong> for every surface of your car, inside and out.
        <br /><br />

        <strong>This is a full vehicle transformation.</strong><br /><br />

        Whether you're prepping for a <strong>car show</strong>, <strong>resale</strong>, or just want to drive something that <strong>feels brand new</strong>, our 360 Detailing package guarantees a vehicle that <strong>turns heads—and stays protected</strong>.
        <br /><br />

        Let your car reflect your standards—<strong>flawless, from every angle.</strong>
      </p>

      <h2 className="ppf-subheading">Why Choose Our 360 Car Detailing?</h2>
      <ul className="ppf-features">
        <li>✅ <strong>Gloss Like Glass</strong> – Achieve an ultra-deep, mirror-like finish that lasts for years.</li>
        <li>✅ <strong>Hydrophobic Protection</strong> – Repels water, mud, and dirt with ease for effortless cleaning.</li>
        <li>✅ <strong>UV & Chemical Resistance</strong> – Protects paint from sun damage, fading, and harsh contaminants.</li>
        <li>✅ <strong>Scratch Resistance</strong> – Adds a durable shield against light scratches and swirl marks.</li>
        <li>✅ <strong>Long-Term Durability</strong> – Unlike wax, ceramic coating provides protection that lasts for years, not weeks.</li>
        <li>✅ <strong>Low Maintenance Shine</strong> – Spend less time washing and more time showing off that flawless finish.</li>
      </ul>



      <h2 className="ppf-subheading">360 Car-Detailing</h2>
      <p>
      Your vehicle deserves the best—at 360 Car Detailing, certified experts ensure a flawless finish and full-spectrum protection, inside and out.     </p>

      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
    
          src="https://www.youtube.com/embed/fdwmyIjiDn0?rel=0"


          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="ppf-subheading">Complete 360 Car-Detailing Package Includes:</h2>
      <ul className="ppf-package">
      <li><br /><strong>🚗 EXTERIOR DETAILING</strong></li>
  <li>✅ <strong>Hand Wash & Foam Bath</strong> – Gentle, swirl-free cleaning using premium pH-balanced shampoos.</li>
  <li>✅ <strong>Paint Decontamination</strong> – Iron and tar removal followed by clay bar treatment for a silky-smooth surface.</li>
  <li>✅ <strong>Machine Polishing</strong> – Removes swirl marks, light scratches, and oxidation to restore depth and gloss.</li>
  <li>✅ <strong>HydroGuard Finish</strong> – Long-lasting hydrophobic shield for UV, dirt, and chemical protection.</li>
  <li>✅ <strong>Wheels & Tires</strong> – Deep clean, tire shine, and rim polish for a stand-out finish.</li>
  <li>✅ <strong>Rims & Tire Detailing</strong> – Precision cleaning, brake dust removal, and tire conditioning for a bold, like-new look.</li>
  <li>✅ <strong>Glass Treatment</strong> – Streak-free shine and optional water-repellent coating for visibility & safety.</li>

  <li><br /><strong>🧼 INTERIOR DETAILING</strong></li>
  <li>✅ <strong>Deep Vacuuming</strong> – Thorough cleaning of carpets, seats, trunk, and hard-to-reach areas.</li>
  <li>✅ <strong>Steam Cleaning</strong> – Kills bacteria and lifts embedded dirt from upholstery, mats, and vents.</li>
  <li>✅ <strong>Leather Treatment</strong> – Clean, condition, and protect leather surfaces to maintain softness and prevent cracking.</li>
  <li>✅ <strong>Dashboard & Console</strong> – Dust, sanitize, and dress with UV protectant for a fresh, non-greasy finish.</li>
  <li>✅ <strong>Headliner & Door Panels</strong> – Gentle but effective cleaning without compromising material integrity.</li>

  <li><br /><strong>🛠️ ENGINE BAY DETAILING</strong></li>
  <li>✅ <strong>Degrease & Clean</strong> – Safely remove grime and build-up.</li>
  <li>✅ <strong>Dressing</strong> – Restore a factory-fresh, dry-to-the-touch finish.</li>

  <li><br /><strong>✨ ADDITIONAL TOUCHES</strong></li>
  <li>✅ <strong>Odor Elimination</strong> – Ozone or enzyme treatments to neutralize unwanted smells.</li>
  <li>✅ <strong>Trim Restoration</strong> – Revive faded plastic trims and moldings.</li>
  <li>✅ <strong>Headlight Restoration</strong> – Clear foggy or yellowed lenses for improved aesthetics and night visibility.</li>
</ul>

      <h2>360 Car-Detailing</h2>
      <div className="ppf-video">
        <iframe
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/x6_wVtbhtsQ?rel=0"

          
          
          title="PPF Installation Video"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <p className="ppf-cta">
        Give your car the protection it deserves — with style, shine, and long-lasting value.
      </p>
      <h2 className="ppf-subheading">Which kind of Products We used for 360 Cae-Detailing:</h2>
      <ul className="ppf-package">
    
      <li><br /><strong>🚗 EXTERIOR DETAILING PRODUCTS</strong></li>

<li>✅ <strong>Shampoos & Soaps</strong></li>
<li>✔️ <strong>Autoglym Bodywork Shampoo (UK)</strong> – A premium shampoo that’s pH-balanced and gentle for a swirl-free clean.</li>
<li>✔️ <strong>Chemical Guys Honeydew Snow Foam (US)</strong> – High-foam shampoo that lifts dirt while being gentle on the paintwork.</li>

<li>✅ <strong>Paint Decontamination</strong></li>
<li>✔️ <strong>Auto Finesse Iron Out (UK)</strong> – Iron fallout remover that eliminates embedded iron particles and tar.</li>
<li>✔️ <strong>Sonax Fallout Cleaner (Germany/US)</strong> – A powerful cleaner that removes contaminants for a smooth finish.</li>

<li>✅ <strong>Polishing Products</strong></li>
<li>✔️ <strong>Griot's Garage Correcting Cream (US)</strong> – Polishing compound that removes light scratches, swirl marks, and restores gloss.</li>
<li>✔️ <strong>Menzerna 400 (UK)</strong> – Professional polish that leaves a mirror-like finish by removing defects.</li>

<li>✅ <strong>Hydrophobic & Protective Finishes</strong></li>
<li>✔️ <strong>Gtechniq C2v3 Liquid Crystal (UK)</strong> – High-performance finish that provides streak-free shine and protection.</li>
<li>✔️ <strong>Meguiar's Ultimate Fast Finish (US)</strong> – Quick spray that provides a water-repellent protective layer and glossy finish.</li>

<li>✅ <strong>Wheel & Tire Care</strong></li>
<li>✔️ <strong>Auto Finesse Imperial Wheel Cleaner (UK)</strong> – Safe wheel cleaner that removes brake dust without damaging surfaces.</li>
<li>✔️ <strong>Turtle Wax Ice Tire & Trim (US)</strong> – Non-greasy shine that provides lasting protection for tires and trim.</li>

<li>✅ <strong>Glass Treatment</strong></li>
<li>✔️ <strong>Rain-X Original Glass Treatment (US)</strong> – Effective water-repellent treatment that improves visibility and safety.</li>
<li>✔️ <strong>Autoglym Fast Glass (UK)</strong> – Professional-grade glass cleaner that provides a streak-free finish and clarity.</li>

<li><br /><strong>🧼 INTERIOR DETAILING PRODUCTS</strong></li>

<li>✅ <strong>Upholstery & Fabric Cleaners</strong></li>
<li>✔️ <strong>Chemical Guys Fabric Clean (US)</strong> – Deep fabric cleaner that removes stains and odors from carpets and upholstery.</li>
<li>✔️ <strong>Autoglym Interior Shampoo (UK)</strong> – pH-balanced cleaner safe for use on all interior fabrics and mats.</li>

<li>✅ <strong>Leather Care</strong></li>
<li>✔️ <strong>Leather Honey Leather Cleaner (US)</strong> – Gentle cleaner that lifts dirt without damaging leather surfaces.</li>
<li>✔️ <strong>Autoglym Leather Cleaner & Conditioner (UK)</strong> – Cleans and nourishes leather, maintaining softness and preventing cracking.</li>

<li>✅ <strong>Dashboard & Trim Care</strong></li>
<li>✔️ <strong>Meguiar's Quik Interior Detailer (US)</strong> – Quick detailer that cleans and protects surfaces, leaving a non-greasy finish.</li>
<li>✔️ <strong>Autoglym Interior Quick Clean (UK)</strong> – Spray cleaner designed to refresh and clean all interior surfaces with minimal effort.</li>

<li><br /><strong>🛠️ ENGINE BAY DETAILING PRODUCTS</strong></li>

<li>✅ <strong>Engine Degreasers</strong></li>
<li>✔️ <strong>Valet Pro Citrus Prewash (UK)</strong> – Safe citrus-based degreaser designed to remove grime from engine compartments.</li>
<li>✔️ <strong>Chemical Guys Heavy Duty Degreaser (US)</strong> – Strong degreaser that cleans and prepares engine bays without harsh chemicals.</li>

<li>✅ <strong>Plastic & Rubber Dressings</strong></li>
<li>✔️ <strong>Gtechniq C4 Permanent Trim Restorer (UK)</strong> – Restores and protects plastic trim, preventing fading over time.</li>
<li>✔️ <strong>Meguiar's Ultimate Black (US)</strong> – Long-lasting dressing that restores the deep black look of plastic and rubber.</li>

<li><br /><strong>✨ ADDITIONAL TOUCHES</strong></li>

<li>✅ <strong>Odor Elimination</strong></li>
<li>✔️ <strong>Ozium Air Sanitizer (US)</strong> – Odor eliminator that neutralizes unwanted smells and purifies the vehicle’s air.</li>
<li>✔️ <strong>Autoglym Interior Detailing Wipes (UK)</strong> – Quick wipes that clean surfaces and eliminate odors, leaving a fresh fragrance.</li>

<li>✅ <strong>Headlight Restoration</strong></li>
<li>✔️ <strong>Sylvania Headlight Restoration Kit (US)</strong> – DIY kit that restores foggy headlights, improving night visibility.</li>
<li>✔️ <strong>Autoglym Headlight Restorer (UK)</strong> – Specialized product to restore cloudy headlights and enhance visibility.</li>

  <li><br /><strong>✨ ADDITIONAL TOUCHES</strong></li>
  
  <li>✅ <strong>Odor Elimination</strong></li>
  <li>✔️ <strong>Ozium Air Sanitizer (US)</strong> – A powerful odor eliminator that neutralizes unwanted smells and purifies the air inside the vehicle.</li>
  <li>✔️ <strong>Autoglym Interior Detailing Wipes (UK)</strong> – Quick wipes that clean surfaces and eliminate odors while leaving a fresh fragrance.</li>
  
  <li>✅ <strong>Headlight Restoration</strong></li>
  <li>✔️ <strong>Sylvania Headlight Restoration Kit (US)</strong> – A DIY kit that helps restore clarity to foggy or yellowed headlights for improved night driving.</li>
  <li>✔️ <strong>Autoglym Headlight Restorer (UK)</strong> – A specialized product to restore cloudy headlights and improve their performance.</li>


<h2 className="colored-ppf-note">
  🎨 Drive Clean, Drive Protected <span> We Bring the Shine, You Bring the</span> Ride!
</h2>


      </ul>
      <div className="ppf-button-container">
  <a href="/appointment" className="book-btn">📅 Book Your Appointment Now</a>
</div>


      <h2 className="ppf-subheading">Gallery: Our 360 Car-Detailing Work</h2>
      <div className="ppf-gallery">
  {[assets.d1,assets.d2,assets.d3,assets.d4,assets.d5,assets.d6,assets.d7,assets.d8,assets.d9,].map((img, index) => (
    <div className="img-wrapper" key={index}>
      <img src={img} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>

      <h2 className="ppf-subheading">"100% Trustworthy, Every Time – Quality You Can Rely On!"</h2>
      <div className="ppf-button-container">
  <a href="/appointment" className="book-btn">📅 Book Your Appointment Now</a>
</div>
    </div>
  );
};

export default Cardetailing;
