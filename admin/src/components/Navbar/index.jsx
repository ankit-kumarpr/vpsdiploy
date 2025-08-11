import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCoords } from "../../features/user";
import { useGeolocated } from "react-geolocated";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setWindowScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMobileMenuOpen(false); // close on click
  };

  return (
    <div
      className="fixed z-50 bg-white lg:px-28 w-full"
      style={{
        boxShadow:
          windowScrollY > 10 &&
          "rgba(99, 99, 99, .8) 0px 1px 8px 0px",
      }}
    >
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <img
            src="/images/dark-logo.png"
            className="w-48 cursor-pointer"
            alt="Logo"
            onClick={() => navigate("/")}
          />
          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <div
            className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-center md:text-left text-base font-medium">
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("id-home-hero")}
              >
                <div className="block text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded md:bg-transparent md:p-0">
                  Home
                </div>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("id-benefits-card")}
              >
                <div className="block text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded md:bg-transparent md:p-0">
                  Features
                </div>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("id-law-firms")}
              >
                <div className="block text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded md:bg-transparent md:p-0">
                  Law Firms
                </div>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => scrollToSection("id-testimonials")}
              >
                <div className="block text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded md:bg-transparent md:p-0">
                  Testimonials
                </div>
              </li>
              <li
  className="cursor-pointer"
  onClick={() => window.open("https://law-consultancy-firms-git-law-ashish8.vercel.app/", "_blank")}
>
  <div className="block text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 rounded md:bg-transparent md:p-0">
    Register Now
  </div>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
