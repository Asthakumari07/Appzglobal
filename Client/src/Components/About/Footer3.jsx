import React from "react";
import { useNavigate } from "react-router-dom";

const Footer3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-left text-left p-6 bg-orange-100">
        <h1 className="text-2xl font-bold">
          Let's Get in <span className="text-orange-500">Touch</span>
        </h1>
        <p className="mt-4 max-w-md">
          Have a project in mind? Need expert UI/UX design, web & app
          development, or digital solutions? We are here to help!
        </p>
        <button
          type="button"
          className="mt-6 px-3 py-3 bg-lime-400 hover:bg-green-700 hover:text-white font-semibold rounded-lg transition w-35 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Footer3;
