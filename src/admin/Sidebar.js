import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h1 className="text-2xl mb-6 text-green-500">Admin Panel</h1>

      <ul className="space-y-4">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/bikes">Bikes</Link></li>
        <li><Link to="/admin/bookings">Bookings</Link></li>
        <li><Link to="/admin/messages">Messages</Link></li>
      </ul>
    </div>
  );
}