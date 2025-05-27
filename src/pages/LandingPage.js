import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export default function LandingPage() {
  const previewImages = images.slice(0, 3);
  const largeImage = images[4]
  const remainingImages = images.slice(5);

  return (
    <div>
      <div style={{marginLeft:'20px'}}>Discover our curated collection inspired by drama, contrast, and sculptural form.</div>

      <div className="side-by-side-preview">
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-image" />
        ))}
      </div>
      <div>
        <img className='banner-img' src={largeImage}/>
      </div>
      <div className="landing-container">
        {remainingImages.map((src, i) => (
          <img key={i} src={src} className="landing-image" />
        ))}
      </div>

      <Link to="/shop">
        <button className="cta-button">Enter Shop</button>
      </Link>
    </div>
  );
}
