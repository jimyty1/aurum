// File: src/components/Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import logo from '../assets/logo new.png';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Replace this with your actual subscription logic
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Left: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Aurum Logo" />
        </div>

        {/* Middle: Links */}
        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Log In</Link>
          <Link to={'about'}>About</Link>
        </div>

        {/* Right: Newsletter Sign-Up */}
        <div className="footer-newsletter">
          <p className="newsletter-title">Subscribe to our Newsletter</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom line (copyright) */}
      <p className="footer-copy">&copy; 2025 Aurum. All rights reserved.</p>
    </footer>
  );
}
