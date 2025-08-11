/**
 * Card komponens - Étlap elem megjelenítése Tailwind CSS-sel
 * Újrafelhasználható komponens egyedi étel/ital bemutatására
 * Prop-ként kapja meg az étel adatait és strukturáltan jeleníti meg
 */

const Card = ({ data }) => {
  return (
    // Kártya fő konténere - group osztály a hover hatás továbbadásához
    <div
      className="group w-[320px] h-[400px] rounded-[15px] overflow-hidden transition-transform duration-300 m-5 bg-[#495e57] hover:-translate-y-[10px] 
                 max-[768px]:w-[295px] max-[768px]:h-[375px] max-[768px]:m-[10px]"
    >
      {/* Kép szekció - dinamikus háttérkép inline style-ban */}
      <div
        className="h-[240px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>

      {/* Tartalom szekció - szöveges információk */}
      <div
        className="p-[5px] bg-[#495e57] transition-transform duration-300 group-hover:-translate-y-[70px]"
      >
        {/* Ár megjelenítése - középre igazítva, sárga színnel */}
        <span className="text-[#F4CE14] text-[1.5rem] flex justify-center max-[768px]:text-[1.4rem]">
          {`${data.price} Ft`}
        </span>

        {/* Termék részletek szekció */}
        <div className="text-center mt-1">
          {/* Étel neve - fehér szín, reszponzív méret */}
          <h1 className="text-white text-[1.1rem] mt-[0.3rem] max-[768px]:text-[1rem]">
            {data.name}
          </h1>

          {/* Étel leírása - fallback szöveggel, ha nincs leírás */}
          <p className="text-white text-[0.9rem] max-[768px]:text-[0.8rem]">
            {data.description || "Nem áll rendelkezésre leírás."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;