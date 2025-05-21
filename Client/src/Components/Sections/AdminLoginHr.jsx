import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Admin.css";

const AdminLoginHr = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "appzglobalhr" &&
      formData.email === "hr@appzglobaltech.com" &&
      formData.password === "HrAppz@123"
    ) {
      onLogin();
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
        {/* Left side: Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-10">
            HR Admin Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Admin Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent outline-none flex-1"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent outline-none flex-1"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent outline-none flex-1"
              />
            </div>

            <div className="flex justify-center pt-7">
              <button
                type="submit"
                className="w-[130px] bg-gradient-to-r from-blue-500 to-blue-900 text-white py-2 rounded-lg font-semibold"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-gray-500 mt-8">
            ©2025 Appz Global Tech Pvt. Ltd.
          </p>
        </div>

        {/* Right side: Background */}
        <div className=" w-full lg:w-1/2 h-[300px] lg:h-auto flex items-center justify-center">
          <div className="image2 w-full h-full object-contain"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginHr;
