import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BikeDetails.css";
import Navbar from "./components/Navbar";

const bikes = {
  zx10r: {
    name: "Ninja ZX-10R",
    price: "₹16,00,000",
    desc: "Superbike built for speed and track performance.",
    images: [
      "https://cloudfront-us-east-1.images.arcpublishing.com/octane/UCMNJ4R7ZBHE5GYCGCIERAWWPM.jpg"
    ],
    specs: {
      engine: "998cc",
      power: "200 HP",
      torque: "114 Nm",
      weight: "207 kg"
    }
  },

  z900: {
    name: "Z900",
    price: "₹9,00,000",
    desc: "Aggressive streetfighter with powerful performance.",
    images: [
      "https://i.cdn.newsbytesapp.com/images/l63620220914141712.jpeg"
    ],
    specs: {
      engine: "948cc",
      power: "125 HP",
      torque: "98 Nm",
      weight: "212 kg"
    }
  },

  ninja650: {
    name: "Ninja 650",
    price: "₹7,50,000",
    desc: "Perfect balance of power and comfort.",
    images: [
      "https://imgcdn.zigwheels.co.th/large/gallery/exterior/91/1693/kawasaki-ninja-650-marketing-image-721504.jpg"
    ],
    specs: {
      engine: "649cc",
      power: "67 HP",
      torque: "64 Nm",
      weight: "196 kg"
    }
  },

  z650: {
    name: "Z650",
    price: "₹6,50,000",
    desc: "Lightweight streetfighter with agile performance.",
    images: [
      "https://imgd.aeplcdn.com/642x361/n/cw/ec/211909/z650-right-front-three-quarter.avif?isig=0&q=75"
    ],
    specs: {
      engine: "649cc",
      power: "67 HP",
      torque: "64 Nm",
      weight: "187 kg"
    }
  },

  ninja400: {
    name: "Ninja 400",
    price: "₹5,00,000",
    desc: "Entry-level sportbike with great performance.",
    images: [
      "https://wallpapercat.com/w/full/6/b/9/1742651-1920x1080-desktop-1080p-kawasaki-ninja-400-background-image.jpg"
    ],
    specs: {
      engine: "399cc",
      power: "49 HP",
      torque: "38 Nm",
      weight: "168 kg"
    }
  },

  versys650: {
    name: "Versys 650",
    price: "₹7,70,000",
    desc: "Adventure touring bike with comfort and power.",
    images: [
      "https://asset.autocarindia.com/static/news/images/20251226_061801_3e2744fa.jpg?w=728&q=75"
    ],
    specs: {
      engine: "649cc",
      power: "67 HP",
      torque: "61 Nm",
      weight: "219 kg"
    }
  },

  zh2: {
    name: "Z H2",
    price: "₹21,00,000",
    desc: "Supercharged naked beast.",
    images: [
      "https://content2.kawasaki.com/ContentStorage/KMJ/ProductTopFeature/1337/eab6feb7-b798-4c73-b0d5-363a7d04222b.jpg?w=800"
    ],
    specs: {
      engine: "998cc",
      power: "200 HP",
      torque: "137 Nm",
      weight: "239 kg"
    }
  },

  h2: {
    name: "Ninja H2",
    price: "₹35,00,000",
    desc: "Supercharged hyperbike.",
    images: [
      "https://wallpapercat.com/w/full/5/9/9/1739947-2999x1996-desktop-hd-kawasaki-ninja-h2-wallpaper-photo.jpg"
    ],
    specs: {
      engine: "998cc",
      power: "310 HP",
      torque: "165 Nm",
      weight: "238 kg"
    }
  },

  zx6r: {
    name: "ZX-6R",
    price: "₹12,48,000",
    desc: "Sporty 600.",
    images: [
      "https://i.ytimg.com/vi/S0M9KGjBVFI/sddefault.jpg?v=678cb16b"
    ],
    specs: {
      engine: "636cc",
      power: "122 HP",
      torque: "69 Nm",
      weight: "198 kg"
    }
  }
};

function BikeDetails() {
  const { id } = useParams();
  const bike = bikes[id];

  const selectedImage = bike.images[0];

  if (!bike) {
    return <h1 style={{ color: "white" }}>Bike not found</h1>;
  }

 return (
  <div className="bike-details">

    <Navbar />

    {/* 🔥 HERO SECTION */}
    <div className="bike-hero">
  <img src={bike.images[0]} alt="bike" />
  <div className="overlay">
    <h1>{bike.name}</h1>
    <h2>{bike.price}</h2>
  </div>
  <div className="fade-bottom"></div>
</div>

    {/* 🔥 SPECS GRID */}
    <div className="specs-section">

      <h2 className="specs-heading">Specifications</h2>

      <div className="specs-grid">
        <div className="spec-card">
          <h3>Engine</h3>
          <p>{bike.specs.engine}</p>
        </div>

        <div className="spec-card">
          <h3>Power</h3>
          <p>{bike.specs.power}</p>
        </div>

        <div className="spec-card">
          <h3>Torque</h3>
          <p>{bike.specs.torque}</p>
        </div>

        <div className="spec-card">
          <h3>Weight</h3>
          <p>{bike.specs.weight}</p>
        </div>
      </div>

    </div>

  </div>
);
}

export default BikeDetails;