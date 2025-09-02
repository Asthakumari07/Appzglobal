import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Footer3 from "../Components/About/Footer3";

import ContactForm from "../Components/Home/ContactForm";
import DigitalMarketingBlog from "./DigitalMarketingBlog";

const DigitalMarketing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div
        className="relative bg-cover bg-center bg-no-repeat text-gray-800"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        {/* Gradient Overlay
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div> */}
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Drive Business Growth with Appz Global Tech’s Digital Marketing
            Expertise
          </h2>

          <p className="text-xl leading-relaxed text-gray-700 mb-4">
            In today’s hyper-populated digital world, the Availability of Online
            is no longer coming under your choice list; it’s compulsory. Like
            some businesses that fail to maintain and establish a strong
            presence across online channels, they risk losing market share to
            competitors who are ready to connect with audiences at every step of
            their business journey.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-4">
            Appz Global Tech, a result-oriented Digital Marketing Company in
            Noida, AGT combines strategy, creativity, and technology to help
            brands attract, engage, and lead conversion from digital platforms.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            Are you a startup that wants to scale or an enterprise that wants to
            dominate the business in the market?
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            AGT is here! to customized solutions that ensure your growth.
          </p>
        </div>
      </div>
      <DigitalMarketingBlog />
      <ContactForm />
      <Footer3 />
      <Footer />
    </>
  );
};

export default DigitalMarketing;
