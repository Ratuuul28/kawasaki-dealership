import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import TestRide from "./pages/TestRide";
import BikeDetails from "./pages/BikeDetails";

import Home from "./pages/Home";
import About from "./pages/About";

import Garage from "./pages/Garage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testride" element={<TestRide />} />
        <Route path="/bike/:id" element={<BikeDetails />} />
        <Route path="/garage" element={<Garage />} />
      </Routes>
    </Router>
  );
}

export default App;