import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../assets/logo new copy.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/shop">BUY NOW</NavLink></li>
        <li><NavLink to="/auctions">AUCTIONS</NavLink></li>
        <li><NavLink to="/Journal">JOURNAL</NavLink></li>
        <li><NavLink to="/profile">PROFILE</NavLink></li>
        <li><NavLink to="/login">LOG IN</NavLink></li>
      </ul>

      {/* Logo wrapper now split into clickable and visual parts */}
      <div className="logo-wrapper">
        <Link to="/" className="logo-click-area">
          {/* Empty div or small clickable marker */}
        </Link>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </nav>
  );
}
