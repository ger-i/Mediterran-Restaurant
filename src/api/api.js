// Resource: "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"


// Foglalási időpontokat generáló függvény
const fetchAPI = function (date) {
  let result = []; // Eredmény tömb, amely az elérhető időpontokat fogja tartalmazni

  // Időpontok generálása 17:00-tól 22:30-ig, 30 perces lépésekben
  for (let i = 17; i <= 22; i++) {
    result.push(i + ':00'); // Egész óra (pl. "17:00")
    result.push(i + ':30'); // Fél óra (pl. "17:30")
  }

  // Utolsó időpont külön hozzáadva: 23:00
  result.push('23:00');

  // Visszatérési érték: az összes generált időpont
  return result;
};

// Foglalás beküldését szimuláló függvény
const submitAPI = function (formData) {
  // Itt történne a foglalás feldolgozása (pl. adatbázisba mentés)
  // Jelenleg mindig true-t ad vissza, tehát sikeresnek jelzi
  return true;
};

export { fetchAPI, submitAPI };