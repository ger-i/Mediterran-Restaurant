import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";  
import { Outlet } from "react-router-dom";  

const NavFoot = () => { 
  return (
    <>  
      <Navbar />  {/* A Navbar komponensünk a weboldalunk fejlécét tartalmazza. */}
      <Outlet />  {/* Az Outlet komponens a beágyazott aloldalakat jeleníti meg. */}
      <Footer />  {/* A Footer komponensünk a weboldalunk láblécét tartalmazza. */}
    </>
  );
};

export default NavFoot;
