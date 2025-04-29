import React from "react";

const data = [
  {
    image: "/assets/Brainstorming_Doc_Group_2_.jpg",
    title: "Discovery",
    para: "We begin by understanding your vision, analyzing business needs, and researching market trends. Our team gathers insights to define clear project goals. This phase ensures a strong foundation for success.",
    number: "01",
  },
  {
    image: "/assets/Strategic_Doc_Group_1_.jpg",
    title: "Planning",
    para: "We craft a strategic roadmap, design wireframe, and outline development milestones. Our structured planning process ensures seamless execution. Timelines and resources are optimized for efficiency.",
    number: "02",
  },
  {
    image: "/assets/Analytics_Doc_Group_2_.jpg",
    title: "Execution",
    para: "Our experts develop, test, and refine the solution to meet quality standards. We ensure smooth functionality, user-centric design, and high performance. Continuous improvements are made for the best results.",
    number: "03",
  },
  {
    image: "/assets/Launch_Doc_Group_2_.jpg",
    title: "Delivery",
    para: "We launch the final product with precision, ensuring flawless deployment. Post-launch support, optimization, and maintenance ensure long-term success. We help businesses scale with reliable solutions.",
    number: "04",
  },
];

const WorkingProcess = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4">
      <h1 className="lg:text-5xl text-3xl text-center mb-20 font-bold max-w-[80%] lg:max-w-[60%]">
        Our <span className="text-orange-400">Working Process</span> - How We
        Work For Our Customers
      </h1>

      <div className="grid gap-10 max-w-7xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between items-center gap-6 bg-white shadow-lg rounded-2xl p-6 md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex flex-col md:flex-row justify-left items-center gap-5 w-full md:w-2/3
    ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-auto object-cover"
              />
              <div>
                <h2 className="text-4xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-xl">{item.para}</p>
              </div>
            </div>

            <div className="text-blue-900 text-9xl font-bold mb-2">
              {item.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
