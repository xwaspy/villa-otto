import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useLanguage } from "../components/LanguageContext";

const images = [
  { src: "https://picsum.photos/id/1015/800/600", caption: "Mountain Retreat" },
  { src: "https://picsum.photos/id/1016/800/600", caption: "Forest Cabin" },
  { src: "https://picsum.photos/id/1018/800/600", caption: "Coastal View" },
  { src: "https://picsum.photos/id/1020/800/600", caption: "Urban Oasis" },
  { src: "https://picsum.photos/id/1024/800/600", caption: "Desert Landscape" },
];

const Gallery = ({ delay = 0 }) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useLanguage();

  // Auto-play logic
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section
      id="gallery"
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
        className="relative z-10 text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeInUp"
        style={{ animationDelay: `${delay}s` }}
      >
        {t("gallery.title")}
      </h1>

      <div
        className="relative z-10 w-full max-w-4xl h-96 rounded-2xl overflow-hidden shadow-2xl animate-fadeInUp"
        style={{ animationDelay: `${delay + 0.2}s` }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Blurred background image */}
        <img
          src={images[current].src}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30"
        />

        {/* The main image and caption */}
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <img
                src={img.src}
                alt={t("gallery.altText", { index: index + 1 })}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
                <p className="text-xl font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20 focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          <HiChevronLeft size={28} />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20 focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          <HiChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div
        className="relative z-10 flex gap-3 mt-8 animate-fadeInUp"
        style={{ animationDelay: `${delay + 0.4}s` }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
