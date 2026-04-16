import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BikeDetails.css";
import Navbar from "./components/Navbar";

function BikeDetails() {

  const { id } = useParams();

  const [bike, setBike] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike_name: "",
    message: ""
  });

  useEffect(() => {
    fetch(`http://localhost/backend/kawasaki-api/bike.php?id=${id}`)
      .then(res => res.json())
      .then(data => setBike(data))
      .catch(err => console.error("Bike Fetch Error:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED HANDLE SUBMIT (SAFE + ERROR HANDLING ADDED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const finalData = {
        ...form,
        bike_name: bike.name
      };

      const res = await fetch(`http://localhost/backend/kawasaki-api/bookRide.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalData)
      });

      const data = await res.json();

      if (data.message === "success") {
        alert("Test Ride Booked 🎉");
        setShowForm(false);
      } else {
        alert(data.message || "Error");
      }

    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Server not responding");
    }
  };

  if (!bike) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar/>
      <div className="details-container">

        <div className="top-section">
          <div className="left">
            <img src={bike.image} alt={bike.name} />
          </div>

          <div className="right">
            <h1>{bike.name}</h1>
            <p>{bike.description}</p>
            <h2 className="price">₹{bike.price}</h2>
          </div>
        </div>

        <h2 className="spec-heading">Specifications</h2>
        <div className="specs-grid">
          <div className="spec-card">
            <h3>Power</h3>
            <p>{bike.power}</p>
          </div>

          <div className="spec-card">
            <h3>Torque</h3>
            <p>{bike.torque}</p>
          </div>

          <div className="spec-card">
            <h3>Weight</h3>
            <p>{bike.weight}</p>
          </div>

          <div className="spec-card">
            <h3>Cylinders</h3>
            <p>{bike.cylinders}</p>
          </div>
        </div>

        <div className="buttons">
          <button
  className="book"
  onClick={() => {
    setMode("book");
    setShowForm(true);
  }}
>
  Book Now
</button>

<button
  onClick={() => {
    setMode("test");
    setShowForm(true);
  }}
>
  Experience It
</button>
        </div>

      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">

            <form onSubmit={handleSubmit}>
              <h2>{mode === "book" ? "Book Bike" : "Book Test Ride"}</h2>

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
                value={bike.name}
                readOnly
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
    </>
  );
}

export default BikeDetails;