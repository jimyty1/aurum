import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../assets/logo new copy.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/Journal">Journal</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
      </ul>

      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
}
