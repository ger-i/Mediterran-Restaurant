import React, { useMemo } from 'react';
import data from "../data"; 
import Card from "../components/Card"; 
import "./Menu.css";

// Menü kategóriák konstans definíciója - könnyű bővíthetőség és karbantarthatóság
const MENU_CATEGORIES = [
  { key: 'appetizer', title: 'Előételek', emoji: '🥗' },
  { key: 'main', title: 'Főételek', emoji: '🍽️' },
  { key: 'dessert', title: 'Desszertek', emoji: '🍰' }
];

// Fő Menu komponens definíciója
const Menu = () => {
  // Memoizált kategorizálás - csak akkor számolódik újra, ha a data változik
  // Performance optimalizálás: elkerüli a felesleges újraszámolásokat
  const categorizedMenu = useMemo(() => {
    return MENU_CATEGORIES.reduce((acc, category) => {
      // Minden kategóriához szűrjük az adatokat típus szerint
      acc[category.key] = data.filter(item => item.type === category.key);
      return acc;
    }, {});
  }, []);

  // Belső komponens egy menü szekció megjelenítéséhez
  // Paraméterek: category (kategória adatok), items (az adott kategória ételei)
  const MenuSection = ({ category, items }) => {
    // Üres kategória kezelése - ha nincs étel az adott kategóriában
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

    // Normál kategória megjelenítése - ha vannak ételek
    return (
      <section className="menu-section" aria-labelledby={`${category.key}-heading`}>
        {/* Kategória címe emoji-val */}
        <h2 id={`${category.key}-heading`} className="menu-subtitle">
          <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
          {category.title}
        </h2>
        
        {/* Ételek rácsos elrendezésben */}
        <div className="menu-grid" role="list">
          {items.map((item) => (
            <div key={item.id || item.name} role="listitem">
              {/* Card komponens minden ételhez */}
              <Card data={item} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Hibakezelés - ha nincs adat vagy üres a data array
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

  // Fő render - teljes étlap megjelenítése
  return (
    <main className="menu-container">
      {/* Étlap fejléc */}
      <header className="menu-header">
        <h1 className="menu-title">Étlapunk</h1>
        <p className="menu-description">
          Fedezze fel mediterrán ihletésű ételeink válogatását
        </p>
      </header>
      
      {/* Étlap tartalom - minden kategória megjelenítése */}
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
