import React from "react";
import Slider from "react-slick";

const images = [
  "/assets/0 6.png",
  "/assets/1 25.png",
  "/assets/2 2.png",
  "/assets/3 1.png",
  "/assets/4 1.png",
  "/assets/5 1.png",
  "/assets/logo-1 1.png",
];

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Trusted Partners</h1>
        <p className="text-gray-600">
          Collaborating with industry to drive innovation and success.
        </p>
      </div>
      <div className="mx-auto w-full max-w-screen-xl overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Client logo ${index + 1}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlider;
