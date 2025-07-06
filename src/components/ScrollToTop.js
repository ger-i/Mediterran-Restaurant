import { useEffect } from "react";  
import { useLocation } from "react-router-dom"; 

/**
 * ScrollToTop komponens - Automatikus görgetés az oldal tetejére
 * Minden route váltásnál automatikusan az oldal tetejére ugrik
 * Javítja a felhasználói élményt egyoldalas alkalmazásokban (SPA)
 */

const ScrollToTop = () => { // Aktuális útvonal lekérése a React Router-ből
  const { pathname } = useLocation(); 
  
  // useEffect hook - lefut minden pathname változásnál
  useEffect(() => { // Böngésző ablak görgetése az oldal tetejére (x: 0, y: 0 koordinátákra)
    window.scrollTo(0, 0); 
  }, [pathname]); // Dependency array: csak pathname változáskor fut le
  
  return null; // Nem renderel semmit - csak side effect-et hajt végre
};

export default ScrollToTop;