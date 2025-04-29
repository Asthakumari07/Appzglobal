import React from "react";

const data = [
  {
    image: "/assets/reward_17643435.jpg",
    title: "Quality Assurance",
    para: "We implement comprehensive QA processes to identify and rectify issues early, ensuring optimal performance and reliability.",
  },
  {
    image: "/assets/progress_15401118.jpg",
    title: "Continuous Improvement",
    para: "Our quality standards evolve to integrate best practices and emerging industry trends.",
  },
  {
    image: "/assets/responsive_11681311.jpg",
    title: "Client Satisfaction",
    para: "We prioritize client needs and feedback, striving to exceed expectations and build long-term relationships.",
  },
  {
    image: "/assets/website_6295004.jpg",
    title: "Testing Automation",
    para: "We implement comprehensive QA processes to identify and rectify issues early, ensuring optimal performance and reliability.",
  },
  {
    image: "/assets/customer-review_3045687.jpg",
    title: "Gadget Capability",
    para: "We implement comprehensive QA processes to identify and rectify issues early, ensuring optimal performance and reliability.",
  },
  {
    image: "/assets/reward_17643435.jpg",
    title: "Quality Assurance",
    para: "We implement comprehensive QA processes to identify and rectify issues early, ensuring optimal performance and reliability.",
  },
];

const CardQuality = () => {
  return (
    <div className="py-10 px-4 bg-gray-50">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center h-full hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain mb-4 rounded-xl"
            />
            <h2 className="text-xl font-semibold mb-2 lg:text-3xl xl:text-3xl">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm lg:text-xl xl:text-xl">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardQuality;
