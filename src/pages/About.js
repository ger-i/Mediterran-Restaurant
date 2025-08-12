import about1 from "../images/about/about1.jpg";
import about2 from "../images/about/about2.jpg";

/**
 * About komponens - Tailwind CSS verzió
 * Az étterem bemutatkozó szekciója képekkel és szöveggel
 */

const About = () => {
  return (
    <section
      className="max-w-[75rem] mx-auto mt-4 mb-10 flex flex-col md:flex-row justify-between px-4 md:px-0 text-black"
    >
      {/* Szöveges tartalom - bal oldal */}
      <div className="md:flex-[0_0_50%] mb-4 md:mb-0 space-y-4">
        <h2 className="text-[2rem] mb-4 text-[#F4CE14] font-bold">
          Mediterrán Étterem
        </h2>
        <h3 className="text-[1.3rem] mb-4 font-semibold">Budapest</h3>

        <p className="leading-[1.6rem]">
          Élvezze a frissen főzött, mediterrán ihletésű ételeket, koktélokat,
          hordós söröket és borokat a kontinens minden tájáról, kiváló
          ár-érték arányban, mindig mosolyogva tálalva. Nálunk mindent
          megtalál, amire szüksége van a következő pihentető családi
          kiruccanáshoz, romantikus vacsorához, ünnepléshez vagy különleges
          alkalomhoz. Hagyja, hogy mi gondoskodjunk önről, és foglaljon
          asztalt nálunk még ma!
        </p>

        {/* Nyitvatartás */}
        <p className="leading-[1.6rem] mt-[50px] text-[#495e57] font-bold before:content-['⏰'] before:mr-2">
          Nyitvatartás:<br />
          Hétfő - Csütörtök 9:00 - 24:00 <br />
          Péntek - Vasárnap 11:00 - 24:00
        </p>

        {/* Asztalfoglalás */}
        <p className="leading-[1.6rem] mt-[50px] text-[#495e57] font-bold before:content-['📅'] before:mr-2">
          Asztalfoglalás: <br />
          Hétfő - Vasárnap 17:00 - 23:00
        </p>
      </div>

      {/* Képek - jobb oldal */}
      <div className="mt-12 md:mt-0 space-y-4">
        <div>
          <img
            src={about1}
            alt="about1"
            className="w-[23rem] h-[17rem] mb-1 rounded-[5%] mx-auto md:mx-0 max-[768px]:w-[21rem] max-[768px]:h-[15rem]"
          />
        </div>
        <div>
          <img
            src={about2}
            alt="about2"
            className="w-[23rem] h-[17rem] mb-1 rounded-[5%] mx-auto md:mx-0 max-[768px]:w-[21rem] max-[768px]:h-[15rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;