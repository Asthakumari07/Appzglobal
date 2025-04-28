import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";

const data = [
  {
    para: "Web development is a broad term that covers the entire process of creating and maintaining websites. It involves .......",
    button: "Read full blog",
  },
  {
    para: "AI is revolutionizing industries, making businesses smarter and more efficient. Learn about the latest AI trends and innovations .......",
    button: "Read full blog",
  },
  {
    para: "Cybersecurity is crucial for businesses in today's digital world. Discover best practices to protect your data and assets .......",
    button: "Read full blog",
  },
  {
    para: "Cloud computing enables businesses to scale seamlessly. Understand how cloud solutions can improve your operations .......",
    button: "Read full blog",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const HomeBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[90%] mx-auto py-10 px-5">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex justify-center w-full md:w-1/3">
          <img
            src="/assets/frame-001.jpg"
            alt=""
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col text-center md:text-left w-full md:w-2/3">
          <h1 className="text-3xl font-bold">Blogs</h1>
          <p className="text-gray-600 mt-4">
            Stay ahead with the latest advancements in technology, AI, and
            digital transformation. Explore how emerging innovations are shaping
            businesses, enhancing user experiences, and driving efficiency. From
            AI-powered automation to cutting-edge software solutions, we bring
            you expert insights and trends that matter.
          </p>
          <div className="mt-10">
            <Slider {...sliderSettings}>
              {data.map((item, index) => (
                <div key={index} className="px-4">
                  <div
                    className={`h-60 shadow-lg p-6 rounded-lg border bg-blue-800 text-white text-center hover:shadow-xl transition-shadow rounded-tl-[40px]
                    ${index % 2 === 0 ? "bg-blue-800" : "bg-orange-400"}
                    `}
                  >
                    <p className="text-sm">{item.para}</p>
                    <button
                      className="mt-4 border border-white rounded-3xl px-4 py-2 font-semibold hover:bg-white hover:text-blue-800 transition-all"
                      onClick={() => navigate("/blogs")}
                    >
                      {item.button}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
