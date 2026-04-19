import { useState } from "react";

function TestRide() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike_name: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://kawasakidealershiprv.infinityfreeapp.com/bookRide.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if(data.status === "success"){
      alert("Test Ride Booked 🚀");
    } else {
      alert("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="bike_name" placeholder="Bike Name" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

      <button type="submit">Book Test Ride</button>
    </form>
  );
}

export default TestRide;