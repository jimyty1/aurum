import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export default function LandingPage() {
  const previewImages = images.slice(2, 5); // 3 images
  const largeImage = images[5];             // 1 image
  const grid1Images = images.slice(6, 12);  // 6 images
  const grid2Images = images.slice(12, 18); // 6 images
  const remainingImages = images.slice(18); // rest

  return (
    <div>
      <div className='text-top'>
        Discover our curated collection inspired by drama, contrast, and sculptural form.
      </div>

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

      {/* Grid 1: 2 left, 2 middle, 2 right */}
      <div className="custom-grid-1">
        <div className="grid-col left">
          <img src={grid1Images[0]} alt="Image A" className="grid-img" />
          <img src={grid1Images[1]} alt="Image B" className="grid-img" />
        </div>
        <div className="grid-col middle">
          <img src={grid1Images[2]} alt="Image C" className="grid-img" />
          <img src={grid1Images[3]} alt="Image D" className="grid-img" />
        </div>
        <div className="grid-col right">
          <img src={grid1Images[4]} alt="Image E" className="grid-img" />
          <img src={grid1Images[5]} alt="Image F" className="grid-img" />
        </div>
      </div>

      {/* Grid 2: 2 left, 2 middle, 2 right */}
      <div className="custom-grid-2">
        <div className="grid-col left">
          <img src={grid2Images[0]} alt="Image G" className="grid-img" />
          <img src={grid2Images[1]} alt="Image H" className="grid-img" />
        </div>
        <div className="grid-col middle">
          <img src={grid2Images[2]} alt="Image I" className="grid-img" />
          <img src={grid2Images[3]} alt="Image J" className="grid-img" />
        </div>
        <div className="grid-col right">
          <img src={grid2Images[4]} alt="Image K" className="grid-img" />
          <img src={grid2Images[5]} alt="Image L" className="grid-img" />
        </div>
      </div>

      <div className="side-by-side-preview">
        {remainingImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-image" />
        ))}
      </div>
    </div>
  );
}
