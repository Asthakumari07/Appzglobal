import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Database = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Database Administration Services by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            🌟 Ensure Optimal Performance and Security with Expert Database
            Management
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we provide comprehensive Database
            Administration (DBA) services to ensure that your business’s data is
            secure, optimized, and always available. Our expert team of database
            administrators specializes in managing, maintaining, and monitoring
            your databases to deliver high performance, reliability, and
            scalability, helping your business leverage the full potential of
            its data.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our Database Administration Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Database Installation & Configuration:</strong> We
              manage installation and configuration of your database systems
              like Oracle, SQL Server, MySQL, PostgreSQL, and more—ensuring
              security and efficiency from the start.
            </p>
            <p>
              ✅ <strong>Database Performance Tuning:</strong> Identify and
              eliminate performance bottlenecks for faster query execution and
              efficient resource usage.
            </p>
            <p>
              ✅ <strong>Database Backup & Disaster Recovery:</strong> Regular
              backups, high availability setups, and rapid recovery ensure your
              critical data is safe.
            </p>
            <p>
              ✅ <strong>Database Security & Compliance:</strong> Encryption,
              access control, vulnerability scanning, and compliance with GDPR,
              HIPAA, SOC 2, etc.
            </p>
            <p>
              ✅ <strong>Database Monitoring & Optimization:</strong> Continuous
              monitoring to detect and fix issues proactively using advanced
              tools.
            </p>
            <p>
              ✅ <strong>Database Migration:</strong> Smooth migration from
              legacy or on-premise to cloud-based or upgraded platforms with
              minimal downtime.
            </p>
            <p>
              ✅ <strong>Database Scaling & High Availability:</strong> Vertical
              and horizontal scaling with high-availability architectures to
              ensure uptime.
            </p>
            <p>
              ✅ <strong>Database Auditing & Reporting:</strong> Insightful
              audits and reports on performance, security, and compliance.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Why Choose Appz Global Tech for Database Administration?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>
                Expertise Across Platforms: SQL Server, Oracle, MySQL,
                PostgreSQL
              </li>
              <li>Performance Optimization for Speed and Uptime</li>
              <li>Cutting-Edge Security and Regulatory Compliance</li>
              <li>Proactive Monitoring & Timely Issue Resolution</li>
              <li>Tailored Database Solutions for Business Needs</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Maximize Your Database Efficiency with Appz Global Tech’s Database
              Administration services. From performance tuning to disaster
              recovery and security, we ensure your data infrastructure is
              robust and scalable.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today for a Free Consultation on Your Database
              Administration Needs!
            </p>
          </div>

          <div className="mt-8">
            <button
              className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition"
              onClick={() => navigate("/contact")}
            >
              📞 Get Your Free DBA Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Database;
