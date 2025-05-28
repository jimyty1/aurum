import React from 'react';
import '../css/JournalPage.css';
import { journalImages } from '../utils/imageLoader';

export default function JournalPage() {
  return (
    <div className="journal-page">
      <h2>Journal</h2>

      <div className="journal-section left-image">
        <img src={journalImages[0]} alt="Journal Visual 1" className="journal-img" />
        <p>
          A premier luxury auction platform where heritage and innovation converge, redefining the way soft luxury is collected, valued, and traded. Inspired by the legacy of prestigious auction houses, we blend timeless craftsmanship with modern technology, offering an exclusive marketplace for rare haute couture, archival fashion, and bespoke pieces. Every item is curated for those who appreciate the artistry of the past while embracing the future of luxury. Our platform seamlessly combines authenticity, prestige, and accessibility—bringing the world’s most coveted fashion to a new generation of collectors.
        </p>
      </div>

      <div className="journal-section right-image">
        <p>
          By leveraging blockchain technology and smart contracts, we ensure unparalleled authenticity, transparency, and security in every transaction. Each piece is accompanied by a digital certificate of provenance, safeguarding its history and value for generations to come. Our platform not only celebrates rarity and personalization but also introduces a new standard for trust in high fashion, where discerning collectors can confidently invest in the world’s most coveted designs.
        </p>
        <img src={journalImages[1]} alt="Journal Visual 2" className="journal-img" />
      </div>
    </div>
  );
}
