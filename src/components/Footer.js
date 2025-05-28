// File: src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import logo from '../assets/logo new copy.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Aurum Logo" />
        </div>

        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Log In</Link>
        </div>

        <p className="footer-copy">&copy; 2025 Aurum. All rights reserved.</p>
      </div>
    </footer>
  );
}
