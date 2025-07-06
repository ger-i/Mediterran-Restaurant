import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";  
import { Outlet } from "react-router-dom";  

/**
 * NavFoot komponens - Layout wrapper
 * Minden oldalon megjelenő közös elemek: navigációs sáv és lábléc
 * A React Router Outlet segítségével a közép részbe kerül az aktuális oldal tartalma
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
