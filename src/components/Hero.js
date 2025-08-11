// React Router Link komponens importálása navigációhoz
import { Link } from "react-router-dom";

// Háttérkép importálása - így tudjuk használni inline style-ban
import heroBg from "../images/specials/hero2.jpg";

/**
 * Hero komponens - Főoldal hero szekciója
 * Látványos bevezető rész, amely tartalmazza a címet, leírást és egy gombot
 */
const Hero = () => {
  return (
    // Hero szekció konténer - háttérkép, lekerekített sarkok, fix méret
    <section
      className="mx-auto w-[65%] h-[18rem] overflow-hidden rounded-[15px] bg-cover bg-center bg-no-repeat relative"
      style={{
        // Háttérkép és sötét átlátszó réteg a szöveg olvashatóságáért
        backgroundImage: `linear-gradient(rgba(0,0,0,0.455), rgba(0,0,0,0.455)), url(${heroBg})`,
      }}
    >
      {/* Tartalom középre igazítva, fehér szöveg, padding a széleken */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Főcím - sárga szín, normál betűstílus, reszponzív méret */}
        <h1 className="text-[2rem] text-[#F4CE14] font-normal md:text-[1.8rem]">
          Mediterrán Étterem
        </h1>

        {/* Alcím - fehér szín, normál betűstílus, reszponzív méret */}
        <h2 className="text-[1.5rem] text-white font-normal md:text-[1.4rem]">
          Budapest
        </h2>

        {/* Leírás - középre igazított, fehér szöveg */}
        <p className="mt-2 text-white text-center">
          Családi tulajdonban lévő mediterrán étterem vagyunk, amely a hagyományos receptekre összpontosít, modern csavarral tálalva.
        </p>

        {/* Navigációs link - asztalfoglalás gomb */}
        <Link
          to="/reserve"
          aria-label="Navigálás az asztalfoglalás oldalra"
          className="no-underline" // Link aláhúzás eltávolítása
        >
          {/* Call-to-action gomb - sárga háttér, lekerekített, hover effekt */}
          <button className="mt-[2.5rem] px-5 py-1.5 bg-[#F4CE14] rounded-[15px] border-none cursor-pointer transition duration-300 hover:text-white">
            Asztalfoglalás
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

