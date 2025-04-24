import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const ERPServices = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            ERP Development Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            ⚙️ Streamline Your Business Operations with Tailored ERP Solutions
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we specialize in providing custom-built
            Enterprise Resource Planning (ERP) solutions designed to streamline
            your business operations, enhance efficiency, and improve
            decision-making. Our team of experts creates scalable, user-friendly
            ERP systems tailored to meet your unique business needs, helping you
            integrate and automate processes across all departments, from
            finance and HR to supply chain and customer management.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our ERP Development Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Custom ERP Development:</strong> Tailored ERP systems
              to automate workflows and improve data accuracy across industries
              like manufacturing, healthcare, and education.
            </p>
            <p>
              ✅ <strong>ERP System Integration:</strong> 🔗 Seamless
              integration with existing software such as CRMs, HR tools, and
              accounting systems for unified business operations.
            </p>
            <p>
              ✅ <strong>Cloud-Based ERP Solutions:</strong> ☁️ Flexible,
              scalable, and accessible ERP systems that reduce infrastructure
              costs and support real-time access.
            </p>
            <p>
              ✅ <strong>ERP Customization & Upgrades:</strong> 🛠️ Add new
              features, optimize existing ones, or upgrade systems to match your
              evolving business goals.
            </p>
            <p>
              ✅ <strong>ERP Implementation & Support:</strong> 🚀 From design
              and deployment to training and long-term support, we ensure smooth
              ERP rollouts.
            </p>
            <p>
              ✅ <strong>Mobile ERP Solutions:</strong> 📱 Access
              business-critical data anytime, anywhere via mobile ERP platforms
              that boost field team efficiency.
            </p>
            <p>
              ✅ <strong>Data Analytics & Reporting:</strong> 📊 Real-time
              dashboards and reports to help you monitor metrics and make
              informed decisions.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌟 Why Choose Appz Global Tech for ERP Development?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>
                Fully customized ERP solutions aligned with your business goals
              </li>
              <li>
                Industry expertise in retail, healthcare, education, and more
              </li>
              <li>Flawless integration with third-party software</li>
              <li>Cloud-based and scalable platforms for growing businesses</li>
              <li>Complete support from planning to post-deployment</li>
              <li>Advanced analytics and real-time KPI tracking</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Transform Your Business with a Powerful ERP System. At Appz Global
              Tech, we help businesses enhance their operational efficiency with
              robust, customized ERP systems. From HR to supply chain, our ERP
              solutions provide a unified, intelligent platform to manage and
              grow your business.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today for a Free Consultation on Your ERP Development
              Needs!
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              ⚙️ Book ERP Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ERPServices;
