import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const ProfileContentVikas = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
        <img
          src="/assets/VIKAS-SIR.jpg"
          alt="Vikash Kumar"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-900"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Vikash Kumar</h2>
          <p className="text-lg text-orange-600 font-semibold mt-1">
            Chief Technology Officer
          </p>
          <div className="">
            {/* Email */}
            <a
              href="mailto:vikash.kumar@appzglobaltech.com"
              className="flex items-center gap-2 mb-2 text-blue-700 hover:underline"
            >
              <FaEnvelope className="text-blue-600" />
              <span>vikash.kumar@appzglobaltech.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917017386311"
              className="flex items-center gap-2 text-orange-700 hover:underline"
            >
              <FaPhoneAlt className="text-orange-600" />
              <span>+91 7017386311</span>
            </a>
          </div>
          <div className="flex gap-4 text-2xl mt-4 text-blue-700">
            <a
              href="https://www.linkedin.com/in/vikash-kumar-461b1912a/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="#" target="_blank">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank">
              <IoLogoInstagram />
            </a>
            <a href="#" target="blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Biography */}
      <div className="mt-10 space-y-6">
        <h3 className="text-2xl font-bold text-blue-800">Biography</h3>

        <p>
          Vikash Kumar is a visionary technology leader and the Chief Technology
          Officer at Appz Global Tech Pvt. Ltd. With expertise in web
          technologies, cybersecurity, and agile project management, he drives
          innovation and ensures seamless execution of high-impact IT solutions.
          A certified Scrum Master and cybersecurity expert, Vikash is committed
          to aligning technology with business goals to deliver exceptional
          results.
        </p>

        <h4 className="text-xl font-semibold text-orange-600">
          Professional Summary
        </h4>
        <p>
          Vikash leads technological innovation at Appz Global Tech. With a
          foundation in web tech, cybersecurity, and agile methods, he ensures
          top-tier solutions and smooth collaboration. As the former Founder &
          CEO of HeyHungry, he scaled a cloud kitchen startup across three
          cities with 5,000+ users.
        </p>

        <h4 className="text-xl font-semibold text-orange-600">Key Skills</h4>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Web Technologies and Database Management</li>
          <li>
            Cybersecurity Expert (IBM Certified) and Agile Development Leader
          </li>
          <li>Risk Management, Cloud Computing, and Digital Marketing</li>
          <li>
            Certified Scrum Master with a focus on high-performance team
            leadership
          </li>
        </ul>

        <h4 className="text-xl font-semibold text-orange-600">
          Certifications
        </h4>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>IBM QRadar Security Analytics</li>
          <li>Google Digital Marketing Certification</li>
          <li>Risk Management Certification from IBM Institute, Berlin</li>
        </ul>

        <h4 className="text-xl font-semibold text-orange-600">Education</h4>
        <p>
          B.Tech in Computer Science with specialization in Cybersecurity from
          DIT University, Dehradun (2016-2020).
        </p>
      </div>

      {/* Skills Progress */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">
          Professional Skills
        </h3>
        <div className="space-y-4">
          {[
            { label: "Project Management", value: 80 },
            { label: "Web Technologies & DB", value: 95 },
            { label: "Digital Marketing", value: 95 },
            { label: "Risk Management", value: 90 },
            { label: "Cyber Security", value: 84 },
            { label: "Certified Scrum Master", value: 100 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span className="font-medium">{skill.label}</span>
                <span className="text-sm text-gray-600">{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                  }`}
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileContentVikas;
