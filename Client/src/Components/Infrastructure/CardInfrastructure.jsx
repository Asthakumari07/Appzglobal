import React from "react";
import img1 from "../../assets/server.png";
import img2 from "../../assets/hours.png";
import img3 from "../../assets/encrypted.png";
import img4 from "../../assets/connection.png";
import BackImage from "../../assets/back-image.png";

const data = [
  {
    image: img1,
    title: "Client Centric Approach",
    para: "Engagement models built around your goals",
  },
  {
    image: img2,
    title: "Seamless Communication",
    para: "transport updates, weekly standup, and dedicated account managers",
  },
  {
    image: img3,
    title: "Scalable Teams",
    para: "Easily scale up or down based on your project's needs",
  },
  {
    image: img4,
    title: "Proven Expertise",
    para: "A track record of successful global delivery",
  },
];

const CardInfrastructure = () => {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${BackImage})` }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-3xl max-w-[40%]">
          Robust, Scalable Infrastructure Built for Performance
        </h1>
        <p className="text-xl max-w-[70%] mb-7">
          We leverage high-performance technology to ensure maximum uptime; 24/7
          monitoring, and strong security protocols, all within a highly
          flexible and scalable environment.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 bg-opacity-90 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-25 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfrastructure;
