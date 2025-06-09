import SocialCard from './SocialCard';
import './SocialCard.css';

const SocialCardList = ({ data }) => {  // A SocialCardList komponensünk egy listát jelenít meg a SocialCard komponens
  return (
    <div className="social-card-container"> {/* A kártyák konténere. */}
      <h2 className="testimonial-heading">Vendégeink mondták!</h2>  {/* A kártyák fejléce. */}
      <div className="social-card-list">  {/* A kártyák listája. */}
        {data.map((card) => ( // Az adatokat egy tömbben tároljuk, amelyeket a SocialCard komponens segítségével jelenítünk meg.
          <SocialCard key={card.name} {...card} />  // A SocialCard komponens segítségével jelenítjük meg a kártyákat.
        ))}
      </div>  
    </div>
  );
};

export default SocialCardList;