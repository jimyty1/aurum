import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export default function LandingPage() {
  const previewImages = images.slice(2, 5);
  const largeImage = images[15]
  const remainingImages = images.slice(9,33);

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

      {/* Grid 1: 1 left, 2 middle, 2 right */}
      <div className="custom-grid-1">
        <div className="grid-col left">
          <img src={images[8]} alt="Image 8" className="grid-img" />
          <img src={images[9]} alt="Image 9" className="grid-img" />
        </div>
        <div className="grid-col middle">
          <img src={images[10]} alt="Image 9" className="grid-img" />
          <img src={images[11]} alt="Image 10" className="grid-img" />
        </div>
        <div className="grid-col right">
          <img src={images[12]} alt="Image 11" className="grid-img" />
          <img src={images[13]} alt="Image 12" className="grid-img" />
        </div>
      </div>

      {/* Grid 2: 2 left, 2 middle, 1 right */}
      <div className="custom-grid-2">
        <div className="grid-col left">
          <img src={images[14]} alt="Image 13" className="grid-img" />
          <img src={images[15]} alt="Image 14" className="grid-img" />
        </div>
        <div className="grid-col middle">
          <img src={images[16]} alt="Image 5" className="grid-img" />
          <img src={images[17]} alt="Image 6" className="grid-img" />
        </div>
        <div className="grid-col right">
          <img src={images[18]} alt="Image 7" className="grid-img" />
          <img src={images[19]} alt="Image 7" className="grid-img" />
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
