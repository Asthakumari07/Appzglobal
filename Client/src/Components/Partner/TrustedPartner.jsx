import React from "react";

import { HiOutlineExternalLink } from "react-icons/hi";

const data = [
  {
    logo: "/assets/partnert-04.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://astuglobaltech.in",
  },
  {
    logo: "/assets/partner-01.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: "/assets/partner-02.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: "/assets/partner-03.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://astuglobaltech.in",
  },

  {
    logo: "/assets/partner-05.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://sarvodayaventures.com",
  },
  {
    logo: "/assets/partner-06.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: "/assets/partner-07.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://demotictechnologies.com",
  },
  {
    logo: "/assets/logo-form.jpg",
    para: "At Appz Global Tech, we take pride in our strong partnerships with leading technology and business innovators.",
    link: "https://technoledgeindia.com/index.html",
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
                className="mt-auto cursor-pointer"
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
