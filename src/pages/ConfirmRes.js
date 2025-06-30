// A ConfirmRes komponensünk a foglalás megerősítését jeleníti meg.
// A foglalás megerősítésének adatait a conf prop-on keresztül kapja meg.
// A foglalás megerősítésének címe: "Foglalás megerősítve".
// A foglalás megerősítésének adatait a confirmation-details div elem tartalmazza.


import PropTypes from 'prop-types'; // A PropTypes segítségével ellenőrizhetjük, hogy a kapott adatok megfelelnek-e az elvárásainknak.
import "./ConfirmRes.css"

const ConfirmRes = ({ conf }) => {
  return (
    <section className="confirmation-container">
      <h2 className="confirmation-title">Foglalás megerősítve</h2>
      <div className="confirmation-details">
        <div className="confirmation-icon">✓</div>
        <p className="confirmation-line">{conf.line1}</p>
        <p className="confirmation-line">{conf.line2}</p>
        <p className="confirmation-line">{conf.line3}</p>
      </div>
    </section>
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
