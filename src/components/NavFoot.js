// React Router DOM import - az Outlet komponens az aktuális route tartalmát jeleníti meg
import { Outlet } from "react-router-dom";

// Saját komponensek importálása
import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";  

/**
 * NavFoot komponens - Ez egy layout wrapper komponens, amely biztosítja, 
 * hogy minden oldalon megjelenjen a navigációs sáv és a lábléc.
 * A React Router DOM Outlet segítségével a "közép" részbe kerül az aktuális oldal tartalma
 */

const NavFoot = () => { 
  return (
    <>  
      <Navbar />  {/* Felső navigációs sáv - minden oldalon megjelenik */}
      <Outlet />  {/* Outlet - ide kerül az aktuális route tartalma. Ez a hely dinamikusan változik az URL szerint */}
      <Footer />  {/* Alsó lábléc - minden oldalon megjelenik */}
    </>
  );
};

export default NavFoot;
