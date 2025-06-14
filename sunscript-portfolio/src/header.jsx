import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <header>
    <div class="tab-black"></div>
    <h1 class="logo">SUNSCRIPT</h1>
    <nav class="navbar" aria-label="Main navigation">
      <ul class="nav-links center-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="pages.html">Pages</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="blogs.html">Blogs</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
      <ul class="touch-links">
        <li><a href="touch.html">Get In Touch</a></li>
      </ul>
    </nav>
    <div class="tab-white"></div>
    </header>
  );
};

export default Header;
