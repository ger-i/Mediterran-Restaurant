import "./Card.css";

const Card = ({ data }) => {  // A Card komponensünk egy kártyát jelenít meg, amely egy étel képét, nevét, leírását és árát tartalmazza.
  return (
    <div className="card">
      <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div> {/* Az étel képének megjelenítése. */}
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