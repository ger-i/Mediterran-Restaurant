/**
 * ConfirmRes komponens - Foglalás megerősítő oldal
 * 
 * Ez a komponens a sikeres asztalfoglalás után jelenik meg, és megjeleníti a foglalás részleteit.
 */

// PropTypes importálása - típusellenőrzéshez fejlesztési időben
import PropTypes from 'prop-types';
import "./ConfirmRes.css"

/**
 * ConfirmRes komponens definíciója
 */
const ConfirmRes = ({ conf }) => {
  return (
    <section className="confirmation-container">
      {/* Főcím - sikeres foglalás jelzése */}
      <h2 className="confirmation-title">Foglalás megerősítve</h2>
      
      {/* Megerősítő üzenet részletei */}
      <div className="confirmation-details">
        {/* Vizuális siker ikon - zöld pipa */}
        <div className="confirmation-icon">✓</div>
        
        {/* Személyes köszöntő (pl. "Kedves Nagy János!") */}
        <p className="confirmation-line">{conf.line1}</p>
        
        {/* Foglalás konkrét részletei (dátum, idő, vendégek száma) */}
        <p className="confirmation-line">{conf.line2}</p>
        
        {/* Búcsúzó üzenet alkalom említésével */}
        <p className="confirmation-line">{conf.line3}</p>
      </div>
    </section>
  );
};

/**
 * PropTypes definíció - típusellenőrzés fejlesztési környezetben
 * 
 * Ez segít elkapni a típushibákat fejlesztés közben, és dokumentálja a komponens elvárásait más fejlesztők számára.
 */
ConfirmRes.propTypes = {
  // A conf prop egy objektum, amely kötelező
  conf: PropTypes.shape({
    // Az objektum három kötelező string tulajdonsága
    line1: PropTypes.string.isRequired, // Személyes köszöntő
    line2: PropTypes.string.isRequired, // Foglalás részletei
    line3: PropTypes.string.isRequired  // Búcsúzó üzenet
  }).isRequired // A teljes conf objektum kötelező
};

<<<<<<< HEAD
export default ConfirmRes;
=======
export default ConfirmRes;
>>>>>>> 6930feade993336bd202822d9b3f81bf81e3555e
