import React, { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import RoomDetailsModal from "../components/RoomDetailsModal";

const Pricing = ({ delay }) => {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const cardDetails = [
    {
      titleKey: "pricing.doubleRoom.title",
      descriptionKey: "pricing.doubleRoom.description",
      fullDescriptionKey: "pricing.doubleRoom.fullDescription",
      priceKey: "pricing.doubleRoom.price",
      perNightKey: "pricing.doubleRoom.perNight",
      featuresKeys: [
        "pricing.doubleRoom.features.0",
        "pricing.doubleRoom.features.1",
        "pricing.doubleRoom.features.2",
      ],
      image: "https://picsum.photos/seed/double/800/600",
    },
    {
      titleKey: "pricing.tripleRoom.title",
      descriptionKey: "pricing.tripleRoom.description",
      fullDescriptionKey: "pricing.tripleRoom.fullDescription",
      priceKey: "pricing.tripleRoom.price",
      perNightKey: "pricing.tripleRoom.perNight",
      featuresKeys: [
        "pricing.tripleRoom.features.0",
        "pricing.tripleRoom.features.1",
        "pricing.tripleRoom.features.2",
      ],
      image: "https://picsum.photos/seed/triple/800/600",
    },
  ];

  const openModal = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <section
      id="pricing"
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
        </ul>
      </div>

      <h1
        className="relative z-10 text-5xl md:text-7xl font-extrabold mb-12 drop-shadow-lg animate-fadeInUp"
        style={{ animationDelay: `${delay}s` }}
      >
        {t("pricing.title")}
      </h1>

      <p
        className="relative z-10 text-center max-w-3xl mx-auto mb-16 text-lg md:text-xl text-gray-500 animate-fadeInUp"
        style={{ animationDelay: `${delay + 0.1}s` }}
      >
        {t("pricing.description")}
      </p>

      <div className="relative z-10 flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {cardDetails.map((card, index) => (
          <div
            key={card.titleKey}
            className={`
              relative
              bg-white/10
              backdrop-blur-sm
              rounded-3xl
              p-8
              w-72
              h-[400px]
              flex flex-col justify-between
              transition-all
              duration-300
              cursor-pointer
              shadow-lg
              transform
              hover:bg-white/20
              hover:scale-105
              animate-fadeInUp
            `}
            style={{ animationDelay: `${delay + 0.2 + index * 0.2}s` }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-2">
                {t(card.titleKey)}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {t(card.descriptionKey)}
              </p>
              <p className="text-4xl font-bold mb-4">
                {t(card.priceKey)}{" "}
                <span className="text-lg font-normal">
                  {t(card.perNightKey)}
                </span>
              </p>
            </div>
            <button
              onClick={() => openModal(card)}
              className="
                mt-8 w-full py-3 rounded-full font-bold transition-all duration-300
                bg-teal-600 hover:bg-teal-500 text-white shadow-xl
              "
            >
              {t("pricing.seeMoreButton")}
            </button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <RoomDetailsModal room={selectedRoom} onClose={closeModal} />
      )}
    </section>
  );
};

export default Pricing;
