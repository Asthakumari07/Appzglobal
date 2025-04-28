import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/Group-8671.jpg",
  "/assets/Group-8672.jpg",
  "/assets/Group-8673.jpg",
  "/assets/Group-8674.jpg",
  "/assets/Group-8675.jpg",
];

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-orange-300 py-6 w-full overflow-hidden">
      <h1 className="text-center text-4xl text-blue-900 font-bold text-shadow mb-5">
        Our Clients
      </h1>
      <div className="mx-auto w-full max-w-screen-xl overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Client logo ${index + 1}`}
                className="h-16 w-auto object-contain rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
