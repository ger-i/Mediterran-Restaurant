import SocialCard from './SocialCard';
import './SocialCard.css';
import './SocialCardList.css';

/**
 * SocialCardList komponens - Testimonial/vélemény lista
 * Több vendég véleményét jeleníti meg SocialCard komponensek segítségével
 * Container komponens, amely kezeli a testimonials szekció teljes megjelenítését
 */

const SocialCardList = ({ data }) => {  
  return (
    <div className="social-card-container"> 
      <h2 className="testimonial-heading">Vendégeink mondták!</h2>  
      
      <div className="social-card-list">  
        {/* Dinamikus renderelés - végigiterálás a testimonial adatokon */}
        {data.map((card) => ( 
          <SocialCard 
            key={card.name}    // React key - név alapján (egyedi azonosító)
            {...card}          // Spread operator - összes card property átadása
          />  
        ))}
      </div>  
    </div>
  );
};

export default SocialCardList;
