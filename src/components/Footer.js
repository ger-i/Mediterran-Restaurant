import { Link } from "react-router-dom";  // A react-router-dom könyvtárból importált komponens, amely lehetővé teszi az oldalak közötti navigációt anélkül, hogy az oldal újratöltődne.
import FooterImg from "../images/logos/logo_2.png";
import "./Footer.css";

const Footer = () => {  // A Footer komponensünk a láblécet jeleníti meg.
  return (
    <>
      <footer className="footer-layout">  {/* A lábléc elrendezését a footer-layout class határozza meg. */}    
        <div className="footer-branding">    
          <img src={FooterImg} alt="Mediterran footer pic" /> {/* A lábléc képe. */}
        </div>

        <div className="footer-sitemap">  
          <h4>OLDALTÉRKÉP</h4>
          <Link className="footer-links" to="/">Főoldal</Link>    
          <Link className="footer-links" to="/about">Rólunk</Link>
          <Link className="footer-links" to="/menu">Étlap</Link>
          <Link className="footer-links" to="/reserve">Asztalfoglalás</Link>  {/* A Link komponens segítségével a megfelelő oldalra navigálunk. */}
        </div>

        <div className="footer-contact">  {/* A lábléc elérhetőségeit tartalmazó rész. */}      
          <h4>KAPCSOLAT</h4>
          <address>
            1052 Budapest,
            <br />
            Galamb utca 2.
          </address>
          <a className="footer-tel" href="tel:+11234567890">
            06 1 123 4567
          </a>
          <br />
          <a className="footer-email" href="mailto: mediterran@gmail.com">
            mediterran@gmail.com
          </a>
        </div>

        <div className="footer-copyright">
          <p>© Mediterrán Étterem by Geri.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;