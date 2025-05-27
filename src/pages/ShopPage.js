import React, { useEffect, useState } from 'react';
import '../css/ShopPage.css';
import {Link} from "react-router-dom";

// Import all images from clothing folder
const importAll = (r) => {
  return r.keys().map((key) => ({
    src: r(key),
    name: key.replace('./', ''),
  }));
};
const allImages = importAll(require.context('../assets/clothes', false, /\.(png|jpe?g|webp)$/));

// Group images by garment number
const groupByGarment = (images) => {
  const groups = {};

  images.forEach(({ name, src }) => {
    const match = name.match(/^\((\d+)/); // fixed regex
    if (!match) return;
    const base = match[1]; // e.g., '1' from '(1.2).png'

    if (!groups[base]) groups[base] = [];
    groups[base].push({ src, name });
  });

  // Sort each group by filename
  Object.values(groups).forEach((group) => {
    group.sort((a, b) => a.name.localeCompare(b.name));
  });

  return groups;
};


const garments = groupByGarment(allImages);

export default function ShopPage() {
  return (
    <div className="shop-page">
      <h2>Shop Our Collection</h2>
      <div className="garment-grid">
        {Object.entries(garments).map(([key, imgs]) =>
          <Link to={`/garment/${key}`} key={key}>
            {imgs.length === 1 ? (
              <img src={imgs[0].src} alt={`Garment ${key}`} className="garment-image" />
            ) : (
              <Carousel images={imgs.map((i) => i.src)} />
            )}
          </Link>
        )}
      </div>
    </div>
  );
}

// Mini Carousel Component
function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // time per image

    return () => clearInterval(timer);
  }, [hovered, images.length]);

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={images[index]} alt="Garment View" className="garment-image" />
    </div>
  );
}

