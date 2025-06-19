import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Uses from './uses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
