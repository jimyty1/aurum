import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import descriptions from '../assets/descriptions.json';
import '../css/GarmentPage.css'
const importAll = (r) => r.keys().map(key => ({ src: r(key), name: key.replace('./', '') }));
const allImages = importAll(require.context('../assets/clothes', false, /\.(png|jpe?g|webp)$/));

export default function GarmentPage() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [bid, setBid] = useState('');

  // Get images matching this garment ID
  const images = allImages
    .filter(img => img.name.startsWith(`(${id}`)) // (2), (2.1), etc.
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="garment-detail-page">
      <div className="garment-detail-content">
        <img src={images[index].src} alt={`Garment ${id}`} className="garment-detail-image" />

        <div className="garment-detail-info">
          <h2>Garment #{id}</h2>
          <p className="description">{descriptions[id]}</p>

          <div className="actions">
            <button className="buy-button">Buy Now</button>

            <div className="bid-section">
              <input
                type="number"
                placeholder="Enter your bid"
                value={bid}
                onChange={(e) => setBid(e.target.value)}
              />
              <button style={{marginTop:'10px'}}onClick={() => alert(`Bid placed: $${bid}`)}>Place Bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
