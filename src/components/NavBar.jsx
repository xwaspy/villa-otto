import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const listItems = [
    { name: "About", to: "#about" },
    { name: "Gallery", to: "#gallery" },
    { name: "Pricing", to: "#pricing" },
  ];

  // Effect to handle mobile menu rendering
  useEffect(() => {
    if (menuOpen) {
      setShouldRenderMenu(true);
    } else {
      const timeout = setTimeout(() => setShouldRenderMenu(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 
        bg-black/30 text-white px-6 py-3 rounded-full backdrop-blur-md shadow-lg 
        flex items-center justify-between pointer-events-auto
      `}
    >
      {/* Invisible spacer on left to balance the right side */}
      <div className="w-28 hidden md:block"></div>

      {/* Navigation Links (centered on md+) */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        {listItems.map((item) => (
          <li key={item.name} className="relative group cursor-pointer">
            <a href={item.to} className="block">
              {t(`nav.${item.name.toLowerCase()}`)}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 rounded-2xl 
                  bg-gradient-to-r from-teal-500 to-blue-700
                  transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Contact button, visible only md+ */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-teal-600 to-blue-800 
            py-1.5 px-6 rounded-3xl shadow-md text-lg font-semibold
            transition-all duration-300 
            hover:from-blue-800 hover:to-teal-400 hover:shadow-lg"
        >
          {t("nav.contact")}
        </a>

        {/* Language Switcher, always visible */}
        <LanguageSwitcher />

        {/* Hamburger menu - only visible on small screens */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {shouldRenderMenu && (
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56
            bg-black/80 rounded-xl backdrop-blur-md shadow-lg flex flex-col gap-4
            py-6 px-8 text-lg font-medium z-50
            transform transition-all duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          {listItems.map((item) => (
            <li key={item.name} className="cursor-pointer">
              <a
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                {t(`nav.${item.name.toLowerCase()}`)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-teal-600 to-blue-800
                py-2 px-6 rounded-3xl shadow-md font-semibold text-center
                hover:from-blue-800 hover:to-teal-400 hover:shadow-lg"
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
