import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/5156366 1-2.png";
import img2 from "../../assets/4893190 1-2.png";
import img3 from "../../assets/20943399 1-2.png";
import img4 from "../../assets/6895861 1-2.png";
import img5 from "../../assets/6262902 1.png";
import img6 from "../../assets/4171344 1.png";

const data = [
  {
    title: "Full Control",
    image: img4,
    para: "We encourage you to vote for your team members and participate in the review process. Manage the success of your project and stay up to date with all the changes.",
  },
  {
    title: "Fewer Legal Problems",
    image: img3,
    para: "As part of our IT extension services, we remain the official employer for your employees. Our company handles all legal and documentation responsibilities.",
  },
  {
    title: "Aggressive Deadline",
    image: img2,
    para: "Improve your technical capacity while chasing tight deadlines. Our development team strives to complete projects on time.",
  },
  {
    title: "Lower Operating Costs",
    image: img5,
    para: "Reduce your company's costs by eliminating the cost of office space, equipment, and taxes. Pay for what brings the most value to your business.",
  },
  {
    title: "Access to Verified Talent",
    image: img1,
    para: "Appz Global Tech gives you instant access to a large pool of talent at affordable prices. Expand your team with certified software experts.",
  },
  {
    title: "No Recruitment Problem",
    image: img6,
    para: "Our IT improvement services take the hassle out of finding and recruiting vetted development talent for your organization. We carry out the selection process and send the approved CV.",
  },
];

const StaffSlider2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Benefits Of Our IT{" "}
          <span className="text-orange-500">Staff Augmentation</span> Services
        </h1>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => {
          let distance = Math.abs(activeSlide - index);
          if (distance > data.length / 2) {
            distance = data.length - distance;
          }

          let scale = 0.9;
          let opacity = 0.5;
          let height = 220;

          if (distance === 0) {
            scale = 1.1;
            opacity = 1;
            height = 280;
          } else if (distance === 1) {
            scale = 0.95;
            opacity = 0.8;
            height = 250;
          }

          return (
            <div key={index} className="px-3">
              <div
                className={`w-full max-w-md mx-auto flex flex-col items-center justify-center
                rounded-2xl shadow-lg p-6 text-center
                transition-all duration-500 ease-in-out ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-orange-100"
                }`}
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  height: `${height}px`,
                }}
              >
                <h1 className="text-lg font-semibold px-4 mb-2 text-gray-800">
                  {item.title}
                </h1>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain mb-4"
                />
                <p className="text-sm font-medium px-4 line-clamp-4 text-gray-700">
                  {item.para}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default StaffSlider2;
