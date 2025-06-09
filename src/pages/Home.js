import Hero from "../components/Hero";  // Az Hero komponens importálása a Hero.js fájlból.
import Special from "../components/Special";  // A Special komponens importálása a Special.js fájlból.
import SocialCardList from "../components/SocialCardList";  // A SocialCardList komponens importálása a SocialCardList.js fájlból.
import data from "../data";  // Az adatok importálása a data.js fájlból.
import edina from "../images/profiles/edina.jpg";
import gaspar from "../images/profiles/gaspar.jpg";
import szilvi from "../images/profiles/szilvi.jpg";
import viki from "../images/profiles/viki.jpg";


const Home = () => {  // A Home komponensünk az alkalmazás főoldalát jeleníti meg, amely a Hero, Special és SocialCardList komponensekből áll.
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

  return (  // A Home komponensünk visszatérési értéke egy JSX kifejezés, amely a Hero, Special és SocialCardList komponenseket tartalmazza.
    <>  {/* A fragment tagok segítségével több JSX elemet is visszaadhatunk a komponensből. */}
      <Hero />  {/* A Hero komponensünk az étterem címét, helyét, leírását és egy gombot tartalmaz, amely az asztalfoglalás oldalra navigál. */}
      <Special data={menuData} /> {/* A Special komponensünk a menü különlegességeit jeleníti meg. */}
      <SocialCardList data={socialCards} /> {/* A SocialCardList komponensünk a vendégek véleményeit jeleníti meg. */}
    </> // A fragment tagok segítségével több JSX elemet is visszaadhatunk a komponensből.
  );
};

// Az akciók szűrése az új adatstruktúrából
const menuData = data.filter(item => [  // Az akciókat egy tömbben tároljuk, amelyeket a Special komponens segítségével jelenítünk meg.
  "Grillezett sajtos szendvics",  // Az akciók nevei.
  "Citromos csirkés tészta",
  "Almás empanadák"
].includes(item.name)); // Az akciók neveinek összehasonlítása az adatok neveivel.

export default Home;