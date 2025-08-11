import SocialCard from './SocialCard';

/**
 * SocialCardList komponens - Vélemények szekció Tailwind CSS-sel
 * Több vendég véleményét jeleníti meg SocialCard komponensek segítségével
 */

const SocialCardList = ({ data }) => {
  return (
    // Fő konténer - középre igazítás, világos háttér
    <div className="text-center bg-[#EDEFEE] py-4">
      {/* Cím - felső és alsó padding */}
      <h2 className="py-4 text-2xl font-semibold text-black">
        Vendégeink mondták!
      </h2>

      {/* Véleménykártyák konténere - flexbox, wrap, középre igazítás, gap */}
      <div className="flex flex-wrap justify-center gap-2">
        {data.map((card) => (
          <SocialCard
            key={card.name} // Egyedi kulcs a név alapján
            {...card}       // Minden prop átadása a SocialCard-nak
          />
        ))}
      </div>
    </div>
  );
};

export default SocialCardList;