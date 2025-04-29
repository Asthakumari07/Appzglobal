import React from "react";
import Slider from "react-slick";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const data = [
  {
    image: "/assets/narendra-sir.jpg",
    name: "Narender Yadav",
    position: "Full Stack Developer",
  },
  {
    image: "/assets/ankesh.jpg",
    name: "Ankesh Yadav",
    position: "Mobile App Developer",
  },
  {
    image: "/assets/sumit.jpg",
    name: "Sumit Yadav",
    position: "Web Developer",
  },
  {
    image: "/assets/aas-1.jpg",
    name: "Astha Kumari",
    position: "MERN Stack Developer",
  },
  {
    image: "/assets/kuldeep.jpg",
    name: "Kuldeep Yadav",
    position: "Java Developer",
  },
  {
    image: "/assets/ganesh.jpg",
    name: "Ganesh Kumar",
    position: "Php Developer",
  },
  {
    image: "/assets/alok.jpg",
    name: "Alok Kumar",
    position: "Mobile App Developer",
  },
];

const StaffSlider3 = () => {
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
      <div className="flex justify-center text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 max-w-[800px]">
          We have experts from various IT disciplines for your specific project
          needs
        </h1>
      </div>

      <Slider {...settings}>
        {data.map((item, index) => {
          const bgTop = index % 2 === 0 ? "bg-orange-100" : "bg-blue-100";
          const bgBottom = index % 2 === 0 ? "bg-orange-500" : "bg-blue-900";

          return (
            <div key={index} className="px-3">
              <div className="w-full min-w-0 max-w-[260px] mx-auto overflow-hidden rounded-tr-[50px] rounded-bl-[50px] shadow-lg transition-transform hover:scale-105 duration-300">
                <div
                  className={`flex justify-center items-center h-64 ${bgTop}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-65 w-52 object-cover"
                  />
                </div>

                <div className={`${bgBottom} text-white px-6 py-4 text-center`}>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm mb-3">{item.position}</p>
                  <div className="flex gap-4 text-xl justify-center">
                    <TiSocialFacebookCircular />
                    <TiSocialLinkedinCircular />
                    <IoLogoInstagram />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default StaffSlider3;
