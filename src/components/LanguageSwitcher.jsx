import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setIsOpen(false);
  };

  const languages = [
    { code: "en", name: t("languages.en") },
    { code: "ro", name: t("languages.ro") },
    { code: "fr", name: t("languages.fr") },
  ];

  return (
    <div className="relative inline-block text-right" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="
          h-10
          w-12
          text-sm
          font-medium
          text-white
          bg-gradient-to-r from-teal-600 to-blue-800
          rounded-3xl
          shadow-md
          hover:from-blue-800 hover:to-teal-400
          transition-colors
          duration-300
          border-none
          focus:outline-none
          flex-end
          items-center
          justify-center
          select-none
          // Mobile adjustments
          md:w-auto md:px-4 align-ri
        "
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {lang.toUpperCase()}
      </button>

      {isOpen && (
        <div
          className="
            absolute
            mt-2
            w-36
            rounded-md
            shadow-lg
            bg-white
            ring-1
            ring-black
            ring-opacity-5
            z-50
            overflow-hidden
            // Mobile adjustments
            left-0
            origin-top-left
            md:right-0
            md:left-auto
            md:origin-top-right
          "
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`
                  w-full
                  text-left
                  px-4
                  py-2
                  text-sm
                  ${
                    lang === language.code
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }
                  hover:bg-gray-200
                  transition-colors
                  duration-200
                `}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
