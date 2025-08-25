# 🍽️ Mediterrán Étterem

## 📋 Projekt leírása

A Mediterrán Étterem egy modern, reszponzív éttermi weboldal, amely React.js technológiával készült. Az alkalmazás egy családi tulajdonban lévő mediterrán étterem online jelenlétét biztosítja, ahol a vendégek megismerhetik az étlapot, foglalhatnak asztalt és olvashatják más vendégek véleményeit.

🧩 Főbb komponensek
🏠 Home

    Hero: bevezető szekció háttérképpel és CTA gombbal

    Special: kiemelt heti ajánlatok

    SocialCardList: vendégvélemények kártyákban

📄 About

    Étterem története, nyitvatartás, képek

🍽️ Menu

    Ételek kategóriák szerint (appetizer, main, dessert)

    Dinamikus renderelés Card komponensekkel

📅 Reserve

    BookingForm: validált foglalási űrlap

    ConfirmRes: megerősítő visszajelzés sikeres foglalás után

    fetchAPI: elérhető időpontok generálása

    submitAPI: foglalás szimulált beküldése

🧭 Navigáció

    Navbar: reszponzív hamburger menü

    Footer: oldaltérkép, kapcsolati adatok

    NavFoot: layout wrapper minden oldalhoz

    ScrollToTop: automatikus görgetés route váltáskor

## 🛠️ Technológiai stack

- **React** – komponensalapú felépítés
- **React Router** – többoldalas navigáció SPA-n belül
- **Tailwind CSS** – gyors és reszponzív stílusozás
- **PropTypes** – típusellenőrzés fejlesztés közben
- **Mock API** – foglalási időpontok és beküldés szimulálása

### 🎨 CSS Jellemzők
- **Reszponzív design**: Többféle média query (1200px, 768px)
- **Színséma**: Sötétzöld és sárga hangsúlyokkal
- **Animációk**: Hover effektek, átmenetek
- **Modern CSS**: Flexbox, CSS Grid használata

## 📁 Projekt struktúra

```
src/
├── components/         # Újrafelhasználható komponensek
│   ├── Card.js         # Étel kártyák megjelenítése
│   ├── Footer.js       # Weboldal lábléc
│   ├── Hero.js         # Főoldal hero szekció
│   ├── Navbar.js       # Navigációs menü
│   ├── ScrollToTop.js  # Oldal tetejére görgetés
│   ├── SocialCard.js   # Vendég vélemény kártyák
│   ├── Special.js      # Heti akciók szekció
│   └── NavFoot.js      # Layout wrapper
├── pages/              # Oldal komponensek
│   ├── Home.js         # Főoldal
│   ├── About.js        # Rólunk oldal
│   ├── Menu.js         # Étlap oldal
│   ├── Reserve.js      # Foglalás oldal
│   ├── BookingForm.js  # Foglalási űrlap
│   └── ConfirmRes.js   # Foglalás megerősítés
├── api/
│   └── api.js          # Mock API funkcionalitás
├── data.js             # Étlap adatok
├── images/             # Statikus képfájlok
└── App.js              # Fő alkalmazás komponens
```

## 📱 Funkciók részletesen

### Asztalfoglalás
- **Validáció**: Email cím, dátum, vendégszám ellenőrzése
- **Dátum korlátozás**: Csak jövőbeli dátumok foglalhatók
- **Időpont választás**: Dinamikusan generált időpontok
- **Megerősítés**: Foglalás után visszaigazoló üzenet

### Étlap rendszer
- **Kategorizálás**: Ételek típus szerint csoportosítva
- **Képes megjelenítés**: Minden ételhez tartozó kép
- **Részletes leírás**: Ételek összetevőinek ismertetése
- **Árak megjelenítése**: HUF-ban megadott árak

### Responsive design
- **Mobile-first**: Mobil eszközökre optimalizált
- **Hamburger menü**: Mobil navigáció
- **Flexibilis layout**: Különböző képernyőméretekhez alkalmazkodó

## 🎨 Stílus és design

A weboldal modern, mediterrán hangulatú designt alkalmaz:
- Meleg színpaletta
- Letisztult tipográfia
- Interaktív hover effektek
- Responsive kártyás elrendezés

## 📊 Adatkezelés

Az alkalmazás statikus adatokkal működik:
- Étlap adatok a `data.js` fájlban
- Mock API az asztalfoglaláshoz
- Vendég vélemények beégetett adatokkal

## 📄 Licenc

Ez a projekt MIT licenc alatt áll. Lásd a [LICENSE](LICENSE) fájlt a részletekért.


Link: https://mediterran-restaurant.netlify.app/

⭐ Ha tetszik a projekt, adj neki egy csillagot!