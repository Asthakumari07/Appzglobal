import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const CRM = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            CRM Development Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            💼 Build Stronger Relationships with Custom CRM Solutions
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we specialize in providing Customer
            Relationship Management (CRM) solutions designed to help businesses
            manage and improve their interactions with customers, streamline
            processes, and boost sales. Our custom CRM development services
            ensure that your business can build stronger, more meaningful
            relationships with clients while enhancing productivity,
            communication, and customer satisfaction.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our CRM Development Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Custom CRM Development:</strong> Tailored cloud-based
              or on-premise CRM systems to enhance engagement, lead tracking,
              and reporting.
            </p>
            <p>
              ✅ <strong>CRM System Integration:</strong> 🔗 Seamless
              integration with ERP, email marketing tools, and accounting
              software for unified workflows.
            </p>
            <p>
              ✅ <strong>Cloud-Based CRM Solutions:</strong> ☁️ Access your
              customer data anytime, anywhere. Scalable, cost-effective, and
              collaborative.
            </p>
            <p>
              ✅ <strong>CRM Customization & Enhancements:</strong> 🛠️ Add
              features, improve workflows, and optimize UI for evolving business
              needs.
            </p>
            <p>
              ✅ <strong>Mobile CRM Solutions:</strong> 📱 Mobile-ready CRM apps
              for managing customer interactions on the go.
            </p>
            <p>
              ✅ <strong>CRM Analytics & Reporting:</strong> 📊 Custom
              dashboards and reports to track behavior, performance, and
              business insights.
            </p>
            <p>
              ✅ <strong>Customer Support & Ticketing:</strong> 🎫 Integrated
              systems for managing support requests and improving customer
              service experiences.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌟 Why Choose Appz Global Tech for CRM Development?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Tailored CRM systems for your specific business processes</li>
              <li>Flawless integration with existing platforms</li>
              <li>Flexible and scalable CRM architecture</li>
              <li>Intuitive user interfaces for easier adoption</li>
              <li>Advanced analytics for real-time decision-making</li>
              <li>Reliable support and ongoing maintenance</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Enhance Customer Relationships and Drive Sales Growth. At Appz
              Global Tech, our CRM development services help you build deeper
              relationships with your customers while improving efficiency and
              boosting your sales process. From custom development to
              integration, mobile solutions, and advanced analytics, we provide
              comprehensive CRM systems that give you a 360-degree view of your
              customers and enable you to engage with them more effectively.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today for a Free Consultation on Your CRM Development
              Needs!
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              📞 Book CRM Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CRM;
