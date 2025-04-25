import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import AditiImg from "../../assets/employee/AditiFinal.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const AditiProfile = () => {
  const skills = [
    { label: "Project Management", value: 80 },
    { label: "Web Technologies & DB", value: 95 },
    { label: "Digital Marketing", value: 95 },
    { label: "Risk Management", value: 90 },
    { label: "Cyber Security", value: 84 },
    { label: "Certified Scrum Master", value: 100 },
  ];

  const highlights = [
    "7+ years of experience in tech leadership and operations.",
    "Expertise in web technologies, cloud, and digital marketing strategies.",
    "Known for driving efficiency, compliance, and innovation across projects.",
    "Skilled in HR, teaching, and organizational development.",
  ];

  const certifications = [
    "IBM QRadar Security Analytics",
    "Google Digital Marketing Certification",
    "Risk Management",
  ];

  const education = ["M.Com – IGNOU University", "B.Com – Delhi University"];

  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24 text-gray-800">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
          <img
            src={AditiImg}
            alt="Aditi"
            className="w-60 h-60 object-cover rounded-full border-4 border-blue-900"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Aditi</h2>
            <p className="text-lg text-orange-600 font-semibold mt-1">
              DIRECTOR
            </p>
            <div className="max-w-sm">
              <a
                href="mailto:aditi@appzglobaltech.com"
                className="flex items-center gap-2 mb-2 text-blue-700 hover:underline"
              >
                <FaEnvelope className="text-blue-600" />
                <span>aditi@appzglobaltech.com</span>
              </a>
              <a
                href="tel:+917017386311"
                className="flex items-center gap-2 text-orange-700 hover:underline"
              >
                <FaPhoneAlt className="text-orange-600" />
                <span>+91 70173 86311</span>
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

        {/* Biography */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Biography
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aditi is a visionary leader with a strong foundation in technology,
            operations, and team leadership. She combines business strategy with
            digital innovation to deliver impactful IT solutions at Appz Global
            Tech.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Her strengths in risk management, HR, teaching, and finance provide
            a multi-dimensional advantage to the company’s growth. Aditi is
            passionate about nurturing talent and building high-performance
            teams.
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
                  <span className="text-gray-800 font-medium">
                    {skill.label}
                  </span>
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
      <Footer />
    </>
  );
};

export default AditiProfile;
