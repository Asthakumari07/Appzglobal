import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Saloni = () => {
  const skills = [
    { label: "Project Management", value: 80 },
    { label: "Web Technologies & DB", value: 95 },
    { label: "Digital Marketing", value: 95 },
    { label: "Risk Management", value: 90 },
    { label: "Cyber Security", value: 84 },
    { label: "Certified Scrum Master", value: 100 },
  ];

  const highlights = [
    "Spearheaded recruitment drives across multiple colleges resulting in 50+ successful hires.",
    "Implemented attendance and leave tracking system that improved reporting accuracy by 30%.",
    "Streamlined onboarding and documentation process for faster client onboarding.",
    "Handled end-to-end HR operations and policy design tailored to startup environments.",
    "Conducted workshops and public sessions with 100+ students to attract fresh talent.",
  ];

  const additionalSkills = [
    "Recruitment through job portals & campus drives",
    "Interviewing & aligning candidates with clients",
    "College outreach & public speaking (100+ students)",
    "Background checks and onboarding documentation",
    "Leave & attendance management systems",
    "Tools: MS Excel, PowerPoint, Word, Google Suite",
  ];

  const certifications = [
    "IBM QRadar Security Analytics",
    "Google Digital Marketing Certification",
    "Risk Management – IBM Institute, Berlin",
    "Web Development Training – CETPA Infotech (HTML & CSS)",
    "Business Development Internship – Edvizo Media Pvt Ltd",
    "Technical Support Training – Samsung India (iEnergizer)",
  ];

  const education = ["BCA", "MCA"];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
        <img
          src="/assets/saloni.jpg"
          alt="Saloni"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-900"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Saloni Jha</h2>
          <p className="text-lg text-orange-600 font-semibold mt-1">
            HR Manager
          </p>
          <div className="max-w-sm">
            <a
              href="mailto:Salonijha234@gmail.com"
              className="flex items-center gap-2 mb-2 text-blue-700 hover:underline"
            >
              <FaEnvelope className="text-blue-600" />
              <span>Saloni@appzglobaltech.com</span>
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
              href="https://www.linkedin.com/in/salonijha234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
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
          Saloni is a dynamic HR professional with a Bachelor’s degree in
          Computer Applications and a growing portfolio of HR leadership
          experience. Currently working as an HR Manager at Appz Global Tech Pvt
          Ltd, she specializes in streamlining HR processes, client onboarding,
          and talent acquisition. Her work spans full-cycle recruitment, campus
          hiring drives, and policy development, combining organizational
          efficiency with strong interpersonal skills.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Her strengths in risk management, HR, teaching, and finance provide a
          multi-dimensional advantage to the company’s growth. Saloni is
          passionate about nurturing talent and building high-performance teams.
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Versatile HR Manager with experience in client onboarding, recruitment
          lifecycle management, and campus hiring. Proven ability to enhance HR
          operations, manage high-volume hiring, and lead initiatives that drive
          team and business growth.
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
        <div className="space-y-6 max-w-2xl mb-6">
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
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {additionalSkills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Certifications & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Certifications / Training
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

export default Saloni;
