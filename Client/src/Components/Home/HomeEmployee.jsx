import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "/assets/VIKAS-SIR.jpg",
    name: "Vikas Kumar",
    para: "Chief Technology Officer",
    icons: [CiLinkedin, FaFacebook, FaSquareWhatsapp, FaInstagramSquare],
  },
  {
    image: "/assets/lokesh-011.jpg",
    name: "Lokesh Kumar",
    para: "Managing Director",
    icons: [CiLinkedin, FaFacebook, FaSquareWhatsapp, FaInstagramSquare],
  },
  {
    image: "/assets/aditifinal.jpg",
    name: "Aditi Chaudhary",
    para: "Director",
    icons: [CiLinkedin, FaFacebook, FaSquareWhatsapp, FaInstagramSquare],
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const HomeEmployee = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 py-10 gap-10"
      style={{
        backgroundImage: `url("/assets/back-image.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center lg:text-left gap-20">
        <h2 className="text-5xl font-bold text-blue-800 mb-10">Our Team</h2>
        <p className="text-gray-600 text-lg max-w-lg">
          We empower our clients with dynamic, responsive websites built using
          PHP, Java, .NET, WordPress, React JS, React Native, Drupal, CMS, and
          more—ensuring seamless performance, scalability, and user engagement.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-white text-blue-800 hover:text-white font-bold rounded-lg hover:bg-blue-800 transition"
          onClick={() => navigate("/team")}
        >
          Learn More
        </button>
      </div>

      <div className="w-full max-w-4xl overflow-hidden">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-shadow h-100 gap-1">
                <div
                  className="w-full flex justify-center items-center rounded-tr-xl rounded-tl-xl"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#e0f0ff" : "#ffe8cc",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-70 w-67 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.para}</p>
                <div className="flex gap-3 mt-2 mb-4">
                  {item.icons.map((Icon, idx) => (
                    <Icon
                      key={idx}
                      className="text-blue-600 text-2xl hover:text-blue-800 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeEmployee;
