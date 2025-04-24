import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const Analytical = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
            Analytical Solutions by Appz Global Tech
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            📊 Unlock the Power of Data with Tailored Analytical Solutions
          </p>

          <p className="text-gray-600 mb-6">
            At Appz Global Tech, we help businesses harness the power of their
            data with our Analytical Solutions. Our team of experts uses
            advanced data analytics tools and techniques to transform raw data
            into actionable insights, enabling you to make informed decisions,
            improve performance, and drive growth. Whether you need business
            intelligence, predictive analytics, or data visualization, we offer
            comprehensive solutions that bring clarity to your data.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
            Our Analytical Solutions Services
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              ✅ <strong>Business Intelligence (BI):</strong> Empower decisions
              with real-time insights using tools like Power BI, Tableau, and
              QlikView.
            </p>
            <p>
              ✅ <strong>Predictive Analytics:</strong> Use machine learning and
              historical data to forecast trends, optimize operations, and
              reduce risks.
            </p>
            <p>
              ✅ <strong>Data Visualization:</strong> 📊 Present complex data in
              interactive and visually appealing ways using Tableau, Power BI,
              or D3.js.
            </p>
            <p>
              ✅ <strong>Big Data Analytics:</strong> Handle massive datasets
              using Hadoop, Spark, and NoSQL to uncover patterns and
              opportunities.
            </p>
            <p>
              ✅ <strong>Data Warehousing:</strong> Centralize data from
              different sources for unified reporting and deeper insights.
            </p>
            <p>
              ✅ <strong>Real-Time Analytics:</strong> Monitor KPIs and
              operations live, enabling immediate responses and improvements.
            </p>
            <p>
              ✅ <strong>Sentiment Analysis:</strong> Understand customer
              emotions from reviews, feedback, and social media to shape better
              strategies.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌟 Why Choose Appz Global Tech for Analytical Solutions?
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 list-disc list-inside">
              <li>Customized analytics tailored to your business needs</li>
              <li>
                Cross-industry expertise (healthcare, retail, finance, etc.)
              </li>
              <li>Advanced tools, ML models & big data technologies</li>
              <li>End-to-end services from data collection to reporting</li>
              <li>Actionable insights that drive performance and growth</li>
            </ul>
          </div>

          <div className="mt-10 text-gray-700">
            <p>
              Transform Data into Actionable Insights with Appz Global Tech’s
              Analytical Solutions. Whether you're aiming to improve customer
              experiences, predict trends, or optimize performance, our expert
              team is ready to turn your data into a strategic advantage.
            </p>
            <p className="mt-4 font-semibold text-blue-800">
              Contact Us Today for a Free Consultation on Your Analytical
              Solutions Needs!
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
              📞 Request Your Analytics Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytical;
