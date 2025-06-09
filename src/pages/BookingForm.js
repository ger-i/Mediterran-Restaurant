// Ez a komponens a foglalási űrlapot tartalmazza, amelyet a felhasználó kitöltve tud asztalt foglalni.
// A komponens a következő állapotokat kezeli:  name, date, time, guests, occasion, emailError  (email validálás) 
// Az állapotokat a useState hook segítségével hoztuk létre. 
// Az email validálásához a validateEmail függvényt használtuk, amely egy reguláris kifejezést használ az email cím ellenőrzésére.
// A dátum mezőben a mai dátumhoz képest a legkorábbi foglalható dátumot állítottuk be (holnaptól).
// A vendégek számának ellenőrzésére a handleGuestsChange függvényt használtuk, amely 1 és 20 közötti számokat engedélyez.
// A form elküldésekor a handleSubmit függvény fut le, amely ellenőrzi, hogy minden mező ki van-e töltve és helyesen van-e kitöltve.
// Ha valamelyik mező nincs kitöltve, akkor egy alert üzenet jelenik meg.
// Ha minden mező helyesen van kitöltve, akkor a setMsg függvény segítségével beállítjuk a sikeres foglalás üzenetét, és a setConfirm függvény segítségével megjelenítjük a megerősítő üzenetet.
// A formon belül a mezők változásait a handleInputChange, handleEmailChange, handleDateChange, handleGuestsChange függvények kezelik.
// A formon belül a mezők értékeit a useState hook segítségével állítjuk be.


import { useState } from "react";
import "./BookingForm.css";

// Email validáló függvény
const validateEmail = (email) => {  
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());  // Reguláris kifejezés használata az email cím ellenőrzésére
};

// Mai dátumhoz képest a legkorábbi foglalható dátum (holnaptól)
const today = new Date(); 
const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];  

const BookingForm = ({ setConfirm, setMsg, availableTimes }) => { // A foglalás űrlapját megjelenítő komponens
  // Állapotok
  const [name, setName] = useState({ firstName: "", lastName: "", email: "" }); // Név és email
  const [date, setDate] = useState(minDate);  // Dátum
  const [time, setTime] = useState(""); // Idő
  const [guests, setGuests] = useState(1);  // Vendégek száma
  const [occasion, setOccasion] = useState(""); // Alkalmak
  const [emailError, setEmailError] = useState(false); // Email hibakezelés

  // Input változások kezelése
  const handleInputChange = (e) => {  
    const { name, value } = e.target; 
    if (name === "guests") {  
      setGuests(Number(value)); 
    } else {  
      setName((prev) => ({ ...prev, [name]: value }));  
    }
  };

  // Email változás kezelése és validálása
  const handleEmailChange = (e) => {  
    const email = e.target.value; 
    setName((prev) => ({ ...prev, email }));  
    setEmailError(!validateEmail(email)); 
  };

  // Dátum változás kezelése (múltbeli dátumok tiltása)
  const handleDateChange = (e) => { 
    const selectedDate = e.target.value;
    if (selectedDate >= minDate) {
      setDate(selectedDate);
    }
  };

  // Vendégek számának ellenőrzése (1-20 között)
  const handleGuestsChange = (e) => { 
    const guestsCount = Number(e.target.value);
    if (guestsCount >= 1 && guestsCount <= 20) {
      setGuests(guestsCount);
    }
  };

  // Form elküldése
  const handleSubmit = (e) => { 
    e.preventDefault(); 

    // Validációk
    if (!name.firstName || !name.lastName || !validateEmail(name.email) || !date || !time || !guests || !occasion) {  
      alert("Kérjük, töltsön ki minden mezőt helyesen!");
      return;
    }

    // Sikeres foglalás üzenet
    setMsg({  
      line1: `Kedves ${name.firstName} ${name.lastName}:`,  
      line2: `Az ön asztalát ${guests} személyre lefoglaltuk a következő időpontra: ${date} ${time}.`,
      line3: `Hamarosan találkozunk a(z) ${occasion} eseményen!`,
    });
    setConfirm(true);
  };

  return (
    <section className="booking-form-container" style={{ maxWidth: "970px" }}>  
      <h2 className="booking-form-title">Asztalfoglalás</h2>
      <form onSubmit={handleSubmit} className="form-layout">
        {/* Vezetéknév */}
        <div className="input-container">
          <label htmlFor="firstName" className="form-label">
            Vezetéknév
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Nagy"
            className="form-control"
            value={name.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Keresztnév */}
        <div className="input-container">
          <label htmlFor="lastName" className="form-label">
            Keresztnév
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="János"
            className="form-control"
            value={name.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jnagy@gmail.com"
            className={`form-control ${emailError ? "input-error" : ""}`}
            value={name.email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error-message">Kérjük, adjon meg egy érvényes email címet.</p>}
        </div>

        {/* Dátum */}
        <div className="wide-input-container">
          <label htmlFor="date" className="form-label">
            Dátum
          </label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={handleDateChange}
            min={minDate}
            required
          />
        </div>

        {/* Idő */}
        <div className="wide-input-container">
          <label htmlFor="time" className="form-label">
            Idő
          </label>
          <select className="form-select" value={time} onChange={(e) => setTime(e.target.value)} required>
            <option hidden>Válassza ki az időt</option>
            {availableTimes.map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>

        {/* Vendégek száma */}
        <div className="wide-input-container">
          <label htmlFor="guests" className="form-label">
            Vendégek száma
          </label>
          <input
            type="number"
            className="form-control"
            value={guests}
            onChange={handleGuestsChange} 
            name="guests"
            min={1}
            max={20}
            required
          />
        </div>

        {/* Alkalmak */}
        <div className="wide-input-container">
          <label htmlFor="occasion" className="form-label">
            Alkalmak
          </label>
          <select className="form-select" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>  
            <option hidden>Válassza ki az alkalmat</option>
            <option value="születésnap">Születésnap</option>
            <option value="eljegyzés">Eljegyzés</option>
            <option value="évforduló">Évforduló</option>
            <option value="egyéb">Egyéb</option>
          </select>
        </div>

        {/* Küldés gomb */}
        <button type="submit" className="col-md2">
          Foglalás megerősítése
        </button>
      </form>
    </section>
  );
};

export default BookingForm;