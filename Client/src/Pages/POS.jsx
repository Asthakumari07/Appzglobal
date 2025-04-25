import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const POS = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Point of Sale (POS) System by Appz Global Tech
          </h1>
          <p className="text-lg text-gray-600">
            <span className="mr-2">🛒</span>Fast. Reliable. Scalable.
            Transforming the Way You Sell.
          </p>
        </div>

        <p className="mb-6 text-lg">
          Appz Global Tech’s POS System is a powerful, all-in-one solution
          designed to streamline your sales, inventory, and customer management
          in real-time. Whether you're a retail store, restaurant, or service
          provider, our POS system helps you process transactions quickly,
          manage stock efficiently, and deliver exceptional customer
          experiences.
        </p>

        <p className="mb-6 text-lg">
          With intuitive interfaces, seamless integrations, and secure
          transactions, our POS solution takes your business to the next level,
          allowing you to focus on growth, not complexities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Your Business Needs a POS System
        </h2>
        <ul className="space-y-4 mb-8 list-disc list-inside">
          <li>
            <strong>Streamlined Transactions:</strong> Process sales swiftly and
            accurately with support for multiple payment methods.
          </li>
          <li>
            <strong>Inventory Management:</strong> Real-time stock tracking, low
            inventory alerts, and auto reordering.
          </li>
          <li>
            <strong>Customer Relationship Management (CRM):</strong> Manage
            customer info, purchase history, and loyalty programs.
          </li>
          <li>
            <strong>Sales Analytics & Reporting:</strong> Generate insights on
            trends, employee performance, and customer behavior.
          </li>
          <li>
            <strong>Seamless Integrations:</strong> Works with accounting tools,
            e-commerce platforms, and more.
          </li>
          <li>
            <strong>Security & Compliance:</strong> End-to-end encryption and
            industry-standard compliance.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
            <li>Fast & Secure Transaction Processing</li>
            <li>Real-Time Inventory Management</li>
            <li>Customer Data & CRM</li>
            <li>Sales Analytics & Reporting</li>
            <li>Multi-Store Support</li>
            <li>Loyalty Programs & Discounts</li>
            <li>Multi-Device & Cloud Access</li>
            <li>Accounting & Finance Integration</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Boost Your Business Efficiency
          </h3>
          <p className="text-lg mb-4">
            Whether you're running a boutique, a restaurant, or a multi-location
            enterprise, Appz Global Tech’s POS System helps you manage sales and
            operations with ease.
          </p>
          <button
            className="bg-blue-700 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-800 transition"
            onClick={() => navigate("/contact")}
          >
            💡 Request a Demo Today
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default POS;
