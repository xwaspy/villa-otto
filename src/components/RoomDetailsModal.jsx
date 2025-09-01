import React from "react";
import { useLanguage } from "./LanguageContext";

const RoomDetailsModal = ({ room, onClose }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 max-w-lg w-full relative transform scale-100 transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors duration-200"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h3 className="text-4xl font-extrabold mb-4">{t(room.titleKey)}</h3>
        <img
          src={room.image}
          alt={t(room.titleKey)}
          className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md"
        />
        <p className="text-lg mb-6">{t(room.fullDescriptionKey)}</p>

        <h4 className="text-2xl font-semibold mb-3">
          {t("pricing.modal.featuresTitle")}
        </h4>
        <ul className="text-left text-gray-600 list-disc list-inside space-y-2">
          {room.featuresKeys.map((featureKey, i) => (
            <li key={i}>{t(featureKey)}</li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <p className="text-4xl font-bold text-teal-600">
            {t(room.priceKey)}{" "}
            <span className="text-lg font-normal text-gray-500">
              {t(room.perNightKey)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
