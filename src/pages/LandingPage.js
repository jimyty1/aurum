import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export default function LandingPage() {
  const previewImages = images.slice(0, 3);
  const carouselImages = images.slice(3, 6); // next 3 images

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // rotate every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div>
      <p>Discover our curated collection inspired by drama, contrast, and sculptural form.</p>

      {/* Static preview */}
      <div className="side-by-side-preview">
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-image" />
        ))}
      </div>

      {/* Autoplay Carousel */}
      <div className="autoplay-carousel">
        <img
          src={carouselImages[carouselIndex]}
          alt={`Carousel ${carouselIndex + 1}`}
          className="carousel-image"
        />
      </div>
    </div>
  );
}
