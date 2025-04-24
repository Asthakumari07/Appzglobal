import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, date, description }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-58 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500">{date}</p>
        <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        <button
          className="text-blue-600 font-medium mt-2 hover:underline self-start"
          onClick={() => navigate("/blogpara")}
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
