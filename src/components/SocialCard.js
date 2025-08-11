/**
 * SocialCard komponens - Tailwind CSS verzió
 * Vendégek véleményét jeleníti meg képpel és szöveggel
 */

const SocialCard = ({ name, description, image }) => {
  return (
    // Kártya konténer - fehér háttér, lekerekített, árnyék, animált hover
    <div className="bg-white border border-[#ddd] rounded-[8px] shadow-md w-[18.5rem] h-[18.5rem] m-[5px] mb-[20px] transition-transform duration-300 hover:scale-[1.05]">
      
      {/* Profilkép - kör alakú, középre igazított, szegéllyel */}
      <img
        src={image}
        alt={name}
        className="rounded-full mx-auto mt-[-0.6rem] border-[2.5px] border-[#495e57]"
      />

      {/* Tartalom - név és vélemény */}
      <div className="p-[14px] text-center">
        <h3 className="m-[1px] text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-[#666] text-[0.9rem]">{`"${description}"`}</p>
      </div>
    </div>
  );
};

export default SocialCard;