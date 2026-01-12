import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>Bethel Homes</Link>

        {/* Desktop Navigation */}
        <ul className="nav-list desktop-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <Link to="/" className="mobile-nav-logo" onClick={closeMenu}>Bethel Homes</Link>
            <button
              className="mobile-nav-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="mobile-nav-list">
            <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div className="mobile-nav-footer">
            <p>Ready to start your project?</p>
            <Link to="/contact" className="mobile-nav-cta" onClick={closeMenu}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
