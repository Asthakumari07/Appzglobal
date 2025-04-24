import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/ae.jpg";
import img2 from "../../assets/ai.jpg";
import img3 from "../../assets/android.jpeg";
import img4 from "../../assets/angular.jpg";
import img5 from "../../assets/apache cordova.jpg";
import img6 from "../../assets/ios.jpeg";
import img7 from "../../assets/In.jpg";
import img8 from "../../assets/node js.jpg";
import img9 from "../../assets/python.jpg";

const data = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const Technologies2 = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl sm:text-5xl font-bold text-gray-800">
          <span className="text-orange-500">Technologies</span> We Use
        </h1>
      </div>

      {/* Intro */}
      <div className="text-left mb-10 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Mobile App Development
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          As your trusted partner, we build human-centric iOS and Android apps
          using cutting-edge technologies, from native to cross-platform.
        </p>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="px-2 sm:px-3">
            <div className="bg-gray-300 rounded-xl shadow-md p-4 h-36 sm:h-40 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src={item.image}
                alt={`tech-${index}`}
                className="max-h-28 sm:max-h-32 object-contain object-center"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Technologies2;
