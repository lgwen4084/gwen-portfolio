// src/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="tab-black"></div>
      <h1 className="logo">SUNSCRIPT</h1>
      <nav className="navbar" aria-label="Main navigation">
        <ul className="nav-links center-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="pages.html">Pages</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="blogs.html">Blogs</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <ul className="touch-links">
          <li><a href="touch.html">Get In Touch</a></li>
        </ul>
      </nav>
      <div className="tab-white"></div>
    </header>
  );
};

export default Header;
