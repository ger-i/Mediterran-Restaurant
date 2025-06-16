# 🍽️ Mediterrán Étterem

## 📋 Projekt leírása

A Mediterrán Étterem egy modern, reszponzív éttermi weboldal, amely React.js technológiával készült. Az alkalmazás egy családi tulajdonban lévő mediterrán étterem online jelenlétét biztosítja, ahol a vendégek megismerhetik az étlapot, foglalhatnak asztalt és olvashatják más vendégek véleményeit.

## ✨ Főbb funkciók

- **Főoldal**: Vonzó bemutató oldal az étterem ismertetésével
- **Étlap**: Teljes menü böngészése kategóriák szerint (előételek, főételek, desszertek)
- **Asztalfoglalás**: Online foglalási rendszer validációval
- **Rólunk**: Az étterem történetének és nyitvatartásának bemutatása
- **Responsive design**: Mobil és desktop eszközökön egyaránt optimalizált
- **Vendég vélemények**: Korábbi vendégek visszajelzéseinek megjelenítése

## 🛠️ Technológiai stack

- **Frontend**: React.js (hooks használatával)
- **Routing**: React Router DOM
- **Styling**: CSS3 (custom CSS modulokkal)
- **Build tool**: Create React App
- **State management**: React useState és useEffect hooks

## 📁 Projekt struktúra

```
src/
├── components/          # Újrafelhasználható komponensek
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

## 🚀 Telepítés és futtatás

### Előfeltételek
- Node.js (v14 vagy újabb verzió)
- npm vagy yarn package manager

### Telepítési lépések

1. **Repository klónozása**
   ```bash
   git clone https://github.com/[felhasznalonev]/mediterran-etterem.git
   cd mediterran-etterem
   ```

2. **Függőségek telepítése**
   ```bash
   npm install
   ```

3. **Fejlesztői szerver indítása**
   ```bash
   npm start
   ```

4. **Alkalmazás megnyitása**
   
   Nyisd meg a böngészőt és látogasd meg: `http://localhost:3000`

### Build készítése production-höz

```bash
npm run build
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

## 🔧 Fejlesztési lehetőségek

- Backend API integrálása
- Valós adatbázis kapcsolat
- Fizetési rendszer implementálása
- Admin felület étlap kezeléshez
- Többnyelvű támogatás
- SEO optimalizálás

## 🤝 Közreműködés

Ha szeretnél hozzájárulni a projekthez:

1. Fork-old a repository-t
2. Hozz létre egy feature branch-et (`git checkout -b feature/UjFunkció`)
3. Commit-old a változásokat (`git commit -m 'Új funkció hozzáadása'`)
4. Push-old a branch-et (`git push origin feature/UjFunkció`)
5. Nyiss egy Pull Request-et

## 📄 Licenc

Ez a projekt MIT licenc alatt áll. Lásd a [LICENSE](LICENSE) fájlt a részletekért.

## 📞 Kapcsolat

- **Fejlesztő**: Geri
- **Email**: [mediterran@gmail.com](mailto:mediterran@gmail.com)
- **Cím**: 1052 Budapest, Galamb utca 2.
- **Telefon**: 06 1 123 4567

---

**Nyitvatartás:**
- Hétfő - Csütörtök: 9:00 - 24:00
- Péntek - Vasárnap: 11:00 - 24:00

**Asztalfoglalás:**
- Minden nap: 17:00 - 23:00

---

⭐ Ha tetszik a projekt, adj neki egy csillagot!
