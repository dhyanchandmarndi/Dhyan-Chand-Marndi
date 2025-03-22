import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    setActiveLink(section);
    if (isOpen) {
      setIsOpen(false);
    }
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}>Dhyan</a>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >Home</a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >About</a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >Skills</a>
          </li>
          <li className="nav-item">
            <a 
              href="#prjects" 
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >Projects</a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'bar bar1 active' : 'bar bar1'}></span>
          <span className={isOpen ? 'bar bar2 active' : 'bar bar2'}></span>
          <span className={isOpen ? 'bar bar3 active' : 'bar bar3'}></span>
        </div>

        {/* Mobile Menu */}
        <ul className={isOpen ? 'mobile-menu active' : 'mobile-menu'}>
          <li className="mobile-item" style={{"--i": 0}}>
            <a 
              href="#home" 
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >Home</a>
          </li>
          <li className="mobile-item" style={{"--i": 1}}>
            <a 
              href="#about" 
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >About</a>
          </li>
          <li className="mobile-item" style={{"--i": 2}}>
            <a 
              href="#projects" 
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >Projects</a>
          </li>
          <li className="mobile-item" style={{"--i": 3}}>
            <a 
              href="#skills" 
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >Skills</a>
          </li>
          <li className="mobile-item" style={{"--i": 4}}>
            <a 
              href="#contact" 
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;