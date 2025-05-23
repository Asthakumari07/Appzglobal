import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const ProfileNarendra = () => {
  const skills = [
    { label: "Full-Stack Development (MERN)", value: 95 },
    { label: "Backend (Node.js, PHP, CodeIgniter)", value: 90 },
    { label: "Frontend (React, HTML, CSS, JS)", value: 95 },
    { label: "CMS Platforms (WP, Shopify, Wix)", value: 85 },
    { label: "DevOps & Cloud (AWS, Docker, CI/CD)", value: 88 },
    { label: "API Integration & SEO", value: 90 },
  ];

  const highlights = [
    "Successfully led the development of multiple full-stack web apps across SaaS, ERP, and e-commerce domains.",
    "Integrated AWS-based CI/CD pipelines to streamline deployments and enhance uptime.",
    "Delivered highly optimized custom CMS and headless CMS solutions for clients.",
    "Mentored junior developers and managed agile workflows to ensure timely delivery.",
    "Worked directly with clients to translate business requirements into scalable systems.",
  ];

  const additionalSkills = [
    "React.js, Node.js, Express.js, MongoDB (MERN)",
    "PHP, CodeIgniter, MySQL",
    "WordPress, Shopify, Wix",
    "RESTful APIs, Custom Plugins",
    "Git, Docker, Nginx, Linux",
    "SEO Optimization, Mobile Responsiveness",
  ];

  const certifications = [
    "Course on Computer Concepts",
    "Core Java - B2E coders",
    "Web Designing - JavaTPoint",
  ];

  const education = ["B-Tech (CSE) - FET Agra College, Agra"];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
        <img
          src="/assets/narendra-sir-01.jpg"
          alt="Narendra Yadav"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-900"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Narendra Yadav</h2>
          <p className="text-lg text-orange-600 font-semibold mt-1">
            Technical Leader
          </p>
          <div className="max-w-sm">
            <a
              href="mailto:narendrakumar77333@gmail.com"
              className="flex items-center gap-2 mb-2 text-blue-700 hover:underline"
            >
              <FaEnvelope className="text-blue-600" />
              <span>narendrakumar77333@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-4 text-2xl mt-4 text-blue-700">
            <a
              href="https://www.linkedin.com/in/narendra-yadav-a06004153"
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
            <a
              href="https://x.com/nk45yaduvanshi"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          Narendra Yadav is a seasoned Technical Leader with over 5 years of
          experience in building robust full-stack applications across
          industries like e-commerce, SaaS, and enterprise solutions. Known for
          his expertise in the MERN stack, he excels in creating scalable,
          maintainable web platforms with a focus on performance and user
          experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          His strengths lie in full-cycle product development, team mentoring,
          and delivering cloud-based solutions that align with business goals.
          Narendra is passionate about innovation, clean code practices, and
          continuous learning.
        </p>
      </div>

      {/* Professional Summary */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A versatile Full-Stack Developer and Technical Leader, Narendra
          specializes in building dynamic web applications using modern stacks.
          He has successfully delivered projects such as ERP systems, custom CMS
          platforms, and multi-vendor marketplaces while managing development
          teams and leading architectural decisions.
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
      {/* Key Projects */}
      <div className="mb-12 mt-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Thikedaar",
              description: "Construction service platform",
              url: "http://thikedaar.in/",
            },
            {
              title: "IEC ERP System",
              description: "Custom educational ERP",
              url: "http://iecerp.in/login",
            },
            {
              title: "RC Infovision",
              description: "IT services and business solutions",
              url: "https://www.rcinfovision.in/",
            },
            {
              title: "NeedToAssist",
              description: "Support and service management system",
              url: "https://needtoassist.com/",
            },
            {
              title: "Krizaar",
              description: "Multi-vendor e-commerce marketplace",
              url: "https://krizaar.com/",
            },
            {
              title: "NM Gems & Jewels",
              description: "E-commerce platform gems",
              url: "https://nmgemandjewels.com/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 text-sm font-medium hover:underline"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileNarendra;
