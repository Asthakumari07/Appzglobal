import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { image: "/assets/ae.jpg", title: "After Effects" },
  { image: "/assets/ai.jpg", title: "AI" },
  { image: "/assets/android.jpeg", title: "Android" },
  { image: "assets/angular.jpg", title: "Angular" },
  { image: "/assets/apache cordova.jpg", title: "Apache Cordova" },
  { image: "/assets/ios.jpeg", title: "iOS" },
  { image: "/assets/In.jpg", title: "LinkedIn SDK" },
  { image: "/assets/node js.jpg", title: "Node.js" },
  { image: "/assets/python.jpg", title: "Python" },
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

const Technologies3 = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Section Intro */}
      <div className="text-left mb-10 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          UI/UX Designing
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Our expert team delivers flawless, scalable web applications using
          top-tier development tools for a lasting impact.
        </p>
      </div>

      {/* Tech Slider */}
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

export default Technologies3;
