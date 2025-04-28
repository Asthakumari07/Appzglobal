import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-2xl border-b border-gray-400 px-4 py-2 flex flex-col sm:flex-row justify-between items-center h-10">
      <div className="hidden sm:flex mb-2 sm:mb-0">
        <a
          href="mailto:info@appzglobaltech.com"
          className="flex items-center gap-2 text-sm hover:text-blue-600 transition"
        >
          <MdEmail className="text-lg text-blue-800 hover:text-600" />
          info@appzglobaltech.com
        </a>
      </div>

      {/* Logo */}
      <div className="mt-2 sm:mb-0 clip-bottom-edge bg-white shadow-2xl border-b border-gray-400">
        <img
          src="/assets/logo-01.jpg"
          alt="Appz Global Tech Logo"
          className="h-10 sm:h-12 w-50 object-contain mb-2 sm:mb-3 lg:mt-5 "
        />
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 sm:gap-6 hidden sm:flex">
        <a
          href="https://www.linkedin.com/company/appz-global-tech-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
          className="text-2xl text-blue-800 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/appzglobaltech/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          aria-label="Instagram"
          className="text-2xl text-pink-800 hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/appzglobaltechofficial"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          aria-label="Facebook"
          className="text-2xl text-blue-800 hover:text-blue-500 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://in.pinterest.com/appzglobaltech/"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
          aria-label="Pinterest"
          className="text-2xl text-pink-800 hover:text-blue-500 transition"
        >
          <FaSquarePinterest />
        </a>
        <a
          href="#"
          title="Twitter"
          aria-label="Twitter"
          className="text-2xl text-blue-800 hover:text-blue-500 transition"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
