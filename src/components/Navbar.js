// Ez a komponens a navigációs sávot tartalmazza, amely a főoldalra, rólunk oldalra, étlapra és asztalfoglalás oldalra navigál. A menü mobil nézetben egy menü ikont tartalmaz, amelyre kattintva megjelenik a menü. A menüpontokra kattintva a megfelelő oldalra navigálunk.
// A menüpontok aktív oldalának megjelenítéséhez a NavLink komponens activeclassname attribútumát használjuk. Az activeclassname attribútummal az 'active' class-t adhatjuk hozzá az aktív linkhez. (Aktív oldal zöld színnel)
// A menü nyitva vagy zárva van-e, azt a menuOpen állapot alapján döntjük el. Ha a menuOpen true, akkor a 'open' class-t adja hozzá a navbarhoz, ami megnyitja a menüt.
// A toggleMenu egy függvény, ami megváltoztatja a menuOpen állapotát. Ha a menü nyitva van, bezárja, ha zárva van, kinyitja.


import React, { useState } from 'react';  // A useState Hook segítségével állapotot hozhatunk létre a komponensünkben.
import { NavLink } from 'react-router-dom'; // A NavLink komponens segítségével a megfelelő oldalra navigálunk. NavLink: Olyan navigációs eszköz, amely segít kiemelni, hogy melyik link az aktív, ami hasznos lehet menükben vagy navigációs elemekben, ahol vizuális visszajelzés szükséges az aktuális helyről.
import Logo from '../images/logos/logo_1.png';
import './Navbar.css';

const Nav = () => { // A Nav komponensünk egy navigációs sávot tartalmaz, amely a főoldalra, rólunk oldalra, étlapra és asztalfoglalás oldalra navigál.
  const [menuOpen, setMenuOpen] = useState(false); // State Hook: useState hook segítségével egy menuOpen nevű állapotot kezel, amely kezdetben false értéket vesz fel. Ez azt jelzi, hogy a menü nyitva van-e vagy sem.

  const toggleMenu = () => {  // A toggleMenu egy függvény, ami megváltoztatja a menuOpen állapotát. Ha a menü nyitva van, bezárja, ha zárva van, kinyitja.
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}> {/* A menü nyitva vagy zárva van-e, azt a menuOpen állapot alapján döntjük el. Ha a menuOpen true, akkor a 'open' class-t adja hozzá a navbarhoz, ami megnyitja a menüt. */}
      <NavLink to="/" className="logo"> {/* A NavLink komponens segítségével a logo képre kattintva a főoldalra navigálunk. */}
        <img src={Logo} alt="logo" />
      </NavLink>

      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>  {/* Eseménykezelő: onClick={toggleMenu} azt jelenti, hogy amikor erre a div-re kattintanak, meghívja a toggleMenu függvényt. Nyit vagy zár. */}
        <div className="bar"></div> {/* A menü ikon megjelenítése. */}
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}> {/* A menüpontokra kattintva a megfelelő oldalra navigálunk. A menüpontok aktív oldalának megjelenítéséhez a NavLink komponens activeclassname attribútumát használjuk. Az activeclassname attribútummal az 'active' class-t adhatjuk hozzá az aktív linkhez. (Aktív oldal zöld színnel). A <ul> elem akkor válik láthatóvá (visible osztály), ha a menü nyitva van. */}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>FŐOLDAL</NavLink>  {/* A NavLink komponens segítségével a főoldalra navigálunk. */}
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>RÓLUNK</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>ÉTLAP</NavLink>
        </li>
        <li>
          <NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active' : '')}>ASZTALFOGLALÁS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav; 