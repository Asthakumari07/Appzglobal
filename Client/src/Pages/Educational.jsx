import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Educational = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Educational Management System by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            📚 Seamless Learning. Streamlined Administration. Smarter
            Institutions.
          </p>

          <p className="text-gray-600 mb-6">
            Appz Global Tech’s Educational Management System (EMS) is a
            comprehensive, cloud-based solution designed to automate, simplify,
            and enhance the management of educational institutions. From
            admissions and attendance to exams and student performance tracking,
            our EMS integrates all the key functions of a school, college, or
            university into one unified platform.
          </p>
          <p className="text-gray-600 mb-6">
            Designed with modern education needs in mind, our EMS offers a
            holistic approach to managing day-to-day activities, improving
            efficiency, and ensuring smooth operations for administrators,
            teachers, and students.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            🔑 Why Educational Institutions Need EMS
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Centralized Data Management:</strong> Manage everything
              from attendance to grades in one place.
            </p>
            <p>
              ✅ <strong>Simplified Admissions & Enrollment:</strong> Reduce
              paperwork and speed up student onboarding.
            </p>
            <p>
              ✅ <strong>Attendance & Timetable Management:</strong> Real-time
              attendance tracking and smart scheduling.
            </p>
            <p>
              ✅ <strong>Grade & Exam Management:</strong> Conduct exams,
              evaluate grades, and share results seamlessly.
            </p>
            <p>
              ✅ <strong>Communication & Collaboration:</strong> Keep everyone
              informed with built-in notifications and messaging.
            </p>
            <p>
              ✅ <strong>Fee Management & Billing:</strong> Automate the fee
              process, send reminders, and manage finances easily.
            </p>
          </div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Key Features:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Admissions & Enrollment Automation</li>
              <li>Student & Staff Data Management</li>
              <li>Attendance & Timetable Management</li>
              <li>Exam & Grade Management</li>
              <li>Fee Collection & Billing</li>
              <li>Communication Portal (Parent-Teacher-Student)</li>
              <li>Real-Time Reports & Analytics</li>
              <li>Mobile Access for Students & Parents</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              At Appz Global Tech, we understand that effective educational
              management requires more than just handling data — it requires
              empowering students, teachers, and administrators to work
              collaboratively and efficiently.
            </p>
            <p className="mt-4">
              Our EMS helps streamline operations, improve communication, and
              foster a learning environment that prepares students for success.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Transform your educational institution with a comprehensive
              management system that makes learning and administration smarter,
              simpler, and more efficient.
            </p>
          </div>

          <div className="mt-8">
            <button
              className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition"
              onClick={() => navigate("/contact")}
            >
              📞 Request a Demo Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Educational;
