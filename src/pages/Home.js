import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="logo">KAWASAKI</div>
        <div className="nav-links">
          <Link to="/about">
  <button>About</button>
</Link>
          <Link to="/contact">
  <button>Contact Us</button>
</Link>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <div className="hero">
        <div className="overlay">
          <h1 className="dealership-name">Kawasaki Chandigarh</h1>
          <p className="description">
            Experience power, performance and precision with Kawasaki. Where perfomance meets passion
          </p>

          <div className="buttons">
            <Link to="/garage">
  <button className="explore">Explore Bikes</button>
</Link>
            <Link to="/testride">
  <button className="test-ride">Book a Test Ride</button>
</Link>
          </div>
        </div>
      </div>

      {/* 🔹 Premium Features Section */}
      <div className="features">
        <h2 className="feature-heading">PREMIUM FEATURES</h2>

        <div className="bike-cards">

          <div className="card">
            <img src="https://www.motorbeam.com/wp-content/uploads/Kawasaki-ZX10R-front.jpg" alt="bike" />
            <Link to="/bike">
  <button>View Details</button>
</Link>
          </div>

          <div className="card">
            <img src="https://cdn.carhp.in/news/4b581ea3-13c3-462d-95cc-16a860e8080e.png?format=webp" alt="bike" />
            <button>View Details</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;