// src/components/CustomWhatsAppButton.js
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const CustomWhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/918459974712" // 🔁 Replace with your number
      className="fixed bottom-6 left-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center space-x-3 hover:bg-green-600 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="text-lg">
        {isHovered ? "May I help you?" : "Chat with us"}
      </span>
    </a>
  );
};

export default CustomWhatsAppButton;
