import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Software = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />

      {/* Hero Section with Background Image */}
      <h1 className=" mt-10 mb-10 text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        SOFTWARE DEVELOPMENT SERVICES
      </h1>
      <div
        className="relative bg-cover bg-center bg-no-repeat text-gray-800"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        {/* Gradient Overlay
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div> */}
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Start Future-Ready Digital Solutions With Our Software Expertise
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            In today’s fast-moving digital world, markets need more than just
            software, they want scalable, secure, and high-performing software
            development services that give growth.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            At <strong>Appz Global Technology</strong>, we are not just
            innovative, result-oriented software providers — we help B2B
            businesses, eCommerce companies, and SMEs stay top-notch in the USA
            and across the globe.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We understand your needs for custom-built applications,
            enterprise-grade software, and advanced digital solutions. By
            blending strategy, technology, and innovation, we transform your
            vision into reality.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            OUR SOFTWARE DEVELOPMENT SOLUTIONS
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Yes! We can say, <strong>Appz Global Technology</strong> provides{" "}
            <strong>end-to-end software development solutions</strong> for
            businesses of all sizes and industries. From strategy to deployment,
            our team ensures seamless integration of technology into your
            operations.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Software;
