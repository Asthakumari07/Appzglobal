import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoThumb from "../../assets/core services/ai.png";
import img2 from "../../assets/core services/CRM Development.png";
import img3 from "../../assets/core services/Custom Software Development.png";
import img4 from "../../assets/core services/Digital Marketing Services.png";
import img5 from "../../assets/core services/ERP Development.png";
import img6 from "../../assets/core services/mobile app dev.png";
import img7 from "../../assets/core services/UIUX Designing.png";
import img8 from "../../assets/core services/website dev.png";
import gifImg from "../../assets/second-1-min-2.gif";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Custom Software Development",
    image: img3,
  },
  {
    title: "Mobile App Development",
    image: img6,
  },

  {
    title: "Website Development",
    image: img8,
  },
  {
    title: "AI Integration",
    image: videoThumb,
  },
  {
    title: "Digital Marketing Service",
    image: img4,
  },
  {
    title: "CRM Development",
    image: img2,
  },
  {
    title: "ERP Development",
    image: img5,
  },
  {
    title: "UI/UX Designing",
    image: img7,
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
    <div className="w-full overflow-hidden flex flex-col items-center px-6 py-10 gap-10 bg-gradient-to-br from-white via-blue-50 to-orange-50">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-md"
        >
          <img
            src={gifImg}
            alt="Animated Visual"
            className="rounded-tr-[120px] shadow-lg"
          />
        </motion.div>

        <div className="w-full max-w-4xl">
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
                      className="h-24 w-34 object-cover rounded-xl mb-4 shadow-md"
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
              className="font-bold font-bold text-blue-800 border border-blue-800 hover:border-b-[3px] hover:border-r-[3px] hover:border-orange-400 hover:bg-blue-800 hover:text-white rounded-xl transition w-36 rounded-xl h-12 transition-all mr-10"
              onClick={() => navigate("/services")}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
