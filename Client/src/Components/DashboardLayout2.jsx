import React, { useState } from "react";
import ApplicationData from "./Sections/ApplicationData";
import FormSettingsEditor from "./Sections/FormSettingEditer";
import JobPostData from "./Sections/JobPostData";

const DashboardLayout2 = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("applications");

  const renderSection = () => {
    switch (activeTab) {
      case "applications":
        return <ApplicationData />;
      case "jobPosts":
        return <JobPostData />;
      case "formSettings":
        return <FormSettingsEditor />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-3xl font-extrabold text-center mb-10">
            Appz Admin
          </h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setActiveTab("applications")}
                  className={`w-full text-left py-2 px-3 rounded-lg font-medium ${
                    activeTab === "applications"
                      ? "bg-white text-black"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("jobPosts")}
                  className={`w-full text-left py-2 px-3 rounded-lg font-medium ${
                    activeTab === "jobPosts"
                      ? "bg-white text-black"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Job Posts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("formSettings")}
                  className={`w-full text-left py-2 px-3 rounded-lg font-medium ${
                    activeTab === "formSettings"
                      ? "bg-white text-black"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Form Settings
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout */}
        <div>
          <button
            onClick={onLogout}
            className="w-full mt-6 py-2 px-3 rounded-lg bg-white text-black font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {activeTab === "applications"
            ? "Application Dashboard"
            : activeTab === "jobPosts"
            ? "Manage Job Posts"
            : "Edit Form Settings"}
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-md">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout2;
