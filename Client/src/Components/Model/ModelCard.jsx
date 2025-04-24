import React from "react";
import img1 from "../../assets/employee_1976016 1.png";
import img2 from "../../assets/Workforce.png";
import img3 from "../../assets/network.png";
import img4 from "../../assets/Tilent.png";
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

const ModelCard = () => {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${BackImage})` }}
    >
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

export default ModelCard;
