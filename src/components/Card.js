import "./Card.css";

const Card = ({ data }) => {  // A Card komponens egy étel kártyát jelenít meg, amely tartalmazza az étel nevét, árát és leírását.
  const backgroundStyle = data.image  /* A backgroundStyle változó a kártya háttérképének stílusát tárolja. */
    ? { background: `url(${data.image}) no-repeat center / cover` } /* Ha az adat tartalmaz képet, akkor a háttérkép stílusát beállítjuk. */
    : { background: '#ddd' }; /* Ha nincs kép, akkor egy alapértelmezett színt állítunk be. */

  return (  /* A komponens visszaadja a kártya JSX kódját, amely tartalmazza az étel képét, nevét, árát és leírását. */
    <div className="card">
      <div
        className="imgBx"   /* Az imgBx osztály a kártya képének tárolására szolgál. */
        style={{ background: `url(${data.image}) no-repeat center / cover` }} /* Az étel képének megjelenítése. */
        role="img"  /* A role attribútum segít a képernyőolvasóknak megérteni, hogy ez egy kép. */
        aria-label={`${data.name} étel neve`} /* Az aria-label attribútum segít a képernyőolvasóknak megérteni, hogy ez az étel neve. */
      ></div>
      <div className="content">
        <span className="price">
          <span>{`${data.price} Ft`}</span>  {/* Az étel árának megjelenítése. */}
        </span>
        <div className="product-details"> {/* Az étel nevének és leírásának megjelenítése. */}
          <h1>{data.name}</h1>  {/* Az étel nevének megjelenítése. */}
          <p>{data.description || "Nem áll rendelkezésre leírás."}</p>  {/* Az étel leírásának megjelenítése. */}
        </div>
      </div>
    </div>
  );
};

export default Card;