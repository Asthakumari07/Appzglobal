import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const AppDevelopment = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            Mobile App Development Services by Appz Global Tech
          </h1>
          <p className="text-lg text-gray-700 mt-2 italic">
            Innovate. Engage. Scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
          <p>
            At Appz Global Tech, we specialize in creating high-performance,
            user-friendly mobile applications that drive business growth. Our
            mobile app development services cater to businesses across all
            industries, delivering intuitive, scalable, and secure apps for both
            iOS and Android platforms.
          </p>
          <p>
            Whether you need a native, hybrid, or cross-platform app, we have
            the expertise to bring your vision to life.
          </p>

          <h2 className="text-2xl font-semibold text-orange-500">
            Our Mobile App Development Services
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Native App Development:</span> We
              use Swift for iOS and Kotlin for Android to create
              high-performance, feature-rich apps.
            </li>
            <li>
              <span className="font-semibold">
                Cross-Platform App Development:
              </span>{" "}
              Using React Native and Flutter, we build apps that work seamlessly
              across both platforms.
            </li>
            <li>
              <span className="font-semibold">Hybrid App Development:</span>{" "}
              Built with Ionic and Cordova, our hybrid apps offer speed,
              flexibility, and cost efficiency.
            </li>
            <li>
              <span className="font-semibold">App UI/UX Design:</span> We design
              engaging, user-friendly interfaces that enhance user experience
              and functionality.
            </li>
            <li>
              <span className="font-semibold">
                App Testing & Quality Assurance:
              </span>{" "}
              Rigorous testing ensures performance, security, and stability
              across all devices.
            </li>
            <li>
              <span className="font-semibold">App Maintenance & Support:</span>{" "}
              Ongoing support ensures your app stays updated, secure, and
              functional long-term.
            </li>
            <li>
              <span className="font-semibold">App Integration:</span> We
              integrate APIs, payment gateways, and backend services to extend
              your app’s capabilities.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-500">
            Why Choose Appz Global Tech?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom mobile solutions tailored to your goals and users.</li>
            <li>
              Expert developers with up-to-date knowledge of tools and trends.
            </li>
            <li>User-centric designs for enhanced engagement and usability.</li>
            <li>Comprehensive service from design to post-launch support.</li>
            <li>Scalable and secure apps that grow with your business.</li>
          </ul>

          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-blue-700">
              Ready to Turn Your App Idea Into Reality?
            </p>
            <p className="text-gray-700 mt-2">
              Whether you're starting fresh or enhancing an existing app, Appz
              Global Tech is your trusted development partner.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition"
              onClick={() => navigate("/contact")}
            >
              Contact Us to Get Started!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppDevelopment;
