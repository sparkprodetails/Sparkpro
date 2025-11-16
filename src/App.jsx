import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css"; // Global styles
import Hero from "./Components/Hero/Hero";
import PPF from "./Components/Services/PPF/ppf"; // Import the PPF component
import Cermaiccoating from "./Components/Services/Cermaiccoating/Cermaiccoating";
import Glasscoating from "./Components/Services/Glasscoating/Glasscoating";
import Cardetailing from "./Components/Services/Cardetailing/cardetailing";
import Dechrome from "./Components/Services/Dechrome/dechrome";
import Appointment from "./Components/Appointment/appointment";
import Footer from "./Components/Footer/footer"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactIcons from "./Components/Contact/Contact";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Add a route for the root path */}
          <Route path="/services/ppf" element={<PPF />} />
          <Route path="/services/ceramic-coating" element={<Cermaiccoating />} />
          <Route path="/services/glass-coating" element={<Glasscoating />} />
          <Route path="/services/detailing" element={<Cardetailing />} />
          <Route path="/services/chromic-rims" element={<Dechrome />} />   
          <Route path="/appointment" element={<Appointment />} /> 
        </Routes>
        {/* Footer  */}
        <Footer />
        <ContactIcons/>
      </div>
    </Router>
  );
}

export default App;
