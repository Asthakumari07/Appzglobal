import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  { image: "/assets/e-commerce.jpg", title: "Transportation & Logistics" },
  { image: "/assets/automobile.jpg", title: "Education" },
  { image: "/assets/e-commerce.jpg", title: "E-commerce" },
  { image: "/assets/automobile.jpg", title: "Automobile" },
  { image: "/assets/e-commerce.jpg", title: "Healthcare" },
  { image: "/assets/automobile.jpg", title: "Finance" },
  { image: "/assets/graduation.jpg", title: "Retail" },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 text-black rounded-full shadow-md hover:bg-gray-300"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <IoIosArrowBack size={40} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 text-black rounded-full shadow-md hover:bg-gray-300"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <IoIosArrowForward size={40} />
  </button>
);

const Home2 = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative mx-auto py-10 w-[90%] ">
      <h2 className="text-2xl font-bold text-center mb-6">
        <span className="text-orange-500">Industries</span> We Work With
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-blue-100 shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 hover:bg-white transition-all duration-300 h-50">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home2;
