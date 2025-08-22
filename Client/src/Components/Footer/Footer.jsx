import React from "react";

import { CiLocationOn, CiFacebook } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FiChrome } from "react-icons/fi";

import { FaInstagram } from "react-icons/fa";

import { FaRegCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlinePinterest } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-white text-gray-600 px-4 sm:px-10 py-12 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-screen-xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link to="/">
              <img
                src="/assets/logo-01.jpg"
                alt="logo"
                className="w-40 cursor-pointer"
              />
            </Link>
            <ul className="flex flex-col gap-3 text-left text-sm">
              <li className="flex items-center gap-2">
                <a
                  href="https://maps.app.goo.gl/a3JmY4v26jeruCQp7"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <CiLocationOn /> G-39, 2nd Floor, G-Block, Sector-63,
                  Noida-201301
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoTimeOutline /> Opening Hours: 10:00 AM - 07:00 PM
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="tel:+918459974712"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                >
                  <BiPhoneCall /> +91-8459974712,
                </a>
                <a
                  href="tel:+917017386311"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                >
                  +91-8595242540
                </a>
              </li>
              <li className="flex flex-col items-start gap-1">
                <p className="text-sm text-black p-1 flex flex-row items-center gap-2 bg-lime-400 hover:bg-green-700 hover:text-white">
                  <FaBagShopping /> Jobs & Internships, call our HR team :
                </p>
                <div className="flex flex-row gap-4 ml-5">
                  <a
                    href="tel:+918178615121"
                    className="text-blue-600 hover:underline transition hover:text-blue-800"
                  >
                    +91-8178615121
                  </a>
                  <a
                    href="tel:+919220353712"
                    className="text-blue-600 hover:underline transition hover:text-blue-800"
                  >
                    +91-9220353712
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href="mailto:info@appzglobaltech.com"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                >
                  <TfiEmail /> info@appzglobaltech.com
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-blue-600">
                <FiChrome />
                <a
                  href="https://appzglobaltech.com"
                  className="hover:underline break-all hover:text-blue-600"
                >
                  https://appzgloabaltech.com/
                </a>
              </li>
              <li className="flex gap-4 text-2xl mt-2">
                <a
                  href="https://www.facebook.com/appzglobaltechofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:scale-110 transition cursor-pointer"
                >
                  <CiFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/appz-global-tech-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:scale-110 transition cursor-pointer"
                >
                  <CiLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/appzglobaltech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-110 transition cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://in.pinterest.com/appzglobaltech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:scale-110 transition cursor-pointer"
                >
                  <AiOutlinePinterest />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl text-black font-semibold border-b-2 border-orange-600 inline-block">
              Services
            </h1>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to={"/uiux"}>UI/UX Designing Services</Link>
              </li>
              <li>
                <Link to={"/development"}>Web Development Services</Link>
              </li>
              <li>
                <Link to={"/mobile-app"}>Mobile Development Services</Link>
              </li>
              <li>
                <Link to={"/services"}>Digital Marketing Services</Link>
              </li>
              <li>
                <Link to={"/digital-marketing"}>CRM Software Development</Link>
              </li>
              <li>
                <Link to={"/services"}>ERP Software Development</Link>
              </li>
              <li>
                <Link to={"/software-dev"}>Software Development</Link>
              </li>
              <li>
                <Link to={"/game"}>Game Development</Link>
              </li>
              <li>
                <Link to={"/testing"}>Software Testing</Link>
              </li>
              <li>
                <Link to={"/digital-marketing"}>
                  Affiliate Marketing Services
                </Link>
              </li>
              <li>
                <Link to={"/oracle"}>Oracle SQL Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl text-black font-semibold border-b-2 border-orange-600 inline-block">
              Links
            </h1>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="max-w-xs">
            <h1 className="text-xl text-black font-semibold border-b-2 border-orange-600 inline-block">
              Newsletter
            </h1>
            <p className="mt-2 text-sm">
              Subscribe to our newsletter for updates
              <br /> on our latest IT services and solutions.
            </p>
            <form action="" className="flex flex-col mt-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 border border-gray-400 rounded-xl text-gray-800"
              />
              <button
                type="button"
                className="mt-2 p-2 font-bold text-blue-800 border border-blue-800 rounded-xl hover:bg-blue-800 hover:text-white cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <nav className="flex flex-row justify-between items-center w-full lg:max-w-[80%] px-3 lg:px-20 py-4 rounded-3xl bg-orange-300">
          <Link to={"/"} className="hover:underline lg:text-xl text-sm">
            Home
          </Link>
          <Link to={"/career"} className="hover:underline lg:text-xl text-sm">
            Career
          </Link>
          <Link to={"/term"} className="hover:underline lg:text-xl text-sm">
            Terms & Conditions
          </Link>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start bg-blue-900 text-white py-4 px-6 text-sm mt-10 gap-4">
        <div className="flex flex-wrap items-center gap-1 leading-tight lg:text-xl">
          <FaRegCopyright className="hidden sm:block" />
          <span>
            2023 All Rights Reserved. Design & Development By{" "}
            <Link to={"/"} className="underline">
              Appz Global Tech
            </Link>
          </span>
        </div>

        <ul className="flex flex-row gap-6 ">
          <li>
            <Link to={"/privacy"} className="hover:underline lg:text-xl">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:underline lg:text-xl">
              Help
            </Link>
          </li>
          <li>
            <a href="#" className="hover:underline lg:text-xl">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
