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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};

// Mai dátumhoz képest a legkorábbi foglalható dátum (holnaptól)
const today = new Date();
const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

const BookingForm = ({ setConfirm, setMsg, availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"] }) => {
  // Állapotok
  const [formData, setFormData] = useState({
    lastName: "",    // Vezetéknév
    firstName: "",   // Keresztnév
    email: ""
  });
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [emailError, setEmailError] = useState(false);

  // Általános input változások kezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "guests") {
      const guestsCount = Number(value);
      if (guestsCount >= 1 && guestsCount <= 20) {
        setGuests(guestsCount);
      }
    } else if (name === "email") {
      setFormData(prev => ({ ...prev, [name]: value }));
      setEmailError(!validateEmail(value));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Dátum változás kezelése
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= minDate) {
      setDate(selectedDate);
    }
  };

  // Form elküldése
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validációk
    if (!formData.lastName || !formData.firstName || !validateEmail(formData.email) || !date || !time || !guests || !occasion) {
      alert("Kérjük, töltsön ki minden mezőt helyesen!");
      return;
    }

    // Sikeres foglalás üzenet
    setMsg({
      line1: `Kedves ${formData.lastName} ${formData.firstName}!`,
      line2: `Az ön asztalát ${guests} személyre lefoglaltuk a következő időpontra: ${date} ${time}.`,
      line3: `Hamarosan találkozunk a(z) ${occasion} eseményen!`,
    });
    setConfirm(true);
  };

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Asztalfoglalás</h2>
      <div className="form-layout" onSubmit={handleSubmit}>
        {/* Vezetéknév */}
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

        {/* Keresztnév */}
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

        {/* Email */}
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
          {emailError && <p className="error-message">Kérjük, adjon meg egy érvényes email címet.</p>}
        </div>

        {/* Dátum */}
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

        {/* Idő */}
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
            {availableTimes.map((timeSlot, i) => (
              <option key={i} value={timeSlot}>
                {timeSlot}
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
            id="guests"
            className="form-control"
            value={guests}
            onChange={handleInputChange}
            name="guests"
            min={1}
            max={20}
            required
          />
        </div>

        {/* Alkalmak */}
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

        {/* Küldés gomb */}
        <div className="submit-container">
          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Foglalás megerősítése
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
