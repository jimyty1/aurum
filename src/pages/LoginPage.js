
// File: src/pages/LoginPage.js
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in: ${email}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '0.5rem' }}/>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password</label><br/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.5rem' }}/>
        </div>
        <button type="submit" style={{
          marginTop: '1rem',
          backgroundColor: 'var(--color-blue)',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Submit</button>
      </form>
    </div>
  );
}