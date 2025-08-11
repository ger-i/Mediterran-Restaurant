import about1 from "../images/about/about1.jpg";
import about2 from "../images/about/about2.jpg";
import "./About.css";

// About komponens - Az étterem bemutatkozó szekciója
const About = () => {
  return (
    <>
      {/* Fő about szekció container */}
      <section className="about-section">
        
        {/* Bal oldali tartalom (szövegek) */}
        <div className="about-content">
          {/* Étterem neve és címe */}
          <h2 className="about-title">Mediterrán Étterem</h2>
          <h3 className="about-subtitle">Budapest</h3>
          
          {/* Étterem leírása és szolgáltatások */}
          <p className="about-text">
            Élvezze a frissen főzött, mediterrán ihletésű ételeket, koktélokat, hordós söröket és borokat a kontinens minden tájáról,
            kiváló ár-érték arányban, mindig mosolyogva tálalva. Nálunk mindent megtalál, amire szüksége van a következő pihentető
            családi kiruccanáshoz, romantikus vacsorához, ünnepléshez vagy különleges alkalomhoz. Hagyja, hogy mi gondoskodjunk önről, és foglaljon asztalt nálunk még ma!
          </p>
          
          {/* Nyitvatartási idők */}
          <p className="about-text-open">
            Nyitvatartás:<br />
            Hétfő - Csütörtök 9:00 - 24:00 <br />
            Péntek - Vasárnap 11:00 - 24:00
          </p>
          
          {/* Asztalfoglalási információk */}
          <p className="about-text-reservation">
            Asztalfoglalás: <br />
            Hétfő - Vasárnap 17:00 - 23:00
          </p>
        </div>
        
        {/* Jobb oldali képek */}
        <div className="about-images">
          {/* Első kép container-rel */}
          <div className="image-container">
            <img className="about-pic" src={about1} alt="about1" />
          </div>
          {/* Második kép container nélkül */}
          <div>
            <img className="about-pic" src={about2} alt="about2" />
          </div>
        </div>
        
      </section>
    </>
  );
};

export default About;
