import PropTypes from 'prop-types'; // React prop-types könyvtár importálása

/**
 * ConfirmRes komponens - Foglalás megerősítő oldal Tailwind CSS-sel
 * Megjeleníti a sikeres foglalás részleteit, vizuális visszajelzéssel.
 */
const ConfirmRes = ({ conf }) => {
  return (
    <section className="flex flex-col items-center px-6 py-12 bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Főcím */}
      <h2 className="mb-8 text-3xl md:text-4xl font-bold text-green-600 drop-shadow-sm">
        Foglalás megerősítve
      </h2>

      {/* Részletek doboz */}
      <div className="relative w-full max-w-xl p-8 bg-white rounded-lg text-center shadow-xl border border-white/20 overflow-hidden mb-2">

        {/* Felső színes sáv */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-teal-400" />

        {/* Zöld pipa ikon */}
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-teal-400 text-white text-2xl font-bold shadow-md">
          ✓
        </div>

        {/* Üzenetsorok */}
        <p className="mb-6 text-green-600 text-lg font-semibold">{conf.line1}</p>
        <p className="mb-4 text-gray-700 text-base leading-relaxed">{conf.line2}</p>
        <p className="mt-6 italic text-gray-500 text-base">{conf.line3}</p>
      </div>
    </section>
  );
};

/**
 * PropTypes - típusellenőrzés fejlesztési környezetben
 * A conf prop egy kötelező objektum, amely három szöveges sort tartalmaz.
 */
ConfirmRes.propTypes = {
  conf: PropTypes.shape({
    line1: PropTypes.string.isRequired, // Személyes köszöntő
    line2: PropTypes.string.isRequired, // Foglalás részletei
    line3: PropTypes.string.isRequired  // Búcsúzó üzenet
  }).isRequired
};

export default ConfirmRes;
