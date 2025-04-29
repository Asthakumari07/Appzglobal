import React from "react";

const ModelSection = () => {
  return (
    <>
      <div className="py-5 px-4 lg:px-20 mx-auto gap-5 bg-lime-100">
        <h1 className="text-3xl font-bold mb-4 mb-5">Fixed-Price Model</h1>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
            <p className="mb-4">
              If you have a well-scoped project with defined deliverables and
              timelines, our Fixed-Price model offers complete budget clarity
              from day one. We analyze your requirements thoroughly and provide
              a detailed project plan and fixed quote — ensuring zero surprises.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Defined cost & timeline</li>
              <li>Minimal supervision needed</li>
              <li>Ideal for MVPs, prototypes, and small-scale development</li>
            </ul>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              src="/assets/Fixed-Price.jpg"
              alt="Clients trust visual"
              className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 py-10 px-4 lg:px-16 bg-orange-100">
        <div className="flex">
          <img
            src="/assets/TimeMaterial.jpg"
            alt="Fixed Price Model"
            className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tr-[100px]"
          />
        </div>

        <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
          <h1 className="text-2xl font-bold mb-4">
            Time & Material (T&M) Model
          </h1>
          <p className="mb-4">
            Perfect for projects where requirements may change over time. The
            Time & Material model gives you the freedom to adjust scope,
            features, and priorities dynamically — while only paying for the
            time and resources actually used.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li> Pay-as-you-go model</li>
            <li>Agile & flexible</li>
            <li>Transparent reporting and time tracking</li>
          </ul>
        </div>
      </div>
      <div className="py-5 px-4 lg:px-20 mx-auto gap-5 bg-lime-100">
        <h1 className="text-3xl font-bold mb-4 mb-5">Dedicated Team Model</h1>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
            <p className="mb-4">
              Looking for a team that’s fully aligned with your vision? Our
              Dedicated Team model gives you access to a skilled team that works
              exclusively on your project. This model ensures seamless
              communication, deep domain knowledge, and consistent delivery —
              like an extension of your in-house team.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Full control over team & tasks</li>
              <li>Transparent monthly billing</li>
              <li>Fast ramp-up and scalability</li>
            </ul>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              src="/assets/DedicatedTeamModel.jpg"
              alt="Clients trust visual"
              className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelSection;
