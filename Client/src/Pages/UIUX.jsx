import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const UIUX = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            UI/UX Designing Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            🎨 Create Memorable Digital Experiences with User-Centered Design
          </p>

          <p className="text-gray-600 mb-6">
            We offer a full spectrum of UI/UX design services, ensuring your
            digital product not only looks great but also delivers a superior
            user experience. From in-depth research to beautiful UI and seamless
            UX, we craft digital experiences that captivate and convert.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our UI/UX Designing Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>User Research & Analysis:</strong> 🔍 Gain deep
              insights into your users’ behaviors and needs with persona
              development, usability testing, and pain point identification.
            </p>
            <p>
              ✅ <strong>Wireframing & Prototyping:</strong> 🧩 Visualize app
              flow and design through interactive wireframes and prototypes for
              faster iteration and feedback.
            </p>
            <p>
              ✅ <strong>UI Design:</strong> 🎨 Clean, modern, and intuitive
              interfaces with optimized colors, typography, and layout for
              aesthetic consistency.
            </p>
            <p>
              ✅ <strong>UX Design:</strong> 📈 Optimize user journeys with
              smooth navigation, clear CTAs, and goal-driven workflows for
              maximum usability.
            </p>
            <p>
              ✅ <strong>Responsive Design:</strong> 📱 Ensure flawless
              performance on all screen sizes—mobile, tablet, and desktop.
            </p>
            <p>
              ✅ <strong>Usability Testing:</strong> 🧪 Identify friction points
              through real-user feedback to refine and improve the user
              experience.
            </p>
            <p>
              ✅ <strong>UI/UX Optimization:</strong> 🚀 Continually enhance
              design performance with real-world data, feedback, and analytics.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌟 Why Choose Appz Global Tech for UI/UX Designing?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>User-centered design thinking for optimal usability</li>
              <li>Innovative and trend-forward design solutions</li>
              <li>Responsive, platform-agnostic designs</li>
              <li>Backed by research, data, and real user insights</li>
              <li>Transparent collaboration at every step</li>
              <li>Attention to detail and pixel-perfect execution</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              At Appz Global Tech, we believe great design is more than just
              looks—it’s about creating a seamless and intuitive experience. Our
              UI/UX services help you design products that not only attract
              users but also guide them effortlessly to their goals, increasing
              satisfaction and conversion rates.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today to Discuss Your UI/UX Design Needs and Create
              Memorable Digital Experiences!
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              🎯 Book UI/UX Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UIUX;
