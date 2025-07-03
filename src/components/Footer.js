import { Link } from "react-router-dom";  
import FooterImg from "../images/logos/logo_2.png";
import "./Footer.css";

/**
 * Footer komponens - Oldal lábléce
 * Tartalmazza a logo-t, oldaltérképet, kapcsolati adatokat és copyright információt
 */
const Footer = () => {  
  return (
    <>
      {/* Fő footer container */}
      <footer className="footer-layout">  
        
        {/* Logo szekció */}
        <div className="footer-branding">    
          <img src={FooterImg} alt="Mediterran footer pic" />
        </div>
        
        {/* Oldaltérkép szekció - navigációs linkek */}
        <div className="footer-sitemap">  
          <h4>OLDALTÉRKÉP</h4>
          {/* Belső linkek az oldal különböző szakaszaihoz */}
          <Link className="footer-links" to="/">Főoldal</Link>    
          <Link className="footer-links" to="/about">Rólunk</Link>
          <Link className="footer-links" to="/menu">Étlap</Link>
          <Link className="footer-links" to="/reserve">Asztalfoglalás</Link>  
        </div>
        
        {/* Kapcsolati információk szekció */}
        <div className="footer-contact">  
          <h4>KAPCSOLAT</h4>
          {/* Cím - szemantikus address elem használata */}
          <address>
            1052 Budapest,
            <br />
            Galamb utca 2.
          </address>
          {/* Telefonszám - kattintható link telefonhíváshoz */}
          <a className="footer-tel" href="tel:+11234567890">
            06 1 123 4567
          </a>
          <br />
          {/* Email cím - kattintható link email küldéshez */}
          <a className="footer-email" href="mailto: mediterran@gmail.com">
            mediterran@gmail.com
          </a>
        </div>
        
        {/* Copyright szekció */}
        <div className="footer-copyright">
          <p>© Mediterrán Étterem by Geri.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
