// src/pages/ThankYou.jsx
import React from "react";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your message has been successfully submitted. We will get back to you
          soon.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
