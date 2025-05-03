// src/components/FloatingContactButtons.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaComments } from "react-icons/fa";

const FloatingContactButtons = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        {isOpen && (
          <div className="flex flex-col items-start mb-3 space-y-3">
            <a
              href="https://wa.me/918459974712"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full bg-green-500 text-white shadow hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
            <a
              href="tel:+918459974712"
              className="flex items-center px-4 py-2 rounded-full bg-blue-500 text-white shadow hover:bg-blue-600 transition"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow hover:bg-blue-600"
        >
          <FaComments className="text-2xl" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <div className="flex flex-col items-start space-y-3">
          <a
            href="https://wa.me/918459974712"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-full bg-green-500 text-white shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end space-y-3">
          <a
            href="tel:+918459974712"
            className="flex items-center px-4 py-2 rounded-full bg-blue-500 text-white shadow hover:bg-blue-600 transition"
          >
            <FaPhone className="mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingContactButtons;
