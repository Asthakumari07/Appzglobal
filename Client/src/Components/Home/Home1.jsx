import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Custom Software Development",
    image: "/assets/web.jpg",
  },
  {
    title: "Mobile App Development",
    image: "/assets/mobileapp.jpg",
  },

  {
    title: "Website Development",
    image: "/assets/websitedev.jpg",
  },
  {
    title: "AI Integration",
    image: "/assets/ai-1.jpg",
  },
  {
    title: "Digital Marketing Service",
    image: "/assets/digital.jpg",
  },
  {
    title: "CRM Development",
    image: "/assets/crm.jpg",
  },
  {
    title: "ERP Development",
    image: "/assets/erpdev.jpg",
  },
  {
    title: "UI/UX Designing",
    image: "/assets/uiuxdesign.jpg",
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

const Home1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 py-10 gap-10"
      style={{ backgroundImage: `url("/assets/back-image.jpg")` }}
    >
      {/* Left Side: Video (40%) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-2/5 flex justify-center p-4" // padding added here
      >
        <div className="w-full max-w-[450px] bg-white rounded-2xl shadow-lg rounded-tr-[120px]">
          {" "}
          {/* inner padding around video */}
          <img
            src="/assets/black-012.jpg"
            alt="Marketing"
            className="w-full rounded-tr-[120px] shadow-md"
          />
        </div>
      </motion.div>

      {/* Right Side: Slider (60%) */}
      <div className="w-full lg:w-3/5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center lg:text-right mr-10 text-blue-800 mb-6"
        >
          Our Core Services
        </motion.h1>

        <Slider {...sliderSettings}>
          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`h-50 mt-10 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-shadow duration-300 gap-3 ${
                    isEven
                      ? "bg-blue-500 text-white"
                      : "bg-orange-300 text-black"
                  }`}
                >
                  <img
                    src={item.image}
                    className="h-20 w-20 object-cover rounded-xl mb-4 shadow-md"
                  />
                  <h3
                    className={`text-lg font-semibold ${
                      isEven ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            );
          })}
        </Slider>

        <div className="w-full flex justify-center items-center ml-7 lg:ml-0 lg:justify-end mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="font-bold text-blue-800 border border-blue-800 hover:border-b-[3px] hover:border-r-[3px] hover:border-orange-400 hover:bg-blue-800 hover:text-white rounded-xl transition w-36 h-12 transition-all mr-10"
            onClick={() => navigate("/services")}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
