import React, { useMemo } from 'react';
import data from "../data";
import Card from "../components/Card";

// Menü kategóriák definíciója - könnyen bővíthető
const MENU_CATEGORIES = [
  { key: 'appetizer', title: 'Előételek', emoji: '🥗' },
  { key: 'main', title: 'Főételek', emoji: '🍽️' },
  { key: 'dessert', title: 'Desszertek', emoji: '🍰' }
];

const Menu = () => {
  // Memoizált adatcsoportosítás - csak akkor fut újra, ha a data változik
  const categorizedMenu = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, category) => {
      acc[category.key] = data.filter(item => item.type === category.key);
      return acc;
    }, {});
  }, []);

  // Egy adott menükategória szekciója
  const MenuSection = ({ category, items }) => {
    // Ha nincs adat az adott kategóriában
    if (!items || items.length === 0) {
      return (
        <section
          className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#F4CE14]"
          aria-labelledby={`${category.key}-heading`}
        >
          {/* Kategória címe emoji-val */}
          <h2
            id={`${category.key}-heading`}
            className="text-[1.6rem] mb-8 text-[#495e57] flex flex-col md:flex-row items-center justify-center gap-2"
          >
            <span className="text-[1.8rem]" aria-hidden="true">{category.emoji}</span>
            {category.title}
          </h2>

          {/* Üres kategória üzenet */}
          <div className="text-center p-8 text-gray-600 italic">
            <p>Jelenleg nincs elérhető étel ebben a kategóriában.</p>
          </div>
        </section>
      );
    }

    // Ha van adat, megjelenítjük a kártyákat
    return (
      <section
        className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#F4CE14]"
        aria-labelledby={`${category.key}-heading`}
      >
        <h2
          id={`${category.key}-heading`}
          className="text-[1.6rem] mb-8 text-[#495e57] flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <span className="text-[1.8rem]" aria-hidden="true">{category.emoji}</span>
          {category.title}
        </h2>

        {/* Rácsos elrendezés a Card komponensekhez */}
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {items.map((item) => (
            <div key={item.id || item.name} role="listitem">
              <Card data={item} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Hibakezelés - ha nincs adat
  if (!data || data.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-[3rem] text-[#F4CE14] mb-4 text-center drop-shadow-md">
          Étlapunk
        </h1>
        <div className="text-center p-12 bg-[#f8f9fa] rounded-xl border-l-4 border-red-600">
          <p>Sajnáljuk, jelenleg nem tudjuk betölteni az étlapot. Kérjük, próbálja újra később.</p>
        </div>
      </div>
    );
  }

  // Fő render - fejléc + kategóriák
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Fejléc szekció */}
      <header className="text-center mb-12">
        <h1 className="text-[3rem] text-[#F4CE14] mb-4 drop-shadow-md">
          Étlapunk
        </h1>
        <p className="text-[1.2rem] text-gray-600 italic">
          Fedezze fel mediterrán ihletésű ételeink válogatását
        </p>
      </header>

      {/* Menü tartalom - kategóriák szekciói */}
      <div className="flex flex-col gap-12">
        {MENU_CATEGORIES.map((category) => (
          <MenuSection
            key={category.key}
            category={category}
            items={categorizedMenu[category.key]}
          />
        ))}
      </div>
    </main>
  );
};

export default Menu;