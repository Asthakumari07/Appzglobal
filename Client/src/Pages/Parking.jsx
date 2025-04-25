import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Parking = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Parking Management Software by Appz Global Tech
          </h1>
          <p className="text-lg text-gray-600">
            <span className="mr-2">🚗</span>Efficient. Secure. Simplified
            Parking Solutions.
          </p>
        </div>

        <p className="mb-6 text-lg">
          Appz Global Tech’s Parking Management Software is a comprehensive,
          easy-to-use solution designed to streamline vehicle entry, exit, and
          parking space allocation. Whether you're managing a single parking lot
          or multiple facilities, our software automates and optimizes every
          step of the parking process, ensuring a seamless experience for both
          vehicle owners and administrators.
        </p>

        <p className="mb-6 text-lg">
          With real-time monitoring, automated space allocation, and detailed
          reporting, our Parking Management Software enhances operational
          efficiency, improves security, and reduces wait times.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Your Parking Facility Needs a Smart Management System
        </h2>
        <ul className="space-y-4 mb-8 list-disc list-inside">
          <li>
            <strong>Automated Vehicle Entry & Exit:</strong> Track vehicle
            movement with license plate recognition (LPR) and barcode scanning.
          </li>
          <li>
            <strong>Real-Time Space Availability:</strong> Monitor and allocate
            parking spots efficiently.
          </li>
          <li>
            <strong>Seamless Payment Integration:</strong> Accept payments
            through online gateways, wallets, and contactless options.
          </li>
          <li>
            <strong>Detailed Reporting & Analytics:</strong> Analyze occupancy,
            revenue, and peak times for better decisions.
          </li>
          <li>
            <strong>Improved Security & Monitoring:</strong> Integrate with CCTV
            and access control systems.
          </li>
          <li>
            <strong>Mobile App for Convenience:</strong> Let users check
            availability, book spots, and pay from their phones.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
            <li>Automated Vehicle Entry & Exit Management</li>
            <li>Real-Time Parking Space Allocation</li>
            <li>Seamless Payment & Billing Integration</li>
            <li>Comprehensive Reporting & Analytics</li>
            <li>Mobile App for Users</li>
            <li>Security & Surveillance Integration</li>
            <li>Customizable Pricing & Discounts</li>
            <li>Cloud-Based Access for Easy Management</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Transform Your Parking Facility
          </h3>
          <p className="text-lg mb-4">
            Appz Global Tech’s Parking Management Software helps simplify
            operations, improve security, and elevate the parking experience.
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-800 transition" onClick={() => navigate("/contact")}>
            🚀 Request a Demo Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Parking;
