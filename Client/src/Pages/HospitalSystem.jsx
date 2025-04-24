import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const HospitalSystem = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Hospital Management System by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            🎯 Streamline Care. Optimize Operations. Improve Outcomes.
          </p>

          <p className="text-gray-600 mb-6">
            Appz Global Tech’s Hospital Management System (HMS) is a powerful,
            integrated solution built to simplify and automate the entire
            healthcare ecosystem. From patient registration to discharge,
            billing to inventory, OPD to diagnostics — our HMS ensures every
            process is connected, efficient, and error-free.
          </p>
          <p className="text-gray-600 mb-6">
            Designed for hospitals, clinics, and healthcare centers of all
            sizes, the system helps administrators, doctors, and staff work more
            collaboratively while improving patient experiences and data
            accuracy.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            💡 Why Hospitals Need a Smart HMS
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Centralized Patient Management:</strong> Complete
              patient lifecycle from registration to discharge in one place.
            </p>
            <p>
              ✅ <strong>Efficient Billing & Insurance:</strong> Handle billing,
              claims, and insurance with speed and accuracy.
            </p>
            <p>
              ✅ <strong>Optimized Resource Utilization:</strong> Manage
              schedules, beds, OTs, and inventories in real time.
            </p>
            <p>
              ✅ <strong>Improved Patient Experience:</strong> Fast check-ins,
              e-prescriptions, and mobile access to health records.
            </p>
            <p>
              ✅ <strong>Data Security & Compliance:</strong> Multi-level
              security, audit trails, and HIPAA-compliant systems.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🏥 Core Modules:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Patient Registration & EMR</li>
              <li>OPD/IPD Management</li>
              <li>Billing & Pharmacy</li>
              <li>Lab & Radiology</li>
              <li>Doctor & Staff Scheduling</li>
              <li>Insurance & TPA Handling</li>
              <li>Inventory & Asset Management</li>
              <li>MIS Reports & Analytics</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              At Appz Global Tech, we believe better technology leads to better
              care. Our HMS empowers hospitals to operate smarter, serve faster,
              and make data-driven decisions that save lives and time.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Let us help your hospital deliver healthcare at its best —
              securely, efficiently, and digitally.
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              🩺 Get a Free Demo Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitalSystem;
