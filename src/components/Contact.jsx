import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../components/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Contact = ({ delay = 0 }) => {
  const { t } = useLanguage();
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your Email.js credentials
  const serviceId = "Portofolio_Email";
  const templateId = "template_nuqq9wr";
  const publicKey = "cZAxokqCmFBNFdwxT";

  // Effect to automatically hide success/error messages
  useEffect(() => {
    if (isSuccess || error) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setError(null);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSuccess, error]);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setIsSuccess(false);
    setError(null);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSending(false);
          setIsSuccess(true);
          form.current.reset(); // Reset form fields on success
          console.log("SUCCESS!");
        },
        (error) => {
          setIsSending(false);
          setError(
            t("contact.errorMessage") ||
              "Failed to send message. Please try again later."
          );
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-20 bg-gray-50 overflow-hidden"
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

      <div
        className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-200"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Heading */}
        <h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-6 animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.2}s` }}
        >
          {t("contact.title")}
        </h2>

        <p
          className="text-center text-gray-600 mb-12 max-w-xl mx-auto animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.4}s` }}
        >
          {t("contact.description")}
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          className="space-y-8 animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.6}s` }}
          onSubmit={sendEmail}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("contact.name")}
            </label>
            <input
              type="text"
              name="user_name"
              placeholder={t("contact.placeholderName")}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("contact.email")}
            </label>
            <input
              type="email"
              name="user_email"
              placeholder={t("contact.placeholderEmail")}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              name="user_phone"
              placeholder={t("contact.placeholderPhone")}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("contact.message")}
            </label>
            <textarea
              rows="6"
              name="message"
              placeholder={t("contact.placeholderMessage")}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 text-white font-bold text-lg shadow-lg hover:scale-[1.03] hover:brightness-110 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? t("contact.sending") : t("contact.button")}
          </button>
        </form>

        {/* Extra Info */}
        <div
          className="mt-12 text-center text-gray-500 text-sm select-none animate-fadeInUp"
          style={{ animationDelay: `${delay + 0.8}s` }}
        >
          {t("contact.extraInfo")}{" "}
          <a
            href="mailto:vilaotto@gmail.com"
            className="text-cyan-600 font-semibold hover:underline"
          >
            vilaotto@gmail.com
          </a>
        </div>
      </div>

      {/* Animated Success and Error Messages */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg bg-green-500 text-white shadow-xl z-50"
          >
            <p>{t("contact.successMessage")}</p>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg bg-red-500 text-white shadow-xl z-50"
          >
            <p>{t("contact.errorMessage")}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
