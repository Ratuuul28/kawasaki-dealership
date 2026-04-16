import { useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard() {

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");

    if (!isAdmin) {
      window.location.href = "/admin/login";
    }
  }, []);

  return (
    <div className="dashboard">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Kawasaki Admin</h2>

        <ul>
          <li>Dashboard</li>
            <li onClick={() => window.location.href="/admin/bookings"}>
  Bookings
</li>
          <li>Bikes</li>
          <li>Messages</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1>Welcome Admin 👋</h1>

        <div className="cards">
          <div className="card">Total Bikes</div>
          <div className="card">Bookings</div>
          <div className="card">Messages</div>
        </div>
      </div>

    </div>
  );
}