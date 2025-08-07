// React és React Router függőségek importálása
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Komponensek importálása
import ScrollToTop from "./components/ScrollToTop";
import NavFoot from './components/NavFoot'; 

// Oldal komponensek importálása
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Menu from "./pages/Menu"; 
import Reserve from "./pages/Reserve"; 

/**
 * App komponens - Az alkalmazás fő komponense
 * Beállítja a routing-ot és az oldal szerkezetét
 */
function App() {
  return (
    // BrowserRouter: HTML5 history API-t használó router
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* ScrollToTop: Minden route váltáskor a tetejére görget */}
      <ScrollToTop />
      
      {/* Routes: A route-ok konténere */}
      <Routes>
        {/* Fő layout route - minden oldal ezt a layout-ot használja */}
        <Route path="/" element={<NavFoot />}>
          {/* index route: a "/" útvonalhoz tartozó főoldal */}
          <Route index element={<Home />} />
          
          {/* Egyéb oldalak route-jai */}
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reserve" element={<Reserve />} />
          
          {/* Catch-all route: minden nem létező útvonalhoz */}
          <Route path="*" element={<h1>Az oldal nem található</h1>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

// App komponens exportálása alapértelmezettként
export default App;
