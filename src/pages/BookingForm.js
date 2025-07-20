import { useState } from "react";
import "./BookingForm.css";

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};

const today = new Date();
const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

const BookingForm = ({ setConfirm, setMsg, availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"] }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: ""
  });

  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "email") {
      setEmailError(!validateEmail(value));
    }
  };

  const handleGuestChange = (change) => {
    const newValue = guests + change;
    if (newValue >= 1 && newValue <= 20) {
      setGuests(newValue);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= minDate) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.lastName || !formData.firstName || !validateEmail(formData.email) || !date || !time || !guests || !occasion) {
      alert("Kérjük, töltsön ki minden mezőt helyesen!");
      return;
    }

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

      <form className="form-layout" onSubmit={handleSubmit}>
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

        <div className="wide-input-container">
          <label htmlFor="guests" className="form-label">
            Vendégek száma
          </label>
          <div className="number-input-container">
            <button 
              type="button" 
              className="number-control minus"
              onClick={() => handleGuestChange(-1)}
              disabled={guests <= 1}
              aria-label="Csökkentés"
            >
              −
            </button>
            <input
              type="number"
              id="guests"
              className="form-control number-display"
              value={guests}
              readOnly
              min={1}
              max={20}
            />
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
