import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    image: "/assets/school-erp.jpg",
    title: "School ERP by Appz Global Tech",
    para: "Appz Global Tech's School ERP is a comprehensive solution...",
    link: "/products/school-erp",
  },
  {
    image: "/assets/hospital.webp",
    title: "Hospital Management System by Appz Global Tech",
    para: "Appz Global Tech’s Hospital Management System (HMS)...",
    link: "/products/hospital-system",
  },
  {
    image: "/assets/hrms-1.jpg",
    title: "HRMS by Appz Global Tech",
    para: "Appz Global Tech's HRMS is a robust, user-friendly platform...",
    link: "/products/hrms",
  },
  {
    image: "/assets/pos-1.jpg",
    title: "Point of Sale (POS) System by Appz Global Tech",
    para: "Appz Global Tech’s POS System streamlines your sales...",
    link: "/products/pos",
  },
  {
    image: "/assets/library-1.jpg",
    title: "Library Management System by Appz Global Tech",
    para: "Appz Global Tech’s LMS is a user-friendly solution...",
    link: "/products/library",
  },
  {
    image: "/assets/educational.webp",
    title: "Educational Management System by Appz Global Tech",
    para: "Appz Global Tech’s EMS is a cloud-based platform...",
    link: "/products/educational",
  },
  {
    image: "/assets/college-1.jpg",
    title: "College ERP by Appz Global Tech",
    para: "Appz Global Tech’s College ERP streamlines college tasks...",
    link: "/products/college-erp",
  },
  {
    image: "/assets/Product1.jpg",
    title: "Parking Management Software by Appz Global Tech",
    para: "Appz Global Tech’s Parking Software optimizes vehicle tracking...",
    link: "/products/parking",
  },
  {
    image: "/assets/product2.jpg",
    title: "Vision Track by Appz Global Tech",
    para: "AI-Powered Employee Monitoring & Attendance made easy...",
    link: "/products/vision-track",
  },
];

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center item-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-48 object-cover"
              />
            </div>
            <div className="p-5 px-10">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-l">{item.para}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigate(item.link)}
                className="text-blue-800 mb-3 ml-10 flex justify-center items-center gap-1 text-xl cursor-pointer"
              >
                Know More
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
