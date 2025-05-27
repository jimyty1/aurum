// File: src/pages/ShopPage.js
import React from 'react';

const mockProducts = [
  { id: 1, name: 'Sculptural Dress', price: '$1,200' },
  { id: 2, name: 'Signature Coat', price: '$2,500' },
  { id: 3, name: 'Avant-Garde Top', price: '$850' },
];

export default function ShopPage() {
  return (
    <div>
      <h2>Shop</h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
        {mockProducts.map(p => (
          <div key={p.id} style={{ background: '#fff', color: '#000', padding: '1rem', borderRadius: '8px' }}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button style={{
              padding: '0.5rem',
              backgroundColor: 'var(--color-burgundy)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
