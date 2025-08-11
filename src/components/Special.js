import Card from "./Card";

/**
 * Special komponens - Heti akciók szekció Tailwind CSS-sel
 * Megjeleníti a heti akcióban lévő ételeket Card komponensek segítségével
 * Dinamikusan rendereli a prop-ként kapott adatokat
 */

const Special = ({ data }) => {
  return (
    // Heti akciók szekció - ID-val ellátva navigációhoz
    <section id="special" className="py-8">
      {/* Cím - középre igazítva */}
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">
        Heti akcióink!
      </h2>
      {/* Akciós ételek konténere - flexbox, wrap, középre igazítás, gap */}
      <div className="flex flex-wrap justify-center gap-5">
        {/* Dinamikus renderelés - végigiterálás az adatok tömbjén */}
        {data.map((element) => (
          <Card
            key={element.id} // Egyedi kulcs az optimalizáláshoz
            data={element}   // Adatok átadása a Card komponensnek
          />
        ))}
      </div>
    </section>
  );
};

export default Special;