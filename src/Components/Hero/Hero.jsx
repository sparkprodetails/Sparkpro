import React, { useEffect } from "react";
import "./Hero.css";
import { assets } from "../../assets/icon";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Best PPF in Islamabad & Rawalpindi | Car Detailing & Ceramic Coating
        </title>

     {/* ///////// DONT Remove this Part or dont toch this section plz */}

      </Helmet>

      <div className="hero-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          poster={assets.G8} 
          title="Background promotional video" 
          aria-hidden="true"
        >
          <source src={assets.videoFile} type="video/mp4" />
        </video>

        <div className="ppf-hero">
          <h1 className="h1-hero">Premium Car Care Services in Islamabad & Rawalpindi</h1>
          <h3 className="h2-hero">
            Premium PPF Imported from the UK and US – Guaranteed Protection for Your Vehicle
          </h3>
          <h3 className="h2-hero">
            Ceramic Coating: "Unmatched protection and shine – for a finish that lasts."
          </h3>
          <h3 className="h2-hero">
            Glass Coating: "Crystal-clear protection – keep your glass spotless and durable."
          </h3>
          <h3 className="h2-hero">
            Car Detailing: "Restore your vehicle to showroom condition – inside and out."
          </h3>
          <h3 className="h2-hero">
            Chromic Rims: "Precision-engineered, eye-catching rims imported for perfection."
          </h3>
        </div>
      </div>

      {/* Service Sections */}
      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>PPF Overview</h3>
          <img className="chrome-img-hero" src={assets.ppfmain_icon} alt="PPF image" />
          <p>
            Our Paint Protection Film (PPF) is sourced directly from the UK and US, ensuring the highest quality and performance for your vehicle. It offers unbeatable protection against scratches, chips, and environmental damages, making it a long-lasting investment for your car’s exterior.
          </p>
          <Link className="Link-for-Go" to="/services/ppf">
            <h2 className="click-fro-ppg-section">Click here for PPF services</h2>
          </Link>
        </div>
      </section>

      <section id="ppf-overview" className="hero-services-content">
        <div className="hero-ppf-content">
          <h3>Ceramic Coating Overview</h3>
          <img className="chrome-img-hero" src={assets.ceramic_icon} alt="Ceramic Coating Description" />
          <p>
            Ceramic coating for cars is a high-performance liquid polymer applied to the vehicle’s exterior, creating a protective layer that offers long-lasting protection against dirt, water, UV rays, and other environmental contaminants.
          </p>
          <Link className="Link-for-Go" to="/services/ceramic-coating">
            <h2 className="click-fro-ppg-section">Click here for Ceramic Coating services</h2>
          </Link>
        </div>
        </section>

        <section id="ppf-overview" className="hero-services-content">
          <div className="hero-ppf-content">
            <h3>Car Deep Detailing Overview</h3>
            <img className="chrome-img-hero" src={assets.detailing_icon} alt="Car Deep Detailing image" />
            <p>
              Car deep detailing is a comprehensive cleaning and restoration process designed to bring out the best in your vehicle’s appearance. Unlike a regular car wash, deep detailing goes beyond the surface to meticulously clean and restore every nook and cranny of your car. From the exterior to the interior, this service includes polishing, paint correction, engine bay cleaning, leather conditioning, upholstery treatment, and much more. The result? A showroom-worthy finish with enhanced protection against dirt, stains, and wear. US and UK-based detailing services offer expert care, using premium products to restore your vehicle’s shine, leaving it looking fresh and pristine.
            </p>
            <Link className="Link-for-Go" to="/services/detailing">
              <h2 className="click-fro-ppg-section">Click here for Car Deep Detailing services</h2>
            </Link>
          </div>
        </section>

        <section id="ppf-overview" className="hero-services-content">
          <div className="hero-ppf-content">
            <h3>Glass Coating Overview</h3>
            <img className="chrome-img-hero" src={assets.glass_icon} alt="Glass Coating image" />
            <p>
              Glass coating for cars is a protective treatment applied to the vehicle’s exterior, creating a durable, hydrophobic layer that offers numerous benefits. It enhances water repellency, causing rain and water to bead up and roll off, improving visibility and keeping the surface cleaner. The coating also helps repel contaminants like dirt, bird droppings, tree sap, and road salts, making it easier to maintain the vehicle’s exterior. Additionally, it provides a layer of protection against minor scratches and enhances the vehicle's shine, giving it a glossy, polished look. With glass coating, car owners enjoy easier cleaning, less frequent washing, and long-lasting protection for their vehicle’s finish.
            </p>
            <Link className="Link-for-Go" to="/services/glass-coating">
              <h2 className="click-fro-ppg-section">Click here for Glass Coating services</h2>
            </Link>
          </div>
        </section>

        <section id="ppf-overview" className="hero-services-content">
          <div className="hero-ppf-content">
            <h3>Solar Tinting Overview</h3>
            <img className="chrome-img-hero" src={assets.tint_icon} alt="Solar Tinting image" />
            <p>
              Solar tinting is a popular window treatment for cars that involves applying a special film to the vehicle’s windows, including the front and rear glass. This film is designed to reduce the amount of heat, UV rays, and glare entering the vehicle, providing a more comfortable driving experience. Solar tinting helps keep the interior cooler by blocking out a significant portion of solar heat, reducing the need for air conditioning. Additionally, it protects the car’s upholstery and interior from UV damage, which can cause fading and deterioration over time. The tint also enhances privacy and adds a sleek, stylish look to the car’s exterior.
            </p>
            <Link className="Link-for-Go" to="/appointment">
              <h2 className="click-fro-ppg-section">Click here for Solar Tinting services</h2>
            </Link>
          </div>
        </section>

        <section id="ppf-overview" className="hero-services-content">
          <div className="hero-ppf-content">
            <h3>DeChroming Rims Overview</h3>
            <img className="chrome-img-hero" src={assets.rims_icon} alt="DeChroming Rims image" />
            <p>
              Dechroming rims is a popular customization technique where the color of the vehicle’s rims is changed using a high-quality, adhesive film or sheet. This process allows car owners to give their rims a fresh, stylish look without permanently altering the metal. The colored film is applied over the rims, providing a sleek, glossy finish. One of the key benefits of dechroming rims is that, if desired, the film can be removed months or even years later without damaging the rims themselves, preserving their original condition. This method offers a non-permanent, cost-effective way to enhance the appearance of your vehicle while maintaining the quality of the rims.
            </p>
            <Link className="Link-for-Go" to="/services/chromic-rims">
              <h2 className="click-fro-ppg-section">Click here for DeChroming Rims services</h2>
            </Link>
          </div>
        </section>
      </>
    );
  };

  export default Hero;
