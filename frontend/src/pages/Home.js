import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

  // ✅ ADDED STATES
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike_name: "",
    message: ""
  });

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE SUBMIT (BACKEND CONNECTED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://kawasakidealershiprv.infinityfreeapp.com/bookRide.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.status === "success") {
        alert("Test Ride Booked 🎉");
        setShowForm(false);
      } else {
        alert("Error");
      }

    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="home">

      {/* 🔷 Navbar */}
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

      {/* 🔷 Hero Section */}
      <div className="hero">
        <div className="overlay">
          <h1 className="dealership-name">Kawasaki</h1>

          <p className="description">
            Experience power, performance and precision with Kawasaki. Where performance meets passion
          </p>

          <div className="buttons">
            <Link to="/garage">
              <button className="explore">Explore Bikes</button>
            </Link>

            <button>
              className="test-ride"
              onClick={() => setShowForm(true)}
            
              Book a Test Ride
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 Premium Features Section */}
      <div className="features">
        <h2 className="feature-heading">PREMIUM FEATURES</h2>

        <div className="bike-cards">
          <div className="card">
            <img src="https://www.motorbeam.com/wp-content/uploads/Kawasaki-ZX10R-front.jpg" alt="bike" />
          </div>

          <div className="card">
            <img src="https://cdn.carhp.in/news/4b581ea3-13c3-462d-95cc-16a860e8080e.png?format=webp" alt="bike" />
          </div>
        </div>

        <div className="explore-btn-container">
          <Link to="/garage">
            <button className="explore-btn">
              Explore More in Garage
            </button>
          </Link>
        </div>
      </div>

      {/* 🔥 POPUP FORM (ADDED) */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">

            <form onSubmit={handleSubmit}>
              <h2>Book Test Ride</h2>

              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
              />

              <input
                name="bike_name"
                placeholder="Bike Name (optional)"
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
              ></textarea>

              <button type="submit">Book</button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;