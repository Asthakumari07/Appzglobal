import React from "react";

const DesignThinking = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-blue-900">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Our Design Thinking Framework
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Sidebar - Steps */}
        <div className="p-6 border-r border-black">
          <ul className="space-y-4 text-xl sm:text-2xl text-white">
            {[
              "Discover",
              "Define",
              "Design",
              "Develop Design Handoff",
              "Validate & Iterate",
            ].map((step, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-300 transition duration-300"
                >
                  ➤ {step}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image and Text */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/OurObjective.jpg"
              alt="Design Thinking"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              We begin by understanding your business, your users, and your
              challenges.
            </h2>
            <ul className="list-disc pl-5 text-white space-y-2 text-base sm:text-lg">
              <li>Stakeholder Interviews</li>
              <li>Competitor & Market Analysis</li>
              <li>User Research & Personas</li>
              <li>Analytics & Usability Audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignThinking;
