import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/Gallery.jpeg";
import img2 from "../../assets/Gallery5.jpeg";
import img3 from "../../assets/Gallery2.jpeg";
import img4 from "../../assets/Gallery3.jpeg";
import img5 from "../../assets/Gallery4.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gallery = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4 py-10 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Appz Gallery</h1>
          <p className="text-gray-800 max-w-xl mx-auto">
            We cultivate a work culture that extends beyond projects, where
            creativity flourishes and ideas thrive, all driven by a shared
            commitment to excellence.
          </p>
        </div>
        <Slider {...settings}>
          {gallery.map((item, index) => (
            <div key={index} className="px-2">
              <img
                src={item.image}
                alt={`Gallery ${index}`}
                className="rounded-xl shadow-md h-60 w-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
