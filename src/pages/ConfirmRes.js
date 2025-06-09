// A ConfirmRes komponensünk a foglalás megerősítését jeleníti meg.
// A foglalás megerősítésének adatait a conf prop-on keresztül kapja meg.
// A foglalás megerősítésének címe: "Foglalás megerősítve".
// A foglalás megerősítésének adatait a confirmation-details div elem tartalmazza.


import PropTypes from 'prop-types'; // A PropTypes segítségével ellenőrizhetjük, hogy a kapott adatok megfelelnek-e az elvárásainknak.
import "./ConfirmRes.css"

const ConfirmRes = ({ conf }) => {  // A ConfirmRes komponensünk a foglalás megerősítését jeleníti meg.
    return (  // A return metódus visszaadja a komponensünk által megjelenített JSX kódot.
      <>
        <section className="confirmation-container">  {/* A confirmation-container szekció egyedi azonosítóval rendelkezik, amely segítségével a CSS-ben könnyen elérhetjük. */}
          <h2 className="confirmation-title">Foglalás megerősítve</h2>  {/* A foglalás megerősítésének címe. */}
          <div className="confirmation-details">  {/* A foglalás megerősítésének adatait tartalmazó div elem. */}
          <h6>{conf.line1}</h6> {/* Az üzenet első sora. */}
          <h6>{conf.line2}</h6>
          <h6>{conf.line3}</h6>
          </div>
        </section>
      </>
    );
};

ConfirmRes.propTypes = {  // A props-on keresztül kapott adatok típusának ellenőrzése a PropTypes segí
  conf: PropTypes.shape({ // A conf prop típusa egy objektum, amely három string típusú adatot tartalmaz.
    line1: PropTypes.string.isRequired, // Az üzenet első sora.
    line2: PropTypes.string.isRequired,
    line3: PropTypes.string.isRequired
  }).isRequired // A conf prop kötelező.
};

export default ConfirmRes;  