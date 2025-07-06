import Card from "./Card";  
import "./Special.css";

/**
 * Special komponens - Heti akciók szekció
 * Megjeleníti a heti akcióban lévő ételeket Card komponensek segítségével
 * Dinamikusan rendereli a prop-ként kapott adatokat
 */

const Special = ({ data }) => { 
  return (
    // Heti akciók szekció - ID-val ellátva navigációs célokra
    <section id="special">  
      <h2>Heti akcióink!</h2>
      
      {/* Akciós ételek konténere */}
      <div className="special-body">  
        {/* Dinamikus renderelés - végigiterálás az adatok tömbjén */}
        {data.map((element) => {  
          return (
            // Card komponens minden étel elemhez
            <Card 
              key={element.id} // key prop: React optimalizálás miatt szükséges egyedi azonosító
              data={element} // data prop: étel adatainak átadása a Card komponensnek
            />
          );  
        })}
      </div>
    </section>
  );
};

export default Special;