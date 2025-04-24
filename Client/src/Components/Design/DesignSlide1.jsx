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
  { image: img1, title: "After Effects" },
  { image: img2, title: "AI" },
  { image: img3, title: "Android" },
  { image: img4, title: "Angular" },
  { image: img5, title: "Apache Cordova" },
  { image: img6, title: "iOS" },
  { image: img7, title: "LinkedIn SDK" },
  { image: img8, title: "Node.js" },
  { image: img9, title: "Python" },
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
