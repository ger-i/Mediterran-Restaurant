import data from "../data"; // Az importált data fájlunk az étlapunk adatait tartalmazza.
import Card from "../components/Card";  // Az importált Card komponens segítségével jelenítjük meg az ételeket.
import "./Menu.css";

const Menu = () => {
  // Az adatokat előre szűrjük kategóriák szerint
  const appetizers = data.filter(element => element.type === "appetizer");
  const mains = data.filter(element => element.type === "main");
  const desserts = data.filter(element => element.type === "dessert");

  return (
    <section className="menu-container">
      <h1 className="menu-title">Étlapunk</h1>

      <div className="menu">
        <h2 className="menu-subtitle">Előételek</h2>
        <div className="special-body">
          {appetizers.map((element, index) => ( // Az előételek adatait jelenítjük meg a Card komponens segítségével
            <Card key={index} data={element} /> // A Card komponensnek átadjuk az ételek adatait
          ))}
        </div>
      </div>

      <div className="menu">
        <h2 className="menu-subtitle">Főételek</h2>
        <div className="special-body">
          {mains.map((element, index) => (  // A főételek adatait jelenítjük meg a Card komponens segítségével
            <Card key={index} data={element} /> // A Card komponensnek átadjuk az ételek adatait
          ))}
        </div>
      </div>

      <div className="menu">
        <h2 className="menu-subtitle">Desszertek</h2>
        <div className="special-body">
          {desserts.map((element, index) => ( // A desszertek adatait jelenítjük meg a Card komponens segítségével
            <Card key={index} data={element} /> // A Card komponensnek átadjuk az ételek adatait
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;