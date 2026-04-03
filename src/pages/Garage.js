import React from "react";
import "./Garage.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const bikes = [
  {
    id: "zx10r",
    name: "Ninja ZX-10R",
    engine: "998cc",
    power: "200 HP",
    price: "₹16L",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/octane/UCMNJ4R7ZBHE5GYCGCIERAWWPM.jpg"
  },
  {
    id: "z900",
    name: "Z900",
    engine: "948cc",
    power: "125 HP",
    price: "₹9L",
    img: "https://4kwallpapers.com/images/wallpapers/kawasaki-z900-5k-2560x1080-14777.jpg"
  },
  {
    id: "ninja650",
    name: "Ninja 650",
    engine: "649cc",
    power: "67 HP",
    price: "₹7.5L",
    img: "https://imgcdn.zigwheels.co.th/large/gallery/exterior/91/1693/kawasaki-ninja-650-marketing-image-721504.jpg"
  },
  {
    id: "z650",
    name: "Z650",
    engine: "649cc",
    power: "67 HP",
    price: "₹6.5L",
    img: "https://imgd.aeplcdn.com/642x361/n/cw/ec/211909/z650-right-front-three-quarter.avif?isig=0&q=75"
  },
  {
    id: "ninja400",
    name: "Ninja 400",
    engine: "399cc",
    power: "49 HP",
    price: "₹5L",
    img: "https://wallpapercat.com/w/full/6/b/9/1742651-1920x1080-desktop-1080p-kawasaki-ninja-400-background-image.jpg"
  },
  {
    id: "versys650",
    name: "Versys 650",
    engine: "649cc",
    power: "67 HP",
    price: "₹7.7L",
    img: "https://asset.autocarindia.com/static/news/images/20251226_061801_3e2744fa.jpg?w=728&q=75"
  },
  {
    id: "zh2",
    name: "Z H2",
    engine: "998cc",
    power: "200 HP",
    price: "₹21L",
    img: "https://content2.kawasaki.com/ContentStorage/KMJ/ProductTopFeature/1337/eab6feb7-b798-4c73-b0d5-363a7d04222b.jpg?w=800"
  },
  {
    id: "h2",
    name: "Ninja H2",
    engine: "998cc",
    power: "310 HP",
    price: "₹35L",
    img: "https://wallpapercat.com/w/full/5/9/9/1739947-2999x1996-desktop-hd-kawasaki-ninja-h2-wallpaper-photo.jpg"
  },
  {
    id: "zx6r",
    name: "ZX-6R",
    engine: "636cc",
    power: "122 HP",
    price: "₹12L",
    img: "https://i.ytimg.com/vi/S0M9KGjBVFI/sddefault.jpg?v=678cb16b"
  }
];

function Garage() {
  return (
    <div className="garage">

      <Navbar />

      <h1 className="garage-heading">GARAGE</h1>

      <div className="garage-grid">
        {bikes.map((bike) => (
          <div className="garage-card" key={bike.id}>
            <img src={bike.img} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.engine} | {bike.power}</p>
            <h4>{bike.price}</h4>

            {/* 🔥 IMPORTANT LINK */}
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