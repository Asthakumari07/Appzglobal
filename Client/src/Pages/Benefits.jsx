import React from "react";
import { TrendingUp, Scale, Users, Globe, Workflow } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    title: "Increased Efficiency",
    desc: "Automate workflows and reduce operational costs.",
  },
  {
    icon: <Scale className="w-10 h-10 text-white" />,
    title: "Scalability",
    desc: "Create solutions that grow with your business.",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Work on Customer Experience",
    desc: "Deliver faster, smarter, and personalized services.",
  },
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Global Reach",
    desc: "Expand your business across India, USA, and globally.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-white" />,
    title: "Future-Oriented Solutions",
    desc: "AI, cloud, and automation integrated for long-term success.",
  },
];

export default function Benefits() {
  return (
    <section className="py-14 px-6 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        BENEFITS OF OUR SOFTWARE DEVELOPMENT SERVICES
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Partnering with us gives your business a competitive edge:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="bg-pink-50 rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition group"
          >
            <div className="bg-yellow-600 p-3 rounded-lg mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
