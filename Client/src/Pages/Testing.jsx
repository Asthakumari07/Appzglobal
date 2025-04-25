import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import { useNavigate } from "react-router-dom";

const Testing = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Software Testing Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            ✅ Ensure Quality, Performance, and Reliability with Our
            Comprehensive Testing Services
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we believe that high-quality software is the
            foundation of successful businesses. Our Software Testing Services
            ensure that your applications are flawless, efficient, and
            user-friendly. We provide a wide range of testing solutions that
            focus on performance, security, usability, and functionality,
            helping you deliver high-quality software that meets business
            requirements and exceeds customer expectations.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our Software Testing Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Manual Testing:</strong> Detailed testing to ensure
              usability, functionality, and overall quality based on business
              needs.
            </p>
            <p>
              ✅ <strong>Automated Testing:</strong> 🔁 Fast and reliable
              testing using Selenium, TestComplete, and Appium to streamline
              testing processes.
            </p>
            <p>
              ✅ <strong>Performance Testing:</strong> 🧪 Assess your
              application's load capacity and responsiveness using tools like
              JMeter and LoadRunner.
            </p>
            <p>
              ✅ <strong>Security Testing:</strong> 🔒 Identify and fix
              vulnerabilities like SQL injection and XSS to secure your
              application from threats.
            </p>
            <p>
              ✅ <strong>Regression Testing:</strong> Ensure updates don’t break
              existing functionality, maintaining software stability over time.
            </p>
            <p>
              ✅ <strong>Compatibility Testing:</strong> Verify consistent
              behavior across different browsers, OSs, and devices.
            </p>
            <p>
              ✅ <strong>User Acceptance Testing (UAT):</strong> Validate that
              the software meets end-user requirements and is ready for release.
            </p>
            <p>
              ✅ <strong>Mobile App Testing:</strong> 📱 Comprehensive testing
              on Android and iOS to ensure optimal mobile app performance.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌟 Why Choose Appz Global Tech for Software Testing?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>End-to-end manual and automated testing services</li>
              <li>Expert testers using industry-leading tools</li>
              <li>Faster time-to-market through early issue detection</li>
              <li>Cost-effective and scalable testing strategies</li>
              <li>High-quality, bug-free, and secure software delivery</li>
              <li>Tailored testing plans for unique project requirements</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Deliver Flawless Software with Confidence. At Appz Global Tech,
              our Software Testing Services ensure your software meets the
              highest standards of quality, functionality, and performance. We
              help you enhance customer satisfaction and reduce risks with every
              release.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today for a Free Consultation on Your Software Testing
              Needs!
            </p>
          </div>

          <div className="mt-8">
            <button
              className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition"
              onClick={() => navigate("/contact")}
            >
              📞 Schedule Your Testing Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testing;
