import React, { useMemo } from 'react';
import data from "../data"; // Az importált data fájlunk az étlapunk adatait tartalmazza.
import Card from "../components/Card";  // Az importált Card komponens segítségével jelenítjük meg az ételeket.
import "./Menu.css";

// Menü kategóriák definiálása (komponensen kívül, hogy ne változzon minden rendereléskor)
const MENU_CATEGORIES = [
  { key: 'appetizer', title: 'Előételek', emoji: '🥗' },
  { key: 'main', title: 'Főételek', emoji: '🍽️' },
  { key: 'dessert', title: 'Desszertek', emoji: '🍰' }
];

const Menu = () => {
  // Adatok csoportosítása kategóriák szerint (memoizálva a teljesítmény érdekében)
  const categorizedMenu = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, category) => {
      acc[category.key] = data.filter(item => item.type === category.key);
      return acc;
    }, {});
  }, []);

  // Menü szekció komponens
  const MenuSection = ({ category, items }) => {
    if (!items || items.length === 0) {
      return (
        <section className="menu-section" aria-labelledby={`${category.key}-heading`}>
          <h2 id={`${category.key}-heading`} className="menu-subtitle">
            <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
            {category.title}
          </h2>
          <div className="empty-category">
            <p>Jelenleg nincs elérhető étel ebben a kategóriában.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="menu-section" aria-labelledby={`${category.key}-heading`}>
        <h2 id={`${category.key}-heading`} className="menu-subtitle">
          <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
          {category.title}
        </h2>
        <div className="menu-grid" role="list">
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
      <div className="menu-container">
        <h1 className="menu-title">Étlapunk</h1>
        <div className="error-message">
          <p>Sajnáljuk, jelenleg nem tudjuk betölteni az étlapot. Kérjük, próbálja újra később.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="menu-container">
      <header className="menu-header">
        <h1 className="menu-title">Étlapunk</h1>
        <p className="menu-description">
          Fedezze fel mediterrán ihletésű ételeink válogatását
        </p>
      </header>

      <div className="menu-content">
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
