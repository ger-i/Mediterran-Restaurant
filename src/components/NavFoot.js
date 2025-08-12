import { Outlet } from "react-router-dom"; // Az aktuális route tartalmát jeleníti meg
import Navbar from "../components/Navbar";  // Felső navigációs sáv
import Footer from "../components/Footer";  // Alsó lábléc

/**
 * NavFoot komponens - Layout wrapper, amely minden oldalra ráteszi a navigációt és a láblécet.
 * A középső tartalom az Outlet-en keresztül dinamikusan változik az URL alapján.
 * A flexbox és min-h-screen biztosítja, hogy a lábléc mindig az oldal alján legyen.
 */

const NavFoot = () => { 
  return (
    // Teljes oldal konténer: oszlopos elrendezés, minimum képernyőmagassággal
    <div className="flex flex-col min-h-screen">

      {/* Navigációs sáv - mindig a tetején */}
      <Navbar />

      {/* Fő tartalom - az aktuális oldal komponense kerül ide */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Lábléc - mindig az oldal alján marad */}
      <Footer />
    </div>
  );
};

export default NavFoot;