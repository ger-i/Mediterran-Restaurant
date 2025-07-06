// Komponens importok
import Hero from "../components/Hero";
import Special from "../components/Special";
import SocialCardList from "../components/SocialCardList";
import data from "../data";

// Profilkép importok
import edina from "../images/profiles/edina.jpg";
import gaspar from "../images/profiles/gaspar.jpg";
import szilvi from "../images/profiles/szilvi.jpg";
import viki from "../images/profiles/viki.jpg";

/**
 * Kiemelt ételek konstans
 * Definiálja, hogy mely ételek jelenjenek meg a főoldalon
 * Szűrési alapként szolgál az összes étlap adat közül
 */
const FEATURED_ITEMS = [
  "Grillezett sajtos szendvics",
  "Citromos csirkés tészta", 
  "Almás empanadák"
];

/**
 * Home komponens - Főoldal
 * Az alkalmazás landing page-je, több szekciót egyesít
 * Tartalmaz hero szekciót, kiemelt ételeket és vásárlói véleményeket
 */
const Home = () => {
  /**
   * Kiemelt ételek szűrése
   * Az összes étlap adatból kiválasztja a FEATURED_ITEMS-ben meghatározott ételeket
   * Null-safe operátor (?.) és fallback tömb ([]) használata hibakezeléshez
   */
  const menuData = data?.filter(item => 
    FEATURED_ITEMS.includes(item.name)
  ) || [];
  
  /**
   * Vásárlói vélemények adatai
   * Statikus adatstruktúra a testimonial szekció számára
   * Minden objektum tartalmazza a név, leírás és profilkép adatokat
   */
  const socialCards = [ 
    {
      name: "Edina",
      description: "A hangulat varázslatos volt, a kiszolgálás pedig elsőosztályú. Minden falat egy gasztronómiai kaland volt. Külön köszönet a pincérnek, aki rendkívül figyelmes volt!",
      image: edina,
    },
    {
      name: "Gáspár",
      description: "Az ételek elképesztően finomak voltak. Az étterem dekorációja és a zene egy igazán különleges estét varázsolt nekünk. Ajánlom mindenkinek!",
      image: gaspar,
    },
    {
      name: "Szilvi",
      description: "Az étterem hangulata tökéletes volt egy romantikus vacsorához. Az ételek frissek és ízletesek voltak, az adagok pedig bőségesek. Már alig várom, hogy visszatérjek!",
      image: szilvi,
    },
    {
      name: "Viki",
      description: "A kiszolgálás gyors és barátságos volt, az étlap pedig változatos. Az étterem tökéletes választás egy családi összejövetelhez. Mindenkinek ajánlom!",
      image: viki,
    }
  ];

  /**
   * Hibakezelés - adatok ellenőrzése
   * Ha nincs adat vagy üres a tömb, hibaüzenetet jelenít meg
   * Graceful degradation elve - az alkalmazás nem omlik össze
   */
  if (!data || data.length === 0) {
    return (
      <div className="error-container">
        <p>Hiba történt az adatok betöltése során. Kérjük, próbálja újra később.</p>
      </div>
    );
  }

  /**
   * Főoldal renderelése
   * Három fő szekció egymás után:
   * 1. Hero - bevezető szekció
   * 2. Special - kiemelt ételek
   * 3. SocialCardList - vásárlói vélemények
   */
  return (
    <>
      {/* Hero szekció - oldal teteje, CTA gombbal */}
      <Hero />
      
      {/* Kiemelt ételek szekció - szűrt menü adatokkal */}
      <Special data={menuData} />
      
      {/* Testimonial szekció - vásárlói vélemények */}
      <SocialCardList data={socialCards} />
    </>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 6930feade993336bd202822d9b3f81bf81e3555e
