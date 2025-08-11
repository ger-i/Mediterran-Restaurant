import { Link } from "react-router-dom";
import FooterImg from "../images/logos/logo_2.png";

/**
 * Footer komponens - Tailwind CSS verzió
 * Tartalmazza a logót, navigációs linkeket, kapcsolati adatokat és copyright szöveget
 */

const Footer = () => {
  return (
    <footer className="w-full bg-[#495e57] text-white">
      
      {/* Fő tartalom konténer: logó + navigáció + kapcsolat */}
      <div className="flex flex-col lg:flex-row flex-wrap">
        
        {/* Logó szekció - bal oldalon nagy képernyőn */}
        <div className="flex-1 p-2 text-center lg:text-left">
          <img
            src={FooterImg}
            alt="Mediterran footer pic"
            className="pl-[1rem] mx-auto lg:mx-0 max-[1200px]:h-[3.2rem] pr-12"
          />
        </div>

        {/* Oldaltérkép szekció */}
        <div className="flex-1 p-2 text-center">
          <h4 className="text-[1.2rem] md:text-[1.5rem] font-bold">OLDALTÉRKÉP</h4>

          {/* Navigációs linkek - reszponzív elrendezés */}
          <Link to="/" className="block text-[1rem] md:text-[1.1rem] py-1 hover:text-[#F4CE14] transition-colors">Főoldal</Link>
          <Link to="/about" className="block text-[1rem] md:text-[1.1rem] py-1 hover:text-[#F4CE14] transition-colors">Rólunk</Link>
          <Link to="/menu" className="block text-[1rem] md:text-[1.1rem] py-1 hover:text-[#F4CE14] transition-colors">Étlap</Link>
          <Link to="/reserve" className="block text-[1rem] md:text-[1.1rem] py-1 hover:text-[#F4CE14] transition-colors">Asztalfoglalás</Link>
        </div>

        {/* Kapcsolat szekció */}
        <div className="flex-1 p-2 text-center">
          <h4 className="text-[1.2rem] md:text-[1.5rem] font-bold">KAPCSOLAT</h4>
          {/* Kapcsolati adatok - cím, telefon, email */}
          <address className="not-italic text-white text-[0.9rem] md:text-[1.1rem]">
            1052 Budapest,
            <br />
            Galamb utca 2.
          </address>
          <a href="tel:+11234567890" className="block pt-[2.3rem] text-white no-underline">06 1 123 4567</a>
          <a href="mailto:mediterran@gmail.com" className="block text-white no-underline">mediterran@gmail.com</a>
        </div>
      </div>

      {/* Copyright szekció */}
      <div className="w-full py-2 text-center">
        <p className="text-[#ccc] text-sm m-0">© Mediterrán Étterem by Geri.</p>
      </div>
    </footer>
  );
};

export default Footer;
