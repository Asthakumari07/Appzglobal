import React from "react";
import img1 from "../../assets/0 6.png";
import img2 from "../../assets/1 25.png";
import img3 from "../../assets/2 2.png";
import img4 from "../../assets/3 1.png";
import img5 from "../../assets/4 1.png";
import img6 from "../../assets/5 1.png";
import img7 from "../../assets/logo-1 1.png";
import { HiOutlineExternalLink } from "react-icons/hi";

const data = [
  {
    logo: img1,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: img2,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: img3,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://astuglobaltech.in",
  },
  {
    logo: img4,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://sarvodayaventures.com",
  },
  {
    logo: img5,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: img6,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: img7,
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
    link: "https://demotictechnologies.com",
  },
];

const TrustedPartner = () => {
  return (
    <div className="py-12 px-4 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Our Trusted Partners</h1>
      <p className="text-gray-600 mb-10">
        Collaborating with industry to drive innovation and success.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl hover:shadow-lg flex flex-col justify-between items-center text-center h-80 transition-transform ${
              index % 2 === 0 ? "bg-blue-100" : "bg-orange-100"
            }`}
          >
            <img
              src={item.logo}
              alt={`partner-${index}`}
              className="h-20 w-auto mb-4 object-contain bg-white p-2 rounded"
            />
            <p className="text-lg px-5 text-gray-700 mb-4">{item.para}</p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
                title="Visit Website"
              >
                <div className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition duration-200">
                  <span className="text-sm font-medium">Visit Website</span>
                  <HiOutlineExternalLink className="text-lg" />
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartner;
