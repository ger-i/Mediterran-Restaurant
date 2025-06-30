import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
      <div className="content">
        <span className="price">
          <span>{`${data.price} Ft`}</span>
        </span>
        <div className="product-details">
          <h1>{data.name}</h1>
          <p>{data.description || "Nem áll rendelkezésre leírás."}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
