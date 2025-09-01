import React from "react";
import { useLanguage } from "./LanguageContext";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand and Description */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">My Cozy Stay</h3>
            <p className="text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {t("footer.navigationTitle")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {t("nav.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {t("nav.gallery")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {t("footer.socialTitle")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {t("footer.contactTitle")}
            </h4>
            <p className="text-sm">{t("footer.phone")}: +40 751 899 932</p>
            <p className="text-sm mt-1">
              {t("footer.email")}: vilaotto@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
