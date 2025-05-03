import React from "react";

const data = [
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/manpower.jpg",
    name: "Manpower App",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/portfoliomobile.jpg",
    name: "Portfolio Mobile",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/transportation.jpg",
    name: "Transportation App",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/agriculture.jpg",
    name: "Agriculture App",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/needassist.jpg",
    name: "NeedAssist",
  },
  {
    icon: "/assets/Group-8712.jpg",
    image: "/assets/transportation.jpg",
    name: "Transport App",
  },
];

const PortfolioMobile = () => {
  return (
    <div
      className="py-10 bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/back-image.png")` }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Mobile Application</h2>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow gap-5 ${
                index % 2 === 0 ? "bg-blue-800" : "bg-orange-400"
              }`}
            >
              {/* Wrapper for icon image and text */}
              <div className="relative w-[70%]">
                <img
                  src={item.icon}
                  alt="Icon"
                  className="h-auto w-full rounded-xl"
                />
                {/* Simulated text inside search bar on image */}
                <div className="absolute top-[2px] left-1/2 transform -translate-x-1/2 w-[80%] text-sm text-gray-600 text-center font-semibold">
                  {item.name}
                </div>
              </div>

              <div className="relative w-[70%]">
                <img
                  src={item.image}
                  alt="Project"
                  className="h-auto w-full mb-4 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioMobile;
