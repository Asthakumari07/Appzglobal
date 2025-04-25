import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Software = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="p-6 md:p-12 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Software Development Services by Appz Global Tech
          </h1>
          <p className="text-lg mb-6">
            <strong>
              Transform Your Ideas into Powerful Digital Solutions
            </strong>
            <br />
            At Appz Global Tech, we specialize in crafting innovative software
            solutions that drive business success. Whether you're looking to
            build scalable web and mobile applications or require customized
            enterprise solutions, our team leverages cutting-edge technologies
            to create high-performance, user-centric software tailored to your
            unique needs.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-700">
            Our Software Development Services
          </h2>
          <p className="mb-6">
            We offer a wide range of software development services, ensuring
            your digital solutions are efficient, scalable, and future-ready.
            Here’s how we can help:
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>Custom Software Development:</strong> We provide bespoke
              software solutions built specifically for your business. From
              concept to deployment, we ensure the software aligns with your
              goals and gives you a competitive edge.
            </li>
            <li>
              <strong>Web Application Development:</strong> We build
              interactive, responsive web applications using React, Angular,
              Node.js, and Django—designed for performance, scalability, and
              seamless UX.
            </li>
            <li>
              <strong>Mobile App Development:</strong> Native or cross-platform,
              we create intuitive mobile apps using React Native, Flutter,
              Kotlin, and Swift.
            </li>
            <li>
              <strong>Enterprise Solutions:</strong> CRM, ERP, or
              enterprise-grade software to streamline business operations and
              boost productivity.
            </li>
            <li>
              <strong>Software Integration:</strong> Smooth integration with
              existing APIs, payment gateways, or third-party services to
              enhance business tools.
            </li>
            <li>
              <strong>Cloud-Based Solutions:</strong> We use AWS, Azure, and
              Google Cloud to design scalable and secure cloud-native software.
            </li>
            <li>
              <strong>Software Testing & Quality Assurance:</strong> Manual or
              automated, our QA team ensures bug-free, secure, and
              production-ready software.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
            Why Choose Appz Global Tech?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Tailored Solutions:</strong> Software aligned with your
              business goals.
            </li>
            <li>
              <strong>End-to-End Services:</strong> Full-cycle development from
              planning to post-launch support.
            </li>
            <li>
              <strong>Scalable & Secure:</strong> Built to grow with your
              business and ensure security.
            </li>
            <li>
              <strong>Cutting-Edge Technologies:</strong> Latest tools for
              performance and reliability.
            </li>
            <li>
              <strong>Experienced Team:</strong> Experts in diverse technologies
              to ensure your software is in capable hands.
            </li>
          </ul>

          <p className="mt-6 text-lg">
            <strong>Let’s Turn Your Idea into Reality</strong>
            <br />
            Whether you're a startup or an established business, Appz Global
            Tech has the expertise to develop custom software that transforms
            your vision into a digital solution. Let’s collaborate and build
            software that drives results and growth for your business.
          </p>

          <div className="mt-8">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
              onClick={() => navigate("/contact")}
            >
              📞 Contact Us for a Free Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Software;
