import React from "react";
import { Link } from "react-router-dom";

const Navbar3 = () => {
  return (
    <nav className="w-full shadow-md bg-white">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo-01.jpg" // <-- replace with your AGT logo path
            alt="Appz Global Tech"
            className="h-12"
          />
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/industries" className="hover:text-blue-600 transition">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="hover:text-blue-600 transition">
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/hire-magento-developer"
              className="hover:text-blue-600 transition"
            >
              Hire Magento Developer
            </Link>
          </li>
          <li>
            <Link to="/case-study" className="hover:text-blue-600 transition">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/career" className="hover:text-blue-600 transition">
              Career
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div className="pl-6">
          <Link
            to="/contact"
            className="bg-blue-900 hover:bg-blue-900 text-white px-5 py-2 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
