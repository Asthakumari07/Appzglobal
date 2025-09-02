import React from "react";
import { Link } from "react-router-dom"; // Import Link

const data = [
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8742.jpg",
    name: "Nestor pharma",
    link: "https://nestorpharma.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8740.jpg",
    name: "Nextias",
    link: "https://www.nextias.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8736.jpg",
    name: "JP Funware",
    link: "https://www.jpfunware.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8737.jpg",
    name: "Thikedaar.com",
    link: "https://thikedaar.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8738.jpg",
    name: "Igniculuss",
    link: "https://igniculuss.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Group-8744.jpg",
    name: "NM Gems & Jewels",
    link: "https://nmgemandjewels.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/ManpowerImage.jpg",
    name: "Manpower App",
    link: "https://nmgemandjewels.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/Portfolio.jpg",
    name: "Portfolio Mobile",
    link: "https://nmgemandjewels.com",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/lisofy.jpg",
    name: "Transportation App",
    link: "https://nmgemandjewels.com",
  },
];

const HomePortfolio = () => {
  return (
    <div
      className="py-10 bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/back-image.png")` }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Portfolio</h2>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow gap-5 ${
                index % 2 === 0 ? "bg-blue-500" : "bg-orange-300"
              }`}
            >
              <div className="relative w-[70%]">
                <img
                  src={item.icon}
                  alt="Icon"
                  className="h-auto w-full rounded-xl"
                />
                {/* Project Name */}
                <div className="absolute top-[-2px] lg:top-[2px] left-1/2 transform -translate-x-1/2 w-[80%] text-sm text-gray-600 text-center lg:font-semibold">
                  {item.name}
                </div>
              </div>
              <img
                src={item.image}
                alt="Project"
                className="h-auto w-[70%] mb-4 object-contain rounded-xl transition-transform duration-500 hover:scale-175"
              />
            </div>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 px-6 py-2 rounded-lg text-sm font-semibold transition border ${
                  index % 2 === 0
                    ? "hover:bg-blue-800 hover:text-white text-blue-700"
                    : "hover:bg-orange-400 hover:text-white text-orange-400"
                }`}
              >
                Go to website
              </a>
            ) : (
              <button
                disabled
                className="mt-4 px-6 py-2 rounded-lg text-sm font-semibold text-gray-400 border border-gray-300 cursor-not-allowed"
              >
                No Link Available
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Button to go to full portfolio page */}
      <div className="text-center mt-12">
        <Link
          to="/portfolio"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
        >
          View Full Portfolio
        </Link>
      </div>
    </div>
  );
};

export default HomePortfolio;
