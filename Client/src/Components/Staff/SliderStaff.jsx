import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/annual-report_17340471 1.png";
import img2 from "../../assets/change_9124188 1.png";
import img3 from "../../assets/new-hire_11287327 1.png";
import img4 from "../../assets/overtime_13447857 1.png";
import img5 from "../../assets/shopping-online_1279033 1.png";
import img6 from "../../assets/stakeholder_10008056 1.png";

const data = [
  { image: img1, title: "24*7 man hours guaranteed" },
  { image: img2, title: "Daily/Weekly/Monthly code delivery" },
  { image: img3, title: "Get Daily/Weekly reports via Email" },
  { image: img4, title: "Have a direct access to resource" },
  { image: img5, title: "Flexible office hours as per your timezone" },
  { image: img6, title: "Weekly/Monthly/Yearly Hiring" },
];

const SliderStaff = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Staff <span className="text-orange-500">Augmentation</span> Services
        </h1>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-3">
            <div
              className={`w-full max-w-sm mx-auto h-64 flex flex-col items-center justify-center
              rounded-2xl shadow-lg p-6 text-center
              transition-transform hover:scale-105 duration-300
              ${index % 2 === 0 ? "bg-blue-900" : "bg-orange-300"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain mb-4"
              />
              <h2
                className={`text-lg font-semibold px-2 ${
                  index % 2 === 0 ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderStaff;
