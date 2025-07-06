// Navbar.js - Reszponzív navigációs sáv komponens
// Ez a komponens a weboldal navigációs sávját valósítja meg, amely mobilon hamburger menüvel, asztali nézetben pedig hagyományos navigációval jelenik meg.       


import React, { useState } from 'react';  
import { NavLink } from 'react-router-dom';
import Logo from '../images/logos/logo_1.png';
import './Navbar.css';

/**
 * Nav komponens - Reszponzív navigációs sáv
 * Mobilon hamburger menüvel, deszktopon hagyományos navigációval
 */
const Nav = () => { 
  // Állapot a mobil menü megnyitásához/bezárásához
  const [menuOpen, setMenuOpen] = useState(false); 
  
  /**
   * Mobil menü állapotának váltása (nyitva/zárva)
   */
  const toggleMenu = () => {  
    setMenuOpen(!menuOpen);
  };
    
  /**
   * Mobil menü bezárása (navigálás után)
   */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    // Fő navigációs elem - CSS osztály dinamikusan változik a menü állapota szerint
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      {/* Logo - főoldalra navigál */}
      <NavLink to="/" className="logo">
        <img src={Logo} alt="logo" />
      </NavLink>
     
      {/* Hamburger menü ikon (csak mobilon látható) */}
      <div className="menu-icon" onClick={toggleMenu}>  
        <div className="bar"></div> 
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
     
      {/* Navigációs linkek listája - reszponzív megjelenítés */}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}> 
        {/* Főoldal link */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            FŐOLDAL
          </NavLink>  
        </li>
        {/* Rólunk oldal link */}
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            RÓLUNK
          </NavLink>
        </li>
        {/* Étlap oldal link */}
        <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            ÉTLAP
          </NavLink>
        </li>
        {/* Asztalfoglalás oldal link */}
        <li>
          <NavLink 
            to="/reserve" 
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            ASZTALFOGLALÁS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;