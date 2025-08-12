import { useState } from "react"; // React useState hook importálása

// Email validációs függvény (egyszerű regex)
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
};

// Holnapi dátum kiszámítása (foglalás csak holnaptól)
const today = new Date();
const minDate = new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

// Foglalási űrlap komponens
const BookingForm = ({ setConfirm, setMsg, availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"] }) => {
  // Állapotkezelés
  const [formData, setFormData] = useState({ lastName: "", firstName: "", email: "" });
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [emailError, setEmailError] = useState(false);

  // Input mezők változáskezelése
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailError(!validateEmail(value));
    }
  };

  // Vendégszám módosítása gombokkal
  const handleGuestChange = (change) => {
    const newValue = guests + change;
    if (newValue >= 1 && newValue <= 20) {
      setGuests(newValue);
    }
  };

  // Dátumváltozás kezelése (minimum holnap)
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= minDate) {
      setDate(selectedDate);
    }
  };

  // Foglalás beküldése
  const handleSubmit = (e) => {
    e.preventDefault();
    const { lastName, firstName, email } = formData;

    // Ellenőrzés: minden mező ki van töltve és email érvényes
    if (!lastName || !firstName || !validateEmail(email) || !date || !time || !guests || !occasion) {
      alert("Kérjük, töltsön ki minden mezőt helyesen!");
      return;
    }

    // Üzenet összeállítása visszajelzéshez
    setMsg({
      line1: `Kedves ${lastName} ${firstName}!`,
      line2: `Az ön asztalát ${guests} személyre lefoglaltuk a következő időpontra: ${date} ${time}.`,
      line3: `Hamarosan találkozunk a(z) ${occasion} eseményen!`,
    });

    // Foglalás megerősítése
    setConfirm(true);
  };

  // JSX visszatérés – az űrlap megjelenítése
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Asztalfoglalás</h2>
      <form className="flex flex-wrap gap-4 justify-center" onSubmit={handleSubmit}>
        {/* Vezetéknév */}
        <div className="w-full md:w-[32%]">
          <label htmlFor="lastName" className="block mb-2 font-semibold">Vezetéknév</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nagy"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Keresztnév */}
        <div className="w-full md:w-[32%]">
          <label htmlFor="firstName" className="block mb-2 font-semibold">Keresztnév</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="János"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="w-full md:w-[32%]">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nagy.janos@gmail.com"
            className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${emailError ? "border-red-500 ring-red-100" : "focus:border-blue-500 focus:ring-blue-100"}`}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-700 bg-red-100 border border-red-300 rounded px-2 py-1">
              Kérjük, adjon meg egy érvényes email címet.
            </p>
          )}
        </div>

        {/* Dátum */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="date" className="block mb-2 font-semibold">Dátum</label>
          <input
            type="date"
            id="date"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={date}
            onChange={handleDateChange}
            min={minDate}
            required
          />
        </div>

        {/* Idő */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="time" className="block mb-2 font-semibold">Idő</label>
          <select
            id="time"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Válassza ki az időt</option>
            {availableTimes.map((timeSlot, i) => (
              <option key={i} value={timeSlot}>{timeSlot}</option>
            ))}
          </select>
        </div>

        {/* Vendégek száma */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="guests" className="block mb-2 font-semibold">Vendégek száma</label>
          <div className="flex items-center">
            {/* Mínusz gomb */}
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center border-2 rounded-lg font-bold text-xl leading-none disabled:opacity-50 hover:bg-gray-200"
              onClick={() => handleGuestChange(-1)}
              disabled={guests <= 1}
            >
              &minus;
            </button>

            {/* Vendégszám megjelenítése */}
            <input
              type="text"
              id="guests"
              className="mx-2 w-full text-center p-3 border-2 rounded-lg appearance-none focus:outline-none"
              value={guests}
              readOnly
            />

            {/* Plusz gomb */}
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center border-2 rounded-lg font-bold text-xl leading-none disabled:opacity-50 hover:bg-gray-200"
              onClick={() => handleGuestChange(1)}
              disabled={guests >= 20}
            >
              +
            </button>
          </div>
        </div>

        {/* Alkalom */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="occasion" className="block mb-2 font-semibold">Alkalom</label>
          <select
            id="occasion"
            className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

        {/* Beküldés gomb */}
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            Foglalás megerősítése
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
