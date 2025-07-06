import "./Card.css";

/**
 * Card komponens - Étlap elem megjelenítése
 * Újrafelhasználható komponens egyedi étel/ital bemutatására
 * Prop-ként kapja meg az étel adatait és strukturáltan jeleníti meg
 */

const Card = ({ data }) => {
  return (
    // Kártya fő konténere
    <div className="card">
      {/* Kép szekció - inline stílus használata dinamikus háttérképhez */}
      <div 
        className="imgBx" 
        style={{ 
          background: `url(${data.image}) no-repeat center / cover` 
        }}
      >
      </div>
      
      {/* Tartalmi szekció - szöveg alapú információk */}
      <div className="content">
        {/* Ár megjelenítése */}
        <span className="price">
          {/* Ár formázása forint valutával */}
          <span>{`${data.price} Ft`}</span>
        </span>
        
        {/* Termék részletek szekció */}
        <div className="product-details">
          {/* Étel neve */}
          <h1>{data.name}</h1>
          
          {/* Étel leírása - fallback szöveggel hiányzó leírás esetén */}
          <p>{data.description || "Nem áll rendelkezésre leírás."}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;