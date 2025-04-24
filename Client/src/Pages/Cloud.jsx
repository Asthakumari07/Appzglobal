import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const Cloud = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Cloud & DevOps Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Unlock the Power of the Cloud. Automate, Scale, and Innovate Faster.
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we specialize in delivering cutting-edge Cloud
            & DevOps solutions designed to help businesses transform, scale, and
            thrive in the digital era. Our services focus on providing robust
            cloud infrastructure, seamless application deployment, and
            automation to help you accelerate time-to-market, enhance
            collaboration, and reduce operational costs.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our Cloud & DevOps Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Cloud Consulting & Migration:</strong> Take your
              business to the cloud with ease. Our experts guide you through
              every step of the cloud journey — from selecting the right cloud
              platform to planning and executing your migration strategy.
            </p>
            <p>
              ✅ <strong>Cloud Infrastructure Management:</strong> We design and
              manage scalable, secure, and high-performance cloud
              infrastructures tailored to your business needs. Our services
              ensure smooth operations, cost-efficiency, and zero downtime.
            </p>
            <p>
              ✅ <strong>DevOps Automation:</strong> Streamline development and
              operations through automation. We enable continuous integration,
              delivery, and deployment (CI/CD) pipelines that speed up releases
              while ensuring the highest quality standards.
            </p>
            <p>
              ✅ <strong>Containerization & Orchestration:</strong> Leverage
              containerized applications with Kubernetes and Docker for
              scalability, portability, and flexibility. We help you deploy,
              manage, and scale apps efficiently in any environment.
            </p>
            <p>
              ✅ <strong>Cloud Security:</strong> Protect your data with
              advanced cloud security protocols, including encryption, access
              management, and compliance strategies, ensuring that your
              infrastructure and applications are secure and resilient.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Why Choose Appz Global Tech?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Scalable & Secure Cloud Solutions</li>
              <li>Expert DevOps Practices for Faster Delivery</li>
              <li>Cost Optimization and Efficiency</li>
              <li>Tailored Strategies for Your Business Needs</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Let us help you leverage the full potential of Cloud & DevOps to
              drive innovation, enhance collaboration, and stay ahead in the
              competitive market.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Get in Touch for a Consultation Today!
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-400 transition ">
              📲 Request a Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cloud;
