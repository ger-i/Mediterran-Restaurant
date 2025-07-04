/**
 * Reserve komponens - Foglalási folyamat fő koordinátora
 * 
 * Ez a komponens kezeli a teljes foglalási folyamatot:
 * 1. Megjeleníti a foglalási űrlapot
 * 2. Kezeli az elérhető időpontokat
 * 3. Átváltás a megerősítő oldalra sikeres foglalás után
 */

import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import ConfirmRes from "./ConfirmRes";
// API függvény importálása az elérhető időpontok lekérdezéséhez
import { fetchAPI } from "../api/api";

/**
 * Reserve komponens definíciója
 * Koordinálja a BookingForm és ConfirmRes komponensek közötti váltást
 */
const Reserve = () => {
  
  // ===== ÁLLAPOTOK INICIALIZÁLÁSA =====
  
  /**
   * Foglalás megerősítésének állapota
   * - false: Foglalási űrlap megjelenítése
   * - true: Megerősítő oldal megjelenítése
   */
  const [confirm, setConfirm] = useState(false);
  
  /**
   * Megerősítő üzenet tartalma
   * Objektum formátumban tárolja a három soros üzenetet
   */
  const [msg, setMsg] = useState({
    line1: "",  // Személyes köszöntő (pl. "Kedves Nagy János!")
    line2: "",  // Foglalás részletei (dátum, idő, vendégek száma)
    line3: "",  // Búcsúzó üzenet az alkalom említésével
  });
  
  /**
   * Elérhető időpontok listája
   * Az API-ból lekért időpontokat tárolja
   */
  const [availableTimes, setAvailableTimes] = useState([]);
  
  // ===== SIDE EFFECTS =====
  
  /**
   * Elérhető időpontok lekérése komponens betöltésekor
   * 
   * Az useEffect hook segítségével egyszer, a komponens inicializálásakor
   * lekérjük az aktuális napra vonatkozó elérhető időpontokat
   */
  useEffect(() => {
    // Aktuális dátum lekérése
    const date = new Date();
    
    // API hívás az elérhető időpontok lekérésére
    // A fetchAPI mock függvény a dátum alapján generál időpontokat
    const times = fetchAPI(date);
    
    // Lekért időpontok beállítása a komponens állapotába
    setAvailableTimes(times);
  }, []); // Üres dependency array - csak egyszer fut le, komponens mount-kor
  
  // ===== KOMPONENS RENDERELÉS =====
  
  /**
   * Kondicionális renderelés a foglalás állapota alapján
   * 
   * Ha confirm = false: BookingForm megjelenítése
   * Ha confirm = true: ConfirmRes megjelenítése
   */
  return (
    <>
      {!confirm ? (
        // ===== FOGLALÁSI ŰRLAP FÁZIS =====
        <BookingForm
          // Callback függvény a megerősítés állapot beállításához
          // A BookingForm meghívja ezt sikeres form elküldéskor
          setConfirm={setConfirm}
          
          // Callback függvény az üzenet beállításához
          // A BookingForm összeállítja és beállítja a megerősítő üzenetet
          setMsg={setMsg}
          
          // Elérhető időpontok átadása a BookingForm-nak
          // Ez tölti fel a időpont dropdown-t
          availableTimes={availableTimes}
        />
      ) : (
        // ===== MEGERŐSÍTŐ OLDAL FÁZIS =====
        
        // A ConfirmRes komponens megjeleníti a sikeres foglalás üzenetét
        <ConfirmRes conf={msg} />
      )}
    </>
  );
};

export default Reserve;
