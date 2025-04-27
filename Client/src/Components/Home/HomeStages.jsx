import React from "react";

import { motion } from "framer-motion";

const dataLeft = [
  {
    image: "/assets/discover.png",
    title: "Discovery & Research",
    para: "We analyze your business requirements, research industry trends, and define project goals. This stage ensures a clear vision for development.",
  },
  {
    image: "/assets/design and prototyping.png",
    title: "Design & Prototyping",
    para: "Our UI/UX experts design intuitive interfaces, focusing on user experience. Interactive prototypes are built to visualize the app before development begins.",
  },
  {
    image: "/assets/Testing & Quality Assurance.png",
    title: "Testing & Quality Assurance",
    para: "Rigorous testing is conducted to identify bugs, optimize performance, and enhance security. We ensure a flawless, high-quality application before launch.",
  },
];

const dataRight = [
  {
    image: "/assets/planning-strategy.png",
    title: "Planning & Strategy",
    para: "A detailed roadmap, wireframes, and technical architecture are created. We establish milestones, resources, and timelines for efficient execution.",
  },
  {
    image: "/assets/Development & Coding.png",
    title: " Development & Coding",
    para: "Our developers write clean, scalable code for both front-end and back-end. We integrate necessary APIs, databases, and functionalities to ensure seamless performance.",
  },
  {
    image: "/assets/Maintenance & Support.png",
    title: "Maintenance & Support",
    para: "Post-launch support, updates, and optimizations are provided to enhance performance. We ensure the app stays secure, efficient, and scalable over time.",
  },
];

const HomeStages = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 hover:underline ">
        Application
        <span className="text-orange-500 "> Development</span> Stages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col space-y-6">
          {dataLeft.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 duration-500  hover:bg-gradient-to-br hover:from-orange-100 hover:via-white hover:to-blue-100 hover:border-b-[3px] hover:border-r-[3px] border-blue-500"
            >
              <div className="flex flex-row justify-left items-center gap-3">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-lg font-semibold hover:text-blue-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mt-2">{item.para}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.img
            src="/assets/Our Top Services.png"
            alt=""
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-80 h-auto"
          />
        </div>

        <div className="flex flex-col space-y-6">
          {dataRight.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 duration-500  hover:bg-gradient-to-br hover:from-orange-100 hover:via-white hover:to-blue-100 hover:border-b-[3px] hover:border-r-[3px] border-blue-500"
            >
              <div className="flex flex-row justify-left items-center gap-3">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-lg font-semibold hover:text-blue-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStages;
