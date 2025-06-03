// File: src/components/GarmentPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import descriptions from '../assets/descriptions.json';
import '../css/GarmentPage.css';

const importAll = (r) =>
  r.keys().map(key => ({ src: r(key), name: key.replace('./', '') }));
const allImages = importAll(
  require.context('../assets/clothes', false, /\.(png|jpe?g|webp)$/)
);

export default function GarmentPage() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [bid, setBid] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Gather images whose filenames start with "(<id>"
  const images = allImages
    .filter(img => img.name.startsWith(`(${id}`)) // e.g. "(2)", "(2.1)", etc.
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  // Main description at key: "<id>"
  const mainDesc = descriptions[id];

  // Further description override at key: "<id>.2"
  const furtherKey = `${id}.2`;
  const rawFurther = descriptions[furtherKey];
  const furtherDesc =
    typeof rawFurther === 'string' && rawFurther.trim().length > 0
      ? rawFurther
      : null;

  const propertyOf = `${id}.0`;
  const rawProperty = descriptions[propertyOf];
  const property =
    typeof rawProperty === 'string' && rawProperty.trim().length > 0
      ? rawProperty
      : null;
  const estimate = `${id}.3`;
  const rawEstimate = descriptions[estimate];
  const estim =
    typeof rawEstimate === 'string' && rawEstimate.trim().length > 0
      ? rawEstimate
      : null;

  return (
    <div className="garment-detail-page">
      <div className="garment-detail-content">
        {images.length > 0 && (
          <img
            src={images[index].src}
            alt={`Item ${id}`}
            className="garment-detail-image"
          />
        )}

        <div className="garment-detail-info">
          {/* Render title via dedicated component */}
          {property && (
            <p className="property">{property}</p>
          )}
          <GarmentTitle id={id} />

          {/* Always render main description if it exists */}
          {typeof mainDesc === 'string' && mainDesc.trim().length > 0 && (
            <p className="description">{mainDesc}</p>
          )}

          {/* Render further description if "<id>.2" exists */}
          {furtherDesc && (
            <p className="further-description">{furtherDesc}</p>
          )}

          <div className="actions">
            <button className="buy-button">Buy Now</button>

            <div className="bid-section">
              <input
                type="number"
                placeholder={`${estim}`}
                value={bid}
                onChange={e => setBid(e.target.value)}
              />
              <button
                style={{ marginTop: '10px' }}
                onClick={() => alert(`Bid placed: $${bid}`)}
              >
                Place Bid
              </button>
              <div style={{marginTop:'10px', fontWeight:'bold'}}>
                The Aurum Assurance:
              </div>
              <div>
                Expert Authentication, Blockchain-Verified Provenance, White-Glove Delivery, 48-Hour Bid Withdrawal Option
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function GarmentTitle({ id }) {
  // 1) Compute the title‐key string, e.g. "5.1"
  const titleKey = `${id}.1`;

  // 2) Look up that key in the imported JSON
  const rawTitle = descriptions[titleKey];

  // 3) If rawTitle is a non-empty string, use it; otherwise fallback
  const title =
    typeof rawTitle === "string" && rawTitle.trim().length > 0
      ? rawTitle
      : `Garment #${id}`;

  return <h2>{title}</h2>;
}
