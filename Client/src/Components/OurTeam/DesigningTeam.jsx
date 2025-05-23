import React from "react";
import Slider from "react-slick";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const data = [
  {
    image: "/assets/kavita-01.jpg",
    name: "Kavita Rana",
    position: "UI/UX Designer",
  },
  {
    image: "/assets/ritik-01.jpg",
    name: "Ritik",
    position: "UI/UX Designer",
  },
];

const DesigningTeam = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="flex text-left mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Designing Team
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

export default DesigningTeam;
