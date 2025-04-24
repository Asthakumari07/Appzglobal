import React from "react";

const data = [
  {
    title: "Innovative Design",
    para: "Sleek, modern, and user-friendly UI/UX.",
    bgColor: "bg-red-600",
  },
  {
    title: "Custom Solutions",
    para: "Tailored apps to meet your business needs.",
    bgColor: "bg-orange-500",
  },
  {
    title: "Seamless Performance",
    para: "Fast, responsive, and optimized for all devices.",
    bgColor: "bg-yellow-400",
  },
  {
    title: "End-to-End Support",
    para: "From ideation to deployment and maintenance.",
    bgColor: "bg-green-700",
  },
];

const AboutChoose = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-10">
        Why <span className="text-orange-400">Choose</span> Us?
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
        <div className="w-full lg:w-1/2">
          <p className="text-gray-800 text-lg lg:text-2xl leading-relaxed">
            With 7+ years of experience, our skilled team delivers end-to-end IT
            solutions, including software development, cybersecurity, and
            digital transformation. We provide comprehensive, client-focused
            services, ensuring innovative and tailored technology solutions to
            drive business growth.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} text-white p-6 rounded-lg shadow-md`}
            >
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutChoose;
