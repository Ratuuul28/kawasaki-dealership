import React from "react";
import "./TestRide.css";

function TestRide() {
  return (
    <div className="test-container">
      <h1>Book a Test Ride</h1>

      <form className="test-form">
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />

        <select required>
          <option value="">Select Bike</option>
          <option>Ninja ZX-10R</option>
          <option>Z900</option>
          <option>Ninja 650</option>
        </select>

        <input type="date" required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default TestRide;