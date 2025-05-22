import React from "react";
import ApplicationData from "./Sections/ApplicationData";
import FormSettingsEditor from "./Sections/FormSettingEditer";

const DashboardLayout2 = ({ onLogout }) => {
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
                  className="w-full text-left py-2 px-3 rounded-lg bg-white text-black font-medium cursor-default"
                  disabled
                >
                  Applications
                </button>
              </li>
              {/* Add more nav items here if needed */}
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
          Application Dashboard
        </h2>

        {/* Applications List */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <ApplicationData />
        </div>

        {/* Form Settings Editor for HR */}
        <FormSettingsEditor />
      </main>
    </div>
  );
};

export default DashboardLayout2;
