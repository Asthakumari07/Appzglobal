import React from "react";
import lokeshImage from "../../assets/Pexels Photo by Emmy E.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const LokeshProfile1 = () => {
  const skills = [
    { label: "Software Development", value: 80 },
    { label: "Graphic Design", value: 74 },
    { label: "JavaScript", value: 89 },
    { label: "Web Development", value: 90 },
    { label: "Cyber Security", value: 78 },
    { label: "Quality Analysis", value: 86 },
    { label: "Business Analysis", value: 88 },
    { label: "Project Management", value: 92 },
  ];

  const highlights = [
    "Over 10 years of leadership experience in the tech industry.",
    "Successfully led cross-functional teams to deliver over 100+ IT projects.",
    "Specialized in digital transformation and enterprise software development.",
    "Expert in scalable architecture and DevOps culture implementation.",
  ];

  const certifications = [
    "PMP Certification – Project Management Institute",
    "Certified Scrum Product Owner (CSPO)",
    "Microsoft Azure Fundamentals",
  ];

  const education = [
    "MCA in Computer Application – Anna University Chennai",
    "BCA in Computer Application – SM University Gangtok",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
        <img
          src={lokeshImage}
          alt="lokeshImage"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-900"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Lokesh Kumar</h2>
          <p className="text-lg text-orange-600 font-semibold mt-1">
            MANAGING DIRECTOR
          </p>
          <div className="max-w-sm">
            {/* Email */}
            <a
              href="mailto:lokesh@appzglobaltech.com"
              className="flex items-center gap-2 mb-2 text-blue-700 hover:underline"
            >
              <FaEnvelope className="text-blue-600" />
              <span>lokesh@appzglobaltech.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918459974712"
              className="flex items-center gap-2 text-orange-700 hover:underline"
            >
              <FaPhoneAlt className="text-orange-600" />
              <span>+91 84599 74712</span>
            </a>
          </div>
          <div className="flex gap-4 text-2xl mt-4 text-blue-700">
            <a
              href="https://www.linkedin.com/company/appz-global-tech-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/appzglobaltechofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/appzglobaltech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
            <a href="#" target="blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Biography
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lokesh Kumar is a dynamic leader with an unwavering focus on
          innovation, operational excellence, and sustainable growth. His
          strategic vision has helped Appz Global Tech build a strong foothold
          in the IT industry. Lokesh brings a blend of business acumen and
          technical proficiency to steer the organization through rapidly
          changing digital landscapes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As Managing Director, he fosters a collaborative environment that
          encourages creativity, transparency, and performance. Lokesh believes
          in nurturing talent and has mentored over 50 professionals in tech,
          design, and marketing. His ability to translate ideas into actionable
          results makes him a respected leader in the industry.
        </p>
      </div>

      {/* Career Highlights */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Career Highlights
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Professional Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6">
          Professional Skills
        </h2>
        <div className="space-y-6 max-w-2xl">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.label}</span>
                <span className="text-blue-600 font-semibold">
                  {skill.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Certifications
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {certifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Education
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LokeshProfile1;
