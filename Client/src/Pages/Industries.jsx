import React from "react";

const industries = [
  { img: "/assets/Indo-1.jpg", title: "Ecommerce & Retail" },
  { img: "/assets/Indo-2.jpg", title: "Healthcare" },
  { img: "/assets/Indo-3.jpg", title: "Finance & Banking" },
  { img: "/assets/Indo-4.jpg", title: "Manufacturing" },
  { img: "/assets/Indo-5.jpg", title: "Education & e-Learning" },
  { img: "/assets/Indo-6.jpg", title: "Automotive" },
];

export default function Industries() {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-2">INDUSTRIES WE SERVE</h2>
      <p className="text-gray-600 mb-10">
        Our solutions offer to businesses across various industries:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="bg-pink-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={industry.img}
              alt={industry.title}
              className="w-40 h-40 object-contain mb-4 rounded-4xl"
            />
            <h3 className="text-xl text-gray-800">{industry.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
