// Ez a komponens az oldal tetejére görget, amikor az útvonal változik
// A komponens nem renderel semmit, csak a görgetést végzi el

import { useEffect } from "react";  // Az useEffect hook importálása
import { useLocation } from "react-router-dom"; // Az useLocation hook importálása

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Az aktuális útvonal lekérése

  useEffect(() => {
    window.scrollTo(0, 0); // Az oldal tetejére görget
  }, [pathname]); // A pathname változásakor lefut

  return null; // Nem renderel semmit
};

export default ScrollToTop;