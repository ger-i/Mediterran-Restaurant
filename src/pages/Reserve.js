// A Reserve komponensünk a foglalás űrlapját és a megerősítő üzenetet jeleníti meg.
// Az űrlap elküldése után a megerősítő üzenet jelenik meg.
// Az űrlap elküldése után a rendelkezésre álló időpontokat lekérjük az API segítségével.


import { useState, useEffect } from "react";  // Az useState és useEffect hookok importálása a Reactból.
import BookingForm from "./BookingForm";  // A BookingForm komponens importálása.
import ConfirmRes from "./ConfirmRes";  // A ConfirmRes komponens importálása.
import { fetchAPI } from "../api/api";  // Az API-ból az adatok lekérdezésére szolgáló függvény importálása.

const Reserve = () => { // A Reserve komponensünk a foglalás űrlapját és a megerősítő üzenetet jelen
  const [confirm, setConfirm] = useState(false);  // A confirm állapot segítségével ellenőrizzük, hogy a felhasználó elküldte-e az űrlapot.
  const [msg, setMsg] = useState({  // A msg állapot egy objektum, amely a megerősítő üzenetet tartalmazza.
    line1: "",  // Az üzenet első sora.
    line2: "",  // Az üzenet második sora.
    line3: "",  // Az üzenet harmadik sora.
  });

  const [availableTimes, setAvailableTimes] = useState([]); // Az availableTimes állapot a rendelkezésre álló időpontokat tárolja.

  useEffect(() => { // Az useEffect hook segítségével lekérjük a rendelkezésre álló időpontokat.
    const date = new Date();  // Az aktuális dátumot és időt tartalmazza.
    const times = fetchAPI(date); // A fetchAPI függvény segítségével lekérjük a rendelkezésre álló időpontokat.
    setAvailableTimes(times); // A rendelkezésre álló időpontokat beállítjuk az availableTimes állapotba.
  }, []);

  return (  // A foglalás űrlapjának és a megerősítő üzenetnek a megjelenítése.
    <>  
      {!confirm ? ( // Ha a confirm állapot false, akkor megjelenítjük a foglalás űrlapot, egyébként a megerősítő üzenetet.
        <BookingForm  // A BookingForm komponens segítségével jelenítjük meg a foglalás űrlapját.
          setConfirm={setConfirm}   // A setConfirm függvény segítségével állítjuk be a confirm állapotot.
          setMsg={setMsg}   // A setMsg függvény segítségével állítjuk be a msg állapot
          availableTimes={availableTimes}   // A rendelkezésre álló időpontokat adjuk át a BookingForm komponensnek.
        />
      ) : ( // Ha a confirm állapot true, akkor megjelenítjük a megerősítő üzenetet.
        <ConfirmRes conf={msg} /> // A ConfirmRes komponens segítségével jelenítjük meg a megerősítő üzenetet.
      )}  
    </> 
  );  
};

export default Reserve; 
