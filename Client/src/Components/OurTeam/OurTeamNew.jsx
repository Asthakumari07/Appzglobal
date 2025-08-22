import React from "react";
import { Link } from "react-router-dom";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const topLeaders = [
  {
    image: "/assets/LokeshSir.jpg",
    name: "Lokesh Kumar",
    position: "Founder & Managing Director",
    company: "Appz Global Tech Pvt. Ltd.",
    link: "/profilelokesh",
    social: {
      facebook:
        "https://www.facebook.com/people/Lokesh-Kr-Chaudhary/pfbid0HMi7SdKqc5eHzmf1EZVWS3iAHkb9CH4djHWZvT24azonnvGLmeU6yHJJuETfoWWal/",
      instagram:
        "https://www.instagram.com/lokesh_kr_chaudhary/?utm_medium=copy_link",
      linkedin: "https://www.linkedin.com/in/lokesh-kumar-227853154/",
    },
  },
  {
    image: "/assets/aditifinal-01.jpg",
    name: "Aditi Chaudhary",
    position: "Director",
    company: "Appz Global Tech Pvt. Ltd.",
    link: "/profileaditi",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const OurTeamNew = () => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Our Team
      </h1>

      {/* Top Leaders */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
        {topLeaders.map((person, index) => (
          <div
            key={index}
            className="border border-blue-800 p-4 rounded-md text-center bg-white shadow-md w-[250px]"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
            />
            <Link to={person.link}>
              <h2 className="text-blue-800 font-bold text-lg hover:underline">
                {person.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-600">{person.position}</p>
            <p className="text-xs text-gray-400">{person.company}</p>
            <div className="flex justify-center gap-2 mt-2 text-xl text-blue-600">
              <a href={person.social.facebook} target="_blank" rel="noreferrer">
                <TiSocialFacebookCircular />
              </a>
              <a
                href={person.social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram />
              </a>
              <a href={person.social.linkedin} target="_blank" rel="noreferrer">
                <TiSocialLinkedinCircular />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mid Team */}
      <div className="border-l-2 border-dashed border-gray-400 ml-[50%] h-5"></div>
      <div className="flex justify-center flex-wrap gap-6 mb-10 border-t border-dashed pt-10">
        {[
          { name: "Gitansh Kumar", title: "CTO" },
          { name: "Saloni", title: "General Manager" },
          { name: "Md. Aqib Anshari", title: "CRO" },
          { name: "Chandra Shekhar", title: "VP Sales Manager" },
          { name: "Narendra Kumar", title: "Floor Manager" },
        ].map((person, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md text-center bg-white shadow w-[220px]"
          >
            <h3 className="font-semibold text-gray-800">{person.name}</h3>
            <p className="text-xs text-gray-500">{person.title}</p>
          </div>
        ))}
      </div>

      {/* Departments */}
      <div className="flex justify-center mb-3">
        <div className="w-[2px] bg-gray-400 h-8"></div>
      </div>
      <div className="flex justify-center flex-wrap gap-6">
        {[
          "Sales Department",
          "IT Department",
          "Admin Department",
          "Marketing Department",
          "Accounts Department",
          "Legal Department",
          "HR Department",
        ].map((dept, idx) => (
          <div
            key={idx}
            className="border border-gray-200 bg-white p-3 rounded-md w-[200px] text-center shadow-sm"
          >
            {dept}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamNew;
