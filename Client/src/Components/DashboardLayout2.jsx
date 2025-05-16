import React from "react";
import ApplicationData from "./Sections/ApplicationData";

const DashboardLayout2 = ({ onLogout }) => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Appz Global Admin</h1>
          <ul className="space-y-4">
            <li>
              <button
                className="w-full text-left font-medium text-yellow-300 cursor-default"
                disabled
              >
                Applications
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
      <div className="flex-1 bg-gray-100 p-6">
        <ApplicationData />
      </div>
    </div>
  );
};

export default DashboardLayout2;
