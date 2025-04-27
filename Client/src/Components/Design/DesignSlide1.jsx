import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { image: "/assets/ae.jpg", title: "After Effects" },
  { image: "/assets/ai.jpg", title: "AI" },
  { image: "/assets/android.jpeg", title: "Android" },
  { image: "/assets/angular.jpg", title: "Angular" }, // fixed added /
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
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const DesignSlide1 = () => {
  return (
    <div className="py-10 px-4 max-w-full overflow-hidden">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="rounded-full shadow-md p-3 bg-gray-100 transition-transform hover:scale-105 duration-300 flex items-center justify-center gap-2">
              <img
                src={item.image}
                alt={`tech-${index}`}
                className="w-10 h-10 object-contain rounded-full"
              />
              <h1 className="text-sm font-semibold text-blue-900 text-center">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DesignSlide1;
