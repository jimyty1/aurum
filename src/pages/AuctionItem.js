import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import descriptions from '../assets/auctionDescriptions.json';
import '../css/AuctionItem.css';

export default function AuctionItem() {
  const { id } = useParams();
  const fullFilename = id;

  const parts = fullFilename.split('.');
  const baseIdStr = parts.length >= 2 ? `${parts[0]}.${parts[1]}` : parts[0];
  const numericId = parseFloat(baseIdStr);

  const data = descriptions.find((item) => item.id === numericId) || {};
  const {
    designer = '',
    description: descText = '',
    estimate = '',
    startingBid: rawBid = '',
  } = data;

  const startingBid = parseFloat(
    typeof rawBid === 'string' ? rawBid.replace(/[^\d.]/g, '') : rawBid
  ) || 0;

  const importAll = (r) =>
    r.keys().map((key) => ({
      src: r(key),
      name: key.replace('./', ''),
    }));
  const allImages = importAll(
    require.context(
      '../assets/auctions/auctionItems',
      false,
      /\.(png|jpe?g|webp)$/
    )
  );

  const matchingImageObj = allImages.find((img) =>
    img.name.startsWith(`${baseIdStr}.`)
  );
  const imageUrl = matchingImageObj ? matchingImageObj.src : '';

  const [bid, setBid] = useState(startingBid);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBid(startingBid); // sync if it changes
  }, [startingBid]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const amt = Number(bid);
    if (!bid || isNaN(amt) || amt < startingBid) {
      alert(`Please enter a bid of at least €${startingBid}.`);
      return;
    }
    alert(`Your bid of €${amt} has been placed!`);
    setBid(startingBid);
  };

  return (
    <div className="garment-detail-page">
      <div className="detail-flex">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Item ${fullFilename}`}
            className="garment-detail-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/fallback.jpg';
            }}
          />
        ) : (
          <div className="no-image">
            No image available for {fullFilename}.
          </div>
        )}

        <div className="detail-info">
          {designer && <h2 className="designer">{designer}</h2>}
          {descText && <p className="description">{descText}</p>}
          {estimate && (
            <div className="estimate-block">
              <span className="estimate-label">Estimate: </span>
              {estimate}
            </div>
          )}
          {startingBid && (
            <div className="starting-bid-block">
              <span className="starting-bid-label">STARTING BID: </span>
              {"€" + startingBid}
            </div>
          )}

          <form className="bid-form" onSubmit={handleBidSubmit}>
            <label htmlFor="bidInput" className="bid-label">
              Enter Your Bid (€):
            </label>
            <div className="bid-input-wrapper">
              <input
                id="bidInput"
                type="number"
                min={startingBid}
                step="1"
                value={bid}
                onChange={(e) => setBid(e.target.value)}
                className="bid-input"
                placeholder={startingBid}
              />

            </div>
            <button type="submit" className="bid-button" style={{ marginTop: '2%' }}>
              Place Bid
            </button>
            <div style={{ marginTop: '10px' }}>
              The Aurum Assurance: Expert Authentication, Blockchain-Verified Provenance, White-Glove Delivery, 48-Hour Bid Withdrawal Option
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
