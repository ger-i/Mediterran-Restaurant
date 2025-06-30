import Hero from "../components/Hero";
import Special from "../components/Special";
import SocialCardList from "../components/SocialCardList";
import data from "../data";
import edina from "../images/profiles/edina.jpg";
import gaspar from "../images/profiles/gaspar.jpg";
import szilvi from "../images/profiles/szilvi.jpg";
import viki from "../images/profiles/viki.jpg";

// Konstansok kiemelése a komponens tetejére
const FEATURED_ITEMS = [
  "Grillezett sajtos szendvics",
  "Citromos csirkés tészta", 
  "Almás empanadák"
];

const Home = () => {
  // Menü adatok szűrése a kiemelt elemekhez
  const menuData = data?.filter(item => 
    FEATURED_ITEMS.includes(item.name)
  ) || [];
  
  const socialCards = [ // A vendégek véleményeit egy tömbben tároljuk, amelyeket a SocialCardList komponens segítségével jelenítünk meg.
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

  // Hibakezelés - ha nincs menü adat
  if (!data || data.length === 0) {
    return (
      <div className="error-container">
        <p>Hiba történt az adatok betöltése során. Kérjük, próbálja újra később.</p>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Special data={menuData} />
      <SocialCardList data={socialCards} />
    </>
  );
};

export default Home;
