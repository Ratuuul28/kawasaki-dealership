import React, { useEffect, useState } from "react";
import "./Garage.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function Garage() {

  // STEP 1: state
  const [bikes, setBikes] = useState([]);

  // STEP 2: fetch data
  useEffect(() => {
    fetch("http://127.0.0.1/kawasaki-api/bikes.php")

    .then(res => res.json())
      .then(data => setBikes(data));
  }, []);

  return (
    <div className="garage">

      <Navbar />

      <h1 className="garage-heading">GARAGE</h1>

      <div className="garage-grid">
        {bikes.map((bike) => (
          <div className="garage-card" key={bike.id}>

            {/* ⚠️ image fix */}
            <img src={bike.image} alt={bike.name} />

            <h3>{bike.name}</h3>

            {/* ⚠️ backend me engine/power nahi hai */}
            <p>{bike.description}</p>

            <h4>{bike.price}</h4>

            <Link to={`/bike/${bike.id}`}>
              <button>View More</button>
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Garage;