import axios from "axios";
import { useState } from "react";
import "./Login.css"; // 👈 make sure this file exists

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Sending:", email, password);

    try {
      const res = await axios.post(
        "http://localhost/kawasaki-api/login.php",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", res.data);

      if (res.data.status === "success") {
        alert("Login Success ✅");
        localStorage.setItem("admin", "true");
        window.location.href = "/admin/dashboard";
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}