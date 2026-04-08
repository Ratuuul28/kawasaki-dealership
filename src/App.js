import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import TestRide from "./pages/TestRide";
import BikeDetails from "./pages/BikeDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Garage from "./pages/Garage";
import Bookings from "./admin/Bookings";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testride" element={<TestRide />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/bike/:id" element={<BikeDetails />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;