import React, { useState } from "react";
import ApplicationData from "./Sections/ApplicationData";
import FeedbackData from "./Sections/FeedbackData";
import ContactData from "./ContactData";

const DashboardLayout = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState("applications");

  const renderSection = () => {
    switch (activeSection) {
      case "applications":
        return <ApplicationData />;
      case "feedback":
        return <FeedbackData />;
      case "contact":
        return <ContactData />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Appz Global Admin</h1>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveSection("applications")}
                className={`w-full text-left font-medium ${
                  activeSection === "applications" ? "text-yellow-300" : ""
                }`}
              >
                Applications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("feedback")}
                className={`w-full text-left font-medium ${
                  activeSection === "feedback" ? "text-yellow-300" : ""
                }`}
              >
                Feedback
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("contact")}
                className={`w-full text-left font-medium ${
                  activeSection === "contact" ? "text-yellow-300" : ""
                }`}
              >
                Contact Messages
              </button>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="mt-10 w-full text-left font-medium text-red-300 hover:text-white"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">{renderSection()}</div>
    </div>
  );
};

export default DashboardLayout;
