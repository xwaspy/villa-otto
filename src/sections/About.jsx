import React from "react";
import { useLanguage } from "../components/LanguageContext";

const About = ({ delay = 0 }) => {
  const { t } = useLanguage();

  const cards = [
    {
      titleKey: "about.card1.title",
      textKey: "about.card1.text",
    },
    {
      titleKey: "about.card2.title",
      textKey: "about.card2.text",
    },
    {
      titleKey: "about.card3.title",
      textKey: "about.card3.text",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center gap-12 text-gray-900 px-8 py-20 bg-gray-50 overflow-hidden"
    >
      {/* Background circles for a subtle animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <ul className="circles-light">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Title */}
        <h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.2}s` }}
        >
          {t("about.welcome")}
        </h1>

        {/* Animated Description */}
        <p
          className="max-w-4xl text-lg md:text-xl text-gray-600 leading-relaxed animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.4}s` }}
        >
          {t("about.description")}
        </p>
      </div>

      {/* Animated Cards with Gradient Border */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 max-w-5xl mt-8">
        {cards.map((card, index) => (
          <div
            key={card.titleKey}
            className={`
              relative group w-full sm:w-80 rounded-xl shadow-lg
              transform hover:scale-105 transition-transform duration-300
              animate-fadeInUp gradient-border
            `}
            style={{ animationDelay: `${delay + 0.6 + index * 0.2}s` }}
          >
            {/* Inner card content with solid background */}
            <div
              className={`
                bg-white/95 rounded-xl h-full p-8 transition-all duration-300
              `}
            >
              <h3 className="text-2xl font-semibold mb-2 relative z-10">
                {t(card.titleKey)}
              </h3>
              <p className="text-gray-600 text-base relative z-10">
                {t(card.textKey)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div
        className="relative z-10 mt-12 animate-fadeInUp"
        style={{ animationDelay: `${delay + 1.2}s` }}
      >
        <a
          href="#contact"
          className="bg-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-teal-500 transition-colors duration-300"
        >
          {t("contact.formButton")}
        </a>
      </div>
    </section>
  );
};

export default About;
