// Navbar.js - Reszponzív navigációs sáv komponens
// Ez a komponens a weboldal navigációs sávját valósítja meg, amely mobilon hamburger menüvel, asztali nézetben pedig hagyományos navigációval jelenik meg.       

import React, { useState } from 'react';  
import { NavLink } from 'react-router-dom';
import Logo from '../images/logos/logo_1.png';

/**
 * Nav komponens - Reszponzív navigációs sáv
 * Mobilon hamburger menüvel, deszktopon hagyományos navigációval
 */
const Nav = () => {
  // Állapot a mobil menü megnyitásához/bezárásához
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü nyitása/zárása hamburger ikonra kattintva
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Menü bezárása navigáció után
  const closeMenu = () => setMenuOpen(false);

  return (
    /**
     * Fő navigációs konténer
     * - Flexbox elrendezés: elemek vízszintesen
     * - Jobb oldali padding nagy képernyőn
     * - Kis képernyőn kisebb padding
     * - `relative` pozíció a mobil menü pozicionálásához
     */
    <nav className={`flex items-center justify-between pr-[20rem] max-[1200px]:pr-4 relative ${menuOpen ? 'open' : ''}`}>

      {/* Logó - főoldalra navigál */}
      <NavLink to="/" className="pl-[1rem] m-4 max-[1200px]:pl-4">
        <img src={Logo} alt="logo" className="h-auto max-[1200px]:h-[3.2rem]" />
      </NavLink>

      {/* Hamburger menü ikon - csak mobilon látható */}
      <div className="hidden max-[768px]:flex flex-col cursor-pointer mt-2" onClick={toggleMenu}>
        {/* Három sáv (bar) - alapállapot */}
        <div className="w-[25px] h-[3px] bg-[#495e57] my-[4px] transition duration-500" />
        {/* Második sáv - forgatás nyitott állapotban */}
        <div className={`w-[25px] h-[3px] bg-[#495e57] my-[4px] transition duration-500 ${menuOpen ? 'rotate-[-60deg] translate-x-[6px] translate-y-[0px]' : ''}`} />
        {/* Harmadik sáv - forgatás nyitott állapotban */}
        <div className={`w-[25px] h-[3px] bg-[#495e57] my-[4px] transition duration-500 ${menuOpen ? 'rotate-[60deg] -translate-x-[7px] -translate-y-[11px]' : ''}`} />
      </div>

      {/* Navigációs linkek listája */}
      <ul className={`flex list-none mt-[1.7rem] z-[1000] 
        max-[768px]:absolute max-[768px]:top-[2.5rem] max-[768px]:w-full 
        max-[768px]:flex-col max-[768px]:bg-[#495e57] max-[768px]:py-4 
        max-[768px]:items-center ${menuOpen ? 'max-[768px]:flex' : 'max-[768px]:hidden'}`}>

        {/* Navigációs linkek tömbből generálva */}
        {[
          { path: '/', label: 'FŐOLDAL' },
          { path: '/about', label: 'RÓLUNK' },
          { path: '/menu', label: 'ÉTLAP' },
          { path: '/reserve', label: 'ASZTALFOGLALÁS' }
        ].map(({ path, label }) => (
          <li key={path} className="mx-4 max-[768px]:my-4 text-center">
            {/* NavLink - aktív állapotban zöld, hover sárga */}
            <NavLink
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-black no-underline text-[1.1rem] transition-colors duration-300 hover:text-[#F4CE14] max-[1200px]:text-[1rem] ${isActive ? 'text-[#04AA6D]' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;