import React from "react";

const data = [
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8742.png",
    link: "https://nestorpharma.com",
  },
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8740.png",
    link: "https://www.nextias.com",
  },
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8736.png",
    link: "https://www.jpfunware.com",
  },
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8737.png",
    link: "https://thikedaar.com",
  },
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8738.png",
    link: "https://igniculuss.com",
  },
  {
    icon: "/assets/Group 8712.png",
    image: "/assets/Group 8744.png",
    link: "https://nmgemandjewels.com",
  },
  { icon: "/assets/Group 8712.png", image: "/assets/Group 8742.png" },
  { icon: "/assets/Group 8712.png", image: "/assets/Group 8742.png" },
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

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow gap-5 ${
                index % 2 === 0 ? "bg-blue-800" : "bg-orange-400"
              }`}
            >
              <img src={item.icon} alt="Icon" className="h-auto w-[70%]" />
              <img
                src={item.image}
                alt="Project"
                className="h-auto w-[70%] mb-4 object-contain"
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
    </div>
  );
};

export default HomePortfolio;
