import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    ['01', 'About'], ['02', 'Projects'], ['03', 'Experience'], ['04', 'Skills'], ['05', 'Education'], ['06', 'Contact']
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="nav-brand mono" href="#about" onClick={() => setIsOpen(false)}>SD<span>_</span> <small>PORTFOLIO / 2026</small></a>
        <button className="hamburger mono" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="site-navigation" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? 'CLOSE' : 'MENU'}</span>{isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav id="site-navigation" className={`nav-menu ${isOpen ? 'active' : ''}`} aria-label="Main navigation">
          {navItems.map(([number, item]) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}><span className="mono">{number}</span>{item}</a>)}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
