import React, { createContext, useContext, useState } from "react";
import translations, { t as translate } from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // Custom translate function that uses current lang state
  const t = (key) => translate(lang, key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be inside LanguageProvider");
  return context;
};
