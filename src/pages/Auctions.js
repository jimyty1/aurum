import React, { useState, useEffect } from 'react';
import '../css/Auctions.css';
import { Link } from 'react-router-dom';
import auctionsData from '../assets/auctions.json';

export default function Auctions() {
  // Keep the imported JSON in state so React re-renders when it’s available
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    console.log('Imported auctionsData:', auctionsData);
    // Directly assign the imported array into state
    setAuctions(auctionsData);
  }, []);

  // If no auctions exist, show a placeholder
  if (!Array.isArray(auctions) || auctions.length === 0) {
    return <div className="no-auctions">No auctions to display.</div>;
  }

  return (
    <div className="auctions-page">
      {auctions.map((auction) => (
        <Link
          to={`/auctionItems/${auction.id}`}
          className="details-link"
        >
        <div className="auction-row" key={auction.id}>
          {/* Left: smaller image */}
          <div className="auction-image-wrapper">
            <img
              src={auction.image}
              alt={`Auction ${auction.id}`}
              className="auction-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback.jpg'; // or some placeholder
              }}
            />
          </div>

          {/* Right: details */}
          <div className="auction-details">
            {/* Large date/time */}
            <div className="auction-datetime">
              {new Date(auction.dateTime).toLocaleString([], {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>

            {/* Auction Code */}
            <div className="auction-code">{auction.code}</div>

            {/* Auction Title */}
            <div className="auction-title">{auction.title}</div>

            {/* Sessions and Location */}
            <div className="auction-additional">
              <div className="sessions">
                <span className="session-label">Session 1:</span>{' '}
                <span className="session-time">{auction.session1}</span>
                {'  '}
                <span className="session-label">Session 2:</span>{' '}
                <span className="session-time">{auction.session2}</span>
              </div>
              <div className="location">Location: {auction.location}</div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
