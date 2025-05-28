import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export default function LandingPage() {
  const previewImages = images.slice(0, 3);
  const largeImage = images[4]
  const remainingImages = images.slice(5,8);

  return (
    <div>
      <div style={{marginLeft:'20px'}}>Discover our curated collection inspired by drama, contrast, and sculptural form.</div>

      <div className="side-by-side-preview">
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-image" />
        ))}
      </div>
      <div className="banner-section">
        <img className="banner-img" src={largeImage} alt="Banner" />

        <div className="quote-overlay">
          <div className="quote-line">WHERE</div>
          <div className="quote-line indent">HERITAGE</div>
          <div className="quote-line">MEETS</div>
          <div className="quote-line indent">INNOVATION</div>
        </div>
      </div>


      <div className="three-image-grid">
        <img src={images[8]} alt="Image 8" className="grid-image img-left" />
        <img src={images[9]} alt="Image 9" className="grid-image img-top-right" />
        <img src={images[10]} alt="Image 10" className="grid-image img-bottom-right" />
      </div>
      <div className="three-image-grid">
        <img src={images[5]} alt="Image 5" className="grid-image img-left" />
        <img src={images[6]} alt="Image 6" className="grid-image img-top-right" />
        <img src={images[7]} alt="Image 7" className="grid-image img-bottom-right" />
      </div>


    </div>
  );
}
