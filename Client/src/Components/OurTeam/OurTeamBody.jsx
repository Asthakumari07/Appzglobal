import React from "react";
import { Link } from "react-router-dom";

import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const data = [
  {
    image: "/assets/lokesh-011.jpg",
    name: "Lokesh Kumar",
    position: "Managing Director",
    link: "/profilelokesh",
    social: {
      facebook:
        "https://www.facebook.com/people/Lokesh-Kr-Chaudhary/pfbid0HMi7SdKqc5eHzmf1EZVWS3iAHkb9CH4djHWZvT24azonnvGLmeU6yHJJuETfoWWal/",
      instagram:
        "https://www.instagram.com/lokesh_kr_chaudhary/?utm_medium=copy_link",
      linkdin: "https://www.linkedin.com/in/lokesh-kumar-227853154/",
    },
  },
  {
    image: "/assets/VIKAS-SIR.jpg",
    name: "Vikas Kumar",
    position: "Chief Technology Officer",
    link: "/profilevikas",
    social: {
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/vikash-kumar-461b1912a/",
      instagram: "#",
    },
  },
  {
    image: "/assets/aditifinal.jpg",
    name: "Aditi Chaudhary",
    position: "Director",
    link: "/profileaditi",
    social: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const OurTeamBody = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="flex text-left mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Leadership Team
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          const bgTop = index % 2 === 0 ? "bg-orange-100" : "bg-blue-100";
          const bgBottom = index % 2 === 0 ? "bg-orange-400" : "bg-blue-900";

          return (
            <div key={index} className="px-3">
              <Link to={item.link}>
                <div className="w-full min-w-0 max-w-[260px] mx-auto overflow-hidden rounded-tr-[50px] rounded-bl-[50px] shadow-lg transition-transform hover:scale-105 duration-300 cursor-pointer">
                  <div
                    className={`flex justify-center items-center h-64 ${bgTop}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-65 w-62 object-cover"
                    />
                  </div>

                  <div
                    className={`${bgBottom} text-white px-6 py-4 text-center`}
                  >
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm mb-3">{item.position}</p>
                    <div className="flex gap-4 text-2xl justify-center">
                      <a
                        href={item.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                      >
                        <TiSocialFacebookCircular />
                      </a>
                      <a
                        href={item.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                      >
                        <TiSocialLinkedinCircular />
                      </a>
                      <a
                        href={item.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                      >
                        <IoLogoInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeamBody;
