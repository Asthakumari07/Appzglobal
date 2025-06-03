import React from "react";
import Slider from "react-slick";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const data = [
  {
    image: "/assets/ankesh-01.jpg",
    name: "Ankesh Yadav",
    position: "Mobile App Developer",
  },
  {
    image: "/assets/uttam-01.jpg",
    name: "Uttam Shah",
    position: "Mobile App Developer",
  },
  {
    image: "/assets/kuldeep-01.jpg",
    name: "Kuldeep Yadav",
    position: "Java Developer",
  },
  {
    image: "/assets/sumit-01.jpg",
    name: "Sumit Yadav",
    position: "Web Developer",
  },

  {
    image: "assets/Astha.jpg",
    name: "Astha Kumari",
    position: "MERN Stack Developer",
  },
  {
    image: "/assets/abhishek-01.jpg",
    name: "Abhishek Kumar",
    position: "Python Developer",
  },
  {
    image: "/assets/ganesh-01.jpg",
    name: "Ganesh Kumar",
    position: "Php Developer",
  },
  {
    image: "/assets/YASH-01.jpg",
    name: "Yash Kumar",
    position: "Python Developer",
  },

  {
    image: "/assets/alok-01.jpg",
    name: "Alok Kumar",
    position: "Mobile App Developer",
  },
  {
    image: "/assets/ritik2.jpg",
    name: "Ritik Chauhan",
    position: "Mobile App Developer",
  },
  {
    image: "/assets/devi-01.jpg",
    name: "Debidatta Barik",
    position: "Java Developer",
  },

  {
    image: "/assets/javed-01.jpg",
    name: "Javed Akhtar",
    position: "Software QA tester",
  },
];

const Development = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="flex text-left mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Development Team
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {data.map((item, index) => {
          const bgTop = index % 2 === 0 ? "bg-orange-100" : "bg-blue-100";
          const bgBottom = index % 2 === 0 ? "bg-orange-400" : "bg-blue-900";

          return (
            <div key={index} className="px-3">
              <div className="w-full min-w-0 max-w-[260px] mx-auto overflow-hidden rounded-tr-[50px] rounded-bl-[50px] shadow-lg transition-transform hover:scale-105 duration-300">
                <div
                  className={`flex justify-center items-center h-64 ${bgTop}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-65 w-65 object-cover"
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
      </div>
    </div>
  );
};

export default Development;
