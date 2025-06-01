import React from 'react';
import captions from '../assets/captions.json';
import '../css/JournalGrid.css';

// Dynamically import all images from the journal folder
const importAll = (r) => r.keys().map(r);
const journalImages = importAll(
  require.context('../assets/journal', false, /\.(png|jpe?g|webp)$/)
);

export default function JournalGrid({ i }) {
  // Ensure i is a number and clamp to valid range
  const start = Number.isInteger(i) ? i : 0;
  const safeStart = Math.max(0, Math.min(start, journalImages.length - 3));

  return (
    <div className="journal-grid">
      {journalImages.slice(safeStart, safeStart + 3).map((src, idx) => (
        <div key={safeStart + idx} className="journal-item">
          <img
            src={src}
            alt={`Journal ${safeStart + idx + 1}`}
            className="journal-image"
          />
          <p className="journal-caption">
            {captions[safeStart + idx] || ''}
          </p>
        </div>
      ))}
    </div>
  );
}
