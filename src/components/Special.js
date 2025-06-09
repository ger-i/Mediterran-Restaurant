// Ez a komponens jeleníti meg az akciókat, amelyeket a Card komponens segítségével jelenítünk meg.  

import "./Special.css";
import Card from "./Card";  // Az importált Card komponens segítségével jelenítjük meg az akciókat.

const Special = ({ data }) => { // A Special komponensünk az akciókat jeleníti meg.
  return (
    <section id="special">  {/* A special szekció egyedi azonosítóval rendelkezik, amely segítségével a CSS-ben könnyen elérhetjük. */}
      <h2>Heti akcióink!</h2>
      <div className="special-body">  {/* Az akciók megjelenítésére szolgáló div elem. */}
        {data.map((element) => {  // Az akciókat egy map függvény segítségével jelenítjük meg.
          return <Card key={element.id} data={element} />;  // A Card komponens segítségével jelenítjük meg az akciókat.
        })}
      </div>
    </section>
  );
};

export default Special;