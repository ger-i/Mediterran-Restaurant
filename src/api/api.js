// Resource: "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"

const fetchAPI = function (date) {
  let result = [];
  
  // A seededRandom függvényre már nincs szükség, mivel nem használunk véletlenszerűséget.
  // A ciklus 17-től 23-ig megy végig, és mindegyik órához hozzáadja a 00-s és 30-as időpontot.
  for (let i = 17; i <= 23; i++) {
    result.push(i + ':00');
    result.push(i + ':30');
  }
  
  return result;
};

const submitAPI = function (formData) {
  // Ez a függvény továbbra is a sikeres beküldést szimulálja.
  return true;
};

export { fetchAPI, submitAPI };