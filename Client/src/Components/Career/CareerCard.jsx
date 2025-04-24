import React from "react";
import img1 from "../../assets/net.jpg";
import img2 from "../../assets/python.jpg";
import img3 from "../../assets/react.jpg";
import img4 from "../../assets/Java.png";
import img5 from "../../assets/Php.png";
import img6 from "../../assets/Wordpress.png";
import BackImage from "../../assets/back-image.png";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: img1,
    title: ".NET",
    para: "Experience 3+ Years",
    location: "Noida",
  },
  {
    image: img2,
    title: "Python",
    para: "Experience 3+ Years",
    location: "Noida",
  },
  {
    image: img3,
    title: "React JS",
    para: "Experience 3+ Years",
    location: "Noida",
  },
  {
    image: img4,
    title: "Java",
    para: "Experience 3+ Years",
    location: "Noida",
  },
  {
    image: img5,
    title: "PHP",
    para: "Experience 3+ Years",
    location: "Noida",
  },
  {
    image: img6,
    title: "Wordpress",
    para: "Experience 3+ Years",
    location: "Noida",
  },
];

const CareerCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackImage})` }}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">
          Quick Links to <span className="text-orange-400">Open Positions</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <div className="flex items-start">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-15 w-auto object-cover rounded-md"
                  />
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-xl text-gray-600">{item.para}</p>
                  <h3 className="text-sm text-gray-500">{item.location}</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-lg border border-blue-800 text-blue-800 px-8 py-2 rounded-3xl transition flex items-center gap-2 font-bold"
                onClick={() => navigate("/application")}
              >
                Apply Now <MdArrowOutward />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCard;
