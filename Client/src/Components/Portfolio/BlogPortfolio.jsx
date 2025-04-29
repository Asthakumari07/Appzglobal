import React from "react";

import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "/assets/Zenbook.jpg",
    title: "Nginx vs. Apache2: Which Web Server is Right for You?",
    para: "In the realm of web hosting, the decision between Nginx and Apache2 is pivotal. Both are formidable choices, each with its unique advantages and trade-offs.",
    date: "December 30, 2024",
  },
  {
    image: "/assets/Zenbook.jpg",
    title: "Top 10 JavaScript Frameworks to Watch in 2025",
    para: "As JavaScript continues to evolve, staying updated with the latest frameworks can significantly enhance your development process.",
    date: "January 10, 2025",
  },
  {
    image: "/assets/Zenbook.jpg",
    title: "How to Secure Your Web Application: Best Practices",
    para: "With increasing cyber threats, understanding how to secure your web apps is more important than ever. Here's what you need to know.",
    date: "February 5, 2025",
  },
];

const BlogPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-[40px] font-bold mb-10">Blogs</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{item.para}</p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-blue-600 border px-4 py-1 rounded-3xl hover:bg-blue-700 hover:text-white transition">
                Read More
              </button>
              <div className="flex items-center text-sm text-gray-500">
                <FaRegCalendarAlt className="mr-2" />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/blog")}
        className="mt-10 px-6 py-2 font-bold text-blue-700 border rounded-lg hover:bg-blue-700 hover:text-white transition"
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default BlogPortfolio;
