import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import MagneticCursor from "./Components/MagneticCursor";
import ContactIcons from "./Components/Contact/Contact";
import Footer from "./Components/Footer/footer";

// Code-split all heavy route components — only loaded when visited
const Hero        = lazy(() => import("./Components/Hero/Hero"));
const PPF         = lazy(() => import("./Components/Services/PPF/ppf"));
const Cermaiccoating = lazy(() => import("./Components/Services/Cermaiccoating/Cermaiccoating"));
const Glasscoating   = lazy(() => import("./Components/Services/Glasscoating/Glasscoating"));
const Cardetailing   = lazy(() => import("./Components/Services/Cardetailing/cardetailing"));
const Dechrome       = lazy(() => import("./Components/Services/Dechrome/dechrome"));
const Appointment    = lazy(() => import("./Components/Appointment/appointment"));

// Minimal loading fallback — invisible to user, does not flash any content
const PageLoader = () => (
  <div style={{ minHeight: "100vh", background: "#000" }} />
);

function App() {
  return (
    <Router>
      <div>
        <MagneticCursor />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services/ppf" element={<PPF />} />
            <Route path="/services/ceramic-coating" element={<Cermaiccoating />} />
            <Route path="/services/glass-coating" element={<Glasscoating />} />
            <Route path="/services/detailing" element={<Cardetailing />} />
            <Route path="/services/chromic-rims" element={<Dechrome />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </Suspense>
        <Footer />
        <ContactIcons />
      </div>
    </Router>
  );
}

export default App;
