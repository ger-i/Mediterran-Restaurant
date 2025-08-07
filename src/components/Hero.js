// React Router Link komponens importálása navigációhoz
import { Link } from "react-router-dom";  
import "./Hero.css";

/**
 * Hero komponens - Főoldal hero szekciója
 * Az oldal tetején megjelenő látványos bevezető szekció
 * Tartalmazza a főcímet, alcímet, leírást és call-to-action gombot
 */

const Hero = () => {  
  return (
    // Hero szekció - tartalmazza a főcímet, alcímet és a call-to-action gombot
    <section className="hero-container">  
      <div> 
        <h1 className="hero-title">Mediterrán Étterem</h1>  
        <h2 className="hero-subtitle">Budapest</h2> 
        <p>Családi tulajdonban lévő mediterrán étterem vagyunk, amely a hagyományos receptekre összpontosít, modern csavarral tálalva.</p>
        <Link className="hero-link" to="/reserve">  {/* Call-to-action (CTA) link - asztalfoglalásra irányít */}
          <button 
            className="reserve-btn" 
            aria-label="Navigálás az asztalfoglalás oldalra" // Akadálymentesség - képernyőolvasók számára
          >
            Asztalfoglalás
          </button> 
        </Link>
      </div>
    </section>
  );
};

export default Hero;