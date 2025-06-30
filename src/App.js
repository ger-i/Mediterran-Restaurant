import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavFoot from './components/NavFoot';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import './App.css';

function App() {  // Az App komponensünk a fő komponensünk, amely a többi komponenst fogja tartalmazni.
  return (  // A return metódus visszaadja a komponensünk által megjelenített JSX kódot.
    <BrowserRouter> {/* A BrowserRouter komponens a React Router egyik fő komponense, amely a webalkalmazásunkat a böngésző címsorában megjelenő URL címekhez kapcsolja. */}
      <ScrollToTop /> {/* Minden oldalváltáskor az oldal tetejére görget */}
      <Routes>  {/* A Routes komponens a React Router egyik fő komponense, amely a webalkalmazásunk útvonalait definiálja. */}
        <Route path="/" element={<NavFoot />}>  {/* Az útvonalakat a Route komponenssel definiáljuk. */}
          <Route index element={<Home />} />  {/* Az index prop segítségével megadhatjuk, hogy az adott útvonal alapértelmezett komponenst jelenítsen meg. */}
          <Route path="about" element={<About />} />  {/* Az element prop segítségével megadhatjuk, hogy az adott útvonalhoz melyik komponens tartozzon. */}
          <Route path="menu" element={<Menu />} />  {/* Az útvonalakat a path prop segítségével adhatjuk meg. */}
          <Route path="reserve" element={<Reserve />} />  {/* Az útvonalakat a path prop segítségével adhatjuk meg. */}
          <Route path="*" element={<h1>Az oldal nem található</h1>} />  {/* Az útvonalakat a path prop segítségével adhatjuk meg. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
