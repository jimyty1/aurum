import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../assets/logo new copy.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo-wrapper">
          <img
            className="logo"
            src={logo}
            style={{ height: '200px', position: 'absolute', left: '-20px' }}
            alt="logo"
          />
        </div>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/Journal">Journal</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
      </ul>
    </nav>
  );
}
