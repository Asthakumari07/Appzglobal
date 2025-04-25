import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const VisionTrack = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div class="bg-white text-gray-800">
        <section class="py-16 px-4 text-center">
          <h1 class="text-4xl font-semibold mb-4">
            Vision Track by Appz Global Tech
          </h1>
          <p class="text-lg">
            AI-Powered Employee Monitoring & Attendance Made Effortless.
          </p>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-12">
          <p class="text-lg text-gray-700 mb-6">
            Vision Track is an innovative, AI-powered software solution that
            leverages camera-based tracking to streamline employee monitoring
            and attendance management. With intelligent face recognition,
            real-time monitoring, and detailed attendance records, Vision Track
            makes managing your workforce simpler, more secure, and highly
            efficient.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            Designed to enhance transparency, reduce manual errors, and improve
            productivity, Vision Track offers a seamless and automated way to
            track employee attendance and monitor activity in real-time, without
            compromising privacy.
          </p>
        </section>

        <section class="bg-gray-100 py-12">
          <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-2xl font-semibold text-center mb-8">
              Why Your Organization Needs Vision Track
            </h3>
            <p class="text-lg text-gray-700 mb-6">
              Manual attendance systems and traditional time-tracking methods
              are outdated, inefficient, and prone to inaccuracies. Vision Track
              provides an intelligent alternative, offering automated attendance
              management, reducing human errors, and improving operational
              efficiency.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  AI-Powered Face Recognition
                </h4>
                <p>
                  Utilize AI to automatically record employee attendance with
                  face recognition technology. Ensure accuracy and avoid issues
                  like buddy punching, time theft, and attendance fraud.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">Real-Time Monitoring</h4>
                <p>
                  Monitor employee activity and attendance in real-time through
                  camera-based tracking. Instantly capture when employees enter
                  or exit the office, and track their hours for payroll
                  processing.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  Effortless Reporting & Analytics
                </h4>
                <p>
                  Generate detailed attendance reports, track working hours, and
                  analyze employee behavior with powerful AI-driven insights,
                  helping you optimize workforce management.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">Seamless Integration</h4>
                <p>
                  Integrate with your existing payroll, HR, and project
                  management systems to create a unified, automated workflow
                  that saves time and reduces administrative burden.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  Enhanced Security & Privacy
                </h4>
                <p>
                  Maintain high standards of security by ensuring real-time
                  monitoring, data encryption, and compliance with privacy
                  regulations. Only relevant attendance data is stored, ensuring
                  employee privacy.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  Remote & Flexible Workforce Management
                </h4>
                <p>
                  Track employees in office or remote settings, ensuring that
                  even distributed teams are accurately tracked, improving
                  accountability and transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-12 px-6">
          <h4 class="text-xl font-semibold text-center mb-6">Key Features:</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <li class="bg-white p-6 rounded-lg shadow-md">
              AI-Based Face Recognition for Accurate Attendance
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Real-Time Monitoring & Activity Tracking
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Automated Attendance Reporting & Analytics
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Seamless Integration with Payroll & HR Systems
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Privacy-Compliant & Secure Data Management
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Remote Workforce Tracking & Management
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Customizable Attendance Policies (Shifts, Overtime, etc.)
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Mobile App for Easy Access & Notifications
            </li>
          </ul>
        </section>

        <section class="text-center py-12">
          <h3 class="text-2xl font-semibold mb-4">
            Transform Your Workforce Management
          </h3>
          <p class="text-lg mb-6">
            Vision Track takes employee attendance tracking to the next level,
            offering a smarter, more secure, and more efficient way to monitor
            your team. Whether you’re managing an in-office workforce or remote
            employees, Vision Track ensures accurate, real-time attendance
            tracking without manual effort.
          </p>
          <a
            href="javascript:void(0)"
            class="bg-yellow-500 text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
            onClick={() => navigate("/contact")}
          >
            📞 Request a Demo Today
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VisionTrack;
