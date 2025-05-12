import React, { useState } from "react";

const stepData = {
  Discover: {
    text: "We begin by understanding your business, your users, and your challenges.",
    points: [
      "Stakeholder Interviews",
      "Competitor & Market Analysis",
      "User Research & Personas",
      "Analytics & Usability Audits",
    ],
    image: "/assets/validate.jpg",
  },
  Define: {
    text: "Turning insights into clear, actionable problem statements.",
    points: [
      "User Journey Mapping",
      "Information Architecture",
      "Problem Framing",
      "Success Metrics",
    ],
    image: "/assets/define.jpg",
  },
  Design: {
    text: "Where ideas take shape. We focus on functionality, usability, and aesthetics.",
    points: [
      "Wireframes & Interactive Prototypes",
      "UI Design Systems",
      "Microinteractions & Animations",
      "Accessibility & Responsive Design",
    ],
    image: "/assets/design.jpg",
  },
  "Develop Design Handoff": {
    text: "Our designs are development-ready — and we work closely with engineers to ensure pixel-perfect implementation",
    points: [
      "Figma Design Handoff",
      "Design Tokens & Components",
      "Developer Collaboration & QA Support",
    ],
    image: "/assets/develop.jpg",
  },
  "Validate & Iterate": {
    text: "We test, refine, and optimize to ensure continuous improvement post-launch.",
    points: [
      "Usability Testing",
      "Feedback Loops",
      "A/B Testing",
      "Heatmaps & Analytics Reviews",
    ],
    image: "/assets/OurObjective.jpg",
  },
};

const DesignThinking = () => {
  const [activeStep, setActiveStep] = useState("Discover");

  const { text, points, image } = stepData[activeStep];

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-blue-900">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Our Design Thinking Framework
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Sidebar - Steps */}
        <div className="p-6 border-r border-black">
          <ul className="space-y-4 text-xl sm:text-2xl text-white">
            {Object.keys(stepData).map((step, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveStep(step)}
                  className={`transition duration-300 ${
                    activeStep === step ? "text-orange-200" : "cursor-pointer"
                  }`}
                >
                  ➤ {step}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image and Text */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt={activeStep}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              {text}
            </h2>
            <ul className="list-disc pl-5 text-white space-y-2 text-base sm:text-lg">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignThinking;
