// contactFormPopup.jsx  (PURE JS)
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactFormPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    feedback: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://appzglobaltech.com/api/auth/register", values);
      alert("Form submitted successfully!");
      onClose();
      // Redirect to Thank You page
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-[90%] md:w-[40%] rounded-2xl shadow-xl relative p-8">
        <button onClick={onClose} className="absolute top-3 right-3 text-2xl">
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Quick Enquiry</h2>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            name="name"
            value={values.name}
            onChange={change}
            placeholder="Full Name"
            className="p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={change}
            placeholder="Email Address"
            className="p-3 border rounded"
          />
          <input
            name="number"
            value={values.number}
            onChange={change}
            placeholder="Phone Number"
            className="p-3 border rounded"
          />
          <input
            name="website"
            value={values.website}
            onChange={change}
            placeholder="Your Website"
            className="p-3 border rounded"
          />
          <textarea
            name="feedback"
            value={values.feedback}
            onChange={change}
            placeholder="Your Message"
            className="p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopup;
