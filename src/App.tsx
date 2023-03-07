import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Handball Sports League</a>
        </div>
        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/community-programs" className="navbar-link">
              Community Programs
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
        </div>
      </nav>
    </div>
  );
}

export default App;
