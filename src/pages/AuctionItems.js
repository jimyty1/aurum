import React, { useEffect } from 'react';
import '../css/AuctionItems.css';
import { Link, useParams } from 'react-router-dom';
import auctionsData from '../assets/auctions.json';

export default function AuctionItems() {
  const { id } = useParams(); // e.g. "1"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Load all images from auctionItems folder
  const importAllImages = (r) =>
    r.keys().map((key) => ({
      src: r(key),
      name: key.replace('./', ''), // e.g. "1.1.png"
    }));

  const allImages = importAllImages(
    require.context(
      '../assets/auctions/auctionItems',
      false,
      /\.(png|jpe?g|webp)$/
    )
  );

  // Filter for filenames starting with "<category>."
  const matchingImages = allImages.filter((img) =>
    img.name.startsWith(`${id}.`)
  );

  return (
    <div className="shop-page">
      <h2>Our {auctionsData[id-1]['title']} Collection – Category {id}</h2>

      {matchingImages.length === 0 ? (
        <p>No images found for category {id}.</p>
      ) : (
        <div className="garment-grid">
          {matchingImages.map((img) => (
            <Link
              to={`/auctionItem/${encodeURIComponent(img.name)}`}
              key={img.name}
              className="garment-link"
            >
              <img
                src={img.src}
                alt={img.name}
                className="garment-image"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
