/**
 * SocialCard komponens - Közösségi értékelés/testimonial kártya
 * Vendégek véleményét, értékelését jeleníti meg képpel és szöveggel
 * Újrafelhasználható komponens customer review szekciókhoz
 */

const SocialCard = ({ name, description, image }) => {  
  return (
    // Közösségi kártya fő konténere
    <div className="social-card"> 
      {/* Vendég/értékelő profilképe */}
      <img 
        src={image} 
        alt={name}              // Accessibility: képleírás a név alapján
        className="card-image" 
      /> 
      
      {/* Tartalmi szekció - név és vélemény */}
      <div className="card-content">  
        <h3>{name}</h3> 
        <p>{`"${description}"`}</p> {/* Vélemény szövege - idézőjelek közé ágyazva. Template literal használata az idézőjelek automatikus hozzáadásához */}
      </div>
    </div>
  );
};

export default SocialCard;