import { Link } from "react-router-dom";  // Az oldalak közötti navigációhoz a Link komponenst használjuk.
import "./Hero.css";

const Hero = () => {  // A Hero komponensünk egy egyszerű szekció, amely egy címet, alcímet és egy rövid leírást tartalmaz az étteremről. Ezen kívül egy gomb is található, amely az asztalfoglalás oldalra navigál.
  return (
    <section className="hero-container">  {/* A hero szekció egyedi azonosítóval rendelkezik, amely segítségével a CSS-ben könnyen elérhetjük. */}
      <div> 
        <h1 className="hero-title">Mediterrán Étterem</h1>  {/* Az étterem címének megjelenítése. */}
        <h2 className="hero-subtitle">Budapest</h2> {/* Az étterem helyének megjelenítése. */}
        <p>Családi tulajdonban lévő mediterrán étterem vagyunk, amely a hagyományos receptekre összpontosít, modern csavarral tálalva.</p>
        <Link className="hero-link" to="/reserve">  {/* A Link komponens segítségével a megfelelő oldalra navigálunk. */}
          <button className="reserve-btn">Asztalfoglalás</button> {/* A gomb szövege és stílusa. */}
        </Link>
      </div>
    </section>
  );
};

export default Hero;