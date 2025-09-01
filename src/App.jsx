import React from "react";
import { useLanguage, LanguageProvider } from "./components/LanguageContext";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Pricing from "./sections/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { t } = useLanguage();

  // Use the translations file to create the dynamic navigation list
  const listItems = [
    t("nav.about"),
    t("nav.gallery"),
    t("nav.pricing"),
    t("nav.contact"),
  ];

  return (
    <>
      <div className="sticky top-0 z-40">
        <NavBar listItems={listItems} />
      </div>

      <main>
        <About />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
