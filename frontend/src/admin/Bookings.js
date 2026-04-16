import { useEffect, useState } from "react";
import axios from "axios";
import "./Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost/kawasaki-api/getBookings.php"
      );
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteBooking = async (id) => {
  if (!window.confirm("Delete this booking?")) return;

  try {
    const res = await axios.post(
      "http://localhost/kawasaki-api/deleteBooking.php",
      { id: id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.status === "success") {
      alert("Deleted ✅");
      fetchBookings(); // refresh table
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="bookings">
      <h2>Test Ride Bookings</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Bike</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.name}</td>
              <td>{b.email}</td>
              <td>{b.phone}</td>
              <td>{b.bike_name}</td>
              <td>{b.message}</td>
              <td>
  <button onClick={() => deleteBooking(b.id)}>
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}