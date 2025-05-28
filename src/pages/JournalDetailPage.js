import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/JournalDetailPage.css';
import {journalImages, journalDescriptions, allImages} from '../utils/imageLoader';

export default function JournalDetailPage() {
  const { id } = useParams();

  // Find image and index based on filename match
  const index = allImages.findIndex((img) => {
    // Extract the filename from the import path
    const filename = img.split('/').pop();
    return filename === id;
  });

  const image = allImages[index];
  const description = journalDescriptions[index];

  if (!image) {
    return <div className="journal-detail-page"><h2>Journal Entry Not Found</h2></div>;
  }

  return (
    <div className="journal-detail-page">
      <h2>Journal Entry #{index + 1}</h2>
      <img src={image} alt={`Journal ${index}`} className="journal-detail-img" />
      <p className="journal-detail-text">{description}</p>
    </div>
  );
}
