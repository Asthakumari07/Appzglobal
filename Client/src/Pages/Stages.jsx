import React from "react";

import { motion } from "framer-motion";

const dataLeft = [
  {
    image: "/assets/discover.jpg",
    title: "Requirement Analysis",
    para: "We begin by thoroughly understanding your business needs, gathering detailed requirements, and identifying challenges to ensure a clear project roadmap.",
  },
  {
    image: "/assets/design&prototyping.jpg",
    title: "Consulting & Strategy",
    para: "Our experts provide tailored consulting and craft a result-driven strategy that aligns with your business objectives and maximizes ROI.",
  },
  {
    image: "/assets/TestingQualityAssurance.jpg",
    title: "Design & Prototyping",
    para: "We create intuitive designs and interactive prototypes to visualize the final product, ensuring user-friendly experiences before development begins.",
  },
];

const dataRight = [
  {
    image: "/assets/planning-strategy.jpg",
    title: "Development & Integration",
    para: "Our team builds scalable, secure, and efficient solutions while integrating them seamlessly with your existing systems and workflows.",
  },
  {
    image: "/assets/DevelopmentCoding.jpg",
    title: " Testing & Quality Assurance",
    para: "We conduct rigorous testing at every stage to ensure flawless performance, security, and reliability of the solution.",
  },
  {
    image: "/assets/MaintenanceSupport.jpg",
    title: "Deployment & Support",
    para: "We handle smooth deployment and provide continuous support, updates, and maintenance to keep your system running at its best.",
  },
];

const Stages = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-5 hover:underline ">
        Our Software
        <span className="text-orange-500 "> Development</span> Process
      </h2>
      <p className="text-xl mb-10">
        We understand structured yet flexible market trend to offer best quality
        software:
      </p>

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
            src="/assets/OurTopServices.jpg"
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

export default Stages;
