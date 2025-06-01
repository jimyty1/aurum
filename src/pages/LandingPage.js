import React, {useEffect} from 'react';
import '../css/LandingPage.css';
import {
  previewImages,
  bannerImage,
  grid1Images,
  grid2Images,
  remainingImages,
} from '../utils/imageLoader';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <div className='text-top'>
        Where rare couture, jewelry, and design objects from private hands to discerning collectors worldwide
      </div>
      {/* Grid 1 */}
      <div className="custom-grid-1">
        {['left', 'middle', 'right'].map((col, i) => (
          <div key={col} className={`grid-col ${col}`}>
            {[0, 1].map(j => {
              const src = grid1Images[i * 2 + j];

              // Add text under bottom-right image
              if (i === 2 && j === 1) {
                return (
                  <div key={j} className="image-with-caption">
                    <Link to={`/journal/${src.split('/').pop()}`}>
                      <img src={src} alt={`Grid1-${i * 2 + j}`} className="grid-img" />
                    </Link>
                    <div className="grid-caption">Crafted to Define Legacy</div>
                  </div>
                );
              }

              return (
                <Link to={`/journal/${src.split('/').pop()}`} key={j}>
                  <img src={src} alt={`Grid1-${i * 2 + j}`} className="grid-img" />
                </Link>
              );
            })}
          </div>
        ))}
      </div>


      <div className="banner-section">
        <Link to={`/journal/${bannerImage.split('/').pop()}`}>
          <img className="banner-img" src={bannerImage} alt="Banner" />
        </Link>
        <div className="quote-overlay">
          <div className="quote-line">AUCTIONEERING</div>
          <div className="quote-line indent">THE FUTURE OF</div>
          <div className="quote-line">THE PAST</div>
          <div className="quote-line indent"> </div>
        </div>
      </div>

      {/*Grid 2*/}
      <div className="custom-grid-2">
        {['left', 'middle', 'right'].map((col, i) => (
          <div key={col} className={`grid-col ${col}`}>
            {[0, 1].map(j => {
              const src = grid2Images[i * 2 + j];

              // Overlay text only on the second image (bottom of right column)
              if (col === 'right' && j === 1) {
                return (
                  <Link to={`/journal/${src.split('/').pop()}`} key={j}>
                    <div className="overlay-wrapper">
                      <img src={src} alt={`Grid2-${i * 2 + j}`} className="grid-img" />
                      <div className="overlay-text">Auctioneering the future of the past</div>
                    </div>
                  </Link>
                );
              }

              return (
                <Link to={`/journal/${src.split('/').pop()}`} key={j}>
                  <img src={src} alt={`Grid2-${i * 2 + j}`} className="grid-img" />
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="side-by-side-preview">
        {remainingImages.map((src, index) => (
          <Link to={`/journal/${src.split('/').pop()}`} key={index} className="preview-link">
            <img src={src} alt={`Preview ${index + 1}`} className="previewJ" />
          </Link>
        ))}
      </div>
    </div>
  );
}
