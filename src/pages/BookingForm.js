import { useState } from "react";
import "./BookingForm.css";

/**
 * Foglalási űrlap komponens
 * Lehetővé teszi a felhasználók számára, hogy asztalt foglaljanak az étteremben.
 * A felhasználók megadhatják a nevüket, email címüket, a foglalás dátumát és időpontját,
 * a vendégek számát és az alkalmat.                
*/

// Email validáció regex segítségével
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};

// Mai dátum + 1 nap beállítása (minimum foglalási dátum)
const today = new Date();
const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

const BookingForm = ({ setConfirm, setMsg, availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"] }) => {
  // Személyes adatok tárolása egy objektumban
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: ""
  });
  
  // Foglalási részletek state-jei
  const [date, setDate] = useState(minDate); // Alapértelmezett: holnap
  const [time, setTime] = useState(""); // Kiválasztott időpont
  const [guests, setGuests] = useState(1); // Vendégek száma (1-20)
  const [occasion, setOccasion] = useState(""); // Alkalom típusa
  
  // Email validációs hiba jelzése
  const [emailError, setEmailError] = useState(false);

  // Input mezők változásainak kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Email mező esetén valós idejű validáció
    if (name === "email") {
      setEmailError(!validateEmail(value));
    }
  };

  // Vendégszám növelése/csökkentése gombokkal (1-20 között)
  const handleGuestChange = (change) => {
    const newValue = guests + change;
    if (newValue >= 1 && newValue <= 20) {
      setGuests(newValue);
    }
  };

  // Dátum validáció - csak jövőbeli dátumok engedélyezése
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= minDate) {
      setDate(selectedDate);
    }
  };

  // Űrlap elküldésének kezelése
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Minden mező kitöltésének és email validitásának ellenőrzése
    if (!formData.lastName || !formData.firstName || !validateEmail(formData.email) || !date || !time || !guests || !occasion) {
      alert("Kérjük, töltsön ki minden mezőt helyesen!");
      return;
    }

    // Sikeres foglalás üzenet beállítása
    setMsg({
      line1: `Kedves ${formData.lastName} ${formData.firstName}!`,
      line2: `Az ön asztalát ${guests} személyre lefoglaltuk a következő időpontra: ${date} ${time}.`,
      line3: `Hamarosan találkozunk a(z) ${occasion} eseményen!`,
    });
    
    // Megerősítő oldal megjelenítése
    setConfirm(true);
  };

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Asztalfoglalás</h2>
      <form className="form-layout" onSubmit={handleSubmit}>
        
        {/* Vezetéknév input */}
        <div className="input-container">
          <label htmlFor="lastName" className="form-label">
            Vezetéknév
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nagy"
            className="form-control"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Keresztnév input */}
        <div className="input-container">
          <label htmlFor="firstName" className="form-label">
            Keresztnév
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="János"
            className="form-control"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email input valós idejű validációval */}
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nagy.janos@gmail.com"
            className={`form-control ${emailError ? "input-error" : ""}`}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {/* Hibaüzenet megjelenítése érvénytelen email esetén */}
          {emailError && <p className="error-message">Kérjük, adjon meg egy érvényes email címet.</p>}
        </div>

        {/* Dátum kiválasztó (csak jövőbeli dátumok) */}
        <div className="wide-input-container">
          <label htmlFor="date" className="form-label">
            Dátum
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={handleDateChange}
            min={minDate}
            required
          />
        </div>

        {/* Időpont kiválasztó dropdown */}
        <div className="wide-input-container">
          <label htmlFor="time" className="form-label">
            Idő
          </label>
          <select 
            id="time"
            className="form-select" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required
          >
            <option value="">Válassza ki az időt</option>
            {/* Elérhető időpontok dinamikus listája */}
            {availableTimes.map((timeSlot, i) => (
              <option key={i} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        </div>

        {/* Vendégszám beállítása +/- gombokkal */}
        <div className="wide-input-container">
          <label htmlFor="guests" className="form-label">
            Vendégek száma
          </label>
          <div className="number-input-container">
            {/* Csökkentő gomb */}
            <button 
              type="button" 
              className="number-control minus"
              onClick={() => handleGuestChange(-1)}
              disabled={guests <= 1}
              aria-label="Csökkentés"
            >
              −
            </button>
            
            {/* Csak olvasható szám megjelenítő */}
            <input
              type="number"
              id="guests"
              className="form-control number-display"
              value={guests}
              readOnly
              min={1}
              max={20}
            />
            
            {/* Növelő gomb */}
            <button 
              type="button" 
              className="number-control plus"
              onClick={() => handleGuestChange(1)}
              disabled={guests >= 20}
              aria-label="Növelés"
            >
              +
            </button>
          </div>
        </div>

        {/* Alkalom kiválasztó dropdown */}
        <div className="wide-input-container">
          <label htmlFor="occasion" className="form-label">
            Alkalom
          </label>
          <select 
            id="occasion"
            className="form-select" 
            value={occasion} 
            onChange={(e) => setOccasion(e.target.value)} 
            required
          >
            <option value="">Válassza ki az alkalmat</option>
            <option value="születésnap">Születésnap</option>
            <option value="eljegyzés">Eljegyzés</option>
            <option value="évforduló">Évforduló</option>
            <option value="üzleti">Üzleti esemény</option>
            <option value="egyéb">Egyéb</option>
          </select>
        </div>

        {/* Űrlap elküldése gomb */}
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Foglalás megerősítése
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;