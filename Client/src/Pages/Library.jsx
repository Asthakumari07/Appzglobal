import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Library Management System by Appz Global Tech
          </h1>
          <p className="text-lg text-gray-600">
            <span className="mr-2">📚</span>Organize. Streamline. Enhance
            Access.
          </p>
        </div>

        <p className="mb-6 text-lg">
          Appz Global Tech’s Library Management System (LMS) is an advanced,
          user-friendly software solution designed to modernize and simplify
          library operations. From book cataloging and issue/return management
          to tracking inventory and member details, our LMS offers a
          comprehensive system for managing all aspects of library management
          with ease and efficiency.
        </p>
        <p className="mb-6 text-lg">
          Whether you’re running a school, university, or public library, our
          LMS helps you automate routine tasks, reduce administrative overhead,
          and improve access to library resources for both staff and members.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Your Library Needs an LMS
        </h2>
        <ul className="space-y-4 mb-8 list-disc list-inside">
          <li>
            <strong>Centralized Book Cataloging:</strong> Easily manage and
            categorize books, journals, digital resources, and more.
          </li>
          <li>
            <strong>Efficient Issue/Return Management:</strong> Automate book
            tracking, due date reminders, and reduce manual errors.
          </li>
          <li>
            <strong>Member Management:</strong> Maintain records, renewals, and
            subscriptions efficiently.
          </li>
          <li>
            <strong>Real-Time Inventory Management:</strong> Monitor book
            availability, condition, and stock levels.
          </li>
          <li>
            <strong>Search & Access Made Easy:</strong> Enable users to quickly
            find and access materials with an advanced search system.
          </li>
          <li>
            <strong>Reports & Analytics:</strong> Generate insights on
            circulation trends, usage, and inventory.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
            <li>Book Cataloging & Barcode Scanning</li>
            <li>Issue & Return Management</li>
            <li>Member Registration & Tracking</li>
            <li>Real-Time Inventory Monitoring</li>
            <li>Automated Due Date Reminders</li>
            <li>Advanced Search & Catalog System</li>
            <li>Reports & Analytics</li>
            <li>Integration with Digital Resources</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Empowering Libraries for the Future
          </h3>
          <p className="text-lg mb-4">
            Appz Global Tech’s LMS enhances the user experience, streamlines
            operations, and ensures efficient library management for
            institutions of any size.
          </p>
          <button
            className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-800 transition"
            onClick={() => navigate("/contact")}
          >
            📞 Get a Free Demo Today
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
