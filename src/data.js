import appe1 from "./images/menu/Turkish-Eggs-Cropped.jpg";
import appe2 from "./images/menu/Challah-French-toast.jpg";
import appe3 from "./images/specials/feta-pita-sandwich.jpg";
import main1 from "./images/specials/lemon-chicken-pasta.jpg";
import main2 from "./images/menu/Mediterranean-Dish_Grilled-Lamb-Burgers.jpg";
import main3 from "./images/menu/Pollo-Alla-Pizzaiola.jpg";
import main4 from "./images/menu/meatball-soup.jpg";
import main5 from "./images/menu/Mediterranean-chicken.jpg";
import main6 from "./images/menu/Gnocchi-Chicken-Soup.jpg";
import des1 from "./images/specials/apple-empanadas.jpg";
import des2 from "./images/menu/Tahini-Chocolate-Pudding.jpg";
import des3 from "./images/menu/Pumpkin-Parfait.jpg";

// Az adatokat egy tömbben tároljuk, amelyeket a Card komponens segítségével jelenítünk meg.
const data = [  
  {
    id: 1,  // Az étel azonosítója.
    type: "appetizer",  // Az étel típusa.
    name: "Török tojás spenóttal",  // Az étel neve.
    image: appe1, // Az étel képe.
    price: "1490", // Az étel ára.
    description: "Az Ispanakli Yumurta, azaz „tojás spenóttal”, egy török étel, amely tökéletesen buggyantott tojásból, fűszerezett spenótból, paradicsomból és török édes paprika ágyon tálalva áll.", // Az étel leírása.
  },
  {
    id: 2,
    type: "appetizer",
    name: "Challah francia pirítós",
    image: appe2,
    price: "2490",
    description: "Challah francia pirítós fahéjjal és narancshéjjal illatosítva, mézzel meglocsolva. Finom és különleges, nem a tipikus francia pirítós. Próbáld ki, nem fogsz csalódni!",
  },
  {
    id: 3,
    type: "appetizer",
    name: "Grillezett sajtos szendvics",
    image: appe3,
    price: "1990",
    description: "Pita grillezett sajt, mediterrán kedvencekkel töltve, többek között olvadt mozzarellával, fetával, spenóttal, szárított paradicsommal és egy kis bazsalikomos pestóval.",
  },
  {
    id: 4,
    type: "main",
    name: "Citromos csirkés tészta",
    image: main1,
    price: "3990",
    description: "Kóstolja meg a citromos csirkés tészta ízét, ahol a citrom héja találkozik a teljes tejből készült ricotta krémjével! Az ízek tökéletes ötvözése. Kényeztesse magát egy olyan étellel, amely éppolyan tápláló, mint amilyen finom! ",
  },
  {
    id: 5,
    type: "main",
    name: "Görög bárányburger",
    image: main2,
    price: "4990",
    description: "Pörgesd fel a burgerestet ezzel a görög stílusú bárányburger recepttel! A görög ízek magasabb szintre emelik ezt a könnyű vacsorát, mediterrán stílusú fűszerekkel, mint a friss petrezselyem, menta, kömény és oregánó. Tálaljuk krémes tzatziki szósszal, csípős feta sajttal, sós olajbogyóval és friss kaliforniai paprikával!",
  },
  {
    id: 6,
    type: "main",
    name: "Csirke paradicsomszószban",
    image: main3,
    price: "3990",
    description: "Ez az egyserpenyős csirke paradicsomszószban a klasszikus olasz Steak alla Pizzaiola újragondolása. A vékony csirkemelleket gyorsan serpenyőben megpirítjuk, majd ízesített paradicsom- és kapribogyószószban pároljuk, végül olvadt mozzarella sajttal tesszük gazdagabbá az ízvilágot.",
  },
  {
    id: 7,
    type: "main",
    name: "Olasz fasírt leves",
    image: main4,
    price: "2490",
    description: "Ebben a fasírtleves receptben a leglédúsabb olasz stílusú húsgombócok illatos zöldségekkel és tésztával párolódnak gazdag paradicsomlében.",
  },
  {
    id: 8,
    type: "main",
    name: "Mediterrán csirke paradicsommal és olajbogyóval",
    image: main5,
    price: "3990",
    description: "Ez a serpenyőben készült mediterrán csirke recept tele van fokhagymás sült csirkével, sós olajbogyóval, krémes fetával, paradicsommal és petrezselyemmel.",
  },
  {
    id: 9,
    type: "main",
    name: "Csirke Gnocchi leves",
    image: main6,
    price: "2190",
    description: "A csirkealaplében finoman párolt, falatnyi, párnás galuskák a kényelmes ételek megtestesítői. Bele dobtunk gombát, sárgarépát, zellert, hagymát, valamint egy csipetnyi kakukkfüvet és rozmaringot a tápláló és ízletes vacsorához.",
  },
  {
    id: 10,
    type: "dessert",
    name: "Almás empanadák",
    image: des1,
    price: "1490",
    description: "A sült empanadák spanyol stílusú almás piték, amelyek finom délutáni élvezetet vagy rusztikus desszertet jelentenek.",
  },
  {
    id: 11,
    type: "dessert",
    name: "Vegán csokoládépuding Tahinivel",
    image: des2,
    price: "2190",
    description: "Ez a vegán csokoládépuding diós, krémes tahinivel és melegítő baharat fűszerrel gazdag ízvilággal rendelkezik. Enyhén édes és kényeztető.",
  },
  {
    id: 12,
    type: "dessert",
    name: "Sütőtök parfé",
    image: des3,
    price: "1690",
    description: "Hangulatos ízekre vágyik, vagy egészséges desszertet keres? Akkor imádni fogja ezt az egyszerű görög joghurtos sütőtök parfét! A krémes mascarpone bársonyos textúrát kölcsönöz ebben az egészséges gluténmentes desszertben, míg az étcsokoládé chips és a dió ropogósabbá teszi.",
  },
];

export default data;