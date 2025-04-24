import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const HRMS = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            HRMS by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            🚀 Empowering Your Workforce. Streamlining Operations. Driving
            Success.
          </p>

          <p className="text-gray-600 mb-4">
            Appz Global Tech's HRMS is a robust, user-friendly platform designed
            to manage all your human resources functions under one roof. From
            recruitment to performance tracking, payroll to compliance — our
            HRMS offers an integrated solution that enhances employee
            engagement, reduces administrative workload, and ensures seamless HR
            operations.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you’re a small business or a large enterprise, our HRMS
            adapts to your needs, automating routine tasks, improving
            communication, and empowering your HR team to focus on what truly
            matters — nurturing talent.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            🔑 Why Your Business Needs an HRMS
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Centralized Employee Data:</strong> Store personal
              details, reviews, payroll, and leave history securely in one
              place.
            </p>
            <p>
              ✅ <strong>Simplified Payroll & Compliance:</strong> Automate
              salaries, taxes, and attendance with built-in statutory
              compliance.
            </p>
            <p>
              ✅ <strong>Recruitment & Onboarding:</strong> Post jobs, schedule
              interviews, evaluate candidates, and onboard seamlessly.
            </p>
            <p>
              ✅ <strong>Employee Engagement & Performance:</strong> Manage
              goals, track feedback, and drive motivation with structured
              performance reviews.
            </p>
            <p>
              ✅ <strong>Leave & Attendance Management:</strong> Real-time
              tracking of shifts, holidays, and leaves with automated alerts.
            </p>
            <p>
              ✅ <strong>Data Security & Compliance:</strong> Role-based access
              and adherence to labor laws and industry standards.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Key Features:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Employee Database Management</li>
              <li>Payroll & Tax Calculation</li>
              <li>Leave & Attendance Tracking</li>
              <li>Performance Management</li>
              <li>Recruitment & Onboarding</li>
              <li>Employee Self-Service Portal</li>
              <li>HR Analytics & Reporting</li>
              <li>Tax Filing & Compliance</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Appz Global Tech’s HRMS doesn’t just streamline HR tasks — it
              unlocks the true potential of your workforce. With seamless
              integration, improved efficiency, and smarter insights, our HRMS
              ensures your organization runs at its best.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Embrace the future of HR management today.
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              🧑‍💼 Request a Demo Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HRMS;
