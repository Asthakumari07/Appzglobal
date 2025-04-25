import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Oracle = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="px-6 py-12 md:px-20 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-700">
          Oracle SQL Development Services by Appz Global Tech
        </h1>
        <p className="text-center text-xl mb-10 text-gray-600">
          📊 Optimize Your Data Management with Expert Oracle SQL Solutions
        </p>

        <p className="mb-6 text-lg">
          At{" "}
          <span className="font-semibold text-indigo-700">
            Appz Global Tech
          </span>
          , we specialize in Oracle SQL development services that help you
          manage, optimize, and secure your data. Our experienced team leverages
          the power of Oracle databases to design efficient, scalable, and
          secure database solutions tailored to your unique business needs.
          Whether you're building a new database or optimizing an existing one,
          we ensure your data infrastructure is reliable and performs at its
          best.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          🚀 Our Oracle SQL Development Services
        </h2>

        <ul className="space-y-6 text-lg">
          <li>
            👉 <strong>Oracle Database Design & Architecture:</strong> We design
            robust Oracle database architectures that meet your business needs,
            ensuring scalability and high performance.
          </li>
          <li>
            👉 <strong>SQL Query Optimization:</strong> Enhance database
            performance by identifying bottlenecks and speeding up slow queries
            for maximum efficiency.
          </li>
          <li>
            👉 <strong>Data Migration & Integration:</strong> We ensure seamless
            migration from legacy systems and smooth integration with other
            databases and APIs.
          </li>
          <li>
            👉 <strong>Database Performance Tuning:</strong> From indexing to
            memory optimization, we ensure your Oracle DB is running at peak
            performance.
          </li>
          <li>
            👉 <strong>Database Security & Compliance:</strong> Safeguard your
            data with encryption, access control, and compliance with
            regulations like GDPR.
          </li>
          <li>
            👉 <strong>Backup & Disaster Recovery:</strong> Minimize downtime
            and protect your data with smart backup and recovery strategies.
          </li>
          <li>
            👉 <strong>Oracle Reporting & Analytics:</strong> Generate insights
            with powerful reports and dashboards for data-driven decisions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-600 mt-10 mb-4">
          🌟 Why Choose Appz Global Tech for Oracle SQL Development?
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>
            🔧 Tailored Database Solutions: Customized databases built
            specifically for your business needs.
          </li>
          <li>
            🧠 Proven Expertise: Experienced Oracle SQL developers with deep
            domain knowledge.
          </li>
          <li>
            ⚡ Optimized Performance: Speedy, efficient, and scalable database
            solutions.
          </li>
          <li>
            🔐 Data Security: Top-notch security protocols and compliance
            measures.
          </li>
          <li>
            🔁 End-to-End Support: Complete support from planning to
            post-deployment maintenance.
          </li>
        </ul>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">
            📞 Transform Your Data Management Today
          </h3>
          <p className="text-lg mb-6">
            Let Appz Global Tech help you optimize your data infrastructure.
            Whether you need a brand new Oracle SQL setup or want to enhance an
            existing one — we've got you covered.
          </p>
          <p
            className="text-lg font-medium text-indigo-600"
            onClick={() => navigate("/contact")}
          >
            📲 Contact Us Today for a Free Consultation on Your Oracle SQL
            Development Project!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Oracle;
