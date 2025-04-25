import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const SchoolERP = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div class="bg-white text-gray-800">
        <section class="py-16 px-4 text-center">
          <h1 class="text-4xl font-semibold mb-4">
            School ERP by Appz Global Tech
          </h1>
          <p class="text-lg">Smart. Secure. Scalable.</p>
        </section>

        <section class="max-w-7xl mx-auto px-6 py-12">
          <p class="text-lg text-gray-700 mb-6">
            Appz Global Tech’s School ERP is a comprehensive, cloud-based
            solution designed to digitize and simplify the day-to-day operations
            of educational institutions. From admissions to academics, finance
            to fleet management — our ERP system brings every department onto a
            single, intelligent platform.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            Built with modern schools in mind, our School ERP empowers
            educators, administrators, students, and parents to stay connected,
            informed, and in control. Whether you run a single school or a group
            of institutions, our ERP is fully customizable, scalable, and
            accessible from any device, anywhere.
          </p>
        </section>

        <section class="bg-gray-100 py-12">
          <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-2xl font-semibold text-center mb-8">
              Why Your School Needs a Smart ERP System
            </h3>
            <p class="text-lg text-gray-700 mb-6">
              Managing a school is more complex than ever — manual processes are
              time-consuming, error-prone, and inefficient. That’s where a
              robust ERP system becomes a necessity, not a luxury.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  Centralized Administration
                </h4>
                <p>
                  Handle admissions, fee collection, attendance, examination
                  schedules, transport, HR, and inventory — all from one
                  dashboard.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">Paperless Operations</h4>
                <p>
                  Digitize records, automate report generation, and reduce
                  administrative workload with real-time data and smart
                  workflows.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">
                  Enhanced Communication
                </h4>
                <p>
                  Bridge the gap between school and home with mobile
                  notifications, parent portals, online progress reports, and
                  real-time alerts.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 class="font-semibold text-xl mb-2">Secure & Compliant</h4>
                <p>
                  With encrypted access, role-based permissions, and cloud
                  backups, your school’s data is safe, secure, and compliant
                  with education standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="py-12 px-6">
          <h4 class="text-xl font-semibold text-center mb-6">Key Modules:</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <li class="bg-white p-6 rounded-lg shadow-md">
              Student & Staff Management
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Online Admissions & Fees
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Attendance & Timetable
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Examination & Report Cards
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Transport & Hostel Management
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Mobile App for Parents, Teachers & Admin
            </li>
            <li class="bg-white p-6 rounded-lg shadow-md">
              Custom Reports & Analytics
            </li>
          </ul>
        </section>

        <section class="text-center py-12">
          <h3 class="text-2xl font-semibold mb-4">
            Future-Ready Learning Starts Here
          </h3>
          <p class="text-lg mb-6">
            Appz Global Tech’s School ERP isn’t just software — it’s a digital
            backbone for your institution. Boost efficiency, improve
            transparency, and foster smarter education management — all from one
            powerful platform.
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

export default SchoolERP;
