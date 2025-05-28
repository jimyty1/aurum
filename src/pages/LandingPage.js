import React from 'react';
import '../css/LandingPage.css';
import {
  previewImages,
  bannerImage,
  grid1Images,
  grid2Images,
  remainingImages,
} from '../utils/imageLoader';

export default function LandingPage() {
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
        <img className="banner-img" src={bannerImage} alt="Banner" />
        <div className="quote-overlay">
          <div className="quote-line">WHERE</div>
          <div className="quote-line indent">HERITAGE</div>
          <div className="quote-line">MEETS</div>
          <div className="quote-line indent">INNOVATION</div>
        </div>
      </div>

      {/* Grid 1 */}
      <div className="custom-grid-1">
        {['left', 'middle', 'right'].map((col, i) => (
          <div key={col} className={`grid-col ${col}`}>
            <img src={grid1Images[i * 2]} alt={`Grid1-${i * 2}`} className="grid-img" />
            <img src={grid1Images[i * 2 + 1]} alt={`Grid1-${i * 2 + 1}`} className="grid-img" />
          </div>
        ))}
      </div>

      {/* Grid 2 */}
      <div className="custom-grid-2">
        {['left', 'middle', 'right'].map((col, i) => (
          <div key={col} className={`grid-col ${col}`}>
            <img src={grid2Images[i * 2]} alt={`Grid2-${i * 2}`} className="grid-img" />
            <img src={grid2Images[i * 2 + 1]} alt={`Grid2-${i * 2 + 1}`} className="grid-img" />
          </div>
        ))}
      </div>

      <div className="side-by-side-preview">
        {remainingImages.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} className="preview-image" />
        ))}
      </div>
    </div>
  );
}
