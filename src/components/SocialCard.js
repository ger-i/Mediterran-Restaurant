const SocialCard = ({ name, description, image }) => {  // A SocialCard komponensünk egy kártyát jelenít meg, amely egy képet, nevet és leírást tartalmaz.
    return (
      <div className="social-card"> {/* A kártya konténere. */}
        <img src={image} alt={name} className="card-image" /> {/* A kép megjelenítése. */}
        <div className="card-content">  {/* A kártya tartalma. */}
          <h3>{name}</h3> {/* A név megjelenítése. */}
          <p>{`"${description}"`}</p> {/* A leírás megjelenítése. */}
        </div>
      </div>
    );
  };

  export default SocialCard;