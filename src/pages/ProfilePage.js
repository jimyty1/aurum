// File: src/pages/ProfilePage.js
import React from 'react';

export default function ProfilePage() {
  // dummy user info
  const user = { name: 'Alexandra', email: 'alex@style.com' };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button style={{
        backgroundColor: 'var(--color-red-2028)',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>Log Out</button>
    </div>
  );
}
